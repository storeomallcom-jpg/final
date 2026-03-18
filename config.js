// ============================================================
//  B-CHAT GLOBAL — Central Configuration
//  Replace with your own credentials
// ============================================================

const BCHAT_CONFIG = {
  SUPABASE_URL:    'https://umeqesoepiflnjnyfssg.supabase.co',
  SUPABASE_ANON:   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtZXFlc29lcGlmbG5qbnlmc3NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4MjMwMjAsImV4cCI6MjA4OTM5OTAyMH0.T6m2hi0XoO5NAl3DRaBSG36vP8JM3mgIldNHgYufm1g',
  GROQ_API_KEY:    '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',
  GROQ_MODEL:      'qwen/qwen3-32b',               // or any Groq model
  BASE_URL:        'https://yourdomain.com',       // where the app is hosted
  APP_NAME:        'B-Chat Global',
  DEFAULT_COLOR:   '#6366f1',
};

// ── TRANSLATIONS (shared across all pages) ──────────────────
const I18N = {
  en: {
    dir: 'ltr',
    trial_expired: 'Your trial has ended.',
    no_messages: 'Message balance is zero.',
    enter_license: 'Enter 16‑digit license key',
    redeem: 'Redeem',
    license_valid: 'License activated!',
    license_invalid: 'Invalid or already used code.',
    days_left: 'days left',
    msgs_left: 'messages left',
  },
  ar: {
    dir: 'rtl',
    trial_expired: 'انتهت الفترة التجريبية.',
    no_messages: 'رصيد الرسائل صفر.',
    enter_license: 'أدخل مفتاح الترخيص (16 رقم)',
    redeem: 'تفعيل',
    license_valid: 'تم تفعيل الترخيص!',
    license_invalid: 'رمز غير صالح أو مستخدم بالفعل.',
    days_left: 'يوم متبقي',
    msgs_left: 'رسالة متبقية',
  },
  fr: {
    dir: 'ltr',
    trial_expired: 'Votre essai a expiré.',
    no_messages: 'Solde de messages épuisé.',
    enter_license: 'Entrez la clé de licence 16 chiffres',
    redeem: 'Activer',
    license_valid: 'Licence activée !',
    license_invalid: 'Code invalide ou déjà utilisé.',
    days_left: 'jours restants',
    msgs_left: 'messages restants',
  },
  es: {
    dir: 'ltr',
    trial_expired: 'Tu prueba ha terminado.',
    no_messages: 'Saldo de mensajes agotado.',
    enter_license: 'Ingrese la clave de licencia de 16 dígitos',
    redeem: 'Canjear',
    license_valid: '¡Licencia activada!',
    license_invalid: 'Código inválido o ya usado.',
    days_left: 'días restantes',
    msgs_left: 'mensajes restantes',
  },
  de: {
    dir: 'ltr',
    trial_expired: 'Ihre Testphase ist abgelaufen.',
    no_messages: 'Nachrichtenguthaben aufgebraucht.',
    enter_license: '16-stelligen Lizenzschlüssel eingeben',
    redeem: 'Einlösen',
    license_valid: 'Lizenz aktiviert!',
    license_invalid: 'Ungültiger oder bereits verwendeter Code.',
    days_left: 'Tage verbleibend',
    msgs_left: 'verbleibende Nachrichten',
  },
  sv: {
    dir: 'ltr',
    trial_expired: 'Din provperiod har löpt ut.',
    no_messages: 'Meddelandesaldo är noll.',
    enter_license: 'Ange 16-siffrig licensnyckel',
    redeem: 'Lös in',
    license_valid: 'Licens aktiverad!',
    license_invalid: 'Ogiltig eller redan använd kod.',
    days_left: 'dagar kvar',
    msgs_left: 'meddelanden kvar',
  },
};

// ── LANGUAGE HELPERS ─────────────────────────────────────────
function getLang() {
  return localStorage.getItem('bchat_lang') || 'en';
}
function setLang(lang) {
  localStorage.setItem('bchat_lang', lang);
  applyLang(lang);
}
function t(key) {
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) ? I18N[lang][key] : (I18N.en[key] || key);
}
function applyLang(lang) {
  const d = I18N[lang] || I18N.en;
  document.documentElement.setAttribute('dir', d.dir);
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (d[key]) el.textContent = d[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (d[key]) el.placeholder = d[key];
  });
}

// ── SUPABASE CLIENT FACTORY ──────────────────────────────────
function createSupabase() {
  return supabase.createClient(BCHAT_CONFIG.SUPABASE_URL, BCHAT_CONFIG.SUPABASE_ANON);
}
