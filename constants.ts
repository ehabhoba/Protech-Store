
import type { Product, Review } from './types';

export const WHATSAPP_NUMBER = "+201033787515";
export const LOGO_URL = "https://i.ibb.co/q34KNNrF/logo.png";
export const FACEBOOK_PAGE = "https://www.facebook.com/profile.php?id=61583161845820";
export const EMAIL_ADDRESS = "info@protechstore.com";

export const HERO_IMAGES: string[] = [
  "https://i.postimg.cc/K4cTczBW/a%CA%BFlan-llqlm.webp",
  "https://i.postimg.cc/V5sts6nT/a%CA%BFlan-llqlm2.webp",
  "https://i.postimg.cc/YLSLdnt8/a%CA%BFlan-llshtjn-kamyra2.webp",
];

export const PRODUCTS: Product[] = [
  {
    id: "pen",
    slug: "smart-pen",
    name_en: "Protech Smart Pen",
    name_ar: "قلم Protech الذكي",
    description_en: "Premium smart pen with Full HD camera, metal body, long battery life and easy Wi‑Fi setup.",
    description_ar: "قلم ذكي فاخر بتسجيل Full HD، جسم معدني، بطارية طويلة، واتصال Wi‑Fi سهل.",
    img: "https://i.postimg.cc/K4cTczBW/a%CA%BFlan-llqlm.webp",
    highlights_en: ["Full HD 1080p", "Wi‑Fi & Local Storage", "Elegant Metal Build", "Easy Setup"],
    highlights_ar: ["جودة Full HD 1080p", "واي فاي وتخزين محلي", "هيكل معدني أنيق", "إعداد سهل"],
  },
  {
    id: "charger",
    slug: "usb-charger-cam",
    name_en: "USB Charger Camera",
    name_ar: "شاحن USB بكاميرا",
    description_en: "Discrete charger camera — plug & record, ideal for home or office monitoring.",
    description_ar: "شاحن بكاميرا مدمجة — توصيل وتشغيل، مثالي للمراقبة المنزلية والمكتبية.",
    img: "https://i.postimg.cc/YLSLdnt8/a%CA%BFlan-llshtjn-kamyra2.webp",
    highlights_en: ["Full HD 1080p", "Plug & Record", "Discrete Design", "Quick Setup"],
    highlights_ar: ["جودة Full HD 1080p", "توصيل وتسجيل فوري", "تصميم خفي", "إعداد سريع"],
  },
  {
    id: "mini",
    slug: "mini-camera",
    name_en: "Mini Portable Camera",
    name_ar: "كاميرا محمولة صغيرة",
    description_en: "Ultra-compact HD cam for travel, long battery life and reliable streaming.",
    description_ar: "كاميرا صغيرة فائقه الدقة للسفر، بطارية طويلة وبث موثوق.",
    img: "https://i.postimg.cc/q6761bpn/USB-Charger-Camera.jpg",
    highlights_en: ["Full HD 1080p", "Wi‑Fi Streaming", "Long Battery", "Lightweight"],
    highlights_ar: ["جودة Full HD 1080p", "بث عبر الواي فاي", "بطارية طويلة الأمد", "خفيفة الوزن"],
  },
];

export const REVIEWS: Review[] = [
  { name: "Ahmed M.", text_ar: "خدمة ممتازة والمنتج مطابق للوصف. أنصح بالشراء.", text_en: "Excellent service and the product matches the description. I recommend buying it.", rating: 5 },
  { name: "Mona S.", text_ar: "التوصيل كان سريع والدعم متعاون جدًا.", text_en: "Delivery was fast and the support was very helpful.", rating: 5 },
  { name: "Khaled R.", text_ar: "جودة التصنيع ممتازة — أنصح بالقلم الذكي.", text_en: "The build quality is excellent — I recommend the smart pen.", rating: 4 },
];

export const FAQ_DATA = [
    { 
        q_ar: "كيف أحصل على السعر؟", 
        q_en: "How do I get the price?",
        a_ar: "يتم تزويد الأسعار بعد التواصل عبر WhatsApp — غالبًا ما تكون هناك عروض حصرية.",
        a_en: "Prices are provided after contacting us via WhatsApp — there are often exclusive offers."
    },
    { 
        q_ar: "ما هي طرق الدفع المتاحة؟", 
        q_en: "What are the available payment methods?",
        a_ar: "الدفع نقدًا عند الاستلام، تحويل بنكي، وخيارات دفع إلكترونية حسب التوافر.",
        a_en: "Cash on delivery, bank transfer, and electronic payment options depending on availability."
    },
    { 
        q_ar: "هل يوجد ضمان على المنتجات؟", 
        q_en: "Is there a warranty on the products?",
        a_ar: "نعم، نقدم ضمان لمدة 3 أشهر ضد عيوب الصناعة (تطبق الشروط والأحكام).",
        a_en: "Yes, we offer a 3-month warranty against manufacturing defects (terms and conditions apply)."
    },
    { 
        q_ar: "ما هو الاستخدام القانوني للمنتجات؟", 
        q_en: "What is the legal use of the products?",
        a_ar: "المنتجات مخصصة للاستخدام القانوني فقط. نحن غير مسؤولين عن أي استخدام مخالف للقانون.",
        a_en: "The products are intended for legal use only. We are not responsible for any illegal use."
    },
];
