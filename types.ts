
export type Language = "ar" | "en";

export interface Product {
  id: string;
  slug: string;
  name_en: string;
  name_ar: string;
  description_en: string;
  description_ar: string;
  img: string;
  highlights_en: string[];
  highlights_ar: string[];
}

export interface Review {
  name: string;
  text_ar: string;
  text_en: string;
  rating: number;
}
