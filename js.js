let selectedGenre = "";
let selectedAuthor = "";
let selectedAge = "";
let currentLanguage = "en";

const genresList = [
  "Fantasy",
  "Romance",
  "Sci-Fi",
  "Classic",
  "Horror",
  "Detective"
];
const ageList = ["0-12", "19-30", "31+"];

const translations = {
  en: {
    welcomeTitle: "Welcome to our website!",
    welcomeText:
      "You can find a book to read rapidly using our website! First, look at world hits. If you don’t find the book you want, answer a few questions by clicking buttons.",
    start: "Start",
    genreQuestion: "What genres do you prefer?",
    authorQuestion: "What author do you prefer from your genre?",
    ageQuestion: "How old are you?",
    resultTitle: "You could like these books:",
    select: "Select",
    restart: "Return to the questions",
    genres: {
      Fantasy: "Fantasy",
      Romance: "Romance",
      "Sci-Fi": "Sci-Fi",
      Classic: "Classic",
      Horror: "Horror",
      Detective: "Detective"
    },
    authors: {
      Fantasy: ["J.R.R. Tolkien", "George R.R. Martin", "Brandon Sanderson"],
      Romance: ["Jane Austen", "Nicholas Sparks", "Colleen Hoover"],
      "Sci-Fi": ["Isaac Asimov", "Philip K. Dick", "Frank Herbert"],
      Classic: ["Leo Tolstoy", "Charles Dickens", "Mark Twain"],
      Horror: ["Stephen King", "Shirley Jackson", "Clive Barker"],
      Detective: ["Agatha Christie", "Arthur Conan Doyle", "Raymond Chandler"]
    },
    books: {
      "J.R.R. Tolkien": ["The Hobbit", "The Lord of the Rings"],
      "George R.R. Martin": ["A Game of Thrones", "A Clash of Kings"],
      "Brandon Sanderson": ["Mistborn", "The Way of Kings"],
      "Jane Austen": ["Pride and Prejudice", "Emma"],
      "Nicholas Sparks": ["The Notebook", "A Walk to Remember"],
      "Colleen Hoover": ["It Ends With Us", "Verity"],
      "Isaac Asimov": ["Foundation", "I, Robot"],
      "Philip K. Dick": ["Ubik", "Do Androids Dream of Electric Sheep?"],
      "Frank Herbert": ["Dune", "Children of Dune"],
      "Leo Tolstoy": ["War and Peace", "Anna Karenina"],
      "Charles Dickens": ["Great Expectations", "Oliver Twist"],
      "Mark Twain": ["Huckleberry Finn", "Tom Sawyer"],
      "Stephen King": ["It", "The Shining", "Pet Sematary"],
      "Shirley Jackson": [
        "The Haunting of Hill House",
        "We Have Always Lived in the Castle"
      ],
      "Clive Barker": ["Books of Blood", "Hellbound Heart"],
      "Agatha Christie": [
        "Murder on the Orient Express",
        "And Then There Were None"
      ],
      "Arthur Conan Doyle": [
        "A Study in Scarlet",
        "The Hound of the Baskervilles"
      ],
      "Raymond Chandler": ["The Big Sleep", "Farewell, My Lovely"]
    }
  },
  ru: {
    welcomeTitle: "Добро пожаловать на наш сайт!",
    welcomeText:
      "Вы можете быстро найти книгу для чтения, используя наш сайт! Сначала посмотрите мировые хиты. Если не найдете нужную книгу, ответьте на несколько вопросов.",
    start: "Начать",
    genreQuestion: "Какие жанры вы предпочитаете?",
    authorQuestion: "Какого автора вы предпочитаете в этом жанре?",
    ageQuestion: "Сколько вам лет?",
    resultTitle: "Вам могут понравиться эти книги:",
    select: "Выбрать",
    restart: "Вернуться к вопросам",
    genres: {
      Fantasy: "Фэнтези",
      Romance: "Романтика",
      "Sci-Fi": "Научная фантастика",
      Classic: "Классика",
      Horror: "Ужасы",
      Detective: "Детектив"
    },
    authors: {
      Fantasy: ["Дж. Р. Р. Толкин", "Джордж Р. Р. Мартин", "Брэндон Сандерсон"],
      Romance: ["Джейн Остин", "Николас Спаркс", "Колин Гувер"],
      "Sci-Fi": ["Айзек Азимов", "Филип Дик", "Фрэнк Герберт"],
      Classic: ["Лев Толстой", "Чарльз Диккенс", "Марк Твен"],
      Horror: ["Стивен Кинг", "Ширли Джексон", "Клайв Баркер"],
      Detective: ["Агата Кристи", "Артур Конан Дойл", "Реймонд Чандлер"]
    },
    books: {
      "Дж. Р. Р. Толкин": ["Хоббит", "Властелин колец"],
      "Джордж Р. Р. Мартин": ["Игра престолов", "Битва королей"],
      "Брэндон Сандерсон": ["Мистборн", "Путь королей"],
      "Джейн Остин": ["Гордость и предубеждение", "Эмма"],
      "Николас Спаркс": ["Дневник памяти", "Послание в бутылке"],
      "Колин Гувер": ["Это заканчивается с нами", "Верити"],
      "Айзек Азимов": ["Основание", "Я, робот"],
      "Филип Дик": ["Юбик", "Мечтают ли андроиды об электроовцах?"],
      "Фрэнк Герберт": ["Дюна", "Дети Дюны"],
      "Лев Толстой": ["Война и мир", "Анна Каренина"],
      "Чарльз Диккенс": ["Большие надежды", "Оливер Твист"],
      "Марк Твен": ["Приключения Гекльберри Финна", "Том Сойер"],
      "Стивен Кинг": ["Оно", "Сияние", "Кладбище домашних животных"],
      "Ширли Джексон": ["Призрак дома на холме", "Мы всегда жили в замке"],
      "Клайв Баркер": ["Книги крови", "Сердце привязанного к аду"],
      "Агата Кристи": ["Убийство в Восточном экспрессе", "И никого не стало"],
      "Артур Конан Дойл": ["Этюд в багровых тонах", "Собака Баскервилей"],
      "Реймонд Чандлер": ["Глубокий сон", "Прощай, моя красавица"]
    }
  },
  kz: {
    welcomeTitle: "Біздің сайтқа қош келдіңіз!",
    welcomeText:
      "Біздің сайт арқылы оқуға кітапты тез таба аласыз! Алдымен әлемге танымал кітаптарға қараңыз. Егер керегіңізді таппасаңыз, сұрақтарға жауап беріңіз.",
    start: "Бастау",
    genreQuestion: "Қай жанрларды ұнатасыз?",
    authorQuestion: "Осы жанрдағы сүйікті авторыңыз кім?",
    ageQuestion: "Жасыңыз қаншада?",
    resultTitle: "Сізге мына кітаптар ұнауы мүмкін:",
    select: "Таңдау",
    restart: "Сұрақтарға қайта оралу",
    genres: {
      Fantasy: "Фэнтези",
      Romance: "Махаббат",
      "Sci-Fi": "Ғылыми фантастика",
      Classic: "Классика",
      Horror: "Қорқынышты",
      Detective: "Детектив"
    },
    authors: {
      Fantasy: ["Дж. Р. Р. Толкин", "Джордж Р. Р. Мартин", "Брэндон Сандерсон"],
      Romance: ["Джейн Остин", "Николас Спаркс", "Колин Гувер"],
      "Sci-Fi": ["Айзек Азимов", "Филип Дик", "Фрэнк Герберт"],
      Classic: ["Лев Толстой", "Чарльз Диккенс", "Марк Твен"],
      Horror: ["Стивен Кинг", "Ширли Джексон", "Клайв Баркер"],
      Detective: ["Агата Кристи", "Артур Конан Дойл", "Реймонд Чандлер"]
    },
    books: {
      "Дж. Р. Р. Толкин": ["Хоббит", "Сақиналар әміршісі"],
      "Джордж Р. Р. Мартин": ["Тақтар ойыны", "Патшалар шайқасы"],
      "Брэндон Сандерсон": ["Мистборн", "Патшалардың жолы"],
      "Джейн Остин": ["Тәкаппарлық пен көзқарас", "Эмма"],
      "Николас Спаркс": ["Жад дәптері", "Бөтелкедегі хат"],
      "Колин Гувер": ["Бұл бізбен аяқталады", "Верити"],
      "Айзек Азимов": ["Негіз", "Мен, робот"],
      "Филип Дик": ["Юбик", "Андроидтер электр қойларды армандай ма?"],
      "Фрэнк Герберт": ["Дюна", "Дюнаның балалары"],
      "Лев Толстой": ["Соғыс пен бейбітшілік", "Анна Каренина"],
      "Чарльз Диккенс": ["Үлкен үміттер", "Оливер Твист"],
      "Марк Твен": ["Гекльберри Финннің басынан кешкендері", "Том Сойер"],
      "Стивен Кинг": ["Ол", "Жарқырау", "Жануарлар зираты"],
      "Ширли Джексон": ["Холмдағы үйдің елесі", "Біз әрқашан қамалда тұрдық"],
      "Клайв Баркер": ["Қан кітаптары", "Тозаққа байланған жүрек"],
      "Агата Кристи": ["Шығыс экспрессіндегі кісі өлтіру", "Он адам жоқ болды"],
      "Артур Конан Дойл": ["Қызыл бояумен жазылған зерттеу", "Баскервиль иті"],
      "Реймонд Чандлер": ["Үлкен ұйқы", "Сау бол, сүйкімдім"]
    }
  },
  fr: {
    welcomeTitle: "Bienvenue sur notre site !",
    welcomeText:
      "Vous pouvez trouver rapidement un livre à lire grâce à notre site ! D’abord, consultez les succès mondiaux. Sinon, répondez à quelques questions.",
    start: "Commencer",
    genreQuestion: "Quels genres préférez-vous ?",
    authorQuestion: "Quel auteur préférez-vous dans ce genre ?",
    ageQuestion: "Quel âge avez-vous ?",
    resultTitle: "Vous pourriez aimer ces livres :",
    select: "Sélectionner",
    restart: "Retour aux questions",
    genres: {
      Fantasy: "Fantastique",
      Romance: "Romance",
      "Sci-Fi": "Science-fiction",
      Classic: "Classique",
      Horror: "Horreur",
      Detective: "Policier"
    },
    authors: {
      Fantasy: ["J.R.R. Tolkien", "George R.R. Martin", "Brandon Sanderson"],
      Romance: ["Jane Austen", "Nicholas Sparks", "Colleen Hoover"],
      "Sci-Fi": ["Isaac Asimov", "Philip K. Dick", "Frank Herbert"],
      Classic: ["Léon Tolstoï", "Charles Dickens", "Mark Twain"],
      Horror: ["Stephen King", "Shirley Jackson", "Clive Barker"],
      Detective: ["Agatha Christie", "Arthur Conan Doyle", "Raymond Chandler"]
    },
    books: {
      "J.R.R. Tolkien": ["Le Hobbit", "Le Seigneur des anneaux"],
      "George R.R. Martin": ["Le Trône de fer", "La Bataille des rois"],
      "Brandon Sanderson": ["Fils-des-brumes", "La Voie des rois"],
      "Jane Austen": ["Orgueil et préjugés", "Emma"],
      "Nicholas Sparks": ["Les Pages de notre amour", "Une bouteille à la mer"],
      "Colleen Hoover": ["Jamais plus", "Verity"],
      "Isaac Asimov": ["Fondation", "Moi, robot"],
      "Philip K. Dick": [
        "Ubik",
        "Les androïdes rêvent-ils de moutons électriques ?"
      ],
      "Frank Herbert": ["Dune", "Les Enfants de Dune"],
      "Léon Tolstoï": ["Guerre et Paix", "Anna Karénine"],
      "Charles Dickens": ["De grandes espérances", "Oliver Twist"],
      "Mark Twain": ["Les Aventures de Huckleberry Finn", "Tom Sawyer"],
      "Stephen King": ["Ça", "Shining", "Simetierre"],
      "Shirley Jackson": [
        "La Maison hantée",
        "Nous avons toujours vécu au château"
      ],
      "Clive Barker": ["Livres de sang", "Le Cœur perdu des damnés"],
      "Agatha Christie": ["Le Crime de l'Orient-Express", "Dix petits nègres"],
      "Arthur Conan Doyle": ["Une étude en rouge", "Le Chien des Baskerville"],
      "Raymond Chandler": ["Le Grand Sommeil", "Adieu, ma jolie"]
    }
  },
  es: {
    welcomeTitle: "¡Bienvenido a nuestro sitio!",
    welcomeText:
      "Puedes encontrar rápidamente un libro para leer usando nuestro sitio web. Primero, mira los éxitos mundiales. Si no lo encuentras, responde algunas preguntas.",
    start: "Empezar",
    genreQuestion: "¿Qué géneros prefieres?",
    authorQuestion: "¿Qué autor prefieres en este género?",
    ageQuestion: "¿Cuántos años tienes?",
    resultTitle: "Te podrían gustar estos libros:",
    select: "Seleccionar",
    restart: "Volver a las preguntas",
    genres: {
      Fantasy: "Fantasía",
      Romance: "Romance",
      "Sci-Fi": "Ciencia ficción",
      Classic: "Clásico",
      Horror: "Terror",
      Detective: "Detectivesco"
    },
    authors: {
      Fantasy: ["J.R.R. Tolkien", "George R.R. Martin", "Brandon Sanderson"],
      Romance: ["Jane Austen", "Nicholas Sparks", "Colleen Hoover"],
      "Sci-Fi": ["Isaac Asimov", "Philip K. Dick", "Frank Herbert"],
      Classic: ["León Tolstói", "Charles Dickens", "Mark Twain"],
      Horror: ["Stephen King", "Shirley Jackson", "Clive Barker"],
      Detective: ["Agatha Christie", "Arthur Conan Doyle", "Raymond Chandler"]
    },
    books: {
      "J.R.R. Tolkien": ["El Hobbit", "El Señor de los Anillos"],
      "George R.R. Martin": ["Juego de tronos", "Choque de reyes"],
      "Brandon Sanderson": ["Nacidos de la bruma", "El Camino de los Reyes"],
      "Jane Austen": ["Orgullo y prejuicio", "Emma"],
      "Nicholas Sparks": ["El diario de Noah", "Un paseo para recordar"],
      "Colleen Hoover": ["Romper el círculo", "Verity"],
      "Isaac Asimov": ["Fundación", "Yo, robot"],
      "Philip K. Dick": [
        "Ubik",
        "¿Sueñan los androides con ovejas eléctricas?"
      ],
      "Frank Herbert": ["Dune", "Los hijos de Dune"],
      "León Tolstói": ["Guerra y paz", "Ana Karenina"],
      "Charles Dickens": ["Grandes esperanzas", "Oliver Twist"],
      "Mark Twain": ["Las aventuras de Huckleberry Finn", "Tom Sawyer"],
      "Stephen King": ["It", "El resplandor", "Cementerio de animales"],
      "Shirley Jackson": [
        "La maldición de Hill House",
        "Siempre hemos vivido en el castillo"
      ],
      "Clive Barker": ["Libros de sangre", "El corazón condenado"],
      "Agatha Christie": [
        "Asesinato en el Orient Express",
        "Y no quedó ninguno"
      ],
      "Arthur Conan Doyle": [
        "Estudio en escarlata",
        "El sabueso de los Baskerville"
      ],
      "Raymond Chandler": ["El sueño eterno", "Adiós, muñeca"]
    }
  },
  zh: {
    welcomeTitle: "欢迎来到我们的网站！",
    welcomeText:
      "您可以通过我们的网站快速找到想读的书！先看看世界畅销书。如果找不到，再回答几个问题。",
    start: "开始",
    genreQuestion: "您喜欢什么类型的书？",
    authorQuestion: "您在这个类型中喜欢哪位作者？",
    ageQuestion: "您几岁？",
    resultTitle: "您可能喜欢以下书籍：",
    select: "选择",
    restart: "返回问题",
    genres: {
      Fantasy: "奇幻",
      Romance: "浪漫",
      "Sci-Fi": "科幻",
      Classic: "经典",
      Horror: "恐怖",
      Detective: "侦探"
    },
    authors: {
      Fantasy: ["J.R.R. 托尔金", "乔治·R·R·马丁", "布兰登·桑德森"],
      Romance: ["简·奥斯汀", "尼古拉斯·斯帕克斯", "科琳·胡佛"],
      "Sci-Fi": ["艾萨克·阿西莫夫", "菲利普·K·迪克", "弗兰克·赫伯特"],
      Classic: ["列夫·托尔斯泰", "查尔斯·狄更斯", "马克·吐温"],
      Horror: ["洛夫克拉夫特", "雪莉·杰克逊", "克莱夫·巴克"],
      Detective: ["阿加莎·克里斯蒂", "阿瑟·柯南·道尔", "雷蒙德·钱德勒"]
    },
    books: {
      "J.R.R. 托尔金": ["霍比特人", "魔戒"],
      "乔治·R·R·马丁": ["权力的游戏", "列王的纷争"],
      "布兰登·桑德森": ["迷雾之子", "王者之路"],
      "简·奥斯汀": ["傲慢与偏见", "艾玛"],
      "尼古拉斯·斯帕克斯": ["恋恋笔记本", "瓶中信"],
      "科琳·胡佛": ["我们终将告别", "真相"],
      "艾萨克·阿西莫夫": ["基地", "我，机器人"],
      "菲利普·K·迪克": ["尤比克", "仿生人会梦见电子羊吗？"],
      "弗兰克·赫伯特": ["沙丘", "沙丘之子"],
      "列夫·托尔斯泰": ["战争与和平", "安娜·卡列尼娜"],
      "查尔斯·狄更斯": ["远大前程", "雾都孤儿"],
      "马克·吐温": ["哈克贝利·费恩历险记", "汤姆·索亚历险记"],
      洛夫克拉夫特: ["它", "闪灵", "宠物坟场"],
      "雪莉·杰克逊": ["鬼入侵", "我们一直住在城堡里"],
      "克莱夫·巴克": ["血之书", "地狱之心"],
      "阿加莎·克里斯蒂": ["东方快车谋杀案", "无人生还"],
      "阿瑟·柯南·道尔": ["血字的研究", "巴斯克维尔的猎犬"],
      "雷蒙德·钱德勒": ["长眠不醒", "再见，吾爱"]
    }
  }
};

