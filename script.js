/* ══════════════════════════════════════════════════════════
   Selection Translate AI — Subscription page script
   ══════════════════════════════════════════════════════════ */

// ── i18n ──────────────────────────────────────────────────
const T = {
  ru: {
    nav_alt:      "Без лимитов",
    nav_guide:    "API ключи",
    nav_privacy:  "Приватность",
    nav_howto:    "Как использовать",
    howto_tag:    "Инструкция",
    howto_title:  "Выдели текст — получи перевод",
    howto_sub:    "Расширение работает незаметно на любом сайте. Никакой настройки — просто выделяй текст.",
    howto_s1_title: "Выдели текст на странице",
    howto_s1_text:  "На любом сайте выдели слово, фразу или абзац мышью. Минимум 2 символа, максимум 5000. Работает на всех языках.",
    howto_s2_title: "Нажми кнопку перевода",
    howto_s2_text:  "Рядом с выделением появится фиолетовая кнопка с буквой «Т». Наведи — начнётся предзагрузка перевода. Нажми — откроется попап с результатом.",
    howto_s3_title: "Читай перевод",
    howto_s3_text:  "Перевод появится в небольшом всплывающем окне. Кнопка копирования — скопировать результат одним кликом. Закрыть — крестиком или кликом за пределами попапа.",
    howto_s4_title: "Добавь в словарь (по желанию)",
    howto_s4_text:  "В попапе есть кнопка «+» — она сохраняет пару оригинал → перевод в личный словарь. Словарь открывается боковой панелью справа.",
    howto_instant_title: "Мгновенный перевод",
    howto_instant_text:  "Включи «Переводить сразу при выделении» в попапе расширения. Перевод начнётся автоматически сразу после того, как отпустишь кнопку мыши — без нажатия кнопки.",
    howto_dict_title: "Личный словарь",
    howto_dict_text:  "Собирай переводы в словарь прямо во время чтения. Панель открывается сбоку, ширину можно регулировать перетаскиванием. Экспорт в CSV и Excel — одной кнопкой.",
    howto_hotkeys_title: "Горячие клавиши",
    howto_hk_toggle:    "Включить / выключить расширение",
    howto_hk_dict:      "Открыть / закрыть словарь",
    howto_hk_close:     "Закрыть попап перевода",
    howto_settings_title: "Настройки",
    howto_settings_text:  "Кликни на иконку расширения в панели браузера: переключатель вкл/выкл, язык перевода, язык интерфейса (🇷🇺🇬🇧🇪🇸🇨🇳), источник API — публичный сервер или свой ключ.",
    badge:        "Подписка скоро",
    hero_title:   "Без лимитов\nуже сегодня",
    hero_sub:     "Подключите свой API ключ от OpenAI, Anthropic, Google или xAI — и переводите без ограничений. Подписка с ещё более простой настройкой уже в разработке.",
    hero_cta:     "Как подключить →",
    alt_tag:      "Три варианта использования",
    alt_title:    "Выбери удобный режим",
    alt_sub:      "Расширение работает бесплатно сразу после установки. Нужно больше — оформи подписку или подключи свой API ключ.",
    feat1_title:  "Бесплатно — прямо сейчас",
    feat1_text:   "30 переводов в день уже включены. Никакой настройки — просто установи расширение и начни переводить. Бесплатно и без регистрации.",
    feat2_title:  "Подписка",
    feat2_text:   "Больше переводов в день за символическую плату. Помогает нам содержать проект и серверы. Скоро в продаже.",
    feat3_title:  "Свой API ключ",
    feat3_text:   "Подключи ключ OpenAI, Anthropic, Google или xAI — и переводи без каких-либо ограничений расширения. Для тех, кто предпочитает полный контроль.",
    guide_tag:    "Пошаговая инструкция",
    guide_title:  "Как получить API ключ",
    guide_sub:    "Выбери провайдера и следуй инструкции. Это займёт всего пару минут.",
    privacy_tag:  "Приватность",
    privacy_title:"Твои ключи — только твои",
    privacy_text: "Мы серьёзно относимся к вашей приватности. API ключи никогда не покидают ваш браузер.",
    privacy_li1:  "🔒 API ключ хранится в chrome.storage.local — исключительно в вашем браузере, не на сервере",
    privacy_li2:  "🚫 Ключ никогда не отправляется на наш сервер или каким-либо третьим лицам",
    privacy_li3:  "📡 Запросы с ключом идут напрямую к серверам OpenAI / Anthropic / Google / xAI — без посредников",
    footer:       "Selection Translate AI · 2026 · Переводы без границ",
    footer_privacy: "Политика конфиденциальности",
    free_label:   "💡 Бесплатный tier:",
    paid_label:   "💳 Нужен баланс:",
    warn_once:    "Ключ показывается только один раз — скопируй немедленно!",
    final_hint:   "Попап расширения → «Свой API ключ» → выбери провайдера → вставь ключ → «Проверить ключ»",
    open_site:    "Открыть сайт ↗",
    popup_connection: "Источник API",
    popup_server:     "Публичный сервер",
    popup_subscribe:  "Купить подписку",
    popup_own_key:    "Свой API ключ",
    popup_own_hint:   "Без ограничений",
    popup_provider:   "Провайдер:",
    popup_model:      "Модель:",
    popup_api_key:    "API ключ:",
    popup_check_btn:  "Проверить ключ",
    popup_key_valid:  "✅ Ключ действителен",
  },
  en: {
    nav_alt:      "No limits",
    nav_guide:    "API Keys",
    nav_privacy:  "Privacy",
    nav_howto:    "How to use",
    howto_tag:    "User guide",
    howto_title:  "Select text — get translation",
    howto_sub:    "The extension works silently on any website. No configuration — just select text and go.",
    howto_s1_title: "Select text on the page",
    howto_s1_text:  "On any website, highlight a word, phrase, or paragraph with your mouse. Minimum 2 characters, maximum 5000. Works with all languages.",
    howto_s2_title: "Click the translate button",
    howto_s2_text:  "A purple button with a «T» icon appears near your selection. Hover to pre-load the translation. Click to open the result popup.",
    howto_s3_title: "Read your translation",
    howto_s3_text:  "The translation appears in a small floating popup. Use the copy button to copy the result with one click. Close with the × button or by clicking outside.",
    howto_s4_title: "Save to dictionary (optional)",
    howto_s4_text:  "The popup has a «+» button to save the original → translation pair to your personal dictionary. Open the dictionary as a side panel on the right.",
    howto_instant_title: "Instant translation",
    howto_instant_text:  "Enable «Instant translation on selection» in the extension popup. Translation starts automatically as soon as you release the mouse button — no click needed.",
    howto_dict_title: "Personal dictionary",
    howto_dict_text:  "Build a vocabulary list while you read. The panel opens on the right side; drag the left edge to resize. Export your list to CSV or Excel in one click.",
    howto_hotkeys_title: "Keyboard shortcuts",
    howto_hk_toggle:    "Turn extension on / off",
    howto_hk_dict:      "Open / close dictionary panel",
    howto_hk_close:     "Close translation popup",
    howto_settings_title: "Settings",
    howto_settings_text:  "Click the extension icon in your browser toolbar: on/off toggle, translation language, interface language (🇷🇺🇬🇧🇪🇸🇨🇳), API source — public server or own key.",
    badge:        "Subscription coming soon",
    hero_title:   "No limits\nstarting today",
    hero_sub:     "Connect your own API key from OpenAI, Anthropic, Google, or xAI — and translate without limits. A subscription with even simpler setup is already in development.",
    hero_cta:     "How to connect →",
    alt_tag:      "Three ways to use",
    alt_title:    "Choose your mode",
    alt_sub:      "The extension works for free right after installation. Need more — subscribe or connect your own API key.",
    feat1_title:  "Free — right now",
    feat1_text:   "30 translations per day are already included. No setup needed — just install the extension and start translating. Free and no registration required.",
    feat2_title:  "Subscription",
    feat2_text:   "More translations per day for a small fee. Helps us maintain the project and servers. Coming soon.",
    feat3_title:  "Own API key",
    feat3_text:   "Connect an OpenAI, Anthropic, Google, or xAI key — and translate without any limits from the extension. For those who prefer full control.",
    guide_tag:    "Step-by-step guide",
    guide_title:  "How to get an API key",
    guide_sub:    "Choose a provider and follow the instructions. It only takes a couple of minutes.",
    privacy_tag:  "Privacy",
    privacy_title:"Your keys — only yours",
    privacy_text: "We take your privacy seriously. API keys never leave your browser.",
    privacy_li1:  "🔒 API key is stored in chrome.storage.local — exclusively in your browser, not on a server",
    privacy_li2:  "🚫 The key is never sent to our server or any third party",
    privacy_li3:  "📡 Requests with the key go directly to OpenAI / Anthropic / Google / xAI servers — no middlemen",
    footer:       "Selection Translate AI · 2026 · Translations without borders",
    footer_privacy: "Privacy Policy",
    free_label:   "💡 Free tier:",
    paid_label:   "💳 Balance required:",
    warn_once:    "The key is shown only once — copy it immediately!",
    final_hint:   "Extension popup → «Own API key» → select provider → paste key → «Check key»",
    open_site:    "Open site ↗",
    popup_connection: "API source",
    popup_server:     "Public server",
    popup_subscribe:  "Buy subscription",
    popup_own_key:    "Own API key",
    popup_own_hint:   "No limits",
    popup_provider:   "Provider:",
    popup_model:      "Model:",
    popup_api_key:    "API key:",
    popup_check_btn:  "Check key",
    popup_key_valid:  "✅ Key is valid",
  },
  es: {
    nav_alt:      "Sin límites",
    nav_guide:    "Claves API",
    nav_privacy:  "Privacidad",
    nav_howto:    "Cómo usar",
    howto_tag:    "Guía de uso",
    howto_title:  "Selecciona texto — obtén traducción",
    howto_sub:    "La extensión funciona de forma silenciosa en cualquier sitio web. Sin configuración — solo selecciona texto y listo.",
    howto_s1_title: "Selecciona texto en la página",
    howto_s1_text:  "En cualquier sitio web, resalta una palabra, frase o párrafo con el ratón. Mínimo 2 caracteres, máximo 5000. Funciona con todos los idiomas.",
    howto_s2_title: "Haz clic en el botón de traducción",
    howto_s2_text:  "Aparece un botón morado con la letra «T» cerca de tu selección. Pasa el cursor para precargar la traducción. Haz clic para abrir el popup con el resultado.",
    howto_s3_title: "Lee tu traducción",
    howto_s3_text:  "La traducción aparece en una pequeña ventana flotante. Usa el botón de copiar para copiar el resultado con un clic. Cierra con la × o haciendo clic fuera.",
    howto_s4_title: "Guarda en el diccionario (opcional)",
    howto_s4_text:  "El popup tiene un botón «+» para guardar el par original → traducción en tu diccionario personal. Abre el diccionario como panel lateral a la derecha.",
    howto_instant_title: "Traducción instantánea",
    howto_instant_text:  "Activa «Traducción inmediata al seleccionar» en el popup de la extensión. La traducción comienza automáticamente al soltar el botón del ratón, sin necesidad de hacer clic.",
    howto_dict_title: "Diccionario personal",
    howto_dict_text:  "Crea una lista de vocabulario mientras lees. El panel se abre a la derecha; arrastra el borde izquierdo para redimensionarlo. Exporta tu lista a CSV o Excel con un clic.",
    howto_hotkeys_title: "Atajos de teclado",
    howto_hk_toggle:    "Activar / desactivar la extensión",
    howto_hk_dict:      "Abrir / cerrar el panel del diccionario",
    howto_hk_close:     "Cerrar el popup de traducción",
    howto_settings_title: "Configuración",
    howto_settings_text:  "Haz clic en el icono de la extensión en la barra del navegador: interruptor on/off, idioma de traducción, idioma de interfaz (🇷🇺🇬🇧🇪🇸🇨🇳), fuente de API — servidor público o clave propia.",
    badge:        "Suscripción próximamente",
    hero_title:   "Sin límites\ndesde hoy",
    hero_sub:     "Conecta tu propia clave API de OpenAI, Anthropic, Google o xAI — y traduce sin restricciones. Una suscripción con una configuración aún más sencilla ya está en desarrollo.",
    hero_cta:     "Cómo conectar →",
    alt_tag:      "Tres formas de usar",
    alt_title:    "Elige tu modo",
    alt_sub:      "La extensión funciona gratis nada más instalarla. ¿Necesitas más? Suscríbete o conecta tu propia clave API.",
    feat1_title:  "Gratis — ahora mismo",
    feat1_text:   "30 traducciones al día ya están incluidas. Sin configuración — instala la extensión y empieza a traducir. Gratis y sin registro.",
    feat2_title:  "Suscripción",
    feat2_text:   "Más traducciones al día por una pequeña tarifa. Nos ayuda a mantener el proyecto y los servidores. Próximamente.",
    feat3_title:  "Clave API propia",
    feat3_text:   "Conecta una clave de OpenAI, Anthropic, Google o xAI — y traduce sin ningún límite de la extensión. Para quienes prefieren el control total.",
    guide_tag:    "Guía paso a paso",
    guide_title:  "Cómo obtener una clave API",
    guide_sub:    "Elige un proveedor y sigue las instrucciones. Solo tarda un par de minutos.",
    privacy_tag:  "Privacidad",
    privacy_title:"Tus claves — solo tuyas",
    privacy_text: "Nos tomamos tu privacidad muy en serio. Las claves API nunca salen de tu navegador.",
    privacy_li1:  "🔒 La clave API se almacena en chrome.storage.local — exclusivamente en tu navegador, no en un servidor",
    privacy_li2:  "🚫 La clave nunca se envía a nuestro servidor ni a terceros",
    privacy_li3:  "📡 Las solicitudes con la clave van directamente a los servidores de OpenAI / Anthropic / Google / xAI — sin intermediarios",
    footer:       "Selection Translate AI · 2026 · Traducciones sin fronteras",
    footer_privacy: "Política de privacidad",
    free_label:   "💡 Nivel gratuito:",
    paid_label:   "💳 Requiere saldo:",
    warn_once:    "¡La clave se muestra solo una vez — cópiala inmediatamente!",
    final_hint:   "Popup → «Mi clave API» → selecciona proveedor → pega la clave → «Verificar clave»",
    open_site:    "Abrir sitio ↗",
    popup_connection: "Fuente de API",
    popup_server:     "Servidor público",
    popup_subscribe:  "Comprar suscripción",
    popup_own_key:    "Clave API propia",
    popup_own_hint:   "Sin límites",
    popup_provider:   "Proveedor:",
    popup_model:      "Modelo:",
    popup_api_key:    "Clave API:",
    popup_check_btn:  "Verificar clave",
    popup_key_valid:  "✅ Clave válida",
  },
  zh: {
    nav_alt:      "无限制",
    nav_guide:    "API 密钥",
    nav_privacy:  "隐私",
    nav_howto:    "使用教程",
    howto_tag:    "使用指南",
    howto_title:  "选中文本 — 获得翻译",
    howto_sub:    "扩展程序在任何网站上静默运行。无需配置——只需选中文本即可。",
    howto_s1_title: "在页面上选中文本",
    howto_s1_text:  "在任何网站上，用鼠标高亮选中单词、短语或段落。最少 2 个字符，最多 5000 个字符。支持所有语言。",
    howto_s2_title: "点击翻译按钮",
    howto_s2_text:  "选中内容旁边会出现一个带有字母「T」的紫色按钮。悬停可预加载翻译。点击后弹出结果窗口。",
    howto_s3_title: "阅读翻译结果",
    howto_s3_text:  "翻译显示在一个小型浮动弹窗中。点击复制按钮可一键复制结果。点击 × 按钮或在弹窗外点击可关闭。",
    howto_s4_title: "保存到词典（可选）",
    howto_s4_text:  "弹窗中有一个「+」按钮，可将原文 → 译文对保存到个人词典。词典以右侧面板形式打开。",
    howto_instant_title: "即时翻译",
    howto_instant_text:  "在扩展弹窗中启用「选中即翻译」。松开鼠标按钮后翻译将自动开始——无需点击按钮。",
    howto_dict_title: "个人词典",
    howto_dict_text:  "边阅读边建立词汇表。面板从右侧打开，拖动左边缘可调整宽度。一键导出为 CSV 或 Excel。",
    howto_hotkeys_title: "键盘快捷键",
    howto_hk_toggle:    "开启 / 关闭扩展程序",
    howto_hk_dict:      "打开 / 关闭词典面板",
    howto_hk_close:     "关闭翻译弹窗",
    howto_settings_title: "设置",
    howto_settings_text:  "点击浏览器工具栏中的扩展图标：开/关切换、翻译语言、界面语言（🇷🇺🇬🇧🇪🇸🇨🇳）、API 来源——公共服务器或自定义密钥。",
    badge:        "订阅即将推出",
    hero_title:   "今天起\n无限翻译",
    hero_sub:     "连接来自 OpenAI、Anthropic、Google 或 xAI 的 API 密钥——无限制翻译。更简便的订阅方案正在开发中。",
    hero_cta:     "如何连接 →",
    alt_tag:      "三种使用方式",
    alt_title:    "选择您的模式",
    alt_sub:      "安装后扩展程序即可免费使用。需要更多？订阅或连接您自己的 API 密钥。",
    feat1_title:  "免费 — 立即可用",
    feat1_text:   "每天 30 次翻译已包含在内。无需设置——安装扩展即可开始翻译。免费且无需注册。",
    feat2_title:  "订阅",
    feat2_text:   "以少量费用获得更多每日翻译次数。帮助我们维护项目和服务器。即将推出。",
    feat3_title:  "自定义 API 密钥",
    feat3_text:   "连接 OpenAI、Anthropic、Google 或 xAI 密钥——无任何扩展限制地翻译。适合偏好完全掌控的用户。",
    guide_tag:    "分步指南",
    guide_title:  "如何获取API密钥",
    guide_sub:    "选择提供商并按照说明操作。只需几分钟。",
    privacy_tag:  "隐私",
    privacy_title:"您的密钥 — 仅属于您",
    privacy_text: "我们非常重视您的隐私。API密钥永远不会离开您的浏览器。",
    privacy_li1:  "🔒 API密钥存储在chrome.storage.local中——仅在您的浏览器中，不在服务器上",
    privacy_li2:  "🚫 密钥永远不会发送到我们的服务器或任何第三方",
    privacy_li3:  "📡 带密钥的请求直接发送到OpenAI / Anthropic / Google / xAI服务器——无中间商",
    footer:       "Selection Translate AI · 2026 · 无边界翻译",
    footer_privacy: "隐私政策",
    free_label:   "💡 免费层级：",
    paid_label:   "💳 需要余额：",
    warn_once:    "密钥只显示一次——请立即复制！",
    final_hint:   "扩展弹窗 → «自己的API密钥» → 选择提供商 → 粘贴密钥 → «验证密钥»",
    open_site:    "打开网站 ↗",
    popup_connection: "API 来源",
    popup_server:     "公共服务器",
    popup_subscribe:  "购买订阅",
    popup_own_key:    "自定义API密钥",
    popup_own_hint:   "无限制",
    popup_provider:   "提供商:",
    popup_model:      "模型:",
    popup_api_key:    "API密钥:",
    popup_check_btn:  "验证密钥",
    popup_key_valid:  "✅ 密钥有效",
  },
};

