// --- الأكواد الصالحة ---
let validCodes = JSON.parse(localStorage.getItem('validCodes')) || [
  "WPX7-M2A9-KL4R",
  "TR8D-N3P5-QW2E",
  "9L2M-P4X7-VV6T",
  "K3N9-L8M4-RC7X",
  "WPRO-VIP-2025",
  "ALPHA-7X-M9N2",
  "BETA-4K-8L3P",
  "SIGMA-Q2-R8T6",
  "OMEGA-5N-9M4K",
  "LUX7-P3Q-9R2T"
];

let userType = 'normal';
let profit = 980;
let countdownInterval;

// --- الترجمة ---
const arTranslations = {
  "tagline": "إشارات تداول حية | الدقة والقوة | 🎯 دقة: 80%",
  "activate_screen": "دخول WILLIAM PRO",
  "enter_code": "أدخل كود التفعيل للدخول",
  "activate_button": "تفعيل النظام",
  "error_message": "كود خاطئ!",
  "generate_button": "🎯 توليد إشارة حية",
  "profit_counter": "📈 أرباح الفريق اليوم: {profit}",
  "market_closed": "⚠️ السوق مغلق حاليًا",
  "about_link": "عن النظام",
  "about_tagline": "للتداول الآمن والفعال",
  "about_title": "عن WILLIAM PRO SIGNALS",
  "about_description": "تم تطوير هذا النظام من قبل المتداول المحترف <strong>W
