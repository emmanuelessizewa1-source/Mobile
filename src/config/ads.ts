/**
 * Configuration de la monétisation publicitaire pour Aide Mobile Afrique.
 * 
 * Ce fichier permet d'activer facilement Google AdSense, Adsterra ou un autre réseau publicitaire autorisé.
 * En mode simulation (par défaut), des encarts neutres et respectueux indiquent l'emplacement exact
 * pour les annonceurs sans afficher de fausses bannières ni perturber la lecture.
 */

export interface AdNetworkConfig {
  provider: 'simulation' | 'adsense' | 'adsterra' | 'disabled';
  adsense: {
    client: string; // ex: 'ca-pub-1234567890123456'
    slots: {
      leaderboardTop: string;
      inArticleMid: string;
      inArticleBottom: string;
      sidebarSticky: string;
    };
  };
  adsterra: {
    keyTopBanner?: string;
    keyMidArticle?: string;
    keyBottomArticle?: string;
  };
}

export const ADS_CONFIG: AdNetworkConfig = {
  provider: 'adsterra',
  adsense: {
    client: '', // Insérez votre identifiant éditeur AdSense ici
    slots: {
      leaderboardTop: '',
      inArticleMid: '',
      inArticleBottom: '',
      sidebarSticky: ''
    }
  },
  adsterra: {
    keyTopBanner: 'cdd942684a7ba8f11137b2560898d082',
    keyMidArticle: '',
    keyBottomArticle: ''
  }
};
