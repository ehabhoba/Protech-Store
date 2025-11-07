
import React, { useState, useEffect, useCallback } from "react";
import type { Language, Product } from './types';
import { WHATSAPP_NUMBER, LOGO_URL, HERO_IMAGES, PRODUCTS, REVIEWS, FAQ_DATA } from './constants';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';

export default function App() {
  const [lang, setLang] = useState<Language>("ar");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showOrderBar, setShowOrderBar] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => setShowOrderBar(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setHeroIndex((i) => (i + 1) % HERO_IMAGES.length), 4000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setReviewIndex((i) => (i + 1) % REVIEWS.length), 5000);
    return () => clearInterval(id);
  }, []);
  
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const t = useCallback((ar: string, en: string): string => (lang === "ar" ? ar : en), [lang]);

  const openWhatsApp = useCallback((product: Product | null) => {
    const text = lang === "ar"
      ? "مرحبًا، أود طلب " + (product?.name_ar || "منتج") + " من متجر Protech. الرجاء إرسال السعر وخيارات الشحن."
      : "Hi, I'd like to order " + (product?.name_en || "a product") + " from Protech Store. Please send the price and shipping options.";
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }, [lang]);

  const handleScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.startsWith('/') ? href.substring(1) : href;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header lang={lang} setLang={setLang} t={t} handleScroll={handleScroll} />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gray-900">
            <div className="absolute inset-0">
                {HERO_IMAGES.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt={`hero-background-${i}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${i === heroIndex ? "opacity-30" : "opacity-0"}`}
                />
                ))}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 text-center text-white">
                <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight drop-shadow-lg">{t("تقنية أنيقة لحياة عصرية","Elegant Tech for Modern Life")}</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg lg:text-xl text-gray-300 drop-shadow">{t("اكتشف أجهزة ذكية فاخرة. السعر مفاجأة عند الطلب.","Discover premium smart devices. Surprise price on order.")}</p>
                <div className="mt-8 flex justify-center gap-3 flex-wrap">
                    <a href="/products" onClick={handleScroll} className="bg-sky-600 hover:bg-sky-500 transition-colors px-6 py-3 rounded-md font-semibold shadow-lg transform hover:scale-105">{t("تسوّق المجموعة","Shop the Collection")}</a>
                    <button onClick={() => openWhatsApp(null)} className="bg-white text-gray-900 hover:bg-gray-200 transition-colors px-6 py-3 rounded-md font-semibold shadow-lg transform hover:scale-105">{t("اطلب عبر WhatsApp","Order via WhatsApp")}</button>
                </div>
                <div className="absolute bottom-6 start-1/2 -translate-x-1/2 flex gap-2">
                    {HERO_IMAGES.map((_, idx) => (
                        <button key={idx} onClick={() => setHeroIndex(idx)} className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === heroIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`} aria-label={`slide-${idx}`}></button>
                    ))}
                </div>
            </div>
        </section>

        {/* Products Section */}
        <section id="products" className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <h3 className="text-3xl lg:text-4xl font-bold mb-8 text-center">{t("المنتجات المميزة", "Featured Products")}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((p) => (
              <article key={p.id} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden">
                <div className="aspect-video w-full bg-gray-100 rounded-t-lg flex items-center justify-center overflow-hidden">
                  <img src={p.img} alt={t(p.name_ar, p.name_en)} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-4">
                        <h4 className="text-lg font-semibold">{t(p.name_ar, p.name_en)}</h4>
                        <div className="text-end flex-shrink-0">
                        <span className="text-gray-500 text-sm">{t("السعر", "Price")}</span>
                        <div className="font-bold text-sky-600">{t("مفاجأة", "Surprise")}</div>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1 flex-grow">{t(p.description_ar, p.description_en)}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                        {(lang === 'ar' ? p.highlights_ar : p.highlights_en).map((h, i) => (
                        <li key={i} className="text-xs bg-sky-100 text-sky-800 px-3 py-1 rounded-full font-medium">{h}</li>
                        ))}
                    </ul>
                    <div className="mt-6 flex gap-3">
                        <button onClick={() => setSelectedProduct(p)} className="flex-1 px-4 py-2 bg-sky-600 text-white rounded-md font-semibold hover:bg-sky-700 transition-colors">{t("عرض التفاصيل", "View Details")}</button>
                        <button onClick={() => openWhatsApp(p)} className="flex-1 px-4 py-2 border border-gray-300 rounded-md font-semibold hover:bg-gray-100 transition-colors">{t("اطلب الآن", "Order Now")}</button>
                    </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h3 className="text-3xl lg:text-4xl font-bold mb-8 text-center">{t("تقييمات العملاء", "Customer Reviews")}</h3>
            <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl shadow-lg p-8 relative overflow-hidden">
                <div className="text-center">
                    <div className="mt-3 flex items-center justify-center gap-1 text-2xl">
                        {Array.from({length: REVIEWS[reviewIndex].rating}).map((_,i)=>(<span key={i} className="text-yellow-400">⭐</span>))}
                    </div>
                    <p className="mt-4 text-gray-700 text-lg italic">"{t(REVIEWS[reviewIndex].text_ar, REVIEWS[reviewIndex].text_en)}"</p>
                    <div className="text-lg font-semibold mt-6">{REVIEWS[reviewIndex].name}</div>
                </div>
                <button onClick={() => setReviewIndex((reviewIndex - 1 + REVIEWS.length) % REVIEWS.length)} className="absolute top-1/2 -translate-y-1/2 start-4 p-2 border rounded-full bg-white/50 hover:bg-white/80 transition-colors" aria-label={t('السابق','Previous')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transform ${lang === 'ar' ? '' : 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
                <button onClick={() => setReviewIndex((reviewIndex + 1) % REVIEWS.length)} className="absolute top-1/2 -translate-y-1/2 end-4 p-2 border rounded-full bg-white/50 hover:bg-white/80 transition-colors" aria-label={t('التالي','Next')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transform ${lang === 'ar' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl p-6 bg-white shadow-md text-center">
              <h4 className="font-bold text-xl">{t("لماذا Protech؟", "Why Protech?")}</h4>
              <p className="mt-2 text-gray-600">{t("منتجات فاخرة، دعم موثوق، وشحن سريع لجميع أنحاء البلاد.", "Premium products, reliable support, and fast nationwide shipping.")}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li className="flex items-center justify-center gap-2">✅ {t("دعم فني 24/7", "24/7 Tech Support")}</li>
                <li className="flex items-center justify-center gap-2">✅ {t("ضمان جودة المنتجات", "Quality Guarantee")}</li>
                <li className="flex items-center justify-center gap-2">✅ {t("طلبات آمنة وموثوقة", "Secure & Safe Orders")}</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6 bg-white shadow-md text-center">
              <h4 className="font-bold text-xl">{t("الشحن والتوصيل", "Shipping & Delivery")}</h4>
              <p className="mt-2 text-gray-600">{t("نقدم شحنًا لجميع المحافظات مع إمكانية تتبع الشحنة وخيار التوصيل السريع.", "We ship to all governorates with tracking and an express delivery option.")}</p>
            </div>
            <div className="rounded-2xl p-6 bg-white shadow-md text-center">
              <h4 className="font-bold text-xl">{t("الخصوصية والقانون", "Privacy & Legality")}</h4>
              <p className="mt-2 text-gray-600">{t("منتجاتنا مخصصة للاستخدام القانوني فقط. يرجى احترام الخصوصية والقوانين المحلية.", "Our products are for legal use only. Please respect privacy and local laws.")}</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <h3 className="text-3xl font-bold mb-8 text-center">{t("الأسئلة المتكررة", "Frequently Asked Questions")}</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <details key={i} className="bg-white p-4 rounded-2xl shadow-md cursor-pointer transition-all open:ring-2 open:ring-sky-200">
                <summary className="font-semibold text-lg list-none flex justify-between items-center">
                  {t(faq.q_ar, faq.q_en)}
                  <svg className="w-5 h-5 transition-transform transform details-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="mt-3 text-gray-600">{t(faq.a_ar, faq.a_en)}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <div className={`fixed inset-x-4 bottom-4 z-50 transition-transform duration-500 ${showOrderBar ? "translate-y-0" : "translate-y-40"}`}>
        <div className="max-w-xl mx-auto bg-gradient-to-r from-sky-600 to-emerald-500 text-white px-5 py-3 rounded-full shadow-2xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="logo" className="w-10 h-10 rounded-md object-contain bg-white/20 p-1" />
            <div>
              <div className="font-bold">{t("اطلب الآن عبر WhatsApp", "Order Now via WhatsApp")}</div>
              <div className="text-sm opacity-90">{WHATSAPP_NUMBER}</div>
            </div>
          </div>
          <button onClick={() => openWhatsApp(null)} className="bg-white text-gray-900 px-5 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors flex-shrink-0">{t("تواصل", "Contact")}</button>
        </div>
      </div>
      
      <Footer t={t} handleScroll={handleScroll} />

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} openWhatsApp={openWhatsApp} t={t} lang={lang} />
    </div>
  );
}