import { Author } from '../types';

export const AUTHORS: Record<string, Author> = {
  'amadou-traore': {
    id: 'amadou-traore',
    name: 'Amadou Traoré',
    role: 'Rédacteur en chef & Spécialiste Android',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&h=240&q=80',
    bio: 'Ingénieur en télécommunications basé à Abidjan. Passionné par l’optimisation des terminaux Android abordables, la résilience réseau et l’accessibilité numérique en Afrique subsaharienne.',
    country: 'Côte d’Ivoire',
    articlesCount: 5
  },
  'marie-pascale': {
    id: 'marie-pascale',
    name: 'Marie-Pascale Akissi',
    role: 'Journaliste Tech & Experte Mobile Money',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&h=240&q=80',
    bio: 'Consultante en sécurité numérique et journaliste d’investigation tech basée entre Cotonou et Lomé. Elle teste rigoureusement les arnaques de faux dépôts, WhatsApp et la protection des données personnelles.',
    country: 'Bénin / Togo',
    articlesCount: 3
  }
};