function hideAllSections() {
  document
    .querySelectorAll(".section")
    .forEach((sec) => sec.classList.remove("active"));
}

function showWorldHits() {
  const container = document.getElementById("worldHits");
  const hits = [
    "It (Stephen King): A shape-shifting creature feeds on fear.",
    "Invincible (Robert Kirkman): Teen hero faces harsh truths.",
    "The Sacrifice (Valve): Heroes from Valve games battle danger."
  ];
  container.innerHTML =
    "<h3>World Hits:</h3>" + hits.map((hit) => `<p>${hit}</p>`).join("");
}

const ageTranslations = {
  en: ["0-12", "19-30", "31+"],
  ru: ["0-12", "19-30", "31+"],
  kz: ["0-12", "19-30", "31+"],
  fr: ["0-12", "19-30", "31+"],
  es: ["0-12", "19-30", "31+"],
  zh: ["0-12", "19-30", "31+"]
};

function startQuestions() {
  hideAllSections();
  document.getElementById("genreSection").classList.add("active");
}

function populateGenres() {
  const container = document.getElementById("genreOptions");
  container.innerHTML = "";
  genresList.forEach((genre) => {
    const btn = document.createElement("button");
    btn.className = "btn-" + genre.toLowerCase().replace(" ", "");
    btn.textContent = translations[currentLanguage].genres[genre];
    btn.onclick = () => selectGenre(genre, btn);
    container.appendChild(btn);
  });
}

