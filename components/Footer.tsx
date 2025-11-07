
import React from 'react';
import { LOGO_URL, WHATSAPP_NUMBER, FACEBOOK_PAGE, EMAIL_ADDRESS } from '../constants';

interface FooterProps {
  t: (ar: string, en: string) => string;
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Footer: React.FC<FooterProps> = ({ t, handleScroll }) => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <img src={LOGO_URL} alt={t("شعار متجر Protech", "Protech Store Logo")} className="w-24 mb-4 bg-white/10 rounded-lg p-2" />
          <p className="text-gray-400 text-sm">{t("متجر Protech — أجهزة ذكية وأدوات أمان فاخرة.", "Protech Store — Premium smart devices and security tools.")}</p>
        </div>
        <div>
          <h5 className="font-semibold text-white mb-3">{t("روابط سريعة", "Quick Links")}</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="/products" onClick={handleScroll} className="text-gray-400 hover:text-white">{t("المنتجات", "Products")}</a></li>
            <li><a href="/faq" onClick={handleScroll} className="text-gray-400 hover:text-white">{t("الأسئلة المتكررة", "FAQ")}</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-white mb-3">{t("تواصل معنا", "Contact Us")}</h5>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium text-gray-400">WhatsApp:</span> <a href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}`} className="text-emerald-400 hover:underline">{WHATSAPP_NUMBER}</a></li>
            <li><span className="font-medium text-gray-400">Facebook:</span> <a href={FACEBOOK_PAGE} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">{t("صفحتنا", "Our Page")}</a></li>
            <li><span className="font-medium text-gray-400">Email:</span> <a href={`mailto:${EMAIL_ADDRESS}`} className="text-emerald-400 hover:underline">{EMAIL_ADDRESS}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-sm text-gray-500 py-6 text-center">
          © {new Date().getFullYear()} Protech Store. {t("جميع الحقوق محفوظة.", "All rights reserved.")}
        </div>
      </div>
    </footer>
  );
};