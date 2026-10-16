import { Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'android-smartphones',
    name: 'Android et smartphones',
    slug: 'android-smartphones',
    description: 'Tutoriels, astuces et réglages pour Tecno, Infinix, Samsung, Xiaomi et Itel.',
    iconName: 'Smartphone',
    articleCount: 14
  },
  {
    id: 'whatsapp-reseaux',
    name: 'WhatsApp et réseaux sociaux',
    slug: 'whatsapp-reseaux',
    description: 'Sécurité de compte, sauvegarde, gestion des médias et confidentialité.',
    iconName: 'MessageCircle',
    articleCount: 12
  },
  {
    id: 'applications-utiles',
    name: 'Applications utiles',
    slug: 'applications-utiles',
    description: 'Sélection d’applications légères, productivité et outils indispensables en Afrique.',
    iconName: 'Layers',
    articleCount: 9
  },
  {
    id: 'internet-economies',
    name: 'Internet et économies de données',
    slug: 'internet-economies',
    description: 'Réduire sa consommation de Mo, forfaits avantageux et astuces de compression.',
    iconName: 'Wifi',
    articleCount: 11
  },
  {
    id: 'mobile-money',
    name: 'Mobile money et paiements numériques',
    slug: 'mobile-money',
    description: 'Orange Money, MTN MoMo, Wave, Moov Money, Airtel : sécurité et guides pratiques.',
    iconName: 'CreditCard',
    articleCount: 8
  },
  {
    id: 'securite-depannage',
    name: 'Sécurité et dépannage',
    slug: 'securite-depannage',
    description: 'Résolution de pannes, alertes arnaques, faux SMS et protection de vos données.',
    iconName: 'ShieldAlert',
    articleCount: 10
  },
  {
    id: 'guides-pays',
    name: 'Guides pratiques par pays',
    slug: 'guides-pays',
    description: 'Fiches et codes USSD spécifiques au Togo, Bénin, Côte d’Ivoire, Sénégal, Cameroun et RDC.',
    iconName: 'Globe',
    articleCount: 6
  }
];