function populateAuthors() {
  const container = document.getElementById("authorOptions");
  container.innerHTML = "";
  const authorList = translations[currentLanguage].authors[selectedGenre];
  authorList.forEach((author) => {
    const btn = document.createElement("button");
    btn.textContent = author;
    btn.onclick = () => selectAuthor(author, btn);
    container.appendChild(btn);
  });
}

function populateAges() {
  const container = document.getElementById("ageOptions");
  container.innerHTML = "";
  ageTranslations[currentLanguage].forEach((age) => {
    const btn = document.createElement("button");
    btn.textContent = age;
    btn.onclick = () => selectAge(age, btn);
    container.appendChild(btn);
  });
}

function selectGenre(genre, btn) {
  selectedGenre = genre;
  document
    .querySelectorAll("#genreOptions button")
    .forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
  document.getElementById("genreSelectBtn").style.display = "block";
}

function confirmGenre() {
  hideAllSections();
  document.getElementById("authorSection").classList.add("active");
  populateAuthors();
}

function selectAuthor(author, btn) {
  selectedAuthor = author;
  document
    .querySelectorAll("#authorOptions button")
    .forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
  document.getElementById("authorSelectBtn").style.display = "block";
}

function confirmAuthor() {
  hideAllSections();
  document.getElementById("ageSection").classList.add("active");
  populateAges();
}

