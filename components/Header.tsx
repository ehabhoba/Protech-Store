
import React from 'react';
import type { Language } from '../types';
import { LOGO_URL, WHATSAPP_NUMBER } from '../constants';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (ar: string, en: string) => string;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, t }) => {
  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src={LOGO_URL} alt={t("شعار متجر Protech", "Protech Store Logo")} className="w-14 h-14 object-contain rounded-md" />
            <div>
              <h1 className="text-xl font-extrabold text-gray-900">Protech Store</h1>
              <p className="text-xs text-gray-500">{t("أجهزة ذكية • جودة ومتانة", "Smart Devices • Quality & Durability")}</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            <a href="#products" className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">{t("المنتجات", "Products")}</a>
            <a href="#reviews" className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">{t("التقييمات", "Reviews")}</a>
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">{t("المميزات", "Features")}</a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">{t("الأسئلة", "FAQ")}</a>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setLang(lang === "ar" ? "en" : "ar")} 
              className="px-3 py-2 border border-gray-300 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              {lang === "ar" ? "EN" : "عربي"}
            </button>
            <a href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}`} className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition-colors hidden sm:block">
              {t("اتصل على واتساب", "Contact on WhatsApp")}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
