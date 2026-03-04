/* ══════════════════════════════════════════════════════════
   Selection Translate AI — Subscription page script
   ══════════════════════════════════════════════════════════ */

// ── i18n ──────────────────────────────────────────────────
const T = {
  ru: {
    nav_alt:      "Без лимитов",
    nav_guide:    "Инструкция",
    nav_privacy:  "Приватность",
    badge:        "Скоро",
    hero_title:   "Подписка\nв разработке",
    hero_sub:     "Пока план подписки готовится, вы уже можете убрать все ограничения прямо сейчас — просто подключите свой API ключ.",
    hero_cta:     "Узнать как →",
    alt_tag:      "Доступно прямо сейчас",
    alt_title:    "Неограниченные переводы уже сегодня",
    alt_sub:      "Подключи свой API ключ от любого поддерживаемого AI провайдера — и лимит 30 переводов в день перестаёт действовать. Расширение не накладывает никаких ограничений со своей стороны: лимиты определяются только балансом вашего API ключа.",
    feat1_title:  "4 провайдера на выбор",
    feat1_text:   "OpenAI, Anthropic, Google Gemini и xAI Grok — выбери любого, который подходит именно тебе.",
    feat2_title:  "Без лимитов от расширения",
    feat2_text:   "Расширение не ограничивает количество переводов. Лимиты зависят только от твоего API баланса.",
    feat3_title:  "Приватно и безопасно",
    feat3_text:   "API ключ хранится в кэше твоего браузера и никогда не передаётся третьим лицам.",
    feat4_title:  "Быстрая настройка",
    feat4_text:   "Получить API ключ и настроить расширение можно за 2–3 минуты. Никакой сложной конфигурации.",
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
    free_label:   "💡 Бесплатный tier:",
    paid_label:   "💳 Нужен баланс:",
    warn_once:    "Ключ показывается только один раз — скопируй немедленно!",
    final_hint:   "Попап расширения → «Свой API ключ» → выбери провайдера → вставь ключ → «Проверить ключ»",
    open_site:    "Открыть сайт ↗",
    popup_connection: "Подключение:",
    popup_server:     "Через сервер",
    popup_subscribe:  "Купить подписку",
    popup_own_key:    "Свой API ключ",
    popup_own_hint:   "Прямые запросы к AI провайдеру без лимитов",
    popup_provider:   "Провайдер:",
    popup_model:      "Модель:",
    popup_api_key:    "API ключ:",
    popup_check_btn:  "Проверить ключ",
    popup_key_valid:  "✅ Ключ действителен",
  },
  en: {
    nav_alt:      "No limits",
    nav_guide:    "Guide",
    nav_privacy:  "Privacy",
    badge:        "Soon",
    hero_title:   "Subscription\nin development",
    hero_sub:     "While the subscription plan is being prepared, you can remove all limits right now — just connect your own API key.",
    hero_cta:     "Learn how →",
    alt_tag:      "Available right now",
    alt_title:    "Unlimited translations today",
    alt_sub:      "Connect your own API key from any supported AI provider — and the 30 translations/day limit no longer applies. The extension imposes no limits on its side: limits depend only on your API key balance.",
    feat1_title:  "4 providers to choose from",
    feat1_text:   "OpenAI, Anthropic, Google Gemini and xAI Grok — choose whichever suits you best.",
    feat2_title:  "No limits from the extension",
    feat2_text:   "The extension doesn't limit your translation count. Limits depend only on your API balance.",
    feat3_title:  "Private and secure",
    feat3_text:   "Your API key is stored in your browser cache and never transmitted to any third party.",
    feat4_title:  "Quick setup",
    feat4_text:   "Get an API key and configure the extension in just 2–3 minutes. No complex configuration.",
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
    free_label:   "💡 Free tier:",
    paid_label:   "💳 Balance required:",
    warn_once:    "The key is shown only once — copy it immediately!",
    final_hint:   "Extension popup → «Own API key» → select provider → paste key → «Check key»",
    open_site:    "Open site ↗",
    popup_connection: "Connection:",
    popup_server:     "Via server",
    popup_subscribe:  "Buy subscription",
    popup_own_key:    "Own API key",
    popup_own_hint:   "Direct requests to AI provider, no extension limits",
    popup_provider:   "Provider:",
    popup_model:      "Model:",
    popup_api_key:    "API key:",
    popup_check_btn:  "Check key",
    popup_key_valid:  "✅ Key is valid",
  },
  es: {
    nav_alt:      "Sin límites",
    nav_guide:    "Guía",
    nav_privacy:  "Privacidad",
    badge:        "Próximamente",
    hero_title:   "Suscripción\nen desarrollo",
    hero_sub:     "Mientras se prepara el plan de suscripción, ya puedes eliminar todos los límites ahora mismo — simplemente conecta tu propia clave API.",
    hero_cta:     "Cómo hacerlo →",
    alt_tag:      "Disponible ahora mismo",
    alt_title:    "Traducciones ilimitadas hoy",
    alt_sub:      "Conecta tu propia clave API de cualquier proveedor de IA compatible — y el límite de 30 traducciones/día ya no se aplica. La extensión no impone ningún límite por su parte: los límites dependen únicamente del saldo de tu clave API.",
    feat1_title:  "4 proveedores a elegir",
    feat1_text:   "OpenAI, Anthropic, Google Gemini y xAI Grok — elige el que mejor se adapte a ti.",
    feat2_title:  "Sin límites de la extensión",
    feat2_text:   "La extensión no limita el número de traducciones. Los límites dependen solo de tu saldo API.",
    feat3_title:  "Privado y seguro",
    feat3_text:   "Tu clave API se guarda en la caché del navegador y nunca se transmite a terceros.",
    feat4_title:  "Configuración rápida",
    feat4_text:   "Obtén una clave API y configura la extensión en solo 2–3 minutos. Sin configuraciones complejas.",
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
    free_label:   "💡 Nivel gratuito:",
    paid_label:   "💳 Requiere saldo:",
    warn_once:    "¡La clave se muestra solo una vez — cópiala inmediatamente!",
    final_hint:   "Popup → «Mi clave API» → selecciona proveedor → pega la clave → «Verificar clave»",
    open_site:    "Abrir sitio ↗",
    popup_connection: "Conexión:",
    popup_server:     "A través del servidor",
    popup_subscribe:  "Comprar suscripción",
    popup_own_key:    "Clave API propia",
    popup_own_hint:   "Solicitudes directas al proveedor de IA, sin límites",
    popup_provider:   "Proveedor:",
    popup_model:      "Modelo:",
    popup_api_key:    "Clave API:",
    popup_check_btn:  "Verificar clave",
    popup_key_valid:  "✅ Clave válida",
  },
  zh: {
    nav_alt:      "无限制",
    nav_guide:    "使用指南",
    nav_privacy:  "隐私",
    badge:        "即将推出",
    hero_title:   "订阅功能\n开发中",
    hero_sub:     "在订阅计划准备期间，您现在就可以解除所有限制——只需连接您自己的API密钥即可。",
    hero_cta:     "了解如何操作 →",
    alt_tag:      "立即可用",
    alt_title:    "今天就实现无限翻译",
    alt_sub:      "连接来自任何受支持AI提供商的API密钥——每天30次翻译的限制将不再适用。扩展程序本身不施加任何限制：限制仅取决于您的API密钥余额。",
    feat1_title:  "4个提供商可选",
    feat1_text:   "OpenAI、Anthropic、Google Gemini和xAI Grok——选择最适合您的。",
    feat2_title:  "扩展程序无限制",
    feat2_text:   "扩展程序不限制翻译数量。限制仅取决于您的API余额。",
    feat3_title:  "私密且安全",
    feat3_text:   "API密钥存储在您的浏览器缓存中，永远不会传输给第三方。",
    feat4_title:  "快速设置",
    feat4_text:   "只需2-3分钟即可获取API密钥并配置扩展程序。无需复杂配置。",
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
    free_label:   "💡 免费层级：",
    paid_label:   "💳 需要余额：",
    warn_once:    "密钥只显示一次——请立即复制！",
    final_hint:   "扩展弹窗 → «自己的API密钥» → 选择提供商 → 粘贴密钥 → «验证密钥»",
    open_site:    "打开网站 ↗",
    popup_connection: "连接方式:",
    popup_server:     "通过服务器",
    popup_subscribe:  "购买订阅",
    popup_own_key:    "自定义API密钥",
    popup_own_hint:   "直接向AI提供商发送请求，无扩展限制",
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
      ru: "При регистрации новые пользователи получают $5 бесплатных кредитов — этого хватит на тысячи переводов с Claude Haiku.",
      en: "New users receive $5 in free credits on signup — enough for thousands of translations with Claude Haiku.",
      es: "Los nuevos usuarios reciben $5 en créditos gratuitos al registrarse — suficiente para miles de traducciones con Claude Haiku.",
      zh: "新用户注册时获得$5免费积分——足够使用Claude Haiku进行数千次翻译。",
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
      ru: "xAI периодически предоставляет бесплатные кредиты новым пользователям. В остальных случаях необходимо пополнить баланс.",
      en: "xAI periodically provides free credits to new users. Otherwise, a balance top-up is required.",
      es: "xAI periódicamente otorga créditos gratuitos a nuevos usuarios. De lo contrario, se requiere recarga de saldo.",
      zh: "xAI定期向新用户提供免费积分。否则需要充值余额。",
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
let currentLang = localStorage.getItem("uiLanguage") || "ru";
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
  document.title = "Selection Translate AI – " + (currentLang === "ru" ? "Инструкция по API ключам" :
    currentLang === "es" ? "Guía de claves API" :
    currentLang === "zh" ? "API密钥指南" : "API Keys Guide");
}


// Provider display names (for popup mockup)
const PROVIDER_DISPLAY = {
  openai:    { label: "OpenAI (ChatGPT)",    model: "GPT-4o Mini",       key: "sk-proj-••••••••••••••••" },
  anthropic: { label: "Anthropic (Claude)",   model: "Claude 3.5 Haiku",  key: "sk-ant-api03-•••••••••••" },
  google:    { label: "Google AI (Gemini)",   model: "Gemini 2.5 Flash",  key: "AIzaSy••••••••••••••••••" },
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
  return `<div class="popup-mockup">

    <div class="pm-topbar">
      <div class="pm-flags">🇷🇺🇬🇧🇪🇸🇨🇳</div>
      <label class="pm-toggle-wrap"><div class="pm-toggle"></div></label>
    </div>

    <div class="pm-body">
      <div class="pm-card">
        <div class="pm-section-label">${t("popup_connection")}</div>

        <div class="pm-server-row">
          <div class="pm-radio-opt pm-inactive">
            <div class="pm-radio-circle"></div>
            <div class="pm-opt-text">
              <span class="pm-opt-title">${t("popup_server")}</span>
            </div>
          </div>
          <div class="pm-subscribe-chip">${t("popup_subscribe")}</div>
        </div>

        <div class="pm-radio-opt pm-active">
          <div class="pm-radio-circle pm-radio-filled"></div>
          <div class="pm-opt-text">
            <span class="pm-opt-title">${t("popup_own_key")}</span>
            <span class="pm-opt-hint">${t("popup_own_hint")}</span>
          </div>
        </div>

        <div class="pm-own-panel">
          <div class="pm-field">
            <div class="pm-field-label">${t("popup_provider")}</div>
            <div class="pm-select-mock">${pd.label} <span class="pm-caret">▾</span></div>
          </div>
          <div class="pm-field">
            <div class="pm-field-label">${t("popup_model")}</div>
            <div class="pm-select-mock">${pd.model} <span class="pm-caret">▾</span></div>
          </div>
          <div class="pm-field">
            <div class="pm-field-label">${t("popup_api_key")}</div>
            <div class="pm-key-row">
              <div class="pm-key-input">${pd.key}</div>
              <div class="pm-eye-btn">👁</div>
            </div>
          </div>
          <div class="pm-check-btn">${t("popup_check_btn")}</div>
          <div class="pm-key-status">${t("popup_key_valid")}</div>
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
