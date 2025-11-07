
import React, { useEffect } from 'react';
import type { Product, Language } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  openWhatsApp: (product: Product) => void;
  t: (ar: string, en: string) => string;
  lang: Language;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, openWhatsApp, t, lang }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 animate-fade-in" 
      role="dialog" 
      aria-modal="true"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full p-6 lg:p-8 shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-gray-100 rounded-xl flex items-center justify-center p-4">
            <img src={product.img} alt={t(product.name_ar, product.name_en)} className="max-h-[400px] object-contain rounded-lg" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl lg:text-3xl font-bold">{t(product.name_ar, product.name_en)}</h3>
            <p className="mt-3 text-gray-600">{t(product.description_ar, product.description_en)}</p>
            
            <h4 className="font-semibold mt-6 mb-3">{t("أهم المميزات:", "Key Features:")}</h4>
            <ul className="space-y-2 text-sm">
              {(lang === 'ar' ? product.highlights_ar : product.highlights_en).map((h, i) => (
                <li key={i} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
                <p className="text-sm text-gray-500 text-center mb-3">{t("السعر: مفاجأة — احصل على أفضل عرض عبر WhatsApp", "Price: Surprise — Get the best offer on WhatsApp")}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <button onClick={() => openWhatsApp(product)} className="flex-1 bg-green-600 text-white px-5 py-3 rounded-md font-bold hover:bg-green-700 transition-colors">{t("اطلب عبر WhatsApp", "Order via WhatsApp")}</button>
                    <button onClick={onClose} className="flex-1 px-5 py-3 border border-gray-300 rounded-md font-semibold hover:bg-gray-100 transition-colors">{t("إغلاق", "Close")}</button>
                </div>
            </div>

          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
        details[open] .details-arrow { transform: rotate(180deg); }
      `}</style>
    </div>
  );
};