// ── Provider guide data ────────────────────────────────────
const PROVIDERS = {
  openai: {
    name: "OpenAI", color: "#10a37f", bg: "#f0fdf9",
    emoji: "🤖", url: "platform.openai.com",
    free: {
      ru: "Бесплатных кредитов нет — нужно пополнить баланс (мин. $5). Новым пользователям иногда дают пробный кредит.",
      en: "No free credits — requires balance top-up (min. $5). New users sometimes receive trial credits.",
      es: "Sin créditos gratuitos — requiere recarga de saldo (mín. $5). Los nuevos usuarios a veces reciben créditos de prueba.",
      zh: "没有免费积分——需要充值余额（最少$5）。新用户有时会获得试用积分。",
    },
    steps: {
      ru: [
        { title: "Открой платформу OpenAI", desc: "Перейди на сайт разработчиков OpenAI.", url: "platform.openai.com" },
        { title: "Войди в аккаунт", desc: "Нажми «Sign in» или создай новый аккаунт через «Sign up». Понадобится email и пароль или Google/Microsoft аккаунт.", ui: { type: "button", text: "Sign up", color: "#10a37f" } },
        { title: "Открой раздел API Keys", desc: "В левом боковом меню найди и нажми на «API keys» (иконка ключа).", ui: { type: "nav", path: ["API keys"] } },
        { title: "Создай новый ключ", desc: "Нажми кнопку «Create new secret key».", ui: { type: "button", text: "+ Create new secret key", color: "#10a37f" } },
        { title: "Задай имя ключу", desc: "Введи любое название, например «Selection Translate AI». Нажми «Create secret key».", ui: { type: "input", value: "Selection Translate AI", color: "#10a37f" } },
        { title: "Скопируй ключ!", desc: "Ключ показывается ТОЛЬКО ОДИН РАЗ. Обязательно скопируй его прямо сейчас.", warning: true, ui: { type: "key", text: "sk-proj-••••••••••••••••••••" } },
        { title: "Вставь ключ в расширение", desc: "Открой попап расширения → «Свой API ключ» → OpenAI → вставь ключ → «Проверить ключ».", final: true },
      ],
      en: [
        { title: "Open the OpenAI platform", desc: "Go to the OpenAI developer platform.", url: "platform.openai.com" },
        { title: "Sign in", desc: "Click «Sign in» or create a new account via «Sign up». You'll need an email and password or Google/Microsoft account.", ui: { type: "button", text: "Sign up", color: "#10a37f" } },
        { title: "Open API Keys section", desc: "In the left sidebar, find and click «API keys» (key icon).", ui: { type: "nav", path: ["API keys"] } },
        { title: "Create a new key", desc: "Click the «Create new secret key» button.", ui: { type: "button", text: "+ Create new secret key", color: "#10a37f" } },
        { title: "Name your key", desc: "Enter any name, e.g. «Selection Translate AI». Click «Create secret key».", ui: { type: "input", value: "Selection Translate AI", color: "#10a37f" } },
        { title: "Copy the key!", desc: "The key is shown ONLY ONCE. Make sure to copy it right now.", warning: true, ui: { type: "key", text: "sk-proj-••••••••••••••••••••" } },
        { title: "Add key to extension", desc: "Open extension popup → «Own API key» → OpenAI → paste key → «Check key».", final: true },
      ],
      es: [
        { title: "Abre la plataforma OpenAI", desc: "Ve al sitio de desarrolladores de OpenAI.", url: "platform.openai.com" },
        { title: "Inicia sesión", desc: "Haz clic en «Sign in» o crea una cuenta nueva con «Sign up». Necesitarás un email y contraseña o cuenta de Google/Microsoft.", ui: { type: "button", text: "Sign up", color: "#10a37f" } },
        { title: "Abre la sección API Keys", desc: "En el menú lateral izquierdo, encuentra y haz clic en «API keys» (icono de llave).", ui: { type: "nav", path: ["API keys"] } },
        { title: "Crea una nueva clave", desc: "Haz clic en el botón «Create new secret key».", ui: { type: "button", text: "+ Create new secret key", color: "#10a37f" } },
        { title: "Nombra tu clave", desc: "Escribe cualquier nombre, p. ej. «Selection Translate AI». Haz clic en «Create secret key».", ui: { type: "input", value: "Selection Translate AI", color: "#10a37f" } },
        { title: "¡Copia la clave!", desc: "La clave se muestra SOLO UNA VEZ. Asegúrate de copiarla ahora mismo.", warning: true, ui: { type: "key", text: "sk-proj-••••••••••••••••••••" } },
        { title: "Añade la clave a la extensión", desc: "Popup de extensión → «Mi clave API» → OpenAI → pega la clave → «Verificar clave».", final: true },
      ],
      zh: [
        { title: "打开OpenAI平台", desc: "前往OpenAI开发者平台。", url: "platform.openai.com" },
        { title: "登录账户", desc: "点击«Sign in»或通过«Sign up»创建新账户。需要邮箱密码或Google/Microsoft账户。", ui: { type: "button", text: "Sign up", color: "#10a37f" } },
        { title: "打开API Keys部分", desc: "在左侧边栏找到并点击«API keys»（钥匙图标）。", ui: { type: "nav", path: ["API keys"] } },
        { title: "创建新密钥", desc: "点击«Create new secret key»按钮。", ui: { type: "button", text: "+ Create new secret key", color: "#10a37f" } },
        { title: "为密钥命名", desc: "输入任意名称，如«Selection Translate AI»。点击«Create secret key»。", ui: { type: "input", value: "Selection Translate AI", color: "#10a37f" } },
        { title: "复制密钥！", desc: "密钥只显示一次。请立即复制。", warning: true, ui: { type: "key", text: "sk-proj-••••••••••••••••••••" } },
        { title: "将密钥添加到扩展", desc: "打开扩展弹窗 → «自己的API密钥» → OpenAI → 粘贴密钥 → «验证密钥»。", final: true },
      ],
    },
  },

  anthropic: {
    name: "Anthropic (Claude)", color: "#b45309", bg: "#fffbeb",
    emoji: "🧠", url: "console.anthropic.com",
    free: {
      ru: "Бесплатные стартовые кредиты могут быть недоступны — проверьте актуальные условия на сайте Anthropic. Модель Claude Haiku 4.5 отличается низкой стоимостью: тысячи переводов стоят лишь несколько центов.",
      en: "Free starter credits may not be available — check current terms on Anthropic's website. Claude Haiku 4.5 is extremely cost-efficient: thousands of translations cost only a few cents.",
      es: "Es posible que no haya créditos gratuitos de inicio — verifica las condiciones actuales en el sitio de Anthropic. Claude Haiku 4.5 es muy económico: miles de traducciones cuestan solo unos céntimos.",
      zh: "免费起始积分可能不可用——请在 Anthropic 网站上查看最新条款。Claude Haiku 4.5 非常经济实惠：数千次翻译仅需几美分。",
    },
    steps: {
      ru: [
        { title: "Открой консоль Anthropic", desc: "Перейди в консоль разработчика Anthropic.", url: "console.anthropic.com" },
        { title: "Зарегистрируйся или войди", desc: "Создай аккаунт или войди в существующий. При регистрации новые пользователи получают $5 бесплатных кредитов.", ui: { type: "button", text: "Create account", color: "#b45309" } },
        { title: "Перейди в API Keys", desc: "В левом боковом меню найди и выбери «API Keys».", ui: { type: "nav", path: ["API Keys"] } },
        { title: "Создай ключ", desc: "Нажми кнопку «Create Key».", ui: { type: "button", text: "Create Key", color: "#b45309" } },
        { title: "Введи название", desc: "Задай имя ключу (например «Selection Translate AI»), нажми «Create Key».", ui: { type: "input", value: "Selection Translate AI", color: "#b45309" } },
        { title: "Скопируй ключ!", desc: "Ключ показывается ТОЛЬКО ОДИН РАЗ. Скопируй его сразу!", warning: true, ui: { type: "key", text: "sk-ant-api03-••••••••••••••••" } },
        { title: "Вставь ключ в расширение", desc: "Открой попап расширения → «Свой API ключ» → Anthropic → вставь ключ → «Проверить ключ».", final: true },
      ],
      en: [
        { title: "Open Anthropic Console", desc: "Go to the Anthropic developer console.", url: "console.anthropic.com" },
        { title: "Register or sign in", desc: "Create an account or sign in. New users receive $5 in free credits upon registration.", ui: { type: "button", text: "Create account", color: "#b45309" } },
        { title: "Go to API Keys", desc: "In the left sidebar, find and select «API Keys».", ui: { type: "nav", path: ["API Keys"] } },
        { title: "Create a key", desc: "Click the «Create Key» button.", ui: { type: "button", text: "Create Key", color: "#b45309" } },
        { title: "Enter a name", desc: "Name your key (e.g. «Selection Translate AI»), then click «Create Key».", ui: { type: "input", value: "Selection Translate AI", color: "#b45309" } },
        { title: "Copy the key!", desc: "The key is shown ONLY ONCE. Copy it immediately!", warning: true, ui: { type: "key", text: "sk-ant-api03-••••••••••••••••" } },
        { title: "Add key to extension", desc: "Open extension popup → «Own API key» → Anthropic → paste key → «Check key».", final: true },
      ],
      es: [
        { title: "Abre la consola de Anthropic", desc: "Ve a la consola de desarrolladores de Anthropic.", url: "console.anthropic.com" },
        { title: "Regístrate o inicia sesión", desc: "Crea una cuenta o inicia sesión. Los nuevos usuarios reciben $5 en créditos gratuitos al registrarse.", ui: { type: "button", text: "Create account", color: "#b45309" } },
        { title: "Ve a API Keys", desc: "En el menú lateral izquierdo, busca y selecciona «API Keys».", ui: { type: "nav", path: ["API Keys"] } },
        { title: "Crea una clave", desc: "Haz clic en el botón «Create Key».", ui: { type: "button", text: "Create Key", color: "#b45309" } },
        { title: "Introduce un nombre", desc: "Ponle un nombre a tu clave (p. ej. «Selection Translate AI»), luego haz clic en «Create Key».", ui: { type: "input", value: "Selection Translate AI", color: "#b45309" } },
        { title: "¡Copia la clave!", desc: "La clave se muestra SOLO UNA VEZ. ¡Cópiala inmediatamente!", warning: true, ui: { type: "key", text: "sk-ant-api03-••••••••••••••••" } },
        { title: "Añade la clave a la extensión", desc: "Popup → «Mi clave API» → Anthropic → pega la clave → «Verificar clave».", final: true },
      ],
      zh: [
        { title: "打开Anthropic控制台", desc: "前往Anthropic开发者控制台。", url: "console.anthropic.com" },
        { title: "注册或登录", desc: "创建账户或登录。新用户注册时获得$5免费积分。", ui: { type: "button", text: "Create account", color: "#b45309" } },
        { title: "进入API Keys", desc: "在左侧边栏找到并选择«API Keys»。", ui: { type: "nav", path: ["API Keys"] } },
        { title: "创建密钥", desc: "点击«Create Key»按钮。", ui: { type: "button", text: "Create Key", color: "#b45309" } },
        { title: "输入名称", desc: "为密钥命名（如«Selection Translate AI»），然后点击«Create Key»。", ui: { type: "input", value: "Selection Translate AI", color: "#b45309" } },
        { title: "复制密钥！", desc: "密钥只显示一次。请立即复制！", warning: true, ui: { type: "key", text: "sk-ant-api03-••••••••••••••••" } },
        { title: "将密钥添加到扩展", desc: "扩展弹窗 → «自己的API密钥» → Anthropic → 粘贴密钥 → «验证密钥»。", final: true },
      ],
    },
  },

  google: {
    name: "Google Gemini", color: "#4285F4", bg: "#eff6ff",
    emoji: "✨", url: "aistudio.google.com",
    free: {
      ru: "Google AI Studio предлагает щедрый бесплатный tier с лимитами запросов в минуту. Отлично подходит для личного использования без затрат.",
      en: "Google AI Studio offers a generous free tier with per-minute rate limits. Great for personal use at no cost.",
      es: "Google AI Studio ofrece un nivel gratuito generoso con límites de solicitudes por minuto. Ideal para uso personal sin costo.",
      zh: "Google AI Studio提供慷慨的免费层级，带有每分钟请求限制。非常适合个人免费使用。",
    },
    steps: {
      ru: [
        { title: "Открой Google AI Studio", desc: "Перейди на сайт AI Studio от Google.", url: "aistudio.google.com" },
        { title: "Войди через Google аккаунт", desc: "Нажми «Sign in» и войди с любым Google аккаунтом (Gmail).", ui: { type: "button", text: "Sign in with Google", color: "#4285F4" } },
        { title: "Нажми «Get API key»", desc: "В левом боковом меню найди и нажми «Get API key».", ui: { type: "nav", path: ["Get API key"] } },
        { title: "Создай API ключ", desc: "Нажми «Create API key in new project» (или выбери существующий Google Cloud проект).", ui: { type: "button", text: "Create API key in new project", color: "#4285F4" } },
        { title: "Скопируй ключ", desc: "Ключ сгенерируется автоматически. В отличие от других провайдеров, ключ Google можно посмотреть повторно — он не пропадает после закрытия окна.", ui: { type: "key", text: "AIzaSy••••••••••••••••••••••••" } },
        { title: "Вставь ключ в расширение", desc: "Открой попап расширения → «Свой API ключ» → Google AI → вставь ключ → «Проверить ключ».", final: true },
      ],
      en: [
        { title: "Open Google AI Studio", desc: "Go to Google's AI Studio website.", url: "aistudio.google.com" },
        { title: "Sign in with Google", desc: "Click «Sign in» and sign in with any Google account (Gmail).", ui: { type: "button", text: "Sign in with Google", color: "#4285F4" } },
        { title: "Click «Get API key»", desc: "In the left sidebar, find and click «Get API key».", ui: { type: "nav", path: ["Get API key"] } },
        { title: "Create API key", desc: "Click «Create API key in new project» (or select an existing Google Cloud project).", ui: { type: "button", text: "Create API key in new project", color: "#4285F4" } },
        { title: "Copy the key", desc: "The key is generated automatically. Unlike other providers, Google keys can be viewed again later — they don't disappear after closing the window.", ui: { type: "key", text: "AIzaSy••••••••••••••••••••••••" } },
        { title: "Add key to extension", desc: "Open extension popup → «Own API key» → Google AI → paste key → «Check key».", final: true },
      ],
      es: [
        { title: "Abre Google AI Studio", desc: "Ve al sitio web de AI Studio de Google.", url: "aistudio.google.com" },
        { title: "Inicia sesión con Google", desc: "Haz clic en «Sign in» e inicia sesión con cualquier cuenta de Google (Gmail).", ui: { type: "button", text: "Sign in with Google", color: "#4285F4" } },
        { title: "Haz clic en «Get API key»", desc: "En el menú lateral izquierdo, encuentra y haz clic en «Get API key».", ui: { type: "nav", path: ["Get API key"] } },
        { title: "Crea la clave API", desc: "Haz clic en «Create API key in new project» (o selecciona un proyecto de Google Cloud existente).", ui: { type: "button", text: "Create API key in new project", color: "#4285F4" } },
        { title: "Copia la clave", desc: "La clave se genera automáticamente. A diferencia de otros proveedores, las claves de Google se pueden ver de nuevo más tarde.", ui: { type: "key", text: "AIzaSy••••••••••••••••••••••••" } },
        { title: "Añade la clave a la extensión", desc: "Popup → «Mi clave API» → Google AI → pega la clave → «Verificar clave».", final: true },
      ],
      zh: [
        { title: "打开Google AI Studio", desc: "前往Google的AI Studio网站。", url: "aistudio.google.com" },
        { title: "使用Google账户登录", desc: "点击«Sign in»并使用任意Google账户（Gmail）登录。", ui: { type: "button", text: "Sign in with Google", color: "#4285F4" } },
        { title: "点击«Get API key»", desc: "在左侧边栏找到并点击«Get API key»。", ui: { type: "nav", path: ["Get API key"] } },
        { title: "创建API密钥", desc: "点击«Create API key in new project»（或选择现有的Google Cloud项目）。", ui: { type: "button", text: "Create API key in new project", color: "#4285F4" } },
        { title: "复制密钥", desc: "密钥自动生成。与其他提供商不同，Google密钥可以在之后再次查看——关闭窗口后不会消失。", ui: { type: "key", text: "AIzaSy••••••••••••••••••••••••" } },
        { title: "将密钥添加到扩展", desc: "扩展弹窗 → «自己的API密钥» → Google AI → 粘贴密钥 → «验证密钥»。", final: true },
      ],
    },
  },

  xai: {
    name: "xAI (Grok)", color: "#111827", bg: "#f9fafb",
    emoji: "𝕏", url: "console.x.ai",
    free: {
      ru: "xAI периодически предоставляет стартовые кредиты новым пользователям — уточните текущие условия на сайте. Grok 3 Mini — одна из самых доступных по стоимости моделей.",
      en: "xAI periodically provides starter credits to new users — check current terms on their website. Grok 3 Mini is one of the most cost-efficient models available.",
      es: "xAI periódicamente ofrece créditos iniciales a nuevos usuarios — verifica las condiciones actuales en su sitio web. Grok 3 Mini es uno de los modelos más económicos disponibles.",
      zh: "xAI 定期向新用户提供起始积分——请在其网站上查看当前条款。Grok 3 Mini 是目前最具成本效益的模型之一。",
    },
    steps: {
      ru: [
        { title: "Открой консоль xAI", desc: "Перейди в консоль разработчика xAI.", url: "console.x.ai" },
        { title: "Войди через X (Twitter)", desc: "Нажми «Sign in» и войди через аккаунт X (бывший Twitter).", ui: { type: "button", text: "Sign in with X", color: "#111827" } },
        { title: "Перейди в API Keys", desc: "В левом меню выбери «API Keys».", ui: { type: "nav", path: ["API Keys"] } },
        { title: "Создай API ключ", desc: "Нажми кнопку «Create API Key».", ui: { type: "button", text: "Create API Key", color: "#111827" } },
        { title: "Введи название и выбери разрешения", desc: "Задай имя ключу (например «Selection Translate AI»), выбери нужные разрешения и нажми «Create».", ui: { type: "input", value: "Selection Translate AI", color: "#111827" } },
        { title: "Скопируй ключ!", desc: "Ключ показывается ТОЛЬКО ОДИН РАЗ. Скопируй его немедленно!", warning: true, ui: { type: "key", text: "xai-••••••••••••••••••••••••••" } },
        { title: "Вставь ключ в расширение", desc: "Открой попап расширения → «Свой API ключ» → xAI → вставь ключ → «Проверить ключ».", final: true },
      ],
      en: [
        { title: "Open xAI Console", desc: "Go to the xAI developer console.", url: "console.x.ai" },
        { title: "Sign in with X (Twitter)", desc: "Click «Sign in» and sign in with your X (formerly Twitter) account.", ui: { type: "button", text: "Sign in with X", color: "#111827" } },
        { title: "Go to API Keys", desc: "In the left menu, select «API Keys».", ui: { type: "nav", path: ["API Keys"] } },
        { title: "Create API Key", desc: "Click the «Create API Key» button.", ui: { type: "button", text: "Create API Key", color: "#111827" } },
        { title: "Enter name and select permissions", desc: "Name your key (e.g. «Selection Translate AI»), choose permissions, and click «Create».", ui: { type: "input", value: "Selection Translate AI", color: "#111827" } },
        { title: "Copy the key!", desc: "The key is shown ONLY ONCE. Copy it immediately!", warning: true, ui: { type: "key", text: "xai-••••••••••••••••••••••••••" } },
        { title: "Add key to extension", desc: "Open extension popup → «Own API key» → xAI → paste key → «Check key».", final: true },
      ],
      es: [
        { title: "Abre la consola de xAI", desc: "Ve a la consola de desarrolladores de xAI.", url: "console.x.ai" },
        { title: "Inicia sesión con X (Twitter)", desc: "Haz clic en «Sign in» e inicia sesión con tu cuenta de X (antes Twitter).", ui: { type: "button", text: "Sign in with X", color: "#111827" } },
        { title: "Ve a API Keys", desc: "En el menú izquierdo, selecciona «API Keys».", ui: { type: "nav", path: ["API Keys"] } },
        { title: "Crea una clave API", desc: "Haz clic en el botón «Create API Key».", ui: { type: "button", text: "Create API Key", color: "#111827" } },
        { title: "Introduce nombre y selecciona permisos", desc: "Ponle un nombre a tu clave (p. ej. «Selection Translate AI»), elige los permisos y haz clic en «Create».", ui: { type: "input", value: "Selection Translate AI", color: "#111827" } },
        { title: "¡Copia la clave!", desc: "La clave se muestra SOLO UNA VEZ. ¡Cópiala inmediatamente!", warning: true, ui: { type: "key", text: "xai-••••••••••••••••••••••••••" } },
        { title: "Añade la clave a la extensión", desc: "Popup → «Mi clave API» → xAI → pega la clave → «Verificar clave».", final: true },
      ],
      zh: [
        { title: "打开xAI控制台", desc: "前往xAI开发者控制台。", url: "console.x.ai" },
        { title: "使用X (Twitter)登录", desc: "点击«Sign in»并使用X（原Twitter）账户登录。", ui: { type: "button", text: "Sign in with X", color: "#111827" } },
        { title: "进入API Keys", desc: "在左侧菜单中选择«API Keys»。", ui: { type: "nav", path: ["API Keys"] } },
        { title: "创建API密钥", desc: "点击«Create API Key»按钮。", ui: { type: "button", text: "Create API Key", color: "#111827" } },
        { title: "输入名称并选择权限", desc: "为密钥命名（如«Selection Translate AI»），选择权限，点击«Create»。", ui: { type: "input", value: "Selection Translate AI", color: "#111827" } },
        { title: "复制密钥！", desc: "密钥只显示一次。请立即复制！", warning: true, ui: { type: "key", text: "xai-••••••••••••••••••••••••••" } },
        { title: "将密钥添加到扩展", desc: "扩展弹窗 → «自己的API密钥» → xAI → 粘贴密钥 → «验证密钥»。", final: true },
      ],
    },
  },
};

