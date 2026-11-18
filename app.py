import os
import re
import sqlite3
from contextlib import contextmanager
from datetime import datetime, timedelta, timezone
from pathlib import Path

from flask import Flask, jsonify, render_template, request


BASE_DIR = Path(__file__).resolve().parent
DATABASE = Path(os.environ.get("SNAKE_DATABASE", BASE_DIR / "snake_game.db"))
DAILY_TIMEZONE = timezone(timedelta(hours=7))
app = Flask(__name__)
app.config["JSON_AS_ASCII"] = False
app.config["MAX_CONTENT_LENGTH"] = 16 * 1024
app.config["TEMPLATES_AUTO_RELOAD"] = True
PUBLIC_BASE_URL = os.environ.get("PUBLIC_BASE_URL", "https://englishera.com").rstrip("/")


@contextmanager
def connect_db():
    connection = sqlite3.connect(DATABASE, timeout=10)
    connection.row_factory = sqlite3.Row
    try:
        connection.execute("PRAGMA busy_timeout = 10000")
        yield connection
        connection.commit()
    except Exception:
        connection.rollback()
        raise
    finally:
        connection.close()


def initialize_db():
    DATABASE.parent.mkdir(parents=True, exist_ok=True)
    with connect_db() as connection:
        connection.execute("PRAGMA journal_mode = WAL")
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS game_history (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                display_name TEXT NOT NULL,
                score INTEGER NOT NULL CHECK(score >= 0),
                apples INTEGER NOT NULL CHECK(apples >= 0),
                played_at TEXT NOT NULL,
                play_date TEXT NOT NULL
            )
            """
        )
        connection.execute(
            "CREATE INDEX IF NOT EXISTS idx_game_history_date_score "
            "ON game_history(play_date, score DESC)"
        )


@app.get("/")
def home():
    return render_template("index.html", initial_tab="", public_base_url=PUBLIC_BASE_URL)


@app.get("/english-era")
def english_era():
    return render_template("index.html", initial_tab="", public_base_url=PUBLIC_BASE_URL)


@app.get("/english-era/<tab>")
def english_era_tab(tab):
    valid_tabs = {
        "hub", "play", "results", "rank", "review", "library", "clothes", "info",
    }
    if tab not in valid_tabs:
        return english_era()
    return render_template("index.html", initial_tab=f"{tab}-page", public_base_url=PUBLIC_BASE_URL)


@app.get("/robots.txt")
def robots():
    content = "User-agent: *\nAllow: /\n\nSitemap: {}/sitemap.xml\n".format(PUBLIC_BASE_URL)
    return app.response_class(content, mimetype="text/plain")


@app.get("/sitemap.xml")
def sitemap():
    origin = PUBLIC_BASE_URL
    urls = [
        f"{origin}/",
        f"{origin}/english-era",
        *(f"{origin}/english-era/{tab}" for tab in (
            "hub", "play", "results", "rank", "review", "library", "clothes", "info",
        )),
    ]
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    xml += "".join(f"  <url><loc>{url}</loc></url>\n" for url in urls)
    xml += "</urlset>\n"
    return app.response_class(xml, mimetype="application/xml")


@app.get("/api/leaderboard")
def leaderboard():
    with connect_db() as connection:
        rows = connection.execute(
            """
            SELECT MIN(display_name COLLATE NOCASE) AS display_name,
                   SUM(score) AS score, COUNT(*) AS games,
                   MAX(played_at) AS latest_game
            FROM game_history
            WHERE play_date = ?
            GROUP BY display_name COLLATE NOCASE
            ORDER BY score DESC, latest_game ASC
            LIMIT 10
            """,
            (datetime.now(DAILY_TIMEZONE).date().isoformat(),),
        ).fetchall()
    return jsonify([dict(row) for row in rows])


@app.get("/api/history")
def history():
    name = request.args.get("name", "")
    if not re.fullmatch(r"[A-Za-z0-9]{8,65}", name):
        return jsonify({"error": "Tên phải có từ 8 đến 65 ký tự và chỉ gồm chữ cái, chữ số."}), 400
    with connect_db() as connection:
        rows = connection.execute(
            """
            SELECT score, apples, played_at, play_date
            FROM game_history
            WHERE display_name = ? COLLATE NOCASE
            ORDER BY played_at DESC
            LIMIT 20
            """,
            (name,),
        ).fetchall()
    return jsonify([dict(row) for row in rows])


@app.post("/api/scores")
def save_score():
    payload = request.get_json(silent=True)
    if not isinstance(payload, dict):
        return jsonify({"error": "Dữ liệu trò chơi không hợp lệ."}), 400

    name = str(payload.get("name", ""))
    if not re.fullmatch(r"[A-Za-z0-9]{8,65}", name):
        return jsonify({"error": "Tên phải có từ 8 đến 65 ký tự và chỉ gồm chữ cái, chữ số."}), 400

    try:
        score = int(payload.get("score"))
        apples = int(payload.get("apples"))
    except (TypeError, ValueError):
        return jsonify({"error": "Điểm số và số táo phải là số nguyên."}), 400
    if not 0 <= score <= 1_000_000 or not 0 <= apples <= 10_000:
        return jsonify({"error": "Điểm số hoặc số táo nằm ngoài phạm vi cho phép."}), 400

    played_at = datetime.now(timezone.utc)
    with connect_db() as connection:
        cursor = connection.execute(
            """
            INSERT INTO game_history (display_name, score, apples, played_at, play_date)
            VALUES (?, ?, ?, ?, ?)
            """,
            (
                name,
                score,
                apples,
                played_at.isoformat(timespec="seconds"),
                played_at.astimezone(DAILY_TIMEZONE).date().isoformat(),
            ),
        )
        game_id = cursor.lastrowid
    return jsonify({"saved": True, "game_id": game_id}), 201


@app.get("/health")
def health():
    return jsonify({"ok": True})


initialize_db()


if __name__ == "__main__":
    from waitress import serve

    serve(
        app,
        host="0.0.0.0",
        port=int(os.environ.get("PORT", "5000")),
        threads=128,
        connection_limit=256,
    )
