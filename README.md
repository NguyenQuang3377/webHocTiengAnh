# Word Serpent

A browser-based English vocabulary snake game. The Python/Flask server saves completed runs in SQLite, preserves game history, and calculates the leaderboard from each player's combined score for the current day in Vietnam (UTC+7). The daily view rolls over automatically; saved history is retained.

## Run locally

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python app.py
```

Open `http://localhost:5000`. Set `PORT` to change the listening port and `SNAKE_DATABASE` to select the SQLite database file.

## Deploy on Render

The included `render.yaml` configures a free Render web service. In Render, choose **New → Blueprint**, connect this GitHub repository, and deploy the `english-era-webhoc3377` service. The public URL is `https://english-era-webhoc3377.onrender.com` if that service name is available.

The free service uses an ephemeral filesystem. Its SQLite leaderboard database can be reset when the service restarts or is redeployed, and the service may take a short time to wake after inactivity. Use persistent storage or a managed database if leaderboard history must be retained.

For a public English Era domain, set `PUBLIC_BASE_URL` before starting the server:

```powershell
$env:PUBLIC_BASE_URL = "https://englishera.com"
python app.py
```

The domain must be purchased and configured with DNS and HTTPS to point to the server before `https://englishera.com/english-era` is reachable publicly.

The server uses Waitress with 128 worker threads, SQLite WAL, and a busy timeout for concurrent game submissions. This is configured for at least 100 simultaneous players on a single application host. For multiple application hosts, use a shared database service rather than a local SQLite file.

After changing a template while the server is running, refresh the page. If it still shows an older layout, stop the server with `Ctrl+C` in its terminal and run `python app.py` again.

## Game notes

- Each round lasts 60 to 180 seconds in 30-second steps on a 10 × 10 board; the board's pixel dimensions stay the same.
- After the countdown, the snake waits for the player to choose a direction with the arrow keys or WASD; the round timer starts on the first move.
- Players have 10 seconds to answer after eating an apple. An answered apple awards 5 points, then 8, 11, and so on; if unanswered, the snake still grows normally but earns no points for that apple. A correct vocabulary answer doubles the current snake length.
- Only the animated professor speaks Vietnamese: the welcome and rule cards use an installed Vietnamese browser voice, with a matching snake demonstration before each round. If no Vietnamese voice is installed, the game explains this and never substitutes an English voice. Vocabulary pronunciation and the optional comprehension dialogue remain in English.
- Snake segments, apples, and spikes use original pixel-art drawings; spikes appear every five seconds and expire after ten seconds. Hitting one leaves a gravestone; one crash per run can be followed by a 30-second speaking challenge and revival. The player explicitly starts microphone recording; a local voice-activity check and successful IndexedDB save are required for revival. Speaking clips (including attempts without detected speech) are stored only in that browser and listed by player name in the Info tab; they are not uploaded.
- Profession outfits are original 2D pixel-style designs in the Clothes shop; each paid outfit costs 100 coins. The default mint outfit is free, and the daily leaderboard leader receives the gold color in the game.
- Players can select MP3 files from their own device. Selected tracks play locally in the browser, starting on the first snake move and switching in shuffled order every 30 seconds; audio files are never uploaded to the server. Without selected tracks, the optional original synthesized chiptune remains available.
- After a run scoring at least 500 earned points, the player may start again with 200 bonus points after listening to an English dialogue and correctly answering three comprehension questions. The completed run remains on the leaderboard; bonus points are excluded from earned leaderboard score.
- Display names are not authenticated. The leaderboard is intended for casual play, not a tamper-resistant competition.
- After the Welcome screen, the player hub links to Play, Results, Rank, Flashcards, Library, Clothes, and Info. The hub includes the game guide, snake status, and a scrolling top-five ticker that refreshes with the daily leaderboard.
- Coins, energy, saved words, owned outfits, local results, and flashcard reward milestones are stored in local browser storage under the validated display name; they are not tied to an account and do not sync between devices. A completed run grants `ceil(score × 0.25)` coins. The default outfit is free; each profession outfit costs 100 coins.
- Energy starts at 5/5. It decreases by one for every ten minutes the page is visible while the player is not actively playing. Starting a round requires at least 2 energy. Recovery offers a 180-word/15-minute or 250-word/40-minute writing task using a selected topic. Submission happens automatically when time expires. The local IELTS-style score is only an approximate practice rubric and is not an official IELTS assessment or external AI evaluation; scores from 5, 7, and 9 out of 10 restore 1, 2, or up to 5 energy respectively.
- Correct-answer vocabulary and the career-word collection can be saved to the local Library with pronunciation metadata. Select saved words to create a shuffled flashcard session; the player marks each card as known before milestone rewards are granted once at 5 (+5 coins), 10 (+2), 20 (+5), and 30 (+7) mastered words.