// ── State ──────────────────────────────────────────────────
const urlLang = new URLSearchParams(window.location.search).get("lang");
let currentLang = (urlLang && T[urlLang]) ? urlLang : (localStorage.getItem("uiLanguage") || "ru");
let currentProvider = "openai";

// ── i18n helpers ───────────────────────────────────────────
function t(key) { return T[currentLang]?.[key] || T.en?.[key] || key; }

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (el.tagName === "INPUT") { el.placeholder = val; }
    else { el.innerHTML = val.replace(/\n/g, "<br>"); }
  });
  document.title = "Selection Translate AI – " + (currentLang === "ru" ? "Перевод без лимитов" :
    currentLang === "es" ? "Traduce sin límites" :
    currentLang === "zh" ? "无限制翻译" : "Translate Without Limits");
}


// Provider display names (for popup mockup)
const PROVIDER_DISPLAY = {
  openai:    { label: "OpenAI (ChatGPT)",    model: "GPT-4o Mini",       key: "sk-proj-••••••••••••••••" },
  anthropic: { label: "Anthropic (Claude)",   model: "Claude Haiku 4.5",  key: "sk-ant-api03-•••••••••••" },
  google:    { label: "Google AI (Gemini)",   model: "Gemini 2.0 Flash",  key: "AIzaSy••••••••••••••••••" },
  xai:       { label: "xAI (Grok)",           model: "Grok 3 Mini",       key: "xai-••••••••••••••••••••" },
};

