# Guide d’Administration et de Déploiement : Aide Mobile Afrique

Bienvenue sur la documentation technique et éditoriale de **Aide Mobile Afrique**. Ce guide vous explique comment gérer le contenu, brancher votre domaine personnalisé et activer la monétisation publicitaire.

---

## 1. Structure du Projet

```text
/
├── public/
│   ├── robots.txt            # Directives pour moteurs de recherche (Googlebot)
│   └── sitemap.xml           # Plan de site XML SEO avec priorités et fréquences
├── src/
│   ├── assets/               # Photographies éditoriales haute définition
│   ├── components/           # Composants réutilisables (Navbar, Footer, AdSlot, SeoHead...)
│   ├── config/
│   │   └── ads.ts            # Configuration centrale de la monétisation (AdSense, Adsterra)
│   ├── context/
│   │   └── DataSaverContext  # Gestionnaire du mode économie de données pour l'Afrique
│   ├── data/
│   │   ├── articles.ts       # Base de données structurée des tutoriels complets
│   │   ├── categories.ts     # Les 7 catégories éditoriales du média
│   │   ├── countries.ts      # Fiches pays (Togo, Bénin, CI, Sénégal, Cameroun, RDC)
│   │   └── authors.ts        # Profils de l'équipe éditoriale
│   ├── pages/                # Vues de l'application (Accueil, Article, Guides Pays, etc.)
│   ├── types/                # Définitions TypeScript complètes
│   ├── App.tsx               # Routeur client hash-based et orchestration
│   └── main.tsx              # Point d'entrée React
└── index.html                # Balises OpenGraph, Twitter Cards et Schema.org
```

---

## 2. Comment Modifier ou Ajouter un Article

Tous les articles sont stockés de manière modulaire dans `src/data/articles.ts`.

Pour ajouter un nouveau tutoriel :
1. Ouvrez `src/data/articles.ts`.
2. Ajoutez un nouvel objet respectant l'interface `Article` :
```typescript
{
  id: 'art-9',
  slug: 'votre-slug-optimise-seo',
  title: 'Titre clair avec verbe d’action',
  metaTitle: 'Titre optimisé Google (50-60 car.) | Aide Mobile Afrique',
  metaDescription: 'Description persuasive (130-155 car.) pour le CTR Google.',
  category: 'android-smartphones', // ou une des 7 catégories
  featuredImage: '/src/assets/images/...',
  imageAlt: 'Description textuelle de l’image pour l’accessibilité',
  author: AUTHORS['amadou-traore'],
  publishedAt: '2026-10-16',
  updatedAt: '2026-10-16',
  readingTimeMinutes: 5,
  difficulty: 'Débutant',
  targetCountries: ['Togo', 'Bénin', 'Côte d’Ivoire'],
  summary: 'Résumé percutant du problème et de la solution...',
  tableOfContents: [
    { id: 'step-1', title: '1. Titre de l’étape' }
  ],
  steps: [
    {
      number: 1,
      title: 'Titre de l’étape',
      description: 'Explication pédagogique...',
      detailPoints: ['Action 1', 'Action 2'],
      deviceSpecificNotes: [
        { device: 'Tecno / Infinix', note: 'Précision sur HiOS...' }
      ]
    }
  ],
  precautions: ['Mise en garde contre les mauvaises manipulations'],
  proTips: ['Astuce secrète de pro'],
  faq: [
    { question: 'Question fréquente ?', answer: 'Réponse concise.' }
  ],
  relatedArticleIds: ['art-1', 'art-2']
}
```
3. Ajoutez l'URL de votre article dans `/public/sitemap.xml`.

---

## 3. Comment Ajouter ou Modifier une Catégorie

Ouvrez `src/data/categories.ts`. Ajoutez une entrée avec son `id`, son nom, son `slug`, sa description et son icône Lucide.

Les 7 catégories initiales configurées :
1. **Android et smartphones** (`android-smartphones`)
2. **WhatsApp et réseaux sociaux** (`whatsapp-reseaux`)
3. **Applications utiles** (`applications-utiles`)
4. **Internet et économies de données** (`internet-economies`)
5. **Mobile money et paiements numériques** (`mobile-money`)
6. **Sécurité et dépannage** (`securite-depannage`)
7. **Guides pratiques par pays** (`guides-pays`)

---

## 4. Connecter un Nom de Domaine Personnalisé

Pour relier un nom de domaine tel que `aidemobileafrique.com` :
1. Achetez le domaine auprès de votre registrar préféré.
2. Ajoutez les enregistrements DNS fournis par votre hébergeur (type `CNAME` ou `A`).
3. Connectez le site à **Google Search Console** :
   - Ajoutez la propriété via la balise HTML meta ou l'enregistrement DNS TXT.
   - Soumettez le fichier de sitemap : `https://votredomaine.com/sitemap.xml`.
4. Connectez **Google Analytics 4 (GA4)** :
   - Insérez votre identifiant de mesure `G-XXXXXXXXXX` dans la section `<head>` de `index.html`.

---

## 5. Intégrer un Réseau Publicitaire (Google AdSense ou Adsterra)

Le fichier `src/config/ads.ts` pilote l'ensemble des encarts publicitaires :

### Option A : Activer Google AdSense
1. Obtenez l'approbation de votre site sur [Google AdSense](https://adsense.google.com).
2. Ajoutez le script officiel dans `index.html` :
   `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossorigin="anonymous"></script>`
3. Dans `src/config/ads.ts`, passez le fournisseur en mode AdSense :
   ```typescript
   export const ADS_CONFIG = {
     provider: 'adsense',
     adsense: {
       client: 'ca-pub-XXXXXXXXXX',
       slots: {
         leaderboardTop: '1234567890',
         inArticleMid: '2345678901',
         inArticleBottom: '3456789012',
         sidebarSticky: '4567890123'
       }
     }
   };
   ```

### Option B : Activer Adsterra
1. Créez vos unités d’annonces (Banners 728x90, 300x250) sur votre tableau de bord Adsterra.
2. Intégrez les clés de zone fournies dans `src/config/ads.ts`.

---

## 6. Distinction Contenu Vérifié vs Démonstration

- **Contenu vérifié prêt à publier :**
  - Les 8 tutoriels initiaux contiennent des manipulations techniques réelles et vérifiées sur Android 9 à 15 (effacer le cache sans perdre de données, activation 2FA WhatsApp, détection des faux SMS d'expéditeur officiel, codes USSD des opérateurs en CI, Sénégal, Bénin, Togo, Cameroun et RDC).
- **Éléments de démonstration :**
  - Les formulaires de contact et d'abonnement newsletter sauvegardent actuellement les demandes dans le `localStorage` du navigateur en attendant la liaison avec un service d'envoi d'emails (ex: Resend, Brevo ou SendGrid).
