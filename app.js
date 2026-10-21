// Arystan Motion портфолиосы: үш тіл (kk/ru/en), жұмыстар мен код жобаларының тізімі.
// Видеолар media/-да: motion/tools/site_media.sh (Freelance Ops репосында) жасайды.

const UI = {
  kk: {
    nav_works: "Жұмыстар", nav_prices: "Баға", nav_code: "Бот пен сайт", nav_contact: "Байланыс",
    hero_eyebrow: "Монтаж · анимация · моушн",
    hero_title: "Идеяңыз қозғалысқа келсін",
    hero_lead: "Reels пен эксперттік видео монтажы, логотип анимациясы, моушн видео. Бизнеске, блогерге, эксперттерге.",
    cta_wa: "WhatsApp-қа жазу", cta_tg: "Telegram-ға жазу", cta_channel: "Арна · @arystan_motion",
    hero_note: "Алдымен «төленбеген» деген жазуы бар нұсқаны көресіз, ұнаса төлейсіз, сосын таза файл.",
    works_title: "Жұмыстар", works_sub: "Видеоны басыңыз — дыбысымен ойнайды.",
    sec_reels: "Reels және тік видео", sec_logo: "Логотип анимациясы", sec_motion: "Моушн және түсіндірме видео",
    prices_title: "Баға",
    p1_name: "Reels / эксперттік видео монтажы", p1_price: "3 000 ₸-ден",
    p1_text: "Instagram, TikTok, YouTube Shorts үшін: кесу, субтитр, музыка, эффект.",
    p2_name: "Reels пакеті, 10 ролик", p2_price: "25 000 ₸", p2_text: "Бір роликке 2 500 ₸ шығады, бөлек тапсырыстан арзан.",
    p3_name: "Логотип анимациясы", p3_price: "10 000 ₸-ден",
    p3_text: "6–7 секунд, дыбысымен. Reels, жарнама, видеоның басы мен соңы үшін.",
    p4_name: "Моушн видео, 1 минут", p4_price: "15 000 ₸-ден",
    p4_text: "Мәтін, сурет, логотип қозғалатын видео: жарнама, түсіндіру, презентация.",
    p5_name: "Telegram бот, сайт", p5_price: "тапсырмаға қарай",
    p5_text: "Не керек екенін жазыңыз — мерзімі мен бағасын нақты айтамын.",
    step1: "Не керек екенін жазасыз, материал жібересіз",
    step2: "Баға мен мерзімді келісеміз",
    step3: "«Төленбеген» деген жазуы бар нұсқаны көресіз, түзету айтасыз",
    step4: "Ұнаса төлейсіз, сосын таза файл",
    code_title: "Бот пен сайт",
    code_sub: "Қайталанатын жұмысты бағдарламаға беремін. Әр жүйе автотестпен және нақты өлшеммен тапсырылады.",
    contact_title: "Жазыңыз", contact_sub: "Қазақша, орысша, ағылшынша. Жауап беру уақыты: 09:00–22:00.",
    copyright: "© Arystan Motion. Автордың жазбаша келісімінсіз видеоларды көшіруге және пайдалануға болмайды.",
    stack: "Технологиялар",
    page_title: "Arystan Motion — монтаж және анимация",
  },
  ru: {
    nav_works: "Работы", nav_prices: "Цены", nav_code: "Боты и сайты", nav_contact: "Контакты",
    hero_eyebrow: "Монтаж · анимация · моушн",
    hero_title: "Ваша идея — в движении",
    hero_lead: "Монтаж reels и экспертных видео, анимация логотипа, моушн-видео. Для бизнеса, блогеров и экспертов.",
    cta_wa: "Написать в WhatsApp", cta_tg: "Написать в Telegram", cta_channel: "Канал · @arystan_motion",
    hero_note: "Сначала вы видите версию с надписью «не оплачено», если нравится — оплачиваете и получаете чистый файл.",
    works_title: "Работы", works_sub: "Нажмите на видео — оно включится со звуком.",
    sec_reels: "Reels и вертикальные видео", sec_logo: "Анимация логотипа", sec_motion: "Моушн и объясняющие видео",
    prices_title: "Цены",
    p1_name: "Монтаж reels / экспертных видео", p1_price: "от 3 000 ₸",
    p1_text: "Для Instagram, TikTok, YouTube Shorts: нарезка, субтитры, музыка, эффекты.",
    p2_name: "Пакет reels, 10 роликов", p2_price: "25 000 ₸", p2_text: "Выходит 2 500 ₸ за ролик — дешевле, чем по одному.",
    p3_name: "Анимация логотипа", p3_price: "от 10 000 ₸",
    p3_text: "6–7 секунд, со звуком. Для reels, рекламы, начала и конца видео.",
    p4_name: "Моушн-видео, 1 минута", p4_price: "от 15 000 ₸",
    p4_text: "Анимированные текст, графика, логотип: реклама, объяснение, презентация.",
    p5_name: "Telegram-бот, сайт", p5_price: "по задаче",
    p5_text: "Напишите, что нужно, — назову точные сроки и цену.",
    step1: "Пишете, что нужно, присылаете материалы",
    step2: "Согласуем цену и срок",
    step3: "Смотрите версию с надписью «не оплачено», говорите правки",
    step4: "Если нравится — оплачиваете и получаете чистый файл",
    code_title: "Боты и сайты",
    code_sub: "Передаю повторяющуюся работу программе. Каждая система сдаётся с автотестами и измеренным результатом.",
    contact_title: "Напишите", contact_sub: "На казахском, русском, английском. Отвечаю с 09:00 до 22:00.",
    copyright: "© Arystan Motion. Копирование и использование видео без письменного согласия автора запрещено.",
    stack: "Технологии",
    page_title: "Arystan Motion — монтаж и анимация",
  },
  en: {
    nav_works: "Work", nav_prices: "Prices", nav_code: "Bots & sites", nav_contact: "Contact",
    hero_eyebrow: "Editing · animation · motion",
    hero_title: "Put your idea in motion",
    hero_lead: "Reels and talking-head video editing, logo animation, motion videos. For businesses, creators and experts.",
    cta_wa: "Message on WhatsApp", cta_tg: "Message on Telegram", cta_channel: "Channel · @arystan_motion",
    hero_note: "You first see a version marked “unpaid”; if you like it, you pay and get the clean file.",
    works_title: "Work", works_sub: "Tap a video to play it with sound.",
    sec_reels: "Reels and vertical video", sec_logo: "Logo animation", sec_motion: "Motion and explainer videos",
    prices_title: "Prices",
    p1_name: "Reels / talking-head video editing", p1_price: "from 3,000 ₸",
    p1_text: "For Instagram, TikTok, YouTube Shorts: cuts, subtitles, music, effects.",
    p2_name: "Reels pack, 10 videos", p2_price: "25,000 ₸", p2_text: "2,500 ₸ per video — cheaper than ordering one by one.",
    p3_name: "Logo animation", p3_price: "from 10,000 ₸",
    p3_text: "6–7 seconds with sound. For reels, ads, video intros and outros.",
    p4_name: "Motion video, 1 minute", p4_price: "from 15,000 ₸",
    p4_text: "Animated text, graphics and logo: ads, explainers, presentations.",
    p5_name: "Telegram bot, website", p5_price: "per task",
    p5_text: "Tell me what you need — I’ll give an exact deadline and price.",
    step1: "You tell me what you need and send the materials",
    step2: "We agree on price and deadline",
    step3: "You review a version marked “unpaid” and request changes",
    step4: "If you like it, you pay and get the clean file",
    code_title: "Bots & sites",
    code_sub: "I hand repetitive work over to software. Every system ships with automated tests and measured results.",
    contact_title: "Get in touch", contact_sub: "Kazakh, Russian or English. I reply 09:00–22:00 (Astana time).",
    copyright: "© Arystan Motion. Copying or using the videos without the author’s written consent is prohibited.",
    stack: "Stack",
    page_title: "Arystan Motion — video editing & animation",
  },
};