function selectAge(age, btn) {
  selectedAge = age;
  document
    .querySelectorAll("#ageOptions button")
    .forEach((b) => b.classList.remove("selected"));
  btn.classList.add("selected");
  document.getElementById("ageSelectBtn").style.display = "block";
}

function confirmAge() {
  hideAllSections();
  document.getElementById("resultSection").classList.add("active");
  const books = translations[currentLanguage].books[selectedAuthor] || [
    "No recommendations found."
  ];
  document.getElementById("recommendations").innerHTML = books
    .map((book) => `<p>${book}</p>`)
    .join("");
}

function changeLanguage(lang) {
  currentLanguage = lang;
  const t = translations[lang];
  document.getElementById("welcomeTitle").textContent = t.welcomeTitle;
  document.getElementById("welcomeText").textContent = t.welcomeText;
  document.getElementById("startBtn").textContent = t.start;
  document.getElementById("genreQuestion").textContent = t.genreQuestion;
  document.getElementById("authorQuestion").textContent = t.authorQuestion;
  document.getElementById("ageQuestion").textContent = t.ageQuestion;
  document.getElementById("resultTitle").textContent = t.resultTitle;
  document.getElementById("genreSelectBtn").textContent = t.select;
  document.getElementById("authorSelectBtn").textContent = t.select;
  document.getElementById("ageSelectBtn").textContent = t.select;
  document.getElementById("restartBtn").textContent = t.restart;
  populateGenres();
  if (selectedGenre) populateAuthors();
  if (selectedAuthor) populateAges();
}