// ── Guide rendering ────────────────────────────────────────
function buildStepUI(step) {
  const ui = step.ui;
  if (!ui) return "";
  const { type, text, color, path, value } = ui;

  if (type === "button") {
    return `<div class="step-ui"><div class="step-ui-button" style="background:${color}">${text}</div></div>`;
  }
  if (type === "nav") {
    const pathHtml = path.map(p => `<span>${p}</span>`).join('<span class="step-ui-path-arrow">›</span>');
    return `<div class="step-ui"><div class="step-ui-path">${pathHtml}</div></div>`;
  }
  if (type === "input") {
    return `<div class="step-ui"><div class="step-ui-input">
      <input readonly value="${value}" />
      <div class="step-ui-create-btn" style="background:${color}">Create</div>
    </div></div>`;
  }
  if (type === "key") {
    return `<div class="step-ui"><div class="step-ui-key">
      <code>${text}</code>
      <button class="step-ui-copy-btn" onclick="navigator.clipboard.writeText('').then(()=>{this.textContent='✅'});setTimeout(()=>{this.textContent='📋'},1200)">📋</button>
    </div></div>`;
  }
  return "";
}

function buildFinalStepMockup(providerId) {
  const pd = PROVIDER_DISPLAY[providerId] || PROVIDER_DISPLAY.openai;

  // Provider tabs — order matches real extension: OpenAI | Claude | Grok | Gemini
  const tabDefs = [
    { id: 'openai',    label: 'OpenAI'  },
    { id: 'anthropic', label: 'Claude'  },
    { id: 'xai',       label: 'Grok'   },
    { id: 'google',    label: 'Gemini' },
  ];
  const tabsHtml = tabDefs.map(({ id, label }) =>
    `<div class="pm-tab${id === providerId ? ' pm-tab-active' : ''}">${label}</div>`
  ).join('');

  // Model pills — 2 per provider, first = default (active)
  const modelPills = {
    openai:    ['GPT-4o Mini', 'GPT-4o'],
    anthropic: ['Haiku 4.5', 'Sonnet 4.5'],
    google:    ['Flash 2.0', 'Flash 1.5'],
    xai:       ['Grok 3 Mini', 'Grok 3'],
  };
  const modelsHtml = (modelPills[providerId] || modelPills.openai).map((m, i) =>
    `<div class="pm-model-pill${i === 0 ? ' pm-model-active' : ''}">${m}</div>`
  ).join('');

  const publicSub = currentLang === 'ru' ? '30 переводов / день'
    : currentLang === 'es' ? '30 traducciones / día'
    : currentLang === 'zh' ? '每天 30 次翻译'
    : '30 translations / day';

  const keySavedText = currentLang === 'ru' ? 'Ключ сохранён'
    : currentLang === 'es' ? 'Clave guardada'
    : currentLang === 'zh' ? '密钥已保存'
    : 'Key saved';

  const saveText = currentLang === 'ru' ? 'Сохранить'
    : currentLang === 'es' ? 'Guardar'
    : currentLang === 'zh' ? '保存'
    : 'Save';

  const validateText = currentLang === 'ru' ? 'Проверить'
    : currentLang === 'es' ? 'Verificar'
    : currentLang === 'zh' ? '验证'
    : 'Validate';

  return `<div class="popup-mockup">

    <div class="pm-header">
      <div class="pm-header-left">
        <div class="pm-toggle-track pm-toggle-on"><div class="pm-toggle-thumb"></div></div>
        <span class="pm-hotkey-hint">Alt+Shift+T</span>
      </div>
      <div class="pm-flags">🇷🇺🇬🇧🇪🇸🇨🇳</div>
    </div>

    <div class="pm-body">
      <div class="pm-card">
        <div class="pm-section-label">${t('popup_connection')}</div>

        <div class="pm-radio-card">
          <div class="pm-radio-dot"></div>
          <div class="pm-radio-body">
            <span class="pm-radio-title">${t('popup_server')}</span>
            <span class="pm-radio-sub">${publicSub}</span>
          </div>
          <div class="pm-sub-chip">${t('popup_subscribe')}</div>
        </div>

        <div class="pm-radio-card pm-active">
          <div class="pm-radio-dot pm-radio-filled"></div>
          <div class="pm-radio-body">
            <span class="pm-radio-title">${t('popup_own_key')}</span>
            <span class="pm-radio-sub">${t('popup_own_hint')}</span>
          </div>
        </div>

        <div class="pm-own-panel">
          <div class="pm-provider-tabs">${tabsHtml}</div>
          <div class="pm-model-pills">${modelsHtml}</div>
          <div class="pm-key-row">
            <div class="pm-key-input">${pd.key}</div>
            <div class="pm-eye-btn">👁</div>
          </div>
          <div class="pm-key-active-badge">
            <span class="pm-key-check">✓</span>
            <span>${keySavedText}</span>
            <span class="pm-key-masked">${pd.key}</span>
          </div>
          <div class="pm-actions-row">
            <div class="pm-btn-save">${saveText}</div>
            <div class="pm-btn-validate">${validateText}</div>
          </div>
          <div class="pm-key-status-ok">${t('popup_key_valid')}</div>
        </div>
      </div>
    </div>

  </div>`;
}