// Жұмыстар: id → media/<id>.mp4 және .jpg. Реті — бөлім ішіндегі көрсету реті.
const WORKS = [
  { id: "reels_promo", group: "reels",
    kk: ["Reels промо", "15 секундтық тік промо, әуені осы роликке жасалған."],
    ru: ["Промо reels", "Вертикальное промо на 15 секунд, музыка сделана под этот ролик."],
    en: ["Reels promo", "A 15-second vertical promo with music made for this video."] },
  { id: "roadmap_summit", group: "reels",
    kk: ["Roadmap Summit", "Нақты жобаның жол картасы шыңға көтерілетін белестер болып ашылады."],
    ru: ["Roadmap Summit", "Дорожная карта реального проекта раскрывается как подъём к вершине."],
    en: ["Roadmap Summit", "A real project’s roadmap unfolds as a climb to the summit."] },
  { id: "tenge_pay", group: "logo",
    kk: ["Tenge Pay", "Галактикадай айналған бөлшектер ₸ эмблемасына жиналады."],
    ru: ["Tenge Pay", "Частицы кружатся галактикой и собираются в эмблему ₸."],
    en: ["Tenge Pay", "Particles swirl like a galaxy and form the ₸ emblem."] },
  { id: "astana_residence", group: "logo",
    kk: ["Astana Residence", "Есіл сызығынан алтын мұнаралар көтеріліп, арка сызылады."],
    ru: ["Astana Residence", "Из линии Есиля поднимаются золотые башни, прорисовывается арка."],
    en: ["Astana Residence", "Golden towers rise from the river line and an arch is drawn."] },
  { id: "code_dala", group: "logo",
    kk: ["Code Dala", "Терминал командасы пикселдерге шашылып, IT мектебінің эмблемасына жиналады."],
    ru: ["Code Dala", "Команда терминала рассыпается на пиксели и собирается в эмблему IT-школы."],
    en: ["Code Dala", "A terminal command glitches into pixels and becomes an IT school emblem."] },
  { id: "ornek", group: "logo",
    kk: ["Өрнек", "Қошқар мүйіз өрнегі сызылып, кесте таспасына айналады."],
    ru: ["Өрнек", "Орнамент «қошқар мүйіз» прорисовывается и превращается в ленту вышивки."],
    en: ["Ornek", "A Kazakh ram-horn ornament is drawn and turns into an embroidery ribbon."] },
  { id: "orderscout_logo", group: "logo",
    kk: ["OrderScout", "Радар чаттарды шолып, тапсырыс хабарын табады да, лупаға айналады."],
    ru: ["OrderScout", "Радар сканирует чаты, находит заказ и превращается в лупу."],
    en: ["OrderScout", "A radar sweeps chats, finds an order and turns into a magnifier."] },
  { id: "kinetic_type", group: "motion",
    kk: ["Мәтін анимациясы", "Әріптер жиналып, сөздер әуен ырғағымен шығады."],
    ru: ["Анимация текста", "Буквы собираются, слова появляются в ритм музыки."],
    en: ["Kinetic typography", "Letters assemble and words land on the beat."] },
  { id: "p2p_trader", group: "motion",
    kk: ["P2P Trader", "Нарық → сигнал → ордер: төрт биржаның ағыны сүзгіден өтіп, ең тиімдісі Telegram хабарына айналады. Сандар ойдан құрастырылған."],
    ru: ["P2P Trader", "Рынок → сигнал → ордер: потоки четырёх бирж проходят фильтр, лучшее предложение становится сообщением в Telegram. Цифры условные."],
    en: ["P2P Trader", "Market → signal → order: four exchange feeds are filtered and the best offer becomes a Telegram message. Numbers are illustrative."] },
  { id: "pcg_intro", group: "motion",
    kk: ["Personal Cognitive Graph — интро", "Питч презентациясының интросы: мыңдаған хабар бір графқа жиналады."],
    ru: ["Personal Cognitive Graph — интро", "Интро для питч-презентации: тысячи сообщений собираются в один граф."],
    en: ["Personal Cognitive Graph — intro", "A pitch deck intro: thousands of messages come together in one graph."] },
  { id: "important_links", group: "motion",
    kk: ["Important links", "Telegram-нан Google Sheets-ке: сілтеме жібересің — өзі жіктеледі."],
    ru: ["Important links", "Из Telegram в Google Sheets: отправляешь ссылку — она сама раскладывается по категориям."],
    en: ["Important links", "From Telegram to Google Sheets: send a link and it sorts itself."] },
  { id: "roadmap_flow", group: "motion",
    kk: ["Roadmap Flow", "Жол картасы үш нақты жобада: камера скриншоттар арасында жүріп, тапсырмалар қабат-қабат шығады."],
    ru: ["Roadmap Flow", "Дорожная карта на трёх реальных проектах: камера движется между скриншотами, задачи появляются слоями."],
    en: ["Roadmap Flow", "A roadmap template across three real projects: the camera glides between screens as tasks stack up."] },
  { id: "windows_cleanup", group: "motion",
    kk: ["The 2.5 MB problem", "Windows тазалау жобасының видеосы. Бірде-бір сан ойдан алынбаған."],
    ru: ["The 2.5 MB problem", "Видео о проекте очистки Windows. Ни одной выдуманной цифры."],
    en: ["The 2.5 MB problem", "A video about a Windows cleanup case. Every number is real."] },
];

