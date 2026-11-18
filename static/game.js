(() => {
  "use strict";

  const SIZE = 10;
  const questions = [
    { topic: "FAMILY", level: "B1", question: "Your aunt is your mother’s…", answers: ["sister", "cousin", "niece", "grandmother"], correct: 0 },
    { topic: "TECHNOLOGY", level: "B1", question: "A device that can be worn like a watch is…", answers: ["a wearable", "a database", "a password", "a network"], correct: 0 },
    { topic: "EDUCATION", level: "B1", question: "A person who studies at a university is an…", answers: ["undergraduate", "audience", "employee", "ancestor"], correct: 0 },
    { topic: "ENVIRONMENT", level: "B1", question: "To use something again instead of throwing it away is to…", answers: ["reuse it", "waste it", "replace it", "release it"], correct: 0 },
    { topic: "FRIENDSHIP", level: "B1", question: "A person you can rely on is…", answers: ["dependable", "demanding", "distant", "doubtful"], correct: 0 },
    { topic: "TRADITIONS", level: "B1", question: "A custom passed down through generations is a…", answers: ["tradition", "translation", "transport", "transaction"], correct: 0 },
    { topic: "ENTERTAINMENT", level: "B1", question: "People who watch a play or a film are the…", answers: ["audience", "crew", "cast", "critics"], correct: 0 },
    { topic: "ANIMALS", level: "B2", question: "Animals that are active at night are…", answers: ["nocturnal", "domestic", "aquatic", "endangered"], correct: 0 },
    { topic: "CLIMATE", level: "B2", question: "A long period with very little rain is a…", answers: ["drought", "flood", "forecast", "breeze"], correct: 0 },
    { topic: "URBAN LIFE", level: "B2", question: "The basic systems a city needs, like roads and water, are its…", answers: ["infrastructure", "population", "neighborhood", "architecture"], correct: 0 },
    { topic: "SOCIAL MEDIA", level: "B2", question: "To share information widely online is to…", answers: ["go viral", "log out", "scroll down", "sign in"], correct: 0 },
    { topic: "ECONOMY", level: "B2", question: "A general rise in prices over time is…", answers: ["inflation", "investment", "employment", "income"], correct: 0 },
    { topic: "HEALTH", level: "B2", question: "A doctor’s written instruction for medicine is a…", answers: ["prescription", "prevention", "symptom", "treatment"], correct: 0 },
    { topic: "FILM", level: "B2", question: "The written story and dialogue of a film is its…", answers: ["screenplay", "soundtrack", "subtitle", "setting"], correct: 0 },
    { topic: "WORK", level: "B2", question: "A strong effort to reach a goal is called…", answers: ["determination", "celebration", "hesitation", "permission"], correct: 0 },
    { topic: "COMMUNITY", level: "B2", question: "A person who gives time to help without being paid is a…", answers: ["volunteer", "customer", "commuter", "producer"], correct: 0 },
    { topic: "SCHOOLING", level: "B1", question: "A lesson or skill you learn from experience is a…", answers: ["lesson", "lecture hall", "grade point", "timetable"], correct: 0 },
    { topic: "GAMES", level: "B1", question: "A game played by a team working together is…", answers: ["cooperative", "competitive", "individual", "traditional"], correct: 0 },
    { topic: "GLOBAL WARMING", level: "B2", question: "A gas that traps heat in Earth’s atmosphere is a…", answers: ["greenhouse gas", "natural resource", "water vapour", "weather pattern"], correct: 0 },
    { topic: "POLITICS", level: "B2", question: "The right to vote in an election is called…", answers: ["suffrage", "authority", "campaigning", "legislation"], correct: 0 },
    { topic: "DISASTERS", level: "B2", question: "Moving people away from danger to a safe place is an…", answers: ["evacuation", "observation", "occupation", "exploration"], correct: 0 },
    { topic: "URBANIZATION", level: "B2", question: "The process of more people moving to cities is…", answers: ["urbanization", "conservation", "migration route", "industrial output"], correct: 0 },
    { topic: "BRANDING", level: "B2", question: "The way a company wants people to recognize its products is its…", answers: ["brand identity", "market share", "business partner", "sales target"], correct: 0 },
    { topic: "HUSTLE", level: "B2", question: "To keep working energetically toward a goal is to…", answers: ["persevere", "withdraw", "hesitate", "interrupt"], correct: 0 },
    { topic: "MEDICINE", level: "B2", question: "A sign that someone may be ill is a…", answers: ["symptom", "diagnosis", "dose", "recovery"], correct: 0 },
    { topic: "PERSONAL BOUNDARIES", level: "B2", question: "A freely given agreement is called…", answers: ["consent", "pressure", "privacy", "influence"], correct: 0 },
  ];
  const cards = [
    { word: "architect", pronunciation: "/ˈɑː.kɪ.tekt/ · noun", definition: "A person who designs buildings.", options: ["A person who designs buildings.", "A person who repairs cars.", "A person who teaches music."], correct: 0, color: "#e5aa54", outfit: "ARCHITECT" },
    { word: "paramedic", pronunciation: "/ˌpær.əˈmed.ɪk/ · noun", definition: "A trained person who gives emergency medical care.", options: ["A person who manages a farm.", "A trained person who gives emergency medical care.", "A person who writes news stories."], correct: 1, color: "#dc747d", outfit: "MEDIC" },
    { word: "botanist", pronunciation: "/ˈbɒt.ən.ɪst/ · noun", definition: "A scientist who studies plants.", options: ["A scientist who studies plants.", "A person who builds bridges.", "A person who performs in films."], correct: 0, color: "#69a77a", outfit: "BOTANIST" },
    { word: "journalist", pronunciation: "/ˈdʒɜː.nəl.ɪst/ · noun", definition: "A person who collects and writes news stories.", options: ["A person who collects and writes news stories.", "A person who designs clothes.", "A person who studies stars."], correct: 0, color: "#737fd1", outfit: "JOURNALIST" },
    { word: "astronomer", pronunciation: "/əˈstrɒn.ə.mər/ · noun", definition: "A scientist who studies stars and space.", options: ["A person who treats animals.", "A scientist who studies stars and space.", "A person who directs traffic."], correct: 1, color: "#885fc3", outfit: "ASTRONOMER" },
  ];
  const speakingTopics = ["Describe a tradition that is important in your family.", "How has technology changed the way you learn?", "What small action can people take to protect the environment?", "Describe a job you would like to try and explain why.", "Talk about a film that made you think differently."];
  const conversationQuestions = [
    { question: "How does Leo prepare for the vocabulary challenge?", answers: ["He reviews a few words every day and uses them in a sentence.", "He reads a new book every week.", "He studies with a teacher every evening."], correct: 0 },
    { question: "What will Leo describe next?", answers: ["His favorite film.", "His neighborhood.", "His new job."], correct: 1 },
    { question: "What will Leo listen to?", answers: ["A vocabulary podcast.", "The teacher’s instructions.", "Mia’s suggestions."], correct: 2 },
  ];
  const tutorialSteps = [
    { title: "Chọn hướng di chuyển", note: "Sau khi đếm ngược, hãy dùng phím mũi tên, WASD hoặc các nút trên màn hình để chọn hướng cho rắn. Đồng hồ bắt đầu chạy khi bạn di chuyển.", speech: "Sau khi đếm ngược, rắn sẽ chờ bạn. Hãy dùng phím mũi tên, W A S D hoặc các nút trên màn hình để bắt đầu. Đồng hồ chạy khi rắn di chuyển.", demo: "move" },
    { title: "Ăn táo, học từ mới", note: "Mỗi quả táo mở một câu đố trong 10 giây. Trả lời đúng được điểm và rắn dài gấp đôi; nếu hết giờ, rắn vẫn dài ra nhưng không được điểm táo.", speech: "Khi rắn ăn táo, một câu hỏi từ vựng sẽ xuất hiện. Bạn có mười giây để trả lời. Trả lời đúng được điểm và rắn dài gấp đôi. Nếu hết giờ, rắn vẫn dài ra nhưng không được điểm cho quả táo đó.", demo: "apple" },
    { title: "Tránh gai và bẫy", note: "Bẫy gai xuất hiện trong mê cung. Chạm phải gai sẽ kết thúc lượt chơi; bạn có thể hồi sinh một lần bằng thử thách nói tiếng Anh trong 30 giây.", speech: "Hãy chú ý gai trong mê cung. Chạm phải gai sẽ kết thúc lượt chơi. Bạn có một cơ hội hồi sinh bằng cách hoàn thành thử thách nói tiếng Anh trong ba mươi giây.", demo: "spike" },
    { title: "Mở khóa giao diện rắn", note: "Trả lời đúng thẻ từ vựng nghề nghiệp để mở khóa giao diện pixel mới. Người đứng đầu bảng xếp hạng ngày sẽ đội vương miện khi chơi.", speech: "Học từ vựng nghề nghiệp và chọn đúng nghĩa để mở khóa giao diện rắn mới. Người đứng đầu bảng xếp hạng hôm nay sẽ đội vương miện pixel khi chơi.", demo: "skin" },
    { title: "200 điểm thưởng", note: "Tùy chọn nhận 200 điểm đầu lượt chỉ xuất hiện nếu lượt trước bạn đạt ít nhất 500 điểm. Hãy nghe hội thoại và trả lời đúng ba câu hỏi, hoặc bắt đầu lượt chơi bình thường.", speech: "Khi kết thúc lượt chơi, nếu đạt ít nhất năm trăm điểm, bạn có thể tham gia thử thách hội thoại để nhận hai trăm điểm đầu lượt tiếp theo. Đây là tùy chọn; bạn có thể bỏ qua và chơi bình thường.", demo: "bonus" },
  ];
  const skinNames = {
    MINT: "MINT", GOLDEN: "GOLDEN", ARCHITECT: "ARCHITECT",
    MEDIC: "MEDIC", BOTANIST: "BOTANIST",
    JOURNALIST: "JOURNALIST", ASTRONOMER: "ASTRONOMER",
  };
  const vocabularyInfo = {
    sister: ["/ˈsɪs.tər/", "a female sibling"], wearable: ["/ˈwer.ə.bəl/", "a device worn on the body"],
    undergraduate: ["/ˌʌn.dərˈɡrædʒ.u.ət/", "a university student who has not yet graduated"], "reuse it": ["/ˌriːˈjuːz/", "use it again"],
    dependable: ["/dɪˈpen.də.bəl/", "reliable"], tradition: ["/trəˈdɪʃ.ən/", "a custom passed down through generations"],
    audience: ["/ˈɔː.di.əns/", "people watching or listening to a performance"], nocturnal: ["/nɒkˈtɜː.nəl/", "active at night"],
    drought: ["/draʊt/", "a long period with little or no rain"], infrastructure: ["/ˈɪn.frəˌstrʌk.tʃər/", "the basic systems and services a place needs"],
    "go viral": ["/ɡəʊ ˈvaɪ.rəl/", "spread rapidly online"], inflation: ["/ɪnˈfleɪ.ʃən/", "a general rise in prices"],
    prescription: ["/prɪˈskrɪp.ʃən/", "a written instruction for medicine"], screenplay: ["/ˈskriːn.pleɪ/", "the written story and dialogue of a film"],
    determination: ["/dɪˌtɜː.mɪˈneɪ.ʃən/", "the drive to achieve a goal"], volunteer: ["/ˌvɒl.ənˈtɪər/", "a person who helps without pay"],
    lesson: ["/ˈles.ən/", "knowledge gained from experience"], cooperative: ["/kəʊˈɒp.ər.ə.tɪv/", "involving people working together"],
    "greenhouse gas": ["/ˈɡriːn.haʊs ɡæs/", "a gas that traps heat in the atmosphere"], suffrage: ["/ˈsʌf.rɪdʒ/", "the right to vote"],
    evacuation: ["/ɪˌvæk.juˈeɪ.ʃən/", "moving people away from danger to safety"], urbanization: ["/ˌɜː.bən.aɪˈzeɪ.ʃən/", "the growth of cities as more people move there"],
    "brand identity": ["/ˈbrænd aɪˌden.tə.ti/", "the way a company wants people to recognize its products"], persevere: ["/ˌpɜː.sɪˈvɪər/", "continue working toward a goal despite difficulty"],
    symptom: ["/ˈsɪmp.təm/", "a sign that someone may be ill"], consent: ["/kənˈsent/", "freely given agreement"],
  };
  const clothes = [
    { id: "MINT", name: "Starter Serpent", color: "#71bd4d", detail: "Giao diện rắn xanh bạc hà ban đầu", price: 0 },
    { id: "ARCHITECT", name: "Architect", color: "#e5aa54", detail: "Mũ bảo hộ vàng và áo khoác kỹ sư", price: 100 },
    { id: "MEDIC", name: "Medic", color: "#dc747d", detail: "Chữ thập đỏ và đồng phục cấp cứu", price: 100 },
    { id: "BOTANIST", name: "Botanist", color: "#69a77a", detail: "Trang phục thực địa xanh lá", price: 100 },
    { id: "JOURNALIST", name: "Journalist", color: "#737fd1", detail: "Áo phóng viên xanh và sổ tay", price: 100 },
    { id: "ASTRONOMER", name: "Astronomer", color: "#885fc3", detail: "Bộ đồ khám phá không gian màu tím", price: 100 },
  ];
  const writingPrompts = {
    FAMILY: "Some people believe family members should spend more time together. What are the benefits, and what can make this difficult?",
    TECHNOLOGY: "Technology is changing how people learn. Do the advantages of using technology in education outweigh the disadvantages?",
    EDUCATION: "Some people think schools should teach practical skills as well as academic subjects. To what extent do you agree?",
    ENVIRONMENT: "Individuals can do little to improve the environment; only governments and large companies can make a difference. Discuss both views.",
    FRIENDSHIP: "How important are friendships to people's wellbeing, and how can people maintain friendships when they are busy?",
    TRADITIONS: "Some traditions should change as society develops, while others should be preserved. Discuss both views.",
    ENTERTAINMENT: "Films and online entertainment influence people's opinions. Is this a positive or negative development?",
    ANIMALS: "What responsibilities do people and governments have to protect endangered animals?",
    "URBAN LIFE": "More people are moving to large cities. What problems can this cause, and how might cities address them?",
    ECONOMY: "Economic growth can improve living standards but may harm the environment. How can societies balance these goals?",
    WORK: "Some people prefer a stable job, while others prefer work that offers new challenges. Discuss both views.",
    GAMES: "Do video games help young people develop useful skills, or do they create more problems?",
  };
  const topicNames = {
    FAMILY: "GIA ĐÌNH", TECHNOLOGY: "CÔNG NGHỆ", EDUCATION: "GIÁO DỤC",
    ENVIRONMENT: "MÔI TRƯỜNG", FRIENDSHIP: "TÌNH BẠN", TRADITIONS: "TRUYỀN THỐNG",
    ENTERTAINMENT: "GIẢI TRÍ", ANIMALS: "ĐỘNG VẬT", CLIMATE: "KHÍ HẬU",
    "URBAN LIFE": "ĐỜI SỐNG ĐÔ THỊ", "SOCIAL MEDIA": "MẠNG XÃ HỘI",
    ECONOMY: "KINH TẾ", HEALTH: "SỨC KHỎE", FILM: "ĐIỆN ẢNH", WORK: "CÔNG VIỆC",
    COMMUNITY: "CỘNG ĐỒNG", SCHOOLING: "HỌC ĐƯỜNG", GAMES: "TRÒ CHƠI",
    "GLOBAL WARMING": "NÓNG LÊN TOÀN CẦU", POLITICS: "CHÍNH TRỊ",
    DISASTERS: "THIÊN TAI", URBANIZATION: "ĐÔ THỊ HÓA", BRANDING: "XÂY DỰNG THƯƠNG HIỆU",
    HUSTLE: "KIÊN TRÌ", MEDICINE: "Y HỌC", "PERSONAL BOUNDARIES": "RANH GIỚI CÁ NHÂN",
  };
  const $ = (selector) => document.querySelector(selector);
  const canvas = $("#game-board");
  const ctx = canvas.getContext("2d");
  const tutorialCanvas = $("#tutorial-demo");
  const tutorialCtx = tutorialCanvas.getContext("2d");
  const dialogs = ["quiz-modal", "guide-modal", "revival-modal", "gameover-modal", "exchange-dialogue-modal", "recovery-modal"].reduce((result, id) => ({ ...result, [id]: document.getElementById(id) }), {});
  const state = {
    snake: [], direction: { x: 1, y: 0 }, apple: null, traps: [], grave: null,
    score: 0, apples: 0, elapsed: 0, duration: 90, bonus: 0, timer: null, trapTimer: null, revivalTimer: null, quizTimer: null,
    playing: false, paused: false, gameEnded: false, quizPending: false, usedRevival: false, movementStarted: false,
    skin: { color: "#71bd4d", label: "MINT" }, outfitSkin: null, previewSkin: null, previewCrown: false, dailyLeader: false, questionIndex: 0,
    audioEnabled: false, musicFiles: [], musicPlaylist: [], musicIndex: 0, musicElement: null,
    musicObjectUrl: null, youtubePlayer: null, youtubeApiPromise: null, youtubePlayerPromise: null, dialogueToken: 0,
    speakingSession: null, speakingUrls: [],
    conversationQuestionIndex: 0, conversationHeard: false,
    tutorialIndex: 0, tutorialAnimation: null, tutorialFrame: 0,
    currentQuestion: null, wallet: null, idleTimer: null, idleStartedAt: Date.now(),
    studyDeck: [], studyIndex: 0, studyMastered: 0, studyRevealed: false, studySelection: new Set(),
    writingInterval: null, writingDeadline: 0, writingWasPaused: false,
  };
  const boardSize = canvas.width / SIZE;
  let storageErrorMessage = "";
  let activeProfileKey = "default";
  let hiddenRun = null;
  let gameTabPaused = false;
  let savedPlayerName = "";
  let tutorialSeen = false;

  function loadWallet(profileKey = activeProfileKey) {
    const defaults = { coins: 5, energy: 5, idleMs: 0, library: [], ownedSkins: ["MINT"], equippedSkin: "MINT", rewardedMilestones: [], games: [], bestScore: 0 };
    try {
      const storageKey = `englishEraProgress:v1:${profileKey}`;
      const savedValue = localStorage.getItem(storageKey) || (profileKey === "default" ? localStorage.getItem("englishEraProgress:v1") : null);
      const saved = JSON.parse(savedValue || "null");
      if (!saved || typeof saved !== "object") return defaults;
      return {
        ...defaults,
        coins: Number.isInteger(saved.coins) && saved.coins >= 0 ? saved.coins : defaults.coins,
        energy: Number.isInteger(saved.energy) ? Math.min(5, Math.max(0, saved.energy)) : defaults.energy,
        idleMs: Number.isFinite(saved.idleMs) && saved.idleMs >= 0 ? Math.min(599999, saved.idleMs) : 0,
        library: Array.isArray(saved.library) ? saved.library.filter((word) => word && typeof word.word === "string") : [],
        ownedSkins: Array.isArray(saved.ownedSkins) ? [...new Set(["MINT", ...saved.ownedSkins.filter((id) => clothes.some((item) => item.id === id))])] : defaults.ownedSkins,
        equippedSkin: clothes.some((item) => item.id === saved.equippedSkin) || saved.equippedSkin === "MINT" ? saved.equippedSkin : "MINT",
        rewardedMilestones: Array.isArray(saved.rewardedMilestones) ? saved.rewardedMilestones.filter((value) => [5, 10, 20, 30].includes(value)) : [],
        games: Array.isArray(saved.games) ? saved.games.filter((game) => game && Number.isInteger(game.score) && game.score >= 0 && Number.isInteger(game.apples) && game.apples >= 0 && Number.isInteger(game.coins) && game.coins >= 0 && typeof game.playedAt === "string").slice(-100) : [],
        bestScore: Number.isInteger(saved.bestScore) && saved.bestScore >= 0 ? saved.bestScore : 0,
      };
    } catch (error) {
      console.error("Không thể đọc tiến trình English Era đã lưu.", error);
      storageErrorMessage = "Không thể đọc tiến trình đã lưu trong trình duyệt này.";
      return defaults;
    }
  }

  try {
    const storedName = localStorage.getItem("englishEraPlayerName:v1");
    if (/^[A-Za-z0-9]{8,65}$/.test(storedName || "")) {
      savedPlayerName = storedName;
      activeProfileKey = storedName.toLocaleLowerCase();
    }
    const storedProfile = localStorage.getItem("englishEraProfile:v1");
    if (!savedPlayerName && /^[A-Za-z0-9]{8,65}$/.test(storedProfile || "")) {
      savedPlayerName = storedProfile;
      activeProfileKey = storedProfile.toLocaleLowerCase();
    } else if (!savedPlayerName && storedProfile === "default") {
      activeProfileKey = storedProfile || "default";
    }
    tutorialSeen = localStorage.getItem("englishEraTutorialSeen:v1") === "true";
  } catch (error) {
    console.error("Không thể đọc hồ sơ English Era đang hoạt động.", error);
    storageErrorMessage = "Bộ nhớ trình duyệt không khả dụng; tiến trình có thể không được lưu.";
  }
  state.wallet = loadWallet(activeProfileKey);
  $("#player-name").value = savedPlayerName;
  $("#guide-name").value = savedPlayerName;

  function saveWallet() {
    try {
      localStorage.setItem(`englishEraProgress:v1:${activeProfileKey}`, JSON.stringify(state.wallet));
      localStorage.setItem("englishEraProfile:v1", activeProfileKey);
    } catch (error) {
      console.error("Không thể lưu tiến trình English Era.", error);
      storageErrorMessage = "Không thể lưu tiến trình trong trình duyệt này.";
    }
    updateWalletUI();
  }

  function savePlayerName(name) {
    if (displayNameError(name)) return;
    try {
      localStorage.setItem("englishEraPlayerName:v1", name);
    } catch (error) {
      console.error("Không thể lưu tên người chơi English Era.", error);
      storageErrorMessage = "Không thể lưu tên người chơi trong trình duyệt này.";
      updateWalletUI();
    }
  }

  function markTutorialSeen() {
    tutorialSeen = true;
    try {
      localStorage.setItem("englishEraTutorialSeen:v1", "true");
    } catch (error) {
      console.error("Không thể lưu trạng thái hướng dẫn English Era.", error);
      storageErrorMessage = "Không thể lưu trạng thái hướng dẫn trong trình duyệt này.";
      updateWalletUI();
    }
  }

  function updateWalletUI() {
    $("#coin-count").textContent = String(state.wallet.coins);
    $("#energy-count").textContent = `${state.wallet.energy}/5`;
    $("#energy-cells").replaceChildren(...Array.from({ length: 5 }, (_, index) => {
      const cell = document.createElement("i");
      cell.className = index < state.wallet.energy ? "energy-cell full" : "energy-cell";
      return cell;
    }));
    $("#snake-status").textContent = state.playing ? state.paused ? "RẮN ĐANG TẠM DỪNG" : "RẮN ĐANG KHÁM PHÁ" : state.wallet.energy < 2 ? "HỒI PHỤC NĂNG LƯỢNG ĐỂ CHƠI" : "SẴN SÀNG CHƠI";
    $("#hub-progress").textContent = storageErrorMessage || `${state.wallet.library.length} từ đã lưu · ${state.wallet.games.length} lượt đã chơi`;
    updateResultsSummary();
  }

  function selectProfile(name) {
    const nextProfile = /^[A-Za-z0-9]{8,65}$/.test(name) ? name.toLocaleLowerCase() : "default";
    if (nextProfile === activeProfileKey) return;
    activeProfileKey = nextProfile;
    state.wallet = loadWallet(activeProfileKey);
    state.studySelection.clear();
    const outfit = clothes.find((item) => item.id === state.wallet.equippedSkin);
    state.outfitSkin = outfit ? { color: outfit.color, label: outfit.id } : null;
    updateSkin();
    updateWalletUI();
    renderLibrary();
    renderReviewSelection();
    renderClothes();
    loadResults();
  }

  function switchTab(id) {
    const leavingGame = id !== "play-page" && $("#play-page").classList.contains("active");
    if (leavingGame && state.playing && !state.paused) {
      state.paused = true;
      gameTabPaused = true;
      document.body.classList.add("game-paused");
      $("#pause-button").textContent = "▶";
      drawBoard();
    }
    if (id === "play-page" && (state.gameEnded || gameTabPaused)) {
      gameTabPaused = false;
      closeDialog(dialogs["gameover-modal"]);
      resetRun(0);
      return;
    }
    document.body.classList.toggle("play-active", id === "play-page");
    document.querySelectorAll(".tab-page").forEach((page) => page.classList.toggle("active", page.id === id));
    document.querySelectorAll(".nav-tab").forEach((button) => {
      const active = button.dataset.tab === id;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", String(active));
    });
    if (id === "results-page") loadResults();
    if (id === "rank-page") loadLeaderboard();
    if (id === "library-page") renderLibrary();
    if (id === "clothes-page") renderClothes();
    if (id === "review-page") renderReviewSelection();
    if (id === "info-page") renderSpeakingRecordings();
    if (window.location.hash !== `#${id}`) {
      window.history.pushState({ tab: id }, "", `#${id}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    resumeGameAudio();
  }

  window.addEventListener("hashchange", () => {
    const tab = window.location.hash.slice(1);
    const page = Array.from(document.querySelectorAll(".tab-page"))
      .find((item) => item.id === tab);
    if (page) switchTab(tab);
  });

  function updateResultsSummary() {
    const target = $("#results-summary");
    if (!target) return;
    const games = state.wallet.games;
    const total = games.reduce((sum, game) => sum + game.score, 0);
    const coins = games.reduce((sum, game) => sum + game.coins, 0);
    target.innerHTML = `<div><b>${games.length}</b><span>LƯỢT CHƠI LƯU TRÊN MÁY</span></div><div><b>${total}</b><span>TỔNG ĐIỂM</span></div><div><b>${state.wallet.bestScore}</b><span>KỶ LỤC</span></div><div><b>${coins}</b><span>XU ĐÃ NHẬN</span></div>`;
  }

  function saveWord(word, topic, level, context, extra = {}) {
    const key = word.toLocaleLowerCase();
    if (state.wallet.library.some((item) => item.word.toLocaleLowerCase() === key)) return false;
    const pronunciation = extra.pronunciation || vocabularyInfo[key]?.[0] || "/pronunciation not available/";
    const meaning = extra.meaning || vocabularyInfo[key]?.[1] || "Xem lại gợi ý trong câu đố bên dưới.";
    state.wallet.library.push({ word, pronunciation, meaning, topic: topicNames[topic] || topic, level, context, savedAt: new Date().toISOString() });
    saveWallet();
    renderLibrary();
    renderReviewSelection();
    $("#save-quiz-word").textContent = "✓ ĐÃ THÊM VÀO THƯ VIỆN";
    $("#save-quiz-word").disabled = true;
    return true;
  }

  function renderLibrary() {
    const list = $("#library-list");
    if (!list) return;
    list.replaceChildren();
    $("#library-count").textContent = `${state.wallet.library.length} TỪ ĐÃ LƯU`;
    if (!state.wallet.library.length) {
      const empty = document.createElement("p");
      empty.className = "history-empty";
      empty.textContent = "Thư viện đang trống. Hãy lưu từ vựng trong lúc làm câu đố để bắt đầu sưu tập.";
      list.append(empty);
    }
    state.wallet.library.forEach((entry) => {
      const row = document.createElement("article");
      row.className = "library-entry";
      const select = document.createElement("input");
      select.type = "checkbox";
      select.className = "library-word-checkbox";
      select.value = entry.word;
      select.setAttribute("aria-label", `Chọn ${entry.word} để ôn bằng thẻ từ`);
      select.checked = state.studySelection.has(entry.word.toLocaleLowerCase());
      select.addEventListener("change", () => {
        const key = entry.word.toLocaleLowerCase();
        if (select.checked) state.studySelection.add(key);
        else state.studySelection.delete(key);
        renderReviewSelection();
      });
      const content = document.createElement("div");
      content.innerHTML = `<strong></strong><span class="library-pronunciation"></span><small></small>`;
      content.querySelector("strong").textContent = entry.word;
      content.querySelector(".library-pronunciation").textContent = entry.pronunciation;
      const displayTopic = topicNames[entry.topic] || entry.topic;
      content.querySelector("small").textContent = `${entry.meaning} · ${displayTopic} · ${entry.level}`;
      const audio = document.createElement("button");
      audio.type = "button";
      audio.className = "word-audio";
      audio.textContent = "🔊";
      audio.setAttribute("aria-label", `Nghe từ ${entry.word}`);
      audio.addEventListener("click", () => speakWord(entry.word));
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "remove-word";
      remove.textContent = "XÓA";
      remove.addEventListener("click", () => {
        state.wallet.library = state.wallet.library.filter((word) => word.word.toLocaleLowerCase() !== entry.word.toLocaleLowerCase());
        state.studySelection.delete(entry.word.toLocaleLowerCase());
        saveWallet();
        renderLibrary();
        renderReviewSelection();
      });
      row.append(select, content, audio, remove);
      list.append(row);
    });
    const careerCatalog = document.createElement("section");
    careerCatalog.className = "career-word-catalog";
    const heading = document.createElement("h3");
    heading.textContent = "TỪ VỰNG NGHỀ NGHIỆP";
    careerCatalog.append(heading);
    cards.forEach((card) => {
      const saved = state.wallet.library.some((entry) => entry.word.toLocaleLowerCase() === card.word.toLocaleLowerCase());
      const item = document.createElement("div");
      item.className = "career-word-row";
      const label = document.createElement("span");
      label.textContent = `${card.word} ${card.pronunciation}`;
      const add = document.createElement("button");
      add.type = "button";
      add.className = "save-career-word";
      add.disabled = saved;
      add.textContent = saved ? "ĐÃ LƯU" : "＋ LƯU";
      add.addEventListener("click", () => saveWord(card.word, "WORK", "B2", card.definition, { pronunciation: card.pronunciation, meaning: card.definition }));
      item.append(label, add);
      careerCatalog.append(item);
    });
    list.append(careerCatalog);
  }

  function speakWord(word) {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      $("#review-hint").textContent = "Trình duyệt này không hỗ trợ phát giọng nói.";
      return;
    }
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    const voice = window.speechSynthesis.getVoices().find((item) => item.lang.toLowerCase().startsWith("en"));
    if (voice) utterance.voice = voice;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  function selectedReviewWords() {
    return state.wallet.library.filter((entry) => state.studySelection.has(entry.word.toLocaleLowerCase()));
  }

  function renderReviewSelection() {
    const list = $("#review-word-list");
    if (!list) return;
    list.replaceChildren();
    state.wallet.library.forEach((word) => {
      const label = document.createElement("label");
      label.className = "review-choice";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "review-word-checkbox";
      checkbox.value = word.word;
      checkbox.checked = state.studySelection.has(word.word.toLocaleLowerCase());
      checkbox.addEventListener("change", () => {
        const key = word.word.toLocaleLowerCase();
        if (checkbox.checked) state.studySelection.add(key);
        else state.studySelection.delete(key);
        renderReviewSelection();
        renderLibrary();
      });
      const text = document.createElement("span");
      text.textContent = `${word.word} ${word.pronunciation}`;
      label.append(checkbox, text);
      list.append(label);
    });
    const selected = selectedReviewWords();
    $("#review-selection-count").textContent = `Đã chọn ${selected.length} từ`;
    $("#review-start").disabled = selected.length === 0;
  }

  function startStudy() {
    const selected = selectedReviewWords();
    if (!selected.length) {
      $("#review-hint").textContent = "Trước tiên, hãy chọn ít nhất một từ đã lưu.";
      return;
    }
    state.studyDeck = selected.sort(() => Math.random() - 0.5);
    state.studyIndex = 0;
    state.studyMastered = 0;
    state.studyRevealed = false;
    $("#flashcard-stage").classList.remove("hidden");
    showStudyCard();
  }

  function showStudyCard() {
    if (state.studyIndex >= state.studyDeck.length) {
      finishStudy();
      return;
    }
    const entry = state.studyDeck[state.studyIndex];
    $("#study-word").textContent = entry.word;
    $("#study-pronunciation").textContent = entry.pronunciation;
    $("#study-definition").textContent = `${entry.meaning} — ${entry.context}`;
    $("#study-pronunciation").classList.add("hidden");
    $("#study-definition").classList.add("hidden");
    $("#study-audio").classList.add("hidden");
    $(".study-card-label").textContent = "ĐOÁN NGHĨA · NHẤN ĐỂ LẬT THẺ";
    $("#study-progress").textContent = `${state.studyIndex + 1} / ${state.studyDeck.length}`;
    $("#study-knew").disabled = true;
    state.studyRevealed = false;
  }

  function revealStudyCard() {
    if (state.studyRevealed) return;
    state.studyRevealed = true;
    $("#study-pronunciation").classList.remove("hidden");
    $("#study-definition").classList.remove("hidden");
    $("#study-audio").classList.remove("hidden");
    $(".study-card-label").textContent = "NGHĨA";
    $("#study-knew").disabled = false;
    speakWord(state.studyDeck[state.studyIndex].word);
  }

  function finishStudy() {
    const milestones = [
      { count: 5, reward: 5 }, { count: 10, reward: 2 },
      { count: 20, reward: 5 }, { count: 30, reward: 7 },
    ];
    let reward = 0;
    milestones.forEach(({ count, reward: amount }) => {
      if (state.studyDeck.length >= count && state.studyMastered === state.studyDeck.length && !state.wallet.rewardedMilestones.includes(count)) {
        state.wallet.rewardedMilestones.push(count);
        reward += amount;
      }
    });
    state.wallet.coins += reward;
    saveWallet();
    $("#study-word").textContent = "Hoàn thành ôn tập!";
    $("#study-pronunciation").classList.add("hidden");
    $("#study-audio").classList.add("hidden");
    $("#study-definition").classList.remove("hidden");
    $("#study-definition").textContent = `Bạn đã nhớ ${state.studyMastered}/${state.studyDeck.length} thẻ. ${reward ? `Thưởng cột mốc: +${reward} xu!` : "Tiếp tục ôn tập để đạt cột mốc thưởng tiếp theo."}`;
    $("#study-progress").textContent = "HOÀN TẤT";
    $("#study-knew").disabled = true;
    $("#review-hint").textContent = "Thưởng cột mốc: 5 từ +5 xu · 10 từ +2 · 20 từ +5 · từ 30 trở lên +7. Mỗi mốc chỉ nhận thưởng một lần.";
  }

  function renderClothes() {
    const grid = $("#clothes-grid");
    if (!grid) return;
    grid.replaceChildren();
    clothes.forEach((item) => {
      const owned = state.wallet.ownedSkins.includes(item.id);
      const equipped = state.wallet.equippedSkin === item.id;
      const card = document.createElement("article");
      card.className = "clothes-card";
      const preview = document.createElement("div");
      preview.className = "profession-preview";
      preview.style.setProperty("--outfit-color", item.color);
      const uniformMark = {
        MINT: '<path d="M27 39h10v13H27z" fill="#b9ed83"/><path d="M31 38h3v17h-3z" fill="#497f46"/>',
        ARCHITECT: '<path d="M14 9h36l-3-7H18zM9 10h46v5H9z" fill="#ffe17a"/><path d="M18 48h28v5H18z" fill="#704b36"/><rect x="20" y="47" width="5" height="7" fill="#ffe17a"/>',
        MEDIC: '<path d="M8 36h48v29H8z" fill="#fff8eb"/><path d="M28 42h8v7h7v8h-7v7h-8v-7h-7v-8h7z" fill="#df5268"/><path d="M25 14h14v4H25z" fill="#fff"/>',
        BOTANIST: '<path d="M27 40h10v12H27z" fill="#b9e58b"/><path d="M32 48c-1-10 5-15 13-16-1 8-5 13-13 16z" fill="#3c874c"/><path d="M31 48c1-8-4-12-10-12 0 7 3 10 10 12z" fill="#6ab76a"/>',
        JOURNALIST: '<rect x="7" y="38" width="12" height="10" fill="#272b48"/><rect x="10" y="35" width="7" height="4" fill="#f1c74c"/><path d="M44 41h10v9H44z" fill="#263b68"/><circle cx="49" cy="45" r="2" fill="#f3ce5a"/>',
        ASTRONOMER: '<path d="M12 5h40v4H12zM9 9h46v28H9zM15 37h34v5H15z" fill="#d9e8ef"/><rect x="18" y="13" width="28" height="17" fill="#342b52"/><circle cx="27" cy="20" r="2" fill="#ffe082"/><circle cx="38" cy="25" r="2" fill="#b5ddff"/><path d="M28 42h8v12h-8z" fill="#ffe082"/>',
      }[item.id];
      preview.innerHTML = `<svg viewBox="0 0 64 76" aria-hidden="true" shape-rendering="crispEdges"><rect x="17" y="8" width="30" height="25" fill="#f3bd91"/><rect x="20" y="18" width="5" height="5" fill="#283244"/><rect x="39" y="18" width="5" height="5" fill="#283244"/><rect x="15" y="34" width="34" height="23" fill="var(--outfit-color)"/><rect x="21" y="56" width="9" height="14" fill="#34495f"/><rect x="36" y="56" width="9" height="14" fill="#34495f"/><rect x="15" y="69" width="17" height="5" fill="#40352f"/><rect x="34" y="69" width="17" height="5" fill="#40352f"/>${uniformMark}</svg><span>${item.name}</span>`;
      const detail = document.createElement("p");
      detail.textContent = item.detail;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "primary-button";
      button.textContent = equipped ? "ĐANG MẶC" : owned ? "MẶC TRANG PHỤC" : `MUA · ${item.price} XU`;
      button.disabled = equipped;
      button.addEventListener("click", () => {
        if (!owned) {
          if (state.wallet.coins < item.price) {
            $("#clothes-status").textContent = "Bạn chưa đủ xu. Hãy chơi, lưu từ hoặc hoàn thành một bộ thẻ từ để nhận thêm.";
            return;
          }
          state.wallet.coins -= item.price;
          state.wallet.ownedSkins.push(item.id);
        }
        state.wallet.equippedSkin = item.id;
        const style = clothes.find((skin) => skin.id === item.id);
        state.outfitSkin = { color: style.color, label: style.id };
        state.previewSkin = null;
        saveWallet();
        updateSkin();
        renderClothes();
        $("#clothes-status").textContent = `Đã mặc trang phục ${item.name}!`;
      });
      const previewButton = document.createElement("button");
      previewButton.type = "button";
      previewButton.className = "subtle-button preview-outfit-button";
      previewButton.textContent = state.previewSkin?.label === item.id ? "ĐANG XEM THỬ" : "XEM THỬ TRÊN RẮN";
      previewButton.disabled = state.previewSkin?.label === item.id;
      previewButton.addEventListener("click", () => {
        state.previewSkin = { color: item.color, label: item.id };
        updateSkin();
        $("#clothes-status").textContent = `Đang xem thử ${item.name} trên rắn — không mua và không trừ xu.`;
        switchTab("play-page");
      });
      card.append(preview, detail, button, previewButton);
      grid.append(card);
    });
    $("#clothes-status").textContent = `Ví: ${state.wallet.coins} xu · Mỗi trang phục giá 100 xu.`;
  }

  function loadResults() {
    const list = $("#tab-history-list");
    const status = $("#results-status");
    list.replaceChildren();
    const localGames = [...state.wallet.games].reverse();
    if (localGames.length) {
      localGames.forEach((game) => {
        const row = document.createElement("div");
        row.className = "history-row";
        const date = document.createElement("span");
        date.textContent = new Date(game.playedAt).toLocaleString();
        const score = document.createElement("b");
        score.textContent = `${game.score.toLocaleString()} điểm · ${game.apples} táo · +${game.coins} xu`;
        row.append(date, score);
        list.append(row);
      });
    } else {
      const empty = document.createElement("p");
      empty.className = "history-empty";
      empty.textContent = "Chưa có kết quả nào. Hãy chơi một lượt để xem tiến độ tại đây.";
      list.append(empty);
    }
    status.textContent = "Điểm cũng được gửi lên bảng xếp hạng chung trong ngày khi lượt chơi kết thúc. Kết quả cá nhân được lưu trong trình duyệt này.";
    const name = getName();
    if (name) {
      fetch(`/api/history?name=${encodeURIComponent(name)}`)
        .then((response) => {
          if (!response.ok) throw new Error("Không thể tải lịch sử chơi chung.");
          return response.json();
        })
        .then((history) => {
          if (!history.length) return;
          const heading = document.createElement("h3");
          heading.textContent = "LỊCH SỬ ĐIỂM CHUNG";
          list.append(heading);
          history.forEach((game) => {
            const row = document.createElement("div");
            row.className = "history-row";
            const date = document.createElement("span");
            date.textContent = new Date(game.played_at).toLocaleString();
            const score = document.createElement("b");
            score.textContent = `${Number(game.score).toLocaleString()} điểm · ${game.apples} táo`;
            row.append(date, score);
            list.append(row);
          });
        })
        .catch((error) => { status.textContent = `${status.textContent} ${error.message}`; });
    }
    updateResultsSummary();
  }

  function applyIdleEnergy() {
    if ((state.playing && !state.paused) || document.hidden) return;
    state.wallet.idleMs += 1000;
    if (state.wallet.idleMs >= 600000) {
      const lost = Math.floor(state.wallet.idleMs / 600000);
      state.wallet.energy = Math.max(0, state.wallet.energy - lost);
      state.wallet.idleMs %= 600000;
      saveWallet();
    } else if (state.wallet.idleMs % 60000 === 0) saveWallet();
    updateWalletUI();
  }

  function renderRecoveryTopics() {
    const select = $("#recovery-topic");
    const previous = select.value;
    select.replaceChildren();
    Object.keys(writingPrompts).forEach((topic) => {
      const option = document.createElement("option");
      option.value = topic;
      option.textContent = topicNames[topic] || topic;
      select.append(option);
    });
    if (writingPrompts[previous]) select.value = previous;
    updateWritingPrompt();
  }

  function updateWritingPrompt() {
    const topic = $("#recovery-topic").value || Object.keys(writingPrompts)[0];
    const related = state.wallet.library.filter((entry) => entry.topic === topic || entry.topic === topicNames[topic]).map((entry) => entry.word);
    const reminder = related.length ? `\n\nTừ vựng cần ôn: ${related.join(", ")}.` : "\n\nLưu từ vựng trong câu đố để xem danh sách từ theo chủ đề tại đây.";
    $("#writing-prompt").textContent = `${writingPrompts[topic] || writingPrompts.FAMILY}${reminder}`;
  }

  function openRecovery() {
    if (state.playing && !state.paused) {
      state.paused = true;
      document.body.classList.add("game-paused");
      state.writingWasPaused = true;
      $("#pause-button").textContent = "▶";
    } else state.writingWasPaused = false;
    renderRecoveryTopics();
    const target = Number($("#recovery-target").value);
    $("#writing-timer").textContent = target === 180 ? "15:00" : "40:00";
    $("#writing-answer").disabled = false;
    $("#writing-answer").value = "";
    state.writingDeadline = 0;
    $("#writing-word-count").textContent = "0 từ";
    $("#writing-results").classList.add("hidden");
    $("#writing-start").classList.remove("hidden");
    $("#writing-submit").classList.add("hidden");
    $("#writing-start").disabled = false;
    $("#writing-start").textContent = "BẮT ĐẦU VIẾT →";
    openDialog(dialogs["recovery-modal"]);
  }

  function countWords(text) {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  }

  function evaluateWriting(text, target) {
    const words = text.trim().toLowerCase().match(/[a-z']+/g) || [];
    const wordCount = words.length;
    const sentences = text.split(/[.!?]+/).filter((part) => part.trim().length > 0);
    const paragraphs = text.split(/\n\s*\n/).filter((part) => part.trim().length > 0);
    const connectors = (text.match(/\b(however|therefore|moreover|firstly|secondly|for example|in conclusion|although|because|while|on the other hand)\b/gi) || []).length;
    const uniqueRatio = wordCount ? new Set(words).size / wordCount : 0;
    const capitalized = (text.match(/(^|[.!?]\s+)[A-Z]/g) || []).length;
    const task = wordCount >= target ? 7.5 : wordCount >= target * 0.8 ? 5.5 : wordCount >= target * 0.5 ? 3.5 : 2;
    const coherence = Math.min(9, 3.5 + Math.min(paragraphs.length, 4) * 0.7 + Math.min(connectors, 5) * 0.35 + (sentences.length >= 5 ? 0.5 : 0));
    const lexical = Math.min(9, 3 + uniqueRatio * 8 + (wordCount >= target ? 0.8 : 0));
    const grammar = Math.min(9, 3 + Math.min(sentences.length, 10) * 0.35 + (capitalized >= Math.min(sentences.length, 5) ? 0.7 : 0) + (/[.!?]$/.test(text.trim()) ? 0.5 : 0));
    const ieltsEstimate = (task + coherence + lexical + grammar) / 4;
    return {
      wordCount,
      criteria: { "Đáp ứng yêu cầu": task, "Mạch lạc & liên kết": coherence, "Vốn từ vựng": lexical, "Ngữ pháp & độ chính xác": grammar },
      score: Math.round((ieltsEstimate * 10 / 9) * 10) / 10,
      feedback: [
        wordCount < target ? `Số từ chưa đạt mục tiêu ${target} từ.` : `Số từ đã đạt mục tiêu ${target} từ.`,
        paragraphs.length < 2 ? "Hãy chia ý thành các đoạn riêng biệt." : "Bài viết đã được chia thành các đoạn.",
        connectors < 2 ? "Hãy thử sử dụng đa dạng hơn các từ/cụm từ nối." : "Bạn đã dùng từ/cụm từ nối để liên kết ý.",
        uniqueRatio < 0.45 ? "Hạn chế lặp từ và thử dùng từ vựng đa dạng hơn." : "Bạn đã sử dụng vốn từ khá đa dạng.",
      ],
    };
  }

  function submitWriting() {
    if (state.writingInterval) clearInterval(state.writingInterval);
    state.writingInterval = null;
    state.writingDeadline = 0;
    $("#writing-answer").disabled = true;
    $("#writing-submit").classList.add("hidden");
    const target = Number($("#recovery-target").value);
    const result = evaluateWriting($("#writing-answer").value, target);
    const criteria = Object.entries(result.criteria).map(([name, value]) => `<div><span>${name}</span><b>${value.toFixed(1)}/9</b></div>`).join("");
    const feedback = result.feedback.map((item) => `<li>${item}</li>`).join("");
    const restore = result.score >= 9 ? 5 : result.score >= 7 ? 2 : result.score >= 5 ? 1 : 0;
    const restored = Math.min(5 - state.wallet.energy, restore);
    state.wallet.energy = Math.min(5, state.wallet.energy + restore);
    saveWallet();
    const rewardMessage = restored
      ? `+${restored} NĂNG LƯỢNG đã hồi phục`
      : state.wallet.energy >= 5
        ? "Thanh năng lượng đã đầy; bài viết vẫn được chấm để bạn luyện tập."
        : "Đạt từ 5.0 điểm trở lên để hồi phục năng lượng.";
    $("#writing-results").innerHTML = `<h3>Điểm ước lượng theo thang IELTS: ${result.score}/10</h3><p>Đây là điểm tham khảo cho việc luyện tập, không phải điểm IELTS chính thức.</p><div class="rubric-grid">${criteria}</div><h4>Nhận xét</h4><ul>${feedback}</ul><p class="energy-reward">${rewardMessage}</p>`;
    $("#writing-results").classList.remove("hidden");
    $("#writing-start").classList.remove("hidden");
    $("#writing-start").disabled = false;
    $("#writing-start").textContent = "THỬ BÀI KHÁC";
    $("#writing-timer").textContent = "ĐÃ NỘP";
  }

  function startWriting() {
    if (state.writingInterval) return;
    if (!$("#writing-results").classList.contains("hidden")) {
      $("#writing-answer").value = "";
      $("#writing-word-count").textContent = "0 từ";
      $("#writing-results").classList.add("hidden");
    }
    $("#writing-answer").disabled = false;
    $("#writing-start").classList.add("hidden");
    $("#writing-submit").classList.remove("hidden");
    const seconds = Number($("#recovery-target").value) === 180 ? 900 : 2400;
    state.writingDeadline = Date.now() + seconds * 1000;
    const tick = () => {
      const remaining = Math.max(0, Math.ceil((state.writingDeadline - Date.now()) / 1000));
      $("#writing-timer").textContent = `${String(Math.floor(remaining / 60)).padStart(2, "0")}:${String(remaining % 60).padStart(2, "0")}`;
      if (remaining === 0) submitWriting();
    };
    tick();
    state.writingInterval = window.setInterval(tick, 1000);
  }

  function canStartRun() {
    if (state.wallet.energy >= 2) return true;
    $("#snake-status").textContent = "KHÔNG ĐỦ NĂNG LƯỢNG · HỒI PHỤC TRƯỚC";
    $("#recovery-open").focus();
    return false;
  }

  function displayNameError(name) {
    if (name.length < 8) return "Your name must be at least 8 characters long.";
    if (name.length > 65) return "Your name cannot be longer than 65 characters.";
    if (!/^[A-Za-z0-9]+$/.test(name)) return "Use letters and numbers only, with no spaces.";
    return "";
  }

  function getName() {
    const name = $("#player-name").value;
    return displayNameError(name) ? "" : name;
  }

  function updateNameValidity(input) {
    input.setCustomValidity(displayNameError(input.value));
  }

  function openDialog(dialog) {
    if (!dialog.open) {
      dialog.showModal();
      if (dialog.id === "guide-modal") {
        dialog.focus({ preventScroll: true });
        dialog.scrollTop = 0;
      }
    }
  }

  function closeDialog(dialog) {
    if (dialog.open) dialog.close();
  }

  document.querySelectorAll(".modal-close").forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = button.closest("dialog");
      if (!dialog) return;
      if (dialog.id === "quiz-modal") {
        if (state.quizPending) timeoutQuiz();
        else finishQuiz();
      } else if (dialog.id === "revival-modal") {
        $("#end-after-crash").click();
      } else if (dialog.id === "exchange-dialogue-modal") {
        $("#cancel-exchange-button").click();
      } else {
        closeDialog(dialog);
      }
    });
  });

  function speakGuide(text) {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "vi-VN";
    utterance.rate = 0.96;
    const voice = window.speechSynthesis.getVoices().find((item) => item.lang.toLowerCase().startsWith("vi"));
    if (voice) utterance.voice = voice;
    window.speechSynthesis.resume();
    window.speechSynthesis.speak(utterance);
  }

  function speakTutorialStep() {
    speakGuide(tutorialSteps[state.tutorialIndex].speech);
  }

  function drawPixelApple(target, x, y, size) {
    const sprite = [
      "000055000000",
      "000555500000",
      "000066100000",
      "000011100000",
      "000122210000",
      "001222221100",
      "012233222210",
      "012333222210",
      "012333222210",
      "012233222210",
      "001222221100",
      "000111110000",
    ];
    const colors = {
      "1": "#272033",
      "2": "#bd292b",
      "3": "#e54432",
      "4": "#ff9b62",
      "5": "#5c982f",
      "6": "#6b4326",
    };
    const pixel = size / sprite.length;
    sprite.forEach((row, rowIndex) => {
      [...row].forEach((value, columnIndex) => {
        if (value !== "0") {
          target.fillStyle = colors[value];
          target.fillRect(x + columnIndex * pixel, y + rowIndex * pixel, pixel, pixel);
        }
      });
    });
    target.fillStyle = "#ffb078";
    target.fillRect(x + pixel * 2, y + pixel * 6, pixel, pixel);
  }

  function drawTutorialSnake(segments, color = "#7ecb50") {
    segments.forEach(([x, y], index) => {
      const px = 80 + x * 16;
      const py = 8 + y * 14;
      tutorialCtx.fillStyle = "#28533a";
      tutorialCtx.fillRect(px + 1, py + 1, 13, 12);
      tutorialCtx.fillStyle = color;
      tutorialCtx.fillRect(px + 3, py + 2, 9, 10);
      tutorialCtx.fillStyle = index === 0 ? "#1f3b2b" : "#b7ed83";
      tutorialCtx.fillRect(px + (index === 0 ? 9 : 5), py + 4, 2, 2);
    });
  }

  function drawTutorialDemo() {
    if (!dialogs["guide-modal"].open) {
      state.tutorialAnimation = null;
      return;
    }
    const time = (performance.now() - state.tutorialFrame) / 3200;
    const progress = time % 1;
    const step = tutorialSteps[state.tutorialIndex];
    tutorialCtx.fillStyle = "#edf5e2";
    tutorialCtx.fillRect(0, 0, tutorialCanvas.width, tutorialCanvas.height);
    tutorialCtx.fillStyle = "#dce9ce";
    tutorialCtx.fillRect(80, 8, 160, 140);
    tutorialCtx.strokeStyle = "#c8d9ba";
    tutorialCtx.lineWidth = 1;
    for (let index = 0; index <= 10; index += 1) {
      tutorialCtx.beginPath();
      tutorialCtx.moveTo(80 + index * 16, 8);
      tutorialCtx.lineTo(80 + index * 16, 148);
      tutorialCtx.stroke();
      tutorialCtx.beginPath();
      tutorialCtx.moveTo(80, 8 + index * 14);
      tutorialCtx.lineTo(240, 8 + index * 14);
      tutorialCtx.stroke();
    }

    if (step.demo === "move") {
      const headX = 2 + Math.floor(progress * 5);
      drawTutorialSnake([[headX, 4], [headX - 1, 4]]);
      tutorialCtx.fillStyle = "#51468e";
      tutorialCtx.font = "bold 18px Inter, sans-serif";
      tutorialCtx.fillText("→", 86 + headX * 16, 74);
    } else if (step.demo === "apple") {
      const headX = Math.min(7, 2 + Math.floor(progress * 6));
      drawTutorialSnake([[headX, 4], [headX - 1, 4]]);
      if (progress < 0.88) {
        drawPixelApple(tutorialCtx, 80 + 7 * 16 + 1, 8 + 4 * 14, 14);
      } else {
        tutorialCtx.fillStyle = "#d49a1f";
        tutorialCtx.font = "bold 12px Inter, sans-serif";
        tutorialCtx.fillText("+5", 184, 60);
      }
    } else if (step.demo === "spike") {
      const headX = progress < 0.72 ? 2 + Math.floor(progress * 6) : 6;
      drawTutorialSnake(progress < 0.84 ? [[headX, 4], [headX - 1, 4]] : []);
      tutorialCtx.fillStyle = "#7f3b39";
      for (let spike = 0; spike < 3; spike += 1) {
        const x = 80 + 6 * 16 + 2 + spike * 5;
        tutorialCtx.beginPath();
        tutorialCtx.moveTo(x, 8 + 4 * 14 + 13);
        tutorialCtx.lineTo(x + 4, 8 + 4 * 14 + 4);
        tutorialCtx.lineTo(x + 8, 8 + 4 * 14 + 13);
        tutorialCtx.closePath();
        tutorialCtx.fill();
      }
      if (progress >= 0.72 && progress < 0.84) {
        tutorialCtx.fillStyle = "#443b4b";
        tutorialCtx.fillRect(177, 64, 25, 30);
        tutorialCtx.fillRect(182, 59, 15, 5);
        tutorialCtx.fillStyle = "#aaa0a9";
        tutorialCtx.fillRect(181, 67, 17, 22);
        tutorialCtx.fillStyle = "#6b5861";
        tutorialCtx.fillRect(185, 74, 9, 3);
        tutorialCtx.fillRect(188, 73, 3, 11);
      }
    } else if (step.demo === "skin") {
      const colors = ["#7ecb50", "#dc747d", "#737fd1"];
      const color = colors[Math.floor(progress * colors.length) % colors.length];
      drawTutorialSnake([[3, 4], [2, 4], [1, 4]], color);
      tutorialCtx.fillStyle = "#fffefa";
      tutorialCtx.fillRect(174, 33, 54, 42);
      tutorialCtx.strokeStyle = "#d9d3e2";
      tutorialCtx.strokeRect(174, 33, 54, 42);
      tutorialCtx.fillStyle = color;
      tutorialCtx.fillRect(184, 45, 33, 18);
    } else {
      drawTutorialSnake([[3, 4], [2, 4]]);
      tutorialCtx.fillStyle = "#51468e";
      tutorialCtx.font = "bold 14px Inter, sans-serif";
      tutorialCtx.fillText("500 → 200", 120, 60);
      tutorialCtx.fillStyle = "#a87500";
      tutorialCtx.font = "bold 9px Inter, sans-serif";
      tutorialCtx.fillText("ĐIỂM LƯỢT TRƯỚC", 118, 79);
    }
    state.tutorialAnimation = window.requestAnimationFrame(drawTutorialDemo);
  }

  function renderTutorialStep() {
    const step = tutorialSteps[state.tutorialIndex];
    $("#guide-heading").textContent = "Cùng tìm hiểu cách chơi";
    $("#guide-welcome-copy").classList.add("hidden");
    $("#guide-welcome-actions").classList.add("hidden");
    $("#tutorial-controls").classList.remove("hidden");
    $("#tutorial-counter").textContent = `LUẬT ${state.tutorialIndex + 1}/${tutorialSteps.length}`;
    $("#tutorial-progress").textContent = `${state.tutorialIndex + 1}/${tutorialSteps.length}`;
    $("#tutorial-title").textContent = step.title;
    $("#tutorial-note").textContent = step.note;
    $("#tutorial-replay").classList.remove("hidden");
    $("#tutorial-back").disabled = state.tutorialIndex === 0;
    $("#tutorial-next").innerHTML = state.tutorialIndex === tutorialSteps.length - 1
      ? "BẮT ĐẦU CHƠI <span>→</span>"
      : "LUẬT TIẾP THEO <span>→</span>";
    state.tutorialFrame = performance.now();
    if (state.tutorialAnimation) cancelAnimationFrame(state.tutorialAnimation);
    state.tutorialAnimation = window.requestAnimationFrame(drawTutorialDemo);
    speakTutorialStep();
  }

  function showGuideWelcome() {
    state.tutorialIndex = 0;
    $("#guide-heading").textContent = "Chào mừng đến với Word Snake";
    $("#guide-welcome-copy").classList.remove("hidden");
    $("#guide-welcome-actions").classList.remove("hidden");
    $("#tutorial-controls").classList.add("hidden");
    $("#tutorial-counter").textContent = "GIÁO SƯ RẮN XIN CHÀO";
    $("#tutorial-title").textContent = "Cùng khám phá mê cung nhé!";
    $("#tutorial-note").textContent = "Bàn chơi pixel 10 × 10 đã sẵn sàng. Bỏ qua để chơi ngay hoặc xem hướng dẫn từng bước.";
    $("#tutorial-replay").classList.add("hidden");
    $("#guide-name").value = $("#player-name").value;
    updateNameValidity($("#guide-name"));
    state.tutorialFrame = performance.now();
    if (state.tutorialAnimation) cancelAnimationFrame(state.tutorialAnimation);
    state.tutorialAnimation = window.requestAnimationFrame(drawTutorialDemo);
    openDialog(dialogs["guide-modal"]);
    speakGuide("Xin chào! Tôi sẽ hướng dẫn bạn cách chơi. Hãy xem hướng dẫn từng bước hoặc bỏ qua và bắt đầu chơi.");
  }

  function formatTime(seconds) {
    const safeSeconds = Math.max(0, seconds);
    return `${String(Math.floor(safeSeconds / 60)).padStart(2, "0")}:${String(safeSeconds % 60).padStart(2, "0")}`;
  }

  function updateHud() {
    $("#score").textContent = String(state.score + state.bonus).padStart(4, "0");
    $("#apples").textContent = String(state.apples).padStart(2, "0");
    $("#time-left").textContent = formatTime(state.duration - state.elapsed);
    $("#skin-label").textContent = skinNames[state.skin.label] || state.skin.label;
    $("#skin-label").style.color = state.skin.color;
  }

  function occupied(x, y) {
    return state.snake.some((segment) => segment.x === x && segment.y === y)
      || state.traps.some((trap) => trap.x === x && trap.y === y)
      || (state.apple && state.apple.x === x && state.apple.y === y);
  }

  function randomEmptyCell() {
    const available = [];
    for (let y = 0; y < SIZE; y += 1) {
      for (let x = 0; x < SIZE; x += 1) {
        if (!occupied(x, y)) available.push({ x, y });
      }
    }
    return available.length ? available[Math.floor(Math.random() * available.length)] : null;
  }

  function drawCell(x, y, color, inset = 2) {
    ctx.fillStyle = color;
    ctx.fillRect(x * boardSize + inset, y * boardSize + inset, boardSize - inset * 2, boardSize - inset * 2);
  }

  function drawPixelCrown(target, x, y, cell) {
    const sprite = [
      "001000100",
      "011010110",
      "012121210",
      "122222221",
      "123333321",
      "011111110",
    ];
    const colors = { "1": "#34234f", "2": "#f2b928", "3": "#fff0a1" };
    const pixel = cell / 14;
    sprite.forEach((row, rowIndex) => {
      [...row].forEach((value, columnIndex) => {
        if (value === "0") return;
        target.fillStyle = colors[value];
        target.fillRect(x + columnIndex * pixel, y + rowIndex * pixel, pixel, pixel);
      });
    });
  }

  function drawSnakeOutfit(target, x, y, skinId) {
    if (skinId === "ARCHITECT") {
      target.fillStyle = "#704b36";
      target.fillRect(x + 13, y + 29, 28, 8);
      target.fillStyle = "#ffe17a";
      target.fillRect(x + 17, y + 30, 20, 5);
      target.fillRect(x + 23, y + 26, 8, 3);
    } else if (skinId === "MEDIC") {
      target.fillStyle = "#fff8eb";
      target.fillRect(x + 19, y + 25, 16, 16);
      target.fillStyle = "#df5268";
      target.fillRect(x + 25, y + 27, 4, 12);
      target.fillRect(x + 21, y + 31, 12, 4);
    } else if (skinId === "BOTANIST") {
      target.fillStyle = "#3c874c";
      target.fillRect(x + 26, y + 29, 3, 11);
      target.fillRect(x + 29, y + 29, 7, 4);
      target.fillRect(x + 19, y + 34, 7, 4);
      target.fillStyle = "#b9e58b";
      target.fillRect(x + 20, y + 31, 6, 3);
      target.fillRect(x + 30, y + 26, 6, 3);
    } else if (skinId === "JOURNALIST") {
      target.fillStyle = "#263b68";
      target.fillRect(x + 19, y + 27, 17, 13);
      target.fillStyle = "#f3ce5a";
      target.fillRect(x + 22, y + 30, 5, 5);
      target.fillRect(x + 29, y + 30, 4, 2);
      target.fillRect(x + 29, y + 34, 4, 2);
    } else if (skinId === "ASTRONOMER") {
      target.fillStyle = "#342b52";
      target.fillRect(x + 18, y + 27, 19, 13);
      target.fillStyle = "#b5ddff";
      target.fillRect(x + 21, y + 30, 13, 3);
      target.fillStyle = "#ffe082";
      target.fillRect(x + 23, y + 35, 3, 3);
      target.fillRect(x + 30, y + 34, 2, 2);
    }
  }

  function drawBoard() {
    ctx.fillStyle = "#e9f4d8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#d7e6c6";
    ctx.lineWidth = 1;
    for (let i = 0; i <= SIZE; i += 1) {
      const position = i * boardSize + 0.5;
      ctx.beginPath(); ctx.moveTo(position, 0); ctx.lineTo(position, canvas.height); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, position); ctx.lineTo(canvas.width, position); ctx.stroke();
    }
    state.traps.forEach((trap) => {
      const px = trap.x * boardSize;
      const py = trap.y * boardSize;
      ctx.fillStyle = "#7f3b39";
      for (let spike = 0; spike < 3; spike += 1) {
        const x = px + 9 + spike * 12;
        ctx.beginPath();
        ctx.moveTo(x, py + 40);
        ctx.lineTo(x + 6, py + 15);
        ctx.lineTo(x + 12, py + 40);
        ctx.closePath();
        ctx.fill();
      }
      ctx.fillStyle = "#d87164";
      ctx.fillRect(px + 9, py + 40, 36, 4);
    });
    if (state.apple) {
      const px = state.apple.x * boardSize;
      const py = state.apple.y * boardSize;
      drawPixelApple(ctx, px + 7, py + 5, 36);
    }
    state.snake.forEach((segment, index) => {
      const px = segment.x * boardSize;
      const py = segment.y * boardSize;
      const outline = state.skin.label === "GOLDEN" ? "#684c13" : "#28533a";
      ctx.fillStyle = outline;
      ctx.fillRect(px + 8, py + 9, 35, 33);
      ctx.fillStyle = state.skin.color;
      ctx.fillRect(px + 12, py + 9, 27, 33);
      ctx.fillRect(px + 8, py + 15, 35, 21);
      ctx.fillStyle = state.skin.label === "GOLDEN" ? "#ffe99a" : "#a8e574";
      ctx.fillRect(px + 14, py + 30, 23, 7);
      drawSnakeOutfit(ctx, px, py, state.skin.label);
      if (index === 0) {
        ctx.fillStyle = outline;
        if (state.direction.x === 1 || state.direction.x === -1) {
          const eyeX = px + (state.direction.x === 1 ? 34 : 13);
          ctx.fillRect(eyeX, py + 16, 5, 6);
          ctx.fillRect(eyeX, py + 28, 5, 6);
        } else {
          const eyeY = py + (state.direction.y === 1 ? 29 : 14);
          ctx.fillRect(px + 15, eyeY, 6, 5);
          ctx.fillRect(px + 29, eyeY, 6, 5);
        }
        ctx.fillStyle = "#fff";
        ctx.fillRect(px + (state.direction.x === -1 ? 14 : 35), py + 17, 2, 2);
        if ((state.dailyLeader || state.previewCrown) && state.playing) {
          drawPixelCrown(ctx, px + boardSize * 0.18, py - boardSize * 0.1, boardSize);
        }
      } else {
        ctx.fillStyle = "rgba(255,255,255,.35)";
        ctx.fillRect(px + 18, py + 17, 5, 5);
      }
    });
    if (state.grave) {
      const px = state.grave.x * boardSize;
      const py = state.grave.y * boardSize;
      ctx.fillStyle = "#443b4b";
      ctx.fillRect(px + 12, py + 13, 27, 29);
      ctx.fillRect(px + 17, py + 9, 17, 4);
      ctx.fillStyle = "#a9a0a9";
      ctx.fillRect(px + 16, py + 15, 19, 22);
      ctx.fillRect(px + 20, py + 11, 11, 4);
      ctx.fillStyle = "#6b5861";
      ctx.fillRect(px + 19, py + 20, 13, 3);
      ctx.fillRect(px + 24, py + 19, 3, 13);
      ctx.fillStyle = "#554447";
      ctx.fillRect(px + 9, py + 42, 33, 4);
    }
    if (state.playing && !state.movementStarted && !dialogs["quiz-modal"].open && !dialogs["revival-modal"].open) {
      ctx.fillStyle = "#728469";
      ctx.font = "12px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("CHỌN HƯỚNG ĐỂ DI CHUYỂN", canvas.width / 2, canvas.height - 18);
      ctx.textAlign = "start";
    } else if (state.playing && !dialogs["quiz-modal"].open && !dialogs["revival-modal"].open) {
      ctx.fillStyle = "#728469";
      ctx.font = "12px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("MỖI LẦN NHẤN = DI CHUYỂN 1 Ô", canvas.width / 2, canvas.height - 18);
      ctx.textAlign = "start";
    } else if (!state.playing && !state.gameEnded && !dialogs["quiz-modal"].open && !dialogs["revival-modal"].open) {
      ctx.fillStyle = "#728469";
      ctx.font = "12px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("NHẤN BẮT ĐẦU ĐỂ CHƠI", canvas.width / 2, canvas.height - 18);
      ctx.textAlign = "start";
    }
  }

  function addTrap() {
    if (!state.playing || state.paused || state.quizPending) return;
    const cell = randomEmptyCell();
    if (cell) {
      state.traps.push({ ...cell, expiresAt: state.elapsed + 10 });
      drawBoard();
    }
  }

  function setDirection(next) {
    if (!state.playing || state.paused || state.quizPending) return;
    if (!state.movementStarted) {
      const head = state.snake[0];
      state.direction = next;
      state.snake[1] = { x: head.x - next.x, y: head.y - next.y };
      state.movementStarted = true;
      if (!state.timer) state.timer = setInterval(gameSecond, 1000);
      state.trapTimer = setInterval(addTrap, 5000);
    } else {
      if (next.x === -state.direction.x && next.y === -state.direction.y) return;
      state.direction = next;
    }
    tick();
  }

  function tick() {
    if (!state.playing || state.paused || state.quizPending) return;
    const head = state.snake[0];
    const next = { x: head.x + state.direction.x, y: head.y + state.direction.y };
    const eating = state.apple && next.x === state.apple.x && next.y === state.apple.y;
    const collisionBody = state.snake.slice(0, eating ? state.snake.length : -1).some((cell) => cell.x === next.x && cell.y === next.y);
    const collisionTrap = state.traps.some((trap) => trap.x === next.x && trap.y === next.y);
    if (next.x < 0 || next.x >= SIZE || next.y < 0 || next.y >= SIZE || collisionBody || collisionTrap) {
      handleCrash(collisionTrap ? next : null);
      return;
    }
    state.snake.unshift(next);
    if (!eating) state.snake.pop();
    else handleApple();
    drawBoard();
  }

  function handleApple() {
    state.apples += 1;
    state.apple = randomEmptyCell();
    state.quizPending = true;
    showQuiz();
    updateHud();
  }

  function showQuiz() {
    const level = state.apples >= 5 ? "B2" : "B1";
    const levelQuestions = questions.filter((item) => item.level === level);
    const question = levelQuestions[state.questionIndex % levelQuestions.length];
    state.questionIndex += 1;
    state.currentQuestion = question;
    $("#quiz-level").textContent = `CẤP ${String(Math.min(state.apples, 99)).padStart(2, "0")} · ${question.level}`;
    $("#quiz-topic").textContent = topicNames[question.topic] || question.topic;
    $("#quiz-question").textContent = question.question;
    const targetWord = question.answers[question.correct];
    const alreadySaved = state.wallet.library.some((entry) => entry.word.toLocaleLowerCase() === targetWord.toLocaleLowerCase());
    $("#save-quiz-word").textContent = alreadySaved ? `✓ ${targetWord} ĐÃ LƯU` : `＋ LƯU “${targetWord}” VÀO THƯ VIỆN`;
    $("#save-quiz-word").disabled = alreadySaved;
    $("#quiz-result").classList.add("hidden");
    $("#quiz-question").classList.remove("hidden");
    $("#quiz-timer-row").classList.remove("hidden");
    $("#answer-list").classList.remove("hidden");
    $("#quiz-hint").classList.remove("hidden");
    $("#quiz-hint").textContent = "Bạn có 10 giây để trả lời. Hết giờ sẽ không được điểm.";
    $("#quiz-timer").textContent = "00:10";
    $("#quiz-continue").classList.add("hidden");
    const list = $("#answer-list");
    list.replaceChildren();
    const choices = question.answers.map((answer, index) => ({ answer, index })).sort(() => Math.random() - 0.5);
    choices.forEach(({ answer, index }) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer-option";
      button.textContent = answer;
      button.addEventListener("click", () => {
        if (!state.quizPending) return;
        clearInterval(state.quizTimer);
        state.quizTimer = null;
        state.score += 5 + (state.apples - 1) * 3;
        updateHud();
        list.querySelectorAll("button").forEach((option) => { option.disabled = true; });
        const isCorrect = index === question.correct;
        if (index === question.correct) {
          button.classList.add("correct");
          const currentLength = state.snake.length;
          const targetLength = Math.min(currentLength * 2, SIZE * SIZE - state.traps.length);
          while (state.snake.length < targetLength) {
            const tail = state.snake[state.snake.length - 1];
            const previous = state.snake[state.snake.length - 2];
            const dx = tail.x - previous.x;
            const dy = tail.y - previous.y;
            const directions = [{ x: dx, y: dy }, { x: -dy, y: dx }, { x: dy, y: -dx }, { x: -dx, y: -dy }];
            const nextSegment = directions
              .map((direction) => ({ x: tail.x + direction.x, y: tail.y + direction.y }))
              .find((cell) => cell.x >= 0 && cell.x < SIZE && cell.y >= 0 && cell.y < SIZE && !occupied(cell.x, cell.y));
            if (!nextSegment) break;
            state.snake.push(nextSegment);
          }
          const doubled = state.snake.length >= currentLength * 2;
          $("#quiz-hint").textContent = doubled
            ? `Chính xác! Rắn đã dài gấp đôi, hiện có ${state.snake.length} đốt.`
            : `Chính xác! Rắn đã dài thêm, hiện có ${state.snake.length} đốt; không đủ chỗ để dài gấp đôi.`;
        } else {
          button.classList.add("incorrect");
          choices.forEach((choice, choiceIndex) => {
            if (choice.index === question.correct) list.children[choiceIndex].classList.add("correct");
          });
          $("#quiz-hint").textContent = "Chưa chính xác. Rắn vẫn dài ra bình thường khi ăn táo.";
        }
        $("#quiz-question").classList.add("hidden");
        $("#quiz-timer-row").classList.add("hidden");
        list.classList.add("hidden");
        $("#quiz-result").classList.remove("hidden");
        $("#quiz-result-title").textContent = isCorrect ? "CHÍNH XÁC!" : "CHƯA ĐÚNG!";
        $("#quiz-result-title").classList.toggle("is-correct", isCorrect);
        $("#quiz-result-title").classList.toggle("is-incorrect", !isCorrect);
        $("#quiz-result-detail").textContent = isCorrect
          ? `Đáp án đúng: ${targetWord}. ${$("#quiz-hint").textContent}`
          : `Đáp án đúng là “${targetWord}”. Bạn đã chọn “${answer}”.`;
        $("#quiz-hint").classList.add("hidden");
        drawBoard();
        $("#quiz-continue").classList.remove("hidden");
      });
      list.append(button);
    });
    openDialog(dialogs["quiz-modal"]);
    let remaining = 10;
    state.quizTimer = setInterval(() => {
      remaining -= 1;
      $("#quiz-timer").textContent = formatTime(remaining);
      if (remaining <= 0) {
        clearInterval(state.quizTimer);
        state.quizTimer = null;
        timeoutQuiz();
      }
    }, 1000);
    updateHud();
  }

  function timeoutQuiz() {
    if (!state.quizPending) return;
    state.quizPending = false;
    $("#quiz-hint").textContent = "Hết giờ! Rắn vẫn dài ra nhưng quả táo này không được tính điểm.";
    closeDialog(dialogs["quiz-modal"]);
    updateHud();
    if (state.apple === null) {
      endGame("Bạn đã chinh phục mê cung!");
      return;
    }
    drawBoard();
  }

  function finishQuiz() {
    clearInterval(state.quizTimer);
    state.quizTimer = null;
    closeDialog(dialogs["quiz-modal"]);
    state.quizPending = false;
    if (state.apple === null) state.apple = randomEmptyCell();
    if (state.apple === null) endGame("Bạn đã chinh phục mê cung!");
    drawBoard();
  }

  function openSpeakingDatabase() {
    return new Promise((resolve, reject) => {
      if (!("indexedDB" in window)) {
        reject(new Error("Trình duyệt này không hỗ trợ lưu bản ghi âm."));
        return;
      }
      const request = indexedDB.open("englishEraSpeaking:v1", 1);
      request.onupgradeneeded = () => {
        const database = request.result;
        if (!database.objectStoreNames.contains("recordings")) {
          database.createObjectStore("recordings", { keyPath: "id" });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error("Không thể mở thư viện bản ghi âm."));
      request.onblocked = () => reject(new Error("Một tab khác đang khóa thư viện bản ghi âm."));
    });
  }

  async function saveSpeakingRecord(record) {
    const database = await openSpeakingDatabase();
    try {
      await new Promise((resolve, reject) => {
        const transaction = database.transaction("recordings", "readwrite");
        transaction.objectStore("recordings").put(record);
        transaction.oncomplete = resolve;
        transaction.onerror = () => reject(transaction.error || new Error("Không thể lưu bản ghi âm."));
        transaction.onabort = () => reject(transaction.error || new Error("Đã hủy lưu bản ghi âm."));
      });
    } finally {
      database.close();
    }
  }

  async function readSpeakingRecords(profileKey) {
    const database = await openSpeakingDatabase();
    try {
      return await new Promise((resolve, reject) => {
        const transaction = database.transaction("recordings", "readonly");
        const request = transaction.objectStore("recordings").getAll();
        request.onsuccess = () => resolve(request.result.filter((record) => record.profileKey === profileKey).sort((a, b) => b.createdAt - a.createdAt));
        request.onerror = () => reject(request.error || new Error("Không thể đọc bản ghi âm."));
      });
    } finally {
      database.close();
    }
  }

  function showSpeakingStatus(message, isError = false) {
    const status = $("#speaking-status");
    status.textContent = message;
    status.classList.toggle("is-error", isError);
  }

  async function renderSpeakingRecordings() {
    const list = $("#speaking-recordings");
    if (!list) return;
    state.speakingUrls.forEach((url) => URL.revokeObjectURL(url));
    state.speakingUrls = [];
    list.replaceChildren();
    const loading = document.createElement("p");
    loading.className = "info-empty";
    loading.textContent = "Đang tải bản ghi…";
    list.append(loading);
    try {
      const records = await readSpeakingRecords(activeProfileKey);
      list.replaceChildren();
      if (!records.length) {
        const empty = document.createElement("p");
        empty.className = "info-empty";
        empty.textContent = "Chưa có bản ghi nào cho tên người chơi này.";
        list.append(empty);
        return;
      }
      records.forEach((record) => {
        const card = document.createElement("article");
        card.className = "speaking-record";
        const heading = document.createElement("div");
        heading.className = "speaking-record-heading";
        const topic = document.createElement("strong");
        topic.textContent = record.topic;
        const date = document.createElement("time");
        date.dateTime = new Date(record.createdAt).toISOString();
        date.textContent = new Date(record.createdAt).toLocaleString();
        heading.append(topic, date);
        const meta = document.createElement("p");
        meta.className = `speaking-record-outcome ${record.outcome}`;
        meta.textContent = record.outcome === "spoken"
          ? `Đã phát hiện giọng nói · ${Math.round(record.voicedMs / 1000)} giây`
          : record.outcome === "no-speech"
            ? "Không phát hiện giọng nói · không thể hồi sinh"
            : "Thử thách đã kết thúc trước khi hoàn thành";
        const audio = document.createElement("audio");
        audio.controls = true;
        audio.preload = "metadata";
        audio.src = URL.createObjectURL(record.blob);
        state.speakingUrls.push(audio.src);
        card.append(heading, meta, audio);
        list.append(card);
      });
    } catch (error) {
      list.replaceChildren();
      const failure = document.createElement("p");
      failure.className = "info-empty is-error";
      failure.textContent = `Không thể tải bản ghi: ${error.message}`;
      list.append(failure);
    }
  }

  function monitorSpeakingAudio(session) {
    if (state.speakingSession !== session || !session.analyser) return;
    const samples = new Uint8Array(session.analyser.fftSize);
    session.analyser.getByteTimeDomainData(samples);
    let sum = 0;
    for (const sample of samples) {
      const normalized = (sample - 128) / 128;
      sum += normalized * normalized;
    }
    const rms = Math.sqrt(sum / samples.length);
    const now = performance.now();
    const elapsed = Math.min(now - session.lastSampleAt, 100);
    session.lastSampleAt = now;
    if (rms >= 0.02) session.voicedMs += elapsed;
    session.animationFrame = requestAnimationFrame(() => monitorSpeakingAudio(session));
  }

  async function startSpeakingRecording() {
    const button = $("#start-speaking-button");
    let stream = null;
    let audioContext = null;
    let session = null;
    button.disabled = true;
    showSpeakingStatus("Đang yêu cầu quyền truy cập micrô…");
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !("MediaRecorder" in window)) {
        throw new Error("Trình duyệt này không hỗ trợ ghi âm. Hãy thử phiên bản Chrome hoặc Edge mới nhất.");
      }
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (!dialogs["revival-modal"].open || state.gameEnded) {
        stream.getTracks().forEach((track) => track.stop());
        return;
      }
      const recorder = new MediaRecorder(stream);
      audioContext = new AudioContext();
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 512;
      source.connect(analyser);
      session = {
        id: window.crypto && typeof window.crypto.randomUUID === "function" ? window.crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        recorder,
        stream,
        audioContext,
        source,
        analyser,
        chunks: [],
        topic: $("#revival-topic").textContent,
        profileKey: activeProfileKey,
        displayName: getName(),
        createdAt: Date.now(),
        voicedMs: 0,
        lastSampleAt: performance.now(),
        animationFrame: 0,
        saved: false,
        outcomeOverride: null,
      };
      state.speakingSession = session;
      recorder.addEventListener("dataavailable", (event) => {
        if (event.data.size) session.chunks.push(event.data);
      });
      recorder.addEventListener("stop", () => { void finishSpeakingRecording(session); }, { once: true });
      recorder.start(250);
      monitorSpeakingAudio(session);
      $("#speaking-timer").textContent = "00:30";
      $("#start-speaking-button").textContent = "ĐANG GHI ÂM…";
      showSpeakingStatus("Đang ghi âm. Hãy nói tiếng Anh tự nhiên.");
      let remaining = 30;
      clearInterval(state.revivalTimer);
      state.revivalTimer = setInterval(() => {
        remaining -= 1;
        $("#speaking-timer").textContent = formatTime(remaining);
        if (remaining <= 0) {
          clearInterval(state.revivalTimer);
          state.revivalTimer = null;
          showSpeakingStatus("Đã đủ 30 giây. Đang hoàn tất và lưu bản ghi…");
          if (recorder.state === "recording") recorder.stop();
          $("#start-speaking-button").classList.add("hidden");
        }
      }, 1000);
    } catch (error) {
      if (stream) stream.getTracks().forEach((track) => track.stop());
      if (session && state.speakingSession === session) state.speakingSession = null;
      let cleanupMessage = "";
      if (audioContext && audioContext.state !== "closed") {
        try {
          await audioContext.close();
        } catch (cleanupError) {
          cleanupMessage = ` Không thể dọn dẹp micrô: ${cleanupError.message}`;
        }
      }
      button.disabled = false;
      button.textContent = "THỬ GHI ÂM LẠI";
      showSpeakingStatus(`Không thể bắt đầu ghi âm: ${error.message}.${cleanupMessage}`, true);
    }
  }

  async function finishSpeakingRecording(session) {
    if (session.animationFrame) cancelAnimationFrame(session.animationFrame);
    session.stream.getTracks().forEach((track) => track.stop());
    session.source.disconnect();
    await session.audioContext.close().catch((error) => {
      showSpeakingStatus(`Không thể dừng ghi âm: ${error.message}`, true);
    });
    const blob = new Blob(session.chunks, { type: session.recorder.mimeType || "audio/webm" });
    const outcome = session.outcomeOverride || (session.voicedMs >= 1500 ? "spoken" : "no-speech");
    try {
      if (!blob.size) throw new Error("Bản ghi trống. Hãy kiểm tra micrô và thử lại ở lượt tiếp theo.");
      await saveSpeakingRecord({
        id: session.id,
        profileKey: session.profileKey,
        displayName: session.displayName,
        topic: session.topic,
        createdAt: session.createdAt,
        voicedMs: session.voicedMs,
        outcome,
        blob,
      });
      session.saved = true;
      if (state.speakingSession === session) state.speakingSession = null;
      const mayRevive = outcome === "spoken";
      $("#revive-button").disabled = !mayRevive;
      showSpeakingStatus(mayRevive
        ? "Đã lưu bản ghi và phát hiện giọng nói. Bạn có thể hồi sinh."
        : "Đã lưu bản ghi nhưng giọng nói chưa đủ rõ. Bạn chưa thể hồi sinh.", !mayRevive);
      if ($("#info-page").classList.contains("active")) void renderSpeakingRecordings();
    } catch (error) {
      $("#revive-button").disabled = true;
      if (state.speakingSession === session) state.speakingSession = null;
      showSpeakingStatus(`Không thể lưu bản ghi nên bạn chưa thể hồi sinh: ${error.message}`, true);
    }
  }

  function stopSpeakingRecording(outcome = "ended") {
    const session = state.speakingSession;
    if (!session) return;
    session.outcomeOverride = outcome;
    clearInterval(state.revivalTimer);
    state.revivalTimer = null;
    if (session.recorder.state === "recording") session.recorder.stop();
  }

  function handleCrash(spikeCell = null) {
    state.playing = false;
    state.grave = spikeCell;
    clearInterval(state.trapTimer);
    $("#pause-button").disabled = true;
    if (!state.usedRevival) {
      $("#revival-topic").textContent = speakingTopics[Math.floor(Math.random() * speakingTopics.length)];
      $("#speaking-timer").textContent = "00:30";
      $("#start-speaking-button").disabled = false;
      $("#start-speaking-button").textContent = "BẮT ĐẦU GHI ÂM";
      $("#start-speaking-button").classList.remove("hidden");
      $("#revive-button").disabled = true;
      showSpeakingStatus("Nhấn nút ghi âm để cho phép sử dụng micrô.");
      openDialog(dialogs["revival-modal"]);
      $("#end-after-crash").onclick = () => {
        clearInterval(state.revivalTimer);
        state.revivalTimer = null;
        stopSpeakingRecording("ended");
        closeDialog(dialogs["revival-modal"]);
        endGame("Lượt chơi đã kết thúc");
      };
      $("#revive-button").onclick = () => {
        if ($("#revive-button").disabled || state.speakingSession) return;
        clearInterval(state.revivalTimer);
        state.revivalTimer = null;
        closeDialog(dialogs["revival-modal"]);
        state.usedRevival = true;
        state.snake = [{ x: 3, y: 4 }, { x: 2, y: 4 }];
        state.direction = { x: 1, y: 0 };
        state.traps = [];
        state.grave = null;
        state.playing = true;
        document.body.classList.add("game-running");
        document.body.classList.remove("game-paused");
        state.movementStarted = false;
        $("#pause-button").disabled = false;
        drawBoard();
      };
    } else {
      endGame("Lượt chơi đã kết thúc");
    }
    drawBoard();
  }

  function gameSecond() {
    if (state.paused) return;
    state.elapsed += 1;
    state.traps = state.traps.filter((trap) => trap.expiresAt > state.elapsed);
    updateHud();
    if (state.elapsed >= state.duration) endGame("Hết giờ!");
  }

  function endGame(title) {
    if (state.gameEnded) return;
    state.gameEnded = true;
    state.playing = false;
    document.body.classList.remove("game-running", "game-paused");
    stopSpeakingRecording("ended");
    clearInterval(state.timer);
    clearInterval(state.trapTimer);
    clearInterval(state.revivalTimer);
    clearInterval(state.quizTimer);
    state.quizTimer = null;
    $("#pause-button").disabled = true;
    closeDialog(dialogs["revival-modal"]);
    closeDialog(dialogs["quiz-modal"]);
    state.quizPending = false;
    $("#gameover-title").textContent = title;
    $("#final-score").textContent = String(state.score);
    $("#final-apples").textContent = String(state.apples);
    const earnedCoins = Math.ceil(state.score * 0.25);
    state.wallet.coins += earnedCoins;
    state.wallet.bestScore = Math.max(state.wallet.bestScore, state.score);
    state.wallet.games.push({ score: state.score, apples: state.apples, coins: earnedCoins, playedAt: new Date().toISOString() });
    state.wallet.games = state.wallet.games.slice(-100);
    state.wallet.idleMs = 0;
    $("#run-coins").textContent = `+${earnedCoins}`;
    saveWallet();
    switchTab("results-page");
    const rewardEligible = state.score >= 500;
    $("#exchange-card").classList.toggle("hidden", !rewardEligible);
    $("#exchange-button").classList.toggle("hidden", !rewardEligible);
    $("#exchange-button").disabled = !rewardEligible;
    $("#save-status").textContent = "Đang lưu điểm…";
    drawBoard();
    openDialog(dialogs["gameover-modal"]);
    saveRun();
  }

  async function saveRun() {
    const name = getName();
    if (!name) {
      $("#save-status").textContent = "Không thể lưu điểm: tên phải có 8–65 ký tự và chỉ gồm chữ cái, chữ số.";
      return;
    }
    try {
      const response = await fetch("/api/scores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, score: state.score, apples: state.apples }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Không thể lưu điểm của bạn.");
      $("#save-status").textContent = "Đã lưu điểm! Kết quả của bạn có trên bảng xếp hạng hôm nay.";
      await loadLeaderboard();
    } catch (error) {
      $("#save-status").textContent = `${error.message} Kết quả vẫn hiển thị ở trên nhưng chưa được lưu.`;
    }
  }

  async function loadLeaderboard() {
    const list = $("#leader-list");
    try {
      const response = await fetch("/api/leaderboard");
      if (!response.ok) throw new Error("Không thể tải bảng xếp hạng.");
      const rows = await response.json();
      const ticker = $("#top-five-ticker");
      ticker.replaceChildren();
      const champions = rows.slice(0, 5);
      if (!champions.length) {
        const emptyTicker = document.createElement("span");
        emptyTicker.textContent = "Hôm nay chưa có điểm — hãy là người đầu tiên!";
        ticker.append(emptyTicker);
      } else {
        const tickerItems = [...champions, ...champions];
        tickerItems.forEach((row, index) => {
          const item = document.createElement("span");
          item.className = "ticker-player";
          item.textContent = `${String((index % champions.length) + 1).padStart(2, "0")} ${row.display_name} · ${Number(row.score).toLocaleString()} ĐIỂM`;
          ticker.append(item);
        });
      }
      list.replaceChildren();
      if (!rows.length) {
        state.dailyLeader = false;
        updateSkin();
        const empty = document.createElement("li");
        empty.className = "leader-empty";
        empty.textContent = "Hãy là người đầu tiên xuất hiện trên bảng xếp hạng hôm nay!";
        list.append(empty);
        return;
      }
      rows.forEach((row, index) => {
        const item = document.createElement("li");
        item.className = "leader-row";
        const rank = document.createElement("span");
        rank.className = "leader-rank";
        rank.textContent = String(index + 1).padStart(2, "0");
        const player = document.createElement("span");
        player.className = "leader-player";
        player.textContent = row.display_name;
        const points = document.createElement("span");
        points.className = "leader-points";
        points.textContent = Number(row.score).toLocaleString();
        item.append(rank, player, points);
        list.append(item);
      });
      state.dailyLeader = rows[0].display_name.toLocaleLowerCase() === getName().toLocaleLowerCase();
      updateSkin();
    } catch {
      $("#top-five-ticker").textContent = "Bảng xếp hạng tạm thời không khả dụng.";
      list.replaceChildren();
      const error = document.createElement("li");
      error.className = "leader-empty";
      error.textContent = "Không thể tải bảng xếp hạng. Hãy tải lại trang để thử lại.";
      list.append(error);
    }
  }

  function resetRun(bonus = 0) {
    gameTabPaused = false;
    selectProfile(getName());
    if (!canStartRun()) {
      switchTab("hub-page");
      openRecovery();
      return;
    }
    clearInterval(state.timer);
    clearInterval(state.trapTimer);
    clearInterval(state.quizTimer);
    clearInterval(state.revivalTimer);
    state.timer = null;
    state.trapTimer = null;
    state.quizTimer = null;
    state.revivalTimer = null;
    state.score = 0;
    state.apples = 0;
    state.elapsed = 0;
    state.duration = Number($("#duration").value);
    state.bonus = bonus;
    state.previewCrown = false;
    state.snake = [{ x: 3, y: 4 }, { x: 2, y: 4 }];
    state.direction = { x: 1, y: 0 };
    state.traps = [];
    state.grave = null;
    state.apple = { x: 6, y: 1 };
    state.playing = false;
    state.paused = false;
    document.body.classList.remove("game-running", "game-paused");
    state.gameEnded = false;
    state.movementStarted = false;
    state.quizPending = false;
    state.usedRevival = false;
    state.questionIndex = 0;
    switchTab("play-page");
    state.wallet.idleMs = 0;
    saveWallet();
    updateSkin();
    $("#overlay").classList.add("hidden");
    updateHud();
    drawBoard();
    startCountdown();
  }

  function startCountdown() {
    const overlay = $("#countdown-overlay");
    const number = $("#countdown-number");
    overlay.classList.remove("hidden");
    let remaining = 3;
    number.textContent = String(remaining);
    const interval = setInterval(() => {
      remaining -= 1;
      if (remaining === 0) {
        clearInterval(interval);
        overlay.classList.add("hidden");
        startGame();
      } else number.textContent = String(remaining);
    }, 650);
  }

  function startGame() {
    state.playing = true;
    document.body.classList.add("game-running");
    document.body.classList.remove("game-paused");
    $("#pause-button").disabled = false;
    updateWalletUI();
    updateHud();
    drawBoard();
  }

  function begin() {
    const playerName = getName();
    if (playerName && tutorialSeen) {
      savePlayerName(playerName);
      selectProfile(playerName);
      resetRun(0);
      return;
    }
    $("#guide-heading").textContent = "Cùng tìm hiểu cách chơi";
    $("#guide-welcome-copy").classList.add("hidden");
    $("#guide-welcome-actions").classList.add("hidden");
    $("#tutorial-controls").classList.remove("hidden");
    $("#guide-name").value = $("#player-name").value || $("#guide-name").value;
    updateNameValidity($("#guide-name"));
    state.tutorialIndex = 0;
    renderTutorialStep();
    openDialog(dialogs["guide-modal"]);
  }

  function skipTutorial() {
    const guideName = $("#guide-name");
    updateNameValidity(guideName);
    if (!guideName.checkValidity()) {
      guideName.reportValidity();
      return;
    }
    $("#player-name").value = guideName.value;
    updateNameValidity($("#player-name"));
    savePlayerName(guideName.value);
    markTutorialSeen();
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    closeDialog(dialogs["guide-modal"]);
    resetRun(0);
  }

  function shuffleMusicFiles() {
    const shuffled = [...state.musicFiles];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    if (shuffled.length > 1 && shuffled[0] === state.musicPlaylist.at(-1)) {
      [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
    }
    state.musicPlaylist = shuffled;
    state.musicIndex = 0;
  }

  function startGameAudio() {
    if (!state.audioEnabled || document.hidden) return;
    if (state.musicFiles.length) {
      if (!state.musicObjectUrl) {
        playNextTrack();
      } else {
        if (state.youtubePlayer) state.youtubePlayer.pauseVideo();
        state.musicElement.play().catch((error) => {
          console.error("Không thể phát tệp nhạc đã chọn.", error);
          $("#music-select").textContent = "Không thể phát nhạc";
        });
      }
    } else {
      if (state.youtubePlayer) {
        state.youtubePlayer.playVideo();
      } else {
        startYouTubeAudio();
      }
    }
  }

  function playNextTrack() {
    if (!state.audioEnabled || document.hidden || !state.musicFiles.length) return;
    if (state.musicIndex >= state.musicPlaylist.length) shuffleMusicFiles();
    const file = state.musicPlaylist[state.musicIndex];
    state.musicIndex += 1;
    if (state.musicElement) state.musicElement.pause();
    if (state.musicObjectUrl) URL.revokeObjectURL(state.musicObjectUrl);
    state.musicObjectUrl = URL.createObjectURL(file);
    if (state.youtubePlayer) state.youtubePlayer.pauseVideo();
    if (!state.musicElement) {
      state.musicElement = new Audio();
      state.musicElement.volume = 0.45;
      state.musicElement.addEventListener("ended", playNextTrack);
    }
    state.musicElement.loop = state.musicFiles.length === 1;
    state.musicElement.src = state.musicObjectUrl;
    state.musicElement.play().then(() => {
      $("#music-select").textContent = "♪ Đang phát nhạc";
      $("#music-select").title = file.name;
    }).catch((error) => {
      console.error("Không thể phát tệp MP3 đã chọn.", error);
      $("#music-select").textContent = "Không thể phát nhạc";
    });
  }

  function loadYouTubeApi() {
    if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
    if (state.youtubeApiPromise) return state.youtubeApiPromise;
    state.youtubeApiPromise = new Promise((resolve, reject) => {
      const previousCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof previousCallback === "function") previousCallback();
        resolve(window.YT);
      };
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      script.onerror = () => {
        state.youtubeApiPromise = null;
        reject(new Error("Không tải được trình phát YouTube."));
      };
      document.head.append(script);
    });
    return state.youtubeApiPromise;
  }

  function startYouTubeAudio() {
    if (state.musicFiles.length) return;
    if (state.youtubePlayer) {
      state.youtubePlayer.playVideo();
      return;
    }
    if (state.youtubePlayerPromise) return;

    state.youtubePlayerPromise = loadYouTubeApi()
      .then((youtube) => new Promise((resolve, reject) => {
        state.youtubePlayer = new youtube.Player("youtube-player-container", {
          width: "200",
          height: "200",
          videoId: "ZX2mjf9dFH8",
          playerVars: {
            autoplay: 0,
            controls: 0,
            loop: 1,
            playlist: "ZX2mjf9dFH8",
            playsinline: 1,
            rel: 0,
          },
          events: {
            onReady: (event) => {
              $("#sound-toggle").title = "Nhạc lo-fi đang phát.";
              resolve();
              if (state.audioEnabled && !document.hidden && !state.musicFiles.length) event.target.playVideo();
              else event.target.pauseVideo();
            },
            onAutoplayBlocked: () => {
              $("#sound-toggle").title = "Nhạc bị trình duyệt chặn. Hãy tắt rồi bật lại nút âm thanh để thử phát lại.";
            },
            onStateChange: (event) => {
              if (event.data !== youtube.PlayerState.ENDED) return;
              if (!state.audioEnabled || document.hidden || state.musicFiles.length) return;
              event.target.seekTo(0, true);
              event.target.playVideo();
            },
            onError: (event) => {
              const error = new Error(`Trình phát YouTube gặp lỗi (${event.data}).`);
              console.error(error);
              $("#sound-toggle").title = "Không thể phát video YouTube này.";
              state.youtubePlayer = null;
              state.youtubePlayerPromise = null;
              reject(error);
            },
          },
        });
      }))
      .catch((error) => {
        console.error("Không thể khởi động nhạc nền YouTube.", error);
        $("#sound-toggle").title = "Không tải được nhạc nền. Hãy thử lại.";
        state.youtubePlayerPromise = null;
      });
  }

  function stopGameAudio() {
    if (state.musicElement) state.musicElement.pause();
    if (state.youtubePlayer) state.youtubePlayer.pauseVideo();
  }

  function resumeGameAudio() {
    if (state.audioEnabled) startGameAudio();
  }

  function enableSound() {
    state.audioEnabled = !state.audioEnabled;
    $("#sound-toggle").setAttribute("aria-pressed", String(state.audioEnabled));
    $("#sound-toggle").innerHTML = state.audioEnabled ? "♪ <span>Sound Off</span>" : "♪ <span>Sound On</span>";
    if (state.audioEnabled) startGameAudio();
    else {
      stopGameAudio();
      $("#sound-toggle").title = "Nhạc đã tắt.";
    }
  }

  function playExchangeConversation() {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      $("#conversation-status").textContent = "Trình duyệt này không hỗ trợ phát giọng nói. Bạn vẫn có thể bắt đầu lượt mới không có điểm thưởng.";
      return;
    }

    state.dialogueToken += 1;
    const token = state.dialogueToken;
    window.speechSynthesis.cancel();
    $("#continue-exchange-button").disabled = true;
    $("#play-conversation-button").disabled = true;
    $("#conversation-status").textContent = "Hãy nghe đoạn hội thoại…";
    $("#conversation-quiz").classList.add("hidden");
    const lines = [
      { text: "How are you preparing for the vocabulary challenge?", pitch: 1.1 },
      { text: "I review a few words every day and use them in a sentence.", pitch: 0.9 },
      { text: "That sounds manageable. What will you practise next?", pitch: 1.1 },
      { text: "I’ll describe my neighborhood and listen to your suggestions.", pitch: 0.9 },
    ];
    let index = 0;
    const speakNext = () => {
      if (token !== state.dialogueToken) return;
      if (index >= lines.length) {
        state.conversationHeard = true;
        $("#play-conversation-button").disabled = false;
        $("#play-conversation-button").innerHTML = "NGHE LẠI HỘI THOẠI <span>♪</span>";
        $("#conversation-status").textContent = "Trả lời đúng cả 3 câu hỏi để nhận điểm thưởng.";
        showConversationQuestion();
        return;
      }
      const line = lines[index];
      index += 1;
      const utterance = new SpeechSynthesisUtterance(line.text);
      utterance.lang = "en-US";
      utterance.rate = 0.92;
      utterance.pitch = line.pitch;
      const englishVoice = window.speechSynthesis.getVoices().find((voice) => voice.lang.toLowerCase().startsWith("en"));
      if (englishVoice) utterance.voice = englishVoice;
      utterance.onend = speakNext;
      utterance.onerror = () => {
        if (token !== state.dialogueToken) return;
        $("#play-conversation-button").disabled = false;
        $("#continue-exchange-button").disabled = true;
        $("#conversation-status").textContent = "Hội thoại chưa phát xong. Hãy thử lại hoặc bắt đầu lượt mới không có điểm thưởng.";
      };
      window.speechSynthesis.speak(utterance);
    };
    speakNext();
  }

  function showConversationQuestion() {
    const quiz = $("#conversation-quiz");
    const status = $("#conversation-answer-status");
    if (state.conversationQuestionIndex >= conversationQuestions.length) {
      quiz.classList.add("hidden");
      $("#conversation-status").textContent = "Tuyệt vời! Bạn đã trả lời đúng cả 3 câu hỏi và nhận 200 điểm thưởng.";
      $("#continue-exchange-button").disabled = false;
      return;
    }

    const questionNumber = state.conversationQuestionIndex + 1;
    const item = conversationQuestions[state.conversationQuestionIndex];
    $("#conversation-progress").textContent = `CÂU HỎI ${questionNumber}/3`;
    $("#conversation-question").textContent = item.question;
    status.textContent = "";
    const answers = $("#conversation-answers");
    answers.replaceChildren();
    const choices = item.answers.map((answer, index) => ({ answer, index })).sort(() => Math.random() - 0.5);
    choices.forEach(({ answer, index }) => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "answer-option";
      option.textContent = answer;
      option.addEventListener("click", () => {
        if (option.disabled) return;
        if (index !== item.correct) {
          option.classList.add("incorrect");
          status.textContent = "Chưa chính xác. Hãy nghe lại hội thoại và thử chọn đáp án khác.";
          return;
        }

        answers.querySelectorAll("button").forEach((button) => { button.disabled = true; });
        option.classList.add("correct");
        state.conversationQuestionIndex += 1;
        status.textContent = "Chính xác!";
        window.setTimeout(showConversationQuestion, 650);
      });
      answers.append(option);
    });
    quiz.classList.remove("hidden");
  }

  function updateSkin() {
    state.skin = state.previewSkin || state.outfitSkin || { color: "#71bd4d", label: "MINT" };
    updateHud();
    drawBoard();
  }

  document.addEventListener("keydown", (event) => {
    if (event.target instanceof Element && event.target.closest("input, textarea, select, [contenteditable]:not([contenteditable='false'])")) return;
    if (!state.playing) return;
    const key = event.key.toLowerCase();
    const directions = {
      arrowup: { x: 0, y: -1 }, w: { x: 0, y: -1 },
      arrowdown: { x: 0, y: 1 }, s: { x: 0, y: 1 },
      arrowleft: { x: -1, y: 0 }, a: { x: -1, y: 0 },
      arrowright: { x: 1, y: 0 }, d: { x: 1, y: 0 },
    };
    if (directions[key] && !state.paused) {
      event.preventDefault();
      if (event.repeat) return;
      setDirection(directions[key]);
    } else if (key === " ") {
      if (event.target instanceof Element && event.target.closest("button")) return;
      event.preventDefault();
      $("#pause-button").click();
    }
  });
  $("#music-select").addEventListener("click", () => $("#music-files").click());
  $("#music-files").addEventListener("change", (event) => {
    const files = Array.from(event.target.files || []).filter((file) => file.type === "audio/mpeg" || file.name.toLowerCase().endsWith(".mp3"));
    if (state.musicElement) state.musicElement.pause();
    if (state.musicObjectUrl) URL.revokeObjectURL(state.musicObjectUrl);
    state.musicObjectUrl = null;
    state.musicFiles = files;
    state.musicPlaylist = [];
    state.musicIndex = 0;
    if (!files.length) {
      $("#music-select").textContent = "Choose Music";
      if (event.target.files.length) $("#music-select").textContent = "Vui lòng chọn tệp MP3";
      startGameAudio();
      return;
    }
    shuffleMusicFiles();
    state.audioEnabled = true;
    $("#sound-toggle").setAttribute("aria-pressed", "true");
    $("#sound-toggle").innerHTML = "♪ <span>Sound Off</span>";
    $("#music-select").textContent = `Đã chọn ${files.length} bản nhạc`;
    startGameAudio();
  });
  $("#start-button").addEventListener("click", begin);
  $("#tutorial-next").addEventListener("click", () => {
    if (state.tutorialIndex < tutorialSteps.length - 1) {
      state.tutorialIndex += 1;
      renderTutorialStep();
      return;
    }
    const guideName = $("#guide-name");
    updateNameValidity(guideName);
    if (!guideName.checkValidity()) {
      guideName.reportValidity();
      return;
    }
    $("#player-name").value = guideName.value;
    updateNameValidity($("#player-name"));
    savePlayerName(guideName.value);
    markTutorialSeen();
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    closeDialog(dialogs["guide-modal"]);
    resetRun(0);
  });
  $("#tutorial-back").addEventListener("click", () => {
    if (state.tutorialIndex === 0) return;
    state.tutorialIndex -= 1;
    renderTutorialStep();
  });
  $("#tutorial-replay").addEventListener("click", speakTutorialStep);
  $("#tutorial-read").addEventListener("click", begin);
  $("#tutorial-skip").addEventListener("click", skipTutorial);
  $("#tutorial-skip-step").addEventListener("click", skipTutorial);
  $("#welcome-enter").addEventListener("click", () => {
    const welcomeScreen = $("#welcome-screen");
    localStorage.setItem("englishEraWelcomeSeen", "true");
    $("#welcome-enter").disabled = true;
    welcomeScreen.classList.add("is-leaving");
    window.setTimeout(() => {
      welcomeScreen.hidden = true;
      document.body.classList.remove("welcome-active");
      showGuideWelcome();
    }, 300);
  });
  $("#welcome-close").addEventListener("click", () => {
    localStorage.setItem("englishEraWelcomeSeen", "true");
    $("#welcome-screen").hidden = true;
    document.body.classList.remove("welcome-active");
  });
  $("#welcome-screen").addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.target.id !== "welcome-enter") $("#welcome-enter").click();
  });
  $("#open-results-button").addEventListener("click", () => {
    closeDialog(dialogs["gameover-modal"]);
    switchTab("results-page");
  });
  dialogs["guide-modal"].addEventListener("cancel", (event) => event.preventDefault());
  dialogs["guide-modal"].addEventListener("close", () => {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    if (state.tutorialAnimation) cancelAnimationFrame(state.tutorialAnimation);
    state.tutorialAnimation = null;
  });
  ["player-name", "guide-name"].forEach((id) => {
    const input = $(`#${id}`);
    input.addEventListener("input", () => {
      updateNameValidity(input);
      if (!displayNameError(input.value)) {
        savePlayerName(input.value);
        if (!state.playing) selectProfile(input.value);
      }
    });
  });
  $("#guide-name").addEventListener("keydown", (event) => { if (event.key === "Enter") $("#tutorial-next").click(); });
  $("#quiz-continue").addEventListener("click", finishQuiz);
  $("#start-speaking-button").addEventListener("click", startSpeakingRecording);
  dialogs["revival-modal"].addEventListener("cancel", (event) => event.preventDefault());
  $("#pause-button").addEventListener("click", () => {
    if (!state.playing) return;
    state.paused = !state.paused;
    document.body.classList.toggle("game-paused", state.paused);
    $("#pause-button").textContent = state.paused ? "▶" : "Ⅱ";
    drawBoard();
  });
  $("#crown-preview-button").addEventListener("click", () => {
    state.previewCrown = true;
    updateSkin();
    $("#clothes-status").textContent = "Đang xem thử vương miện — chế độ xem trước, không ảnh hưởng bảng xếp hạng.";
    switchTab("play-page");
  });
  dialogs["quiz-modal"].addEventListener("cancel", (event) => event.preventDefault());
  dialogs["recovery-modal"].addEventListener("cancel", (event) => event.preventDefault());
  $("#save-quiz-word").addEventListener("click", () => {
    if (!state.currentQuestion) return;
    saveWord(
      state.currentQuestion.answers[state.currentQuestion.correct],
      state.currentQuestion.topic,
      state.currentQuestion.level,
      state.currentQuestion.question,
    );
  });
  document.querySelectorAll(".nav-tab").forEach((button) => button.addEventListener("click", () => switchTab(button.dataset.tab)));
  document.querySelectorAll("[data-go-tab]").forEach((button) => button.addEventListener("click", () => switchTab(button.dataset.goTab)));
  $("#review-start").addEventListener("click", startStudy);
  $("#study-card").addEventListener("click", revealStudyCard);
  $("#study-card").addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && event.target.id === "study-card") {
      event.preventDefault();
      revealStudyCard();
    }
  });
  $("#study-audio").addEventListener("click", (event) => {
    event.stopPropagation();
    if (state.studyDeck[state.studyIndex]) speakWord(state.studyDeck[state.studyIndex].word);
  });
  $("#study-knew").addEventListener("click", () => {
    if (!state.studyRevealed) return;
    state.studyMastered += 1;
    state.studyIndex += 1;
    showStudyCard();
  });
  $("#study-skip").addEventListener("click", () => {
    state.studyIndex += 1;
    showStudyCard();
  });
  $("#recovery-open").addEventListener("click", openRecovery);
  $("#recovery-topic").addEventListener("change", updateWritingPrompt);
  $("#recovery-target").addEventListener("change", () => {
    if (!state.writingInterval) $("#writing-timer").textContent = Number($("#recovery-target").value) === 180 ? "15:00" : "40:00";
  });
  $("#writing-answer").addEventListener("input", () => {
    if (!state.writingInterval) startWriting();
    $("#writing-word-count").textContent = `${countWords($("#writing-answer").value)} từ`;
  });
  $("#writing-start").addEventListener("click", startWriting);
  $("#writing-submit").addEventListener("click", submitWriting);
  $("#writing-cancel").addEventListener("click", () => closeDialog(dialogs["recovery-modal"]));
  dialogs["recovery-modal"].addEventListener("close", () => {
    if (state.writingInterval) clearInterval(state.writingInterval);
    state.writingInterval = null;
    if (state.playing && state.writingWasPaused) {
      state.paused = false;
      document.body.classList.remove("game-paused");
      $("#pause-button").textContent = "Ⅱ";
      drawBoard();
    }
    state.writingWasPaused = false;
    updateWalletUI();
  });
  window.setInterval(applyIdleEnergy, 1000);
  window.setInterval(loadLeaderboard, 15000);
  $("#exchange-button").addEventListener("click", () => {
    if (state.score < 500) return;
    closeDialog(dialogs["gameover-modal"]);
    state.dialogueToken += 1;
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    state.conversationQuestionIndex = 0;
    state.conversationHeard = false;
    $("#conversation-quiz").classList.add("hidden");
    $("#continue-exchange-button").disabled = true;
    $("#play-conversation-button").disabled = false;
    $("#play-conversation-button").innerHTML = "PHÁT HỘI THOẠI <span>♪</span>";
    $("#conversation-status").textContent = "Nghe hội thoại tiếng Anh để mở khóa 200 điểm thưởng.";
    openDialog(dialogs["exchange-dialogue-modal"]);
  });
  $("#play-conversation-button").addEventListener("click", playExchangeConversation);
  $("#continue-exchange-button").addEventListener("click", () => {
    if ($("#continue-exchange-button").disabled || !state.conversationHeard || state.conversationQuestionIndex !== conversationQuestions.length) return;
    state.dialogueToken += 1;
    window.speechSynthesis.cancel();
    closeDialog(dialogs["exchange-dialogue-modal"]);
    resetRun(200);
  });
  $("#skip-exchange-button").addEventListener("click", () => {
    state.dialogueToken += 1;
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    closeDialog(dialogs["exchange-dialogue-modal"]);
    resetRun(0);
  });
  $("#cancel-exchange-button").addEventListener("click", () => {
    state.dialogueToken += 1;
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    closeDialog(dialogs["exchange-dialogue-modal"]);
    openDialog(dialogs["gameover-modal"]);
  });
  dialogs["exchange-dialogue-modal"].addEventListener("cancel", (event) => event.preventDefault());
  $("#play-again-button").addEventListener("click", () => {
    closeDialog(dialogs["gameover-modal"]);
    resetRun(0);
  });
  $("#sound-toggle").addEventListener("click", enableSound);
  $("#duration").addEventListener("change", () => { state.duration = Number($("#duration").value); updateHud(); });
  document.querySelectorAll(".touch-controls button").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = {
        up: { x: 0, y: -1 }, down: { x: 0, y: 1 },
        left: { x: -1, y: 0 }, right: { x: 1, y: 0 },
      }[button.dataset.direction];
      setDirection(direction);
    });
  });

  state.snake = [{ x: 3, y: 4 }, { x: 2, y: 4 }];
  state.apple = { x: 6, y: 1 };
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopGameAudio();
      hiddenRun = state.playing && !state.paused && state.movementStarted
        ? { startedAt: Date.now(), elapsed: state.elapsed, duration: state.duration }
        : null;
      return;
    }

    resumeGameAudio();
    if (!hiddenRun) return;
    const elapsedWhileHidden = (Date.now() - hiddenRun.startedAt) / 1000;
    const timedOutWhileHidden = hiddenRun.elapsed + elapsedWhileHidden >= hiddenRun.duration;
    hiddenRun = null;
    if (state.gameEnded || timedOutWhileHidden) {
      closeDialog(dialogs["gameover-modal"]);
      resetRun(0);
    }
  });
  $("#rank-content").append($("#leaderboard-panel"));
  $("#hub-guide-content").append($("#howto-panel"));
  $("#hub-winner-content").append($("#daily-winner-panel"));
  document.querySelector(".side-column").remove();
  const page = document.querySelector(".page");
  const syncScaledPageFlow = () => {
    const scale = Number.parseFloat(window.getComputedStyle(page).scale) || 1;
    page.style.marginBottom = `${page.offsetHeight * (scale - 1)}px`;
  };
  if ("ResizeObserver" in window) {
    new ResizeObserver(syncScaledPageFlow).observe(page);
  } else {
    window.addEventListener("resize", syncScaledPageFlow);
    syncScaledPageFlow();
  }
  const equippedClothes = clothes.find((item) => item.id === state.wallet.equippedSkin);
  if (equippedClothes) state.outfitSkin = { color: equippedClothes.color, label: equippedClothes.id };
  if (localStorage.getItem("englishEraWelcomeSeen") === "true") {
    $("#welcome-screen").hidden = true;
    document.body.classList.remove("welcome-active");
  } else {
    document.body.classList.add("welcome-active");
  }
  updateSkin();
  updateHud();
  updateWalletUI();
  renderLibrary();
  renderReviewSelection();
  renderClothes();
  drawBoard();
  if (document.body.classList.contains("welcome-active")) {
    $("#welcome-enter").focus({ preventScroll: true });
  }
  const initialTab = window.ENGLISH_ERA_INITIAL_TAB ||
    window.location.hash.slice(1);
  if (initialTab) {
    const initialPage = Array.from(document.querySelectorAll(".tab-page"))
      .find((item) => item.id === initialTab);
    if (initialPage) switchTab(initialTab);
  }
  loadLeaderboard();
})();
