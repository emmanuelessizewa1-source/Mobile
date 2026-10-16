export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  country: string;
  articlesCount: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
  detailPoints?: string[];
  deviceSpecificNotes?: {
    device: string;
    note: string;
  }[];
  warning?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: CategoryId;
  featuredImage: string;
  imageAlt: string;
  author: Author;
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
  targetCountries?: string[];
  isFeatured?: boolean;
  isTrending?: boolean;
  viewsCount: number;
  summary: string;
  prerequisites?: string[];
  tableOfContents: {
    id: string;
    title: string;
  }[];
  steps: StepItem[];
  precautions: string[];
  proTips: string[];
  faq: FAQItem[];
  relatedArticleIds: string[];
}

export type CategoryId =
  | 'android-smartphones'
  | 'whatsapp-reseaux'
  | 'applications-utiles'
  | 'internet-economies'
  | 'mobile-money'
  | 'securite-depannage'
  | 'guides-pays';

export interface Category {
  id: CategoryId;
  name: string;
  slug: string;
  description: string;
  iconName: string;
  articleCount: number;
}

export interface CountryInfo {
  code: string;
  name: string;
  flag: string;
  currency: string;
  currencyCode: string;
  popularOperators: string[];
  mobileMoneyServices: string[];
  emergencyContacts: {
    police: string;
    cybercrime?: string;
  };
}

export type AdSlotType = 'leaderboard_top' | 'in_article_mid' | 'in_article_bottom' | 'sidebar_sticky';