// Код жобалары: мәтіні portfolio/content.py-дан (Telegraph портфолиосы), сандары сонда тексерілген.
const PROJECTS = [
  { stack: "Python, Telethon, SQLite",
    kk: ["Telegram чаттарынан тапсырыс табатын көмекші", "Топтағы жаңа хабарды сүзіп, тапсырыс болса иесіне батырмалы хабар жібереді; растаған соң клиентке жеке хат кетеді.", "378 автотест"],
    ru: ["Помощник для поиска заказов в Telegram-чатах", "Фильтрует новые сообщения в группе и, если это заказ, присылает владельцу сообщение с кнопками; после подтверждения клиенту уходит личное сообщение.", "378 автотестов"],
    en: ["Order finder for Telegram chats", "Filters new group messages and, when it is an order, sends the owner a message with buttons; after confirmation a private message goes to the client.", "378 automated tests"] },
  { stack: "Python, Playwright, Bybit/Binance API, Telegram Bot API, SQLite",
    kk: ["P2P автосауда жүйесі", "Bybit, Binance, Telegram Wallet және CryptoBot P2P нарықтарын бір жерде бақылап, тиімді ұсынысқа ордерді автоматты ашатын жүйе.", "1 330 автотест · 215 commit"],
    ru: ["Система автоторговли на P2P", "Отслеживает P2P-рынки Bybit, Binance, Telegram Wallet и CryptoBot в одном месте и автоматически открывает ордер на выгодное предложение.", "1 330 автотестов · 215 коммитов"],
    en: ["P2P auto-trading system", "Monitors the P2P markets of Bybit, Binance, Telegram Wallet and CryptoBot in one place and automatically opens an order on a profitable offer.", "1,330 automated tests · 215 commits"] },
  { stack: "Python, Telegram Bot API, Linux systemd", link: "https://t.me/AstanaTomorrow",
    kk: ["Astana Tomorrow — ертеңгі іс-шаралар арнасы", "Астанада ертең болатын пайдалы іс-шараларды 37 дереккөзден жинап, автоматты тексеріп, Telegram арнаға күн сайын жариялайды.", "69 автотест"],
    ru: ["Astana Tomorrow — канал событий на завтра", "Каждый день собирает полезные события Астаны на завтра из 37 источников, автоматически проверяет их и публикует в Telegram-канал.", "69 автотестов"],
    en: ["Astana Tomorrow — tomorrow’s events channel", "Every day collects useful events happening in Astana tomorrow from 37 sources, checks them automatically and publishes them to a Telegram channel.", "69 automated tests"] },
  { stack: "Google Apps Script, Telegram Bot API, Google Sheets",
    kk: ["Important links — Telegram сілтеме жинағыш", "Telegram-ға сілтеме жібересің — бот кестеге жаңа жол қосады: бет тақырыбын өзі тартып алады, күн-уақытын қояды, #hashtag-ты санатқа айналдырады.", "0 сервер · 0 ай сайынғы төлем"],
    ru: ["Important links — сборщик ссылок из Telegram", "Отправляешь ссылку в Telegram — бот добавляет строку в таблицу: сам подтягивает заголовок страницы, ставит дату и время, превращает #hashtag в категорию.", "0 серверов · 0 ежемесячной платы"],
    en: ["Important links — Telegram link collector", "Send a link to Telegram and the bot adds a row to a sheet: fetches the page title, stamps the date and turns a #hashtag into a category.", "0 servers · 0 monthly fees"] },
  { stack: "TypeScript, React + Vite, Node.js (Fastify), PostgreSQL",
    kk: ["Life Calendar — апталық жоспарлау веб-қосымшасы", "Өмірді апталармен көрсететін күнтізбе және жоспарлаушы: аяқталмаған тапсырма келесі аптаға өзі көшеді.", "110 автотест · 80 commit"],
    ru: ["Life Calendar — веб-приложение для планирования", "Календарь жизни по неделям и планировщик: незавершённые задачи сами переходят на следующую неделю.", "110 автотестов · 80 коммитов"],
    en: ["Life Calendar — weekly planning web app", "A life calendar in weeks and a task planner: unfinished tasks move to the next week automatically.", "110 automated tests · 80 commits"] },
  { stack: "Python, React + TypeScript, Graphology, Web Worker",
    kk: ["Personal Cognitive Graph — жеке білім графы", "ChatGPT чат мұрағатын тақырыптар мен байланыстардан тұратын интерактивті графқа айналдырады. Дерек компьютерден шықпайды.", "443 автотест"],
    ru: ["Personal Cognitive Graph — личный граф знаний", "Превращает архив чатов ChatGPT в интерактивный граф тем и связей. Данные не покидают компьютер.", "443 автотеста"],
    en: ["Personal Cognitive Graph", "Turns a ChatGPT chat archive into an interactive graph of topics and connections. Data never leaves the computer.", "443 automated tests"] },
  { stack: "HTML, CSS, JavaScript, JSON, Node.js",
    kk: ["Roadmap Flow — жоспарлау үлгісі", "Кезеңдер, тапсырмалар, мерзімдер және орындалу барысы бір экранда. Клиент өз жоспарын өзі жүргізе алады.", "3 нақты жоба · 5 сүзгі"],
    ru: ["Roadmap Flow — шаблон планирования", "Этапы, задачи, сроки и прогресс на одном экране. Клиент может сам вести свой план.", "3 реальных проекта · 5 фильтров"],
    en: ["Roadmap Flow — planning template", "Stages, tasks, deadlines and progress on one screen. Clients can run their own plan.", "3 real projects · 5 filters"] },
  { stack: "Python, PyMuPDF",
    kk: ["Кредит ковенанттарын автоматты тексеру (Halyk Bank челленджі)", "Ретсіз қаржы құжаттарын оқып, корпоративтік кредиттердің ковенанттары бұзылғанын анықтайды. Ашық датасетте балл 0.9722.", "264 детерминді тест"],
    ru: ["Автопроверка кредитных ковенантов (челлендж Halyk Bank)", "Читает «грязные» финансовые документы и определяет, нарушены ли ковенанты по корпоративным кредитам. Балл 0.9722 на открытом датасете.", "264 детерминированных теста"],
    en: ["Automated loan covenant checks (Halyk Bank challenge)", "Reads messy financial documents and determines whether corporate loan covenants were breached. Score 0.9722 on the open dataset.", "264 deterministic tests"] },
];