function renderGuide(providerId) {
  const p = PROVIDERS[providerId];
  const steps = p.steps[currentLang] || p.steps.en;
  const freeNote = p.free[currentLang] || p.free.en;

  const stepsHtml = steps.map((step, i) => {
    const isUrl = !!step.url;
    const urlHtml = isUrl
      ? `<div class="step-ui"><a href="https://${step.url}" target="_blank" rel="noopener" class="step-url-link">${step.url} ↗</a></div>`
      : "";
    const uiHtml = !isUrl ? buildStepUI(step) : "";
    const warnHtml = step.warning ? `<div class="step-warning-badge">⚠️ ${t("warn_once")}</div>` : "";
    const finalHtml = step.final ? `<div class="step-final-badge">✅ ${t("final_hint")}</div>${buildFinalStepMockup(providerId)}` : "";
    const cls = ["step", step.warning ? "step-warning" : "", step.final ? "step-final" : ""].filter(Boolean).join(" ");

    return `<div class="${cls}" style="--step-color:${p.color}">
      <div class="step-num">${i + 1}</div>
      <div class="step-content">
        <div class="step-title">${step.title}</div>
        <div class="step-desc">${step.desc}</div>
        ${urlHtml}${uiHtml}${warnHtml}${finalHtml}
      </div>
    </div>`;
  }).join("");

  return `
    <div class="provider-header" style="background:${p.bg}">
      <div class="provider-header-emoji">${p.emoji}</div>
      <div class="provider-header-info">
        <h3>${p.name}</h3>
        <p>${p.url}</p>
      </div>
      <a href="https://${p.url}" target="_blank" rel="noopener"
         class="provider-header-link" style="background:${p.color}">${t("open_site")}</a>
    </div>
    <div class="free-note" style="border-color:${p.color};background:${p.bg};color:${p.color}">
      ${freeNote}
    </div>
    <div class="steps-list">${stepsHtml}</div>`;
}