function restart() {
  selectedGenre = "";
  selectedAuthor = "";
  selectedAge = "";
  hideAllSections();
  document.getElementById("genreSection").classList.add("active");
  document.getElementById("genreSelectBtn").style.display = "none";
  document.getElementById("authorSelectBtn").style.display = "none";
  document.getElementById("ageSelectBtn").style.display = "none";
}

showWorldHits();
populateGenres();

const books = {
  en: [
    { title: "1984", author: "George Orwell" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" },
    { title: "Brave New World", author: "Aldous Huxley" }
  ],
  ru: [
    { title: "Мастер и Маргарита", author: "Михаил Булгаков" },
    { title: "Преступление и наказание", author: "Фёдор Достоевский" },
    { title: "Война и мир", author: "Лев Толстой" }
  ]
};

const bookList = document.getElementById("book-list");
const languageSelect = document.getElementById("language-select");
const themeToggle = document.getElementById("theme-toggle");
const randomBtn = document.getElementById("random-btn");
const randomBook = document.getElementById("random-book");

function renderBooks(language) {
  bookList.innerHTML = "";
  books[language].forEach((book) => {
    const div = document.createElement("div");
    div.className = "book-card";
    div.innerHTML = `<strong>${book.title}</strong><br><em>${book.author}</em>`;
    bookList.appendChild(div);
  });
}

function showRandomBook() {
  const lang = languageSelect.value;
  const book = books[lang][Math.floor(Math.random() * books[lang].length)];
  randomBook.textContent = `"${book.title}" — ${book.author}`;
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  // Save theme preference
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-mode") ? "dark" : "light"
  );
}

// Load theme preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Event listeners
languageSelect.addEventListener("change", () => {
  renderBooks(languageSelect.value);
  randomBook.textContent = "";
});

themeToggle.addEventListener("click", toggleTheme);
randomBtn.addEventListener("click", showRandomBook);

// Initial render
renderBooks(languageSelect.value);