const LANGS = ["kk", "ru", "en"];
let lang = "kk";

function pickLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (LANGS.includes(saved)) return saved;
  } catch (e) { /* жеке терезеде localStorage болмауы мүмкін */ }
  // Клиенттердің көбі — Қазақстан: әдепкі қазақша, орысша браузерге орысша.
  return (navigator.language || "").startsWith("ru") ? "ru" : "kk";
}

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}

function play(frame, id) {
  if (frame.querySelector("video")) return;
  const v = document.createElement("video");
  v.src = `media/${id}.mp4`;
  v.poster = `media/${id}.jpg`;
  v.controls = true;
  v.playsInline = true;
  v.autoplay = true;
  frame.replaceChildren(v);
  frame.style.cursor = "default";
  // Бір уақытта бір видео дыбыспен ойнасын.
  v.addEventListener("play", () => {
    document.querySelectorAll(".work video").forEach((o) => { if (o !== v) o.pause(); });
  });
}

function renderWorks() {
  document.querySelectorAll("[data-group]").forEach((g) => g.replaceChildren());
  for (const w of WORKS) {
    const [title, text] = w[lang];
    const fig = el("figure", "work");
    const frame = el("div", "frame");
    frame.tabIndex = 0;
    frame.setAttribute("role", "button");
    frame.setAttribute("aria-label", title);
    const img = el("img");
    img.src = `media/${w.id}.jpg`;
    img.alt = title;
    img.loading = "lazy";
    frame.append(img, el("span", "play"));
    frame.addEventListener("click", () => play(frame, w.id));
    frame.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); play(frame, w.id); } });
    const cap = el("figcaption");
    cap.append(el("b", null, title), el("span", null, text));
    fig.append(frame, cap);
    document.querySelector(`[data-group="${w.group}"]`).append(fig);
  }
}

function renderProjects() {
  const box = document.getElementById("projects");
  box.replaceChildren();
  for (const p of PROJECTS) {
    const [name, summary, facts] = p[lang];
    const card = el("article", "project");
    card.append(el("h3", null, name), el("p", null, summary));
    if (p.link) {
      const a = el("a", null, p.link.replace("https://", ""));
      a.href = p.link; a.target = "_blank"; a.rel = "noopener";
      const line = el("p"); line.append(a); card.append(line);
    }
    card.append(el("p", "facts", facts), el("p", "stack", `${UI[lang].stack}: ${p.stack}`));
    box.append(card);
  }
}

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.title = UI[l].page_title;
  document.querySelectorAll("[data-i18n]").forEach((n) => {
    const t = UI[l][n.dataset.i18n];
    if (t != null) n.textContent = t;
  });
  document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === l)));
  try { localStorage.setItem("lang", l); } catch (e) { /* елемейміз */ }
  renderWorks();
  renderProjects();
}

document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
setLang(pickLang());