function loadGuide(providerId, animate = true) {
  const content = document.getElementById("guide-content");
  if (!content) return;

  if (animate) {
    content.classList.add("fading");
    setTimeout(() => {
      content.innerHTML = renderGuide(providerId);
      content.classList.remove("fading");
      animateSteps();
    }, 220);
  } else {
    content.innerHTML = renderGuide(providerId);
    animateSteps();
  }
}

function animateSteps() {
  const steps = document.querySelectorAll(".step");
  steps.forEach((step, i) => {
    setTimeout(() => step.classList.add("visible"), i * 80);
  });
}

// ── Canvas particle network ────────────────────────────────
function initCanvas() {
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const particles = [];
  const NUM = 70;
  const MAX_DIST = 130;

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * canvas.width;
      this.y  = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.r  = Math.random() * 2 + 1;
      this.a  = Math.random() * 0.5 + 0.15;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width)  this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${this.a})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < NUM; i++) particles.push(new Particle());

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(255,255,255,${0.18 * (1 - dist / MAX_DIST)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(loop);
  }
  loop();
}

// ── Scroll reveal ──────────────────────────────────────────
function initScrollReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        // Lock animation trigger
        if (entry.target.classList.contains("privacy-section")) {
          entry.target.classList.add("lock-revealed");
        }
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
  io.observe(document.querySelector(".privacy-section"));
}

// ── Nav scroll effect ──────────────────────────────────────
function initNav() {
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });
}

// ── Language switcher ──────────────────────────────────────
function initLangSwitch() {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem("uiLanguage", currentLang);
      document.querySelectorAll(".lang-btn").forEach(b =>
        b.classList.toggle("active", b.dataset.lang === currentLang));
      applyTranslations();
      loadGuide(currentProvider, false);
    });
  });
}

// ── Provider tabs ──────────────────────────────────────────
function initProviderTabs() {
  document.querySelectorAll(".provider-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      currentProvider = tab.dataset.provider;
      document.querySelectorAll(".provider-tab").forEach(t =>
        t.classList.toggle("active", t.dataset.provider === currentProvider));
      loadGuide(currentProvider);
    });
  });
}

// ── Init ───────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initCanvas();
  initNav();
  initLangSwitch();
  initProviderTabs();
  applyTranslations();
  loadGuide(currentProvider, false);
  // small delay so step reveal plays on initial load
  setTimeout(initScrollReveal, 100);
});
