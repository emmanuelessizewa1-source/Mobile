import { Article } from '../types';
import { AUTHORS } from './authors';

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'liberer-espace-stockage-android',
    title: 'Comment libérer de l’espace sur un téléphone Android sans supprimer ses photos',
    metaTitle: 'Libérer de l’espace sur Android sans supprimer de photos | Aide Mobile Afrique',
    metaDescription: 'Guide pratique pour vider la mémoire saturée de votre téléphone Android : astuces WhatsApp, cache, carte SD et fichiers cachés sur Tecno, Infinix et Samsung.',
    category: 'android-smartphones',
    featuredImage: '/src/assets/images/hero_smartphone_africa_1792188805715.jpg',
    imageAlt: 'Utilisateur nettoyant la mémoire saturée de son téléphone Android',
    author: AUTHORS['amadou-traore'],
    publishedAt: '2026-10-15',
    updatedAt: '2026-10-15',
    readingTimeMinutes: 6,
    difficulty: 'Débutant',
    targetCountries: ['Togo', 'Bénin', 'Côte d’Ivoire', 'Sénégal', 'Cameroun', 'RDC'],
    isFeatured: true,
    isTrending: true,
    viewsCount: 14820,
    summary: 'La notification « Espace de stockage presque saturé » bloque les mises à jour et ralentit les téléphones équipés de 32 Go ou 64 Go de stockage. Voici une méthode rigoureuse pour récupérer entre 3 Go et 10 Go sans effacer un seul souvenir précieux.',
    prerequisites: [
      'Un smartphone sous Android 9 ou supérieur (Samsung, Tecno, Infinix, Xiaomi, itel, etc.)',
      'L’application gratuite Files by Google (ou le gestionnaire de fichiers officiel)'
    ],
    tableOfContents: [
      { id: 'step-1', title: '1. Nettoyer les doublons invisibles de WhatsApp' },
      { id: 'step-2', title: '2. Vider le cache des applications volumineuses' },
      { id: 'step-3', title: '3. Utiliser l’analyse intelligente de Files by Google' },
      { id: 'step-4', title: '4. Transférer ou sauvegarder ses photos sur le Cloud' },
      { id: 'step-5', title: '5. La vérité sur les cartes MicroSD sur Android' },
      { id: 'precautions', title: 'Précautions importantes et limites' },
      { id: 'faq', title: 'Questions fréquentes (FAQ)' }
    ],
    steps: [
      {
        number: 1,
        title: 'Nettoyer les doublons invisibles de WhatsApp',
        description: 'WhatsApp est le premier coupable de la saturation des téléphones en Afrique francophone. Chaque vidéo ou note vocale que vous envoyez dans un groupe est dupliquée sur votre stockage interne.',
        detailPoints: [
          'Ouvrez WhatsApp, touchez les trois points en haut à droite > Paramètres > Utilisation des données et du stockage > Gérer le stockage.',
          'Consultez la section « Plus de 5 Mo » : supprimez les vidéos transférées plusieurs fois qui encombrent la mémoire.',
          'Regardez les discussions les plus volumineuses (souvent les groupes familiaux ou associatifs) et supprimez uniquement les médias, sans effacer les messages textes importants.'
        ],
        deviceSpecificNotes: [
          {
            device: 'Tecno / Infinix (HiOS & XOS)',
            note: 'Dans Phone Master, utilisez la fonction WhatsApp Cleaner avec modération pour ne pas effacer vos notes vocales personnelles importantes.'
          },
          {
            device: 'Samsung (One UI)',
            note: 'Vérifiez la corbeille de l’application Galerie Samsung qui conserve les photos supprimées pendant 30 jours dans la mémoire interne.'
          }
        ]
      },
      {
        number: 2,
        title: 'Vider le cache des applications volumineuses (TikTok, Facebook, Chrome)',
        description: 'Le cache stocke des fichiers temporaires pour accélérer l’affichage, mais sur TikTok, Facebook ou YouTube, il peut vite dépasser 3 Go.',
        detailPoints: [
          'Allez dans Paramètres > Applications (ou Gestion des applications).',
          'Triez par taille ou sélectionnez manuellement TikTok, Facebook Lite, Chrome et Instagram.',
          'Touchez « Espace de stockage et cache », puis appuyez UNIQUEMENT sur « Vider le cache ». N’appuyez pas sur « Effacer les données » sous peine de devoir vous reconnecter.'
        ],
        warning: 'Ne téléchargez jamais d’applications tierces de type "Clean Master" ou "Speed Booster" depuis le Play Store : elles consomment de la batterie et affichent des publicités invasives.'
      },
      {
        number: 3,
        title: 'Utiliser l’analyse intelligente de Files by Google',
        description: 'Files by Google est l’outil officiel le plus sûr et le plus léger pour trouver les fichiers oubliés sans risque de supprimer des fichiers système essentiels.',
        detailPoints: [
          'Installez ou ouvrez « Files by Google » (présent nativement sur la plupart des téléphones Android One et Android Go).',
          'Allez dans l’onglet « Nettoyer » en bas à gauche.',
          'Confirmez la suppression des « Fichiers temporaires », des « Mèmes / Images téléchargées » et des fichiers APK obsolètes installés manuellement.'
        ]
      },
      {
        number: 4,
        title: 'Sauvegarder ses photos en ligne sans saturer la mémoire interne',
        description: 'Si vous disposez d’une connexion Wi-Fi au bureau ou à la maison, synchronisez vos clichés sur Google Photos ou Mega.',
        detailPoints: [
          'Dans Google Photos, activez la sauvegarde en qualité « Économiseur d’espace » (très bonne définition, divise le poids par 3).',
          'Une fois synchronisées, utilisez le bouton officiel « Libérer de l’espace sur cet appareil » : l’application efface la copie locale mais conserve la photo visible dans votre galerie connectée.'
        ]
      },
      {
        number: 5,
        title: 'La vérité sur les cartes MicroSD sur Android moderne',
        description: 'Beaucoup d’utilisateurs pensent qu’insérer une carte SD permet de déplacer toutes les applications. Ce n’est plus vrai sur Android récent.',
        detailPoints: [
          'Sur Android 11, 12, 13 et 14, la plupart des applications (WhatsApp, banques, jeux lourds) refusent de s’exécuter depuis la carte SD pour des raisons de vitesse et de sécurité.',
          'Utilisez la carte MicroSD pour vos vidéos personnelles, votre musique téléchargée, vos cours PDF et les sauvegardes.',
          'Achetez impérativement une carte certifiée Class 10 / U1 ou U3 pour éviter les ralentissements généraux.'
        ]
      }
    ],
    precautions: [
      'Ne touchez pas aux dossiers commençant par un point (.nom_dossier) dans votre gestionnaire de fichiers : ils contiennent souvent des bases de données applicatives.',
      'Ne supprimez pas les dossiers système Android/data manuellement sans savoir ce que vous faites.',
      'Laissez toujours au moins 15% à 20% d’espace libre (minimum 3 Go) pour que le système Android puisse fonctionner sans geler.'
    ],
    proTips: [
      'Désactivez le téléchargement automatique des médias dans WhatsApp (Paramètres > Utilisation des données > Téléchargement automatique des médias > Décocher tout en données mobiles).',
      'Sur Facebook, utilisez l’application Facebook Lite : elle pèse moins de 5 Mo contre plus de 300 Mo pour l’application principale.'
    ],
    faq: [
      {
        question: 'Pourquoi mon téléphone affiche toujours mémoire pleine après avoir supprimé des photos ?',
        answer: 'Sur les smartphones récents (Samsung, Tecno, Xiaomi), les photos supprimées vont dans la « Corbeille » de la galerie pendant 30 jours. Pour libérer réellement l’espace, vous devez vider manuellement cette Corbeille.'
      },
      {
        question: 'Est-il dangereux de vider le cache d’une application ?',
        answer: 'Non, vider le cache est 100% sécurisé. Cela supprime uniquement des images temporaires et des aperçus web. Vos photos, discussions et identifiants restent intacts.'
      },
      {
        question: 'Quelle est la différence entre "Vider le cache" et "Effacer le stockage / les données" ?',
        answer: 'Vider le cache supprime les fichiers temporaires sans danger. Effacer les données réinitialise l’application comme si vous veniez de la télécharger (vous perdrez vos identifiants enregistrés et paramètres).'
      }
    ],
    relatedArticleIds: ['art-2', 'art-5', 'art-8']
  },
  {
    id: 'art-2',
    slug: 'economiser-donnees-mobiles-afrique',
    title: 'Comment économiser ses données mobiles et forfaits internet en Afrique de l’Ouest et Centrale',
    metaTitle: 'Économiser ses données mobiles et Mo internet en Afrique | Aide Mobile Afrique',
    metaDescription: 'Astuces éprouvées pour faire durer vos forfaits MTN, Orange, Moov, Wave, Togocom ou Vodacom : réglages Android, WhatsApp, YouTube et mode data saver.',
    category: 'internet-economies',
    featuredImage: '/src/assets/images/data_saver_internet_1792188806939.jpg',
    imageAlt: 'Écran de smartphone affichant le suivi de consommation des données mobiles',
    author: AUTHORS['amadou-traore'],
    publishedAt: '2026-10-15',
    updatedAt: '2026-10-15',
    readingTimeMinutes: 7,
    difficulty: 'Débutant',
    targetCountries: ['Togo', 'Bénin', 'Côte d’Ivoire', 'Sénégal', 'Cameroun', 'RDC'],
    isFeatured: false,
    isTrending: true,
    viewsCount: 19430,
    summary: 'Le coût du giga d’internet reste élevé en Afrique francophone. Si vos forfaits de 1 Go ou 5 Go s’évaporent en quelques jours sans que vous compreniez pourquoi, appliquez ces réglages indispensables.',
    prerequisites: [
      'Un téléphone Android connecté en 3G, 4G ou 5G',
      'Forfait actif chez Orange, MTN, Moov, Wave, Togocom, Free, Camtel ou Vodacom'
    ],
    tableOfContents: [
      { id: 'step-1', title: '1. Activer l’économiseur de données natif Android' },
      { id: 'step-2', title: '2. Bloquer les données en arrière-plan des applis gourmandes' },
      { id: 'step-3', title: '3. Configurer WhatsApp pour ne rien télécharger seul' },
      { id: 'step-4', title: '4. Régler TikTok, YouTube et Facebook en mode économique' },
      { id: 'step-5', title: '5. Profiter des pass nuit et forfaits avantageux locaux' },
      { id: 'precautions', title: 'Limites et cas particuliers' },
      { id: 'faq', title: 'Questions fréquentes (FAQ)' }
    ],
    steps: [
      {
        number: 1,
        title: 'Activer le mode Économiseur de données natif d’Android',
        description: 'Android intègre un commutateur qui interdit aux applications non prioritaires d’échanger des données tant qu’elles ne sont pas affichées à l’écran.',
        detailPoints: [
          'Allez dans Paramètres > Réseau et Internet > Consommation des données (ou Réseau mobile).',
          'Activez l’option « Économiseur de données » (Data Saver).',
          'Autorisez uniquement WhatsApp si vous avez besoin de recevoir vos messages urgents instantanément.'
        ]
      },
      {
        number: 2,
        title: 'Couper les données en arrière-plan pour TikTok, Instagram et les jeux',
        description: 'Beaucoup d’applications continuent de télécharger des flux publicitaires et des préchargements de vidéos même téléphone verrouillé dans votre poche.',
        detailPoints: [
          'Dans Paramètres > Applications > Gestion des applications > sélectionnez TikTok.',
          'Touchez « Données mobiles et Wi-Fi ».',
          'Désactivez formellement l’interrupteur « Données en arrière-plan ».'
        ]
      },
      {
        number: 3,
        title: 'Bloquer le téléchargement automatique dans WhatsApp',
        description: 'Par défaut, WhatsApp télécharge chaque photo, vidéo et fichier audio reçu dans les groupes, ce qui peut consommer 300 Mo par jour sans votre accord.',
        detailPoints: [
          'Allez dans WhatsApp > Paramètres > Utilisation des données et du stockage.',
          'Dans « En utilisant les données mobiles », décochez Photos, Audio, Vidéos et Documents.',
          'Activez l’option « Utiliser moins de données pour les appels ».'
        ]
      },
      {
        number: 4,
        title: 'Régler la qualité vidéo par défaut sur YouTube et Chrome',
        description: 'Regarder une vidéo en Full HD (1080p) consomme environ 1,5 Go par heure, contre seulement 250 Mo en 360p ou 480p sur un écran de smartphone standard.',
        detailPoints: [
          'Sur YouTube : Paramètres > Préférences de qualité vidéo > En réseaux mobiles : choisissez « Économiseur de données ».',
          'Sur le navigateur Google Chrome : activez le mode simplifié ou utilisez Opera Mini avec compression extrême.'
        ]
      },
      {
        number: 5,
        title: 'Comprendre et rentabiliser les forfaits spécifiques des opérateurs',
        description: 'La plupart des opérateurs (MTN, Orange, Moov, Togocom, Vodacom) proposent des pass spécialisés beaucoup moins chers.',
        detailPoints: [
          'Privilégiez les « Pass Réseaux Sociaux » ou « Pass Nuit » pour les gros téléchargements (mises à jour système, séries).',
          'Consultez toujours votre solde réel via le code USSD dédié plutôt que de faire confiance aux compteurs tiers.'
        ]
      }
    ],
    precautions: [
      'Si vous coupez complètement les données en arrière-plan pour une application de messagerie (ex: Telegram), vous ne recevrez les notifications qu’à l’ouverture de l’application.',
      'Les vidéos TikTok restent très consommatrices même en mode éco : 30 minutes de scroll représentent au moins 150 Mo à 200 Mo.'
    ],
    proTips: [
      'Désactivez la mise à jour automatique des applications via le Google Play Store en données mobiles (Play Store > Paramètres > Préférences réseau > Mettre à jour automatiquement les applis : « Via le Wi-Fi uniquement »).',
      'Téléchargez vos cartes Google Maps hors connexion pour vos trajets réguliers à Abidjan, Douala, Dakar ou Kinshasa.'
    ],
    faq: [
      {
        question: 'Pourquoi mon forfait s’épuise-t-il alors que je n’ai presque pas touché mon téléphone ?',
        answer: 'Les causes principales sont les sauvegardes automatiques de Google Photos en arrière-plan, les mises à jour silencieuses d’applications depuis le Play Store, et les préchargements vidéo de TikTok/Facebook.'
      },
      {
        question: 'L’économiseur de données empêche-t-il les appels WhatsApp de sonner ?',
        answer: 'Si vous n’ajoutez pas WhatsApp dans la liste des applications « autorisées sans restriction », les appels peuvent ne sonner que lorsque vous déverrouillez votre appareil.'
      }
    ],
    relatedArticleIds: ['art-1', 'art-3', 'art-8']
  },
  {
    id: 'art-3',
    slug: 'securiser-compte-whatsapp-piratage',
    title: 'Comment sécuriser son compte WhatsApp contre les piratages et usurpations de code',
    metaTitle: 'Sécuriser WhatsApp contre le piratage en Afrique | Aide Mobile Afrique',
    metaDescription: 'Protégez votre compte WhatsApp contre le vol de compte, le faux SMS d’un ami et les escroqueries : activez la double authentification (2FA) en 2 minutes.',
    category: 'whatsapp-reseaux',
    featuredImage: '/src/assets/images/whatsapp_security_phone_1792188806634.jpg',
    imageAlt: 'Configuration de la sécurité et double authentification sur WhatsApp',
    author: AUTHORS['marie-pascale'],
    publishedAt: '2026-10-14',
    updatedAt: '2026-10-14',
    readingTimeMinutes: 5,
    difficulty: 'Débutant',
    targetCountries: ['Togo', 'Bénin', 'Côte d’Ivoire', 'Sénégal', 'Cameroun', 'RDC'],
    isFeatured: false,
    isTrending: true,
    viewsCount: 16290,
    summary: 'Le piratage de compte WhatsApp par le piège du « code à 6 chiffres envoyé par erreur par un contact » fait des milliers de victimes chaque semaine à Cotonou, Lomé, Dakar et Douala. Voici la parade absolue.',
    prerequisites: [
      'Application officielle WhatsApp installée (évitez formellement GBWhatsApp ou WhatsApp Plus)',
      'Une adresse email personnelle accessible'
    ],
    tableOfContents: [
      { id: 'step-1', title: '1. Comprendre le piège du faux SMS de contact' },
      { id: 'step-2', title: '2. Activer la vérification en deux étapes (PIN à 6 chiffres)' },
      { id: 'step-3', title: '3. Vérifier les sessions WhatsApp Web connectées' },
      { id: 'step-4', title: '4. Activer le verrouillage par empreinte digitale' },
      { id: 'step-5', title: '5. Que faire si votre compte a déjà été volé ?' },
      { id: 'precautions', title: 'Dangers de GBWhatsApp et versions modifiées' },
      { id: 'faq', title: 'Questions fréquentes (FAQ)' }
    ],
    steps: [
      {
        number: 1,
        title: 'Comprendre la ruse n°1 des pirates : le SMS du proche',
        description: 'Le scénario classique : vous recevez un message d’un ami ou d’un membre de votre église disant : « Salut, j’ai envoyé un code par erreur sur ton numéro pour un vote ou un groupe, renvoie-le moi vite ! ». C’est un piège mortel.',
        detailPoints: [
          'Le pirate tente d’enregistrer VOTRE numéro sur son téléphone. Le code que vous recevez par SMS est votre propre clé d’accès WhatsApp.',
          'Règle d’or : Ne communiquez JAMAIS un code à 6 chiffres reçu par SMS, même si la demande vient de votre propre mère ou de votre patron.'
        ]
      },
      {
        number: 2,
        title: 'Activer la vérification en deux étapes (2FA)',
        description: 'C’est le blindage le plus efficace. Même si quelqu’un intercepte votre SMS de confirmation, il ne pourra pas ouvrir votre compte sans ce deuxième mot de passe secret.',
        detailPoints: [
          'Allez dans WhatsApp > Paramètres > Compte > Vérification en deux étapes.',
          'Appuyez sur « Activer » et choisissez un code secret à 6 chiffres que vous n’oublierez pas.',
          'Renseignez impérativement votre adresse email pour pouvoir réinitialiser ce code en cas d’oubli.'
        ]
      },
      {
        number: 3,
        title: 'Contrôler la liste des appareils connectés (WhatsApp Web)',
        description: 'Quelqu’un peut avoir scanné discrètement votre QR code pour lire vos conversations sur un ordinateur distant.',
        detailPoints: [
          'Allez dans Paramètres > Appareils connectés.',
          'Consultez la liste : si vous voyez un navigateur (ex: Chrome Windows, Firefox Linux) que vous ne reconnaissez pas, touchez-le et cliquez sur « Se déconnecter » immédiatement.'
        ]
      },
      {
        number: 4,
        title: 'Activer le verrouillage biométrique par empreinte digitale',
        description: 'Empêche toute personne à qui vous prêtez votre téléphone d’ouvrir votre messagerie.',
        detailPoints: [
          'Allez dans Paramètres > Confidentialité > Verrouillage par empreinte digitale.',
          'Activez l’interrupteur et choisissez « Immédiatement ».'
        ]
      },
      {
        number: 5,
        title: 'Procédure d’urgence si votre compte a déjà été piraté',
        description: 'Réagissez dans les 10 premières minutes pour limiter les dégâts auprès de vos contacts.',
        detailPoints: [
          'Réinstallez WhatsApp et entrez votre numéro : demandez un nouveau code SMS pour forcer la déconnexion du pirate.',
          'Prévenez immédiatement vos proches par SMS normal ou appel en disant que votre WhatsApp a été compromis et qu’il ne faut envoyer aucun argent en Mobile Money.'
        ]
      }
    ],
    precautions: [
      'Bannissez impérativement GBWhatsApp, WhatsApp Gold ou YoWhatsApp : ces versions non officielles sont truffées de portes dérobées qui envoient vos mots de passe et contacts à des serveurs inconnus.',
      'WhatsApp ne vous contactera JAMAIS par message privé pour vérifier votre compte.'
    ],
    proTips: [
      'Dans Paramètres > Confidentialité > Silence des numéros inconnus : activez cette option pour éviter d’être dérangé par les appels d’arnaqueurs étrangers.'
    ],
    faq: [
      {
        question: 'Est-ce que WhatsApp peut m’appeler pour me demander mon code ?',
        answer: 'Jamais. WhatsApp n’effectue aucun appel vocal de support client. Tout appel de ce genre est une tentative d’escroquerie.'
      },
      {
        question: 'Puis-je récupérer mes discussions si mon compte a été volé ?',
        answer: 'Oui, si vous aviez activé la sauvegarde Google Drive avec chiffrement de bout en bout avant l’incident.'
      }
    ],
    relatedArticleIds: ['art-7', 'art-2', 'art-6']
  },
  {
    id: 'art-4',
    slug: 'transferer-fichiers-android-sans-internet',
    title: 'Comment transférer des fichiers rapidement entre deux téléphones Android sans connexion internet',
    metaTitle: 'Partager des fichiers lourds sans internet sur Android | Aide Mobile Afrique',
    metaDescription: 'Méthodes rapides et sans consommer de données mobiles : Quick Share (Nearby Share), Files by Google et Xender sans danger ni virus.',
    category: 'applications-utiles',
    featuredImage: '/src/assets/images/file_transfer_phones_1792189771557.jpg',
    imageAlt: 'Deux jeunes collègues transférant des fichiers lourds sans connexion entre leurs téléphones Android à Dakar',
    author: AUTHORS['amadou-traore'],
    publishedAt: '2026-10-13',
    updatedAt: '2026-10-13',
    readingTimeMinutes: 5,
    difficulty: 'Débutant',
    targetCountries: ['Togo', 'Bénin', 'Côte d’Ivoire', 'Sénégal', 'Cameroun', 'RDC'],
    isFeatured: false,
    isTrending: false,
    viewsCount: 9810,
    summary: 'Partager une vidéo de 1 Go ou un document de formation ne doit pas coûter votre forfait internet. Découvrez les solutions de transfert direct par Wi-Fi Direct les plus rapides et sécurisées.',
    prerequisites: [
      'Deux smartphones Android avec Wi-Fi et Bluetooth activés',
      'Distance maximale de 5 mètres entre les appareils'
    ],
    tableOfContents: [
      { id: 'step-1', title: '1. Quick Share (ex-Nearby Share) : la méthode officielle' },
      { id: 'step-2', title: '2. Files by Google : rapide, propre et sans publicité' },
      { id: 'step-3', title: '3. Xender : conseils pour éviter les malwares et pubs' },
      { id: 'precautions', title: 'Précautions de sécurité indispensables' },
      { id: 'faq', title: 'Questions fréquentes (FAQ)' }
    ],
    steps: [
      {
        number: 1,
        title: 'Utiliser Quick Share (intégré nativement à tous les Android récents)',
        description: 'Né de la fusion entre Google Nearby Share et Samsung Quick Share, cet outil est déjà présent sur votre téléphone sans rien installer.',
        detailPoints: [
          'Faites glisser la barre de notification vers le bas et touchez l’icône « Quick Share » (ou Partage à proximité).',
          'Réglez la visibilité sur « Tout le monde pendant 10 minutes ».',
          'Sélectionnez votre fichier dans la Galerie, touchez Partager > Quick Share, et choisissez le téléphone du destinataire. La vitesse peut atteindre 40 Mo/s.'
        ]
      },
      {
        number: 2,
        title: 'Le partage hors connexion dans Files by Google',
        description: 'Files by Google propose un module de partage direct chiffré extrêmement stable.',
        detailPoints: [
          'Ouvrez Files by Google sur les deux téléphones en même temps.',
          'Touchez l’onglet « Partager » en bas à droite.',
          'L’un choisit « Envoyer », l’autre choisit « Recevoir ». Validez le code de connexion qui s’affiche à l’écran.'
        ]
      },
      {
        number: 3,
        title: 'Utiliser Xender en toute sécurité sans publicité intrusive',
        description: 'Très populaire en Afrique, Xender reste efficace mais souffre de nombreuses publicités intrusives.',
        detailPoints: [
          'Refusez toujours les autorisations suspectes (comme l’accès aux contacts ou au journal d’appels si vous transférez juste une vidéo).',
          'N’installez jamais les applications recommandées en fin de transfert.',
          'Privilégiez Quick Share qui est 100% sans publicité.'
        ]
      }
    ],
    precautions: [
      'Désactivez la visibilité Bluetooth et Wi-Fi Direct une fois le transfert terminé pour préserver votre batterie.',
      'Ne recevez jamais de fichiers d’inconnus dans les transports en commun.'
    ],
    proTips: [
      'Le transfert par Wi-Fi Direct ne consomme pas un seul mégaoctet de votre forfait internet, même si vos données mobiles restent allumées.'
    ],
    faq: [
      {
        question: 'Pourquoi Quick Share ne trouve pas le téléphone de mon ami ?',
        answer: 'Vérifiez que la localisation (GPS), le Wi-Fi et le Bluetooth sont bien activés sur les deux téléphones et que l’écran du destinataire n’est pas verrouillé.'
      }
    ],
    relatedArticleIds: ['art-1', 'art-5', 'art-8']
  },
  {
    id: 'art-5',
    slug: 'resoudre-bugs-plantages-applications-android',
    title: 'Comment résoudre les plantages et bugs fréquents d’une application sur Android',
    metaTitle: 'Réparer une application qui se ferme toute seule sur Android | Aide Mobile',
    metaDescription: 'L’application s’arrête systématiquement ? Découvrez comment résoudre les plantages d’applis sur Tecno, Infinix, Samsung et Xiaomi sans réinitialiser le téléphone.',
    category: 'securite-depannage',
    featuredImage: '/src/assets/images/phone_bug_fix_repair_1792189772130.jpg',
    imageAlt: 'Diagnostic et réparation des paramètres système pour débloquer une application Android',
    author: AUTHORS['amadou-traore'],
    publishedAt: '2026-10-12',
    updatedAt: '2026-10-12',
    readingTimeMinutes: 6,
    difficulty: 'Intermédiaire',
    targetCountries: ['Togo', 'Bénin', 'Côte d’Ivoire', 'Sénégal', 'Cameroun', 'RDC'],
    isFeatured: false,
    isTrending: false,
    viewsCount: 8430,
    summary: 'Message « L’application s’est arrêtée », écran noir ou fermeture subite au lancement : suivez ce protocole de dépannage méthodique étape par étape pour retrouver un téléphone stable.',
    prerequisites: [
      'Accès aux Paramètres système d’Android',
      'Au moins 1 Go d’espace libre sur la mémoire interne'
    ],
    tableOfContents: [
      { id: 'step-1', title: '1. Forcer l’arrêt et redémarrer la mémoire vive (RAM)' },
      { id: 'step-2', title: '2. Vider le cache de l’application défaillante' },
      { id: 'step-3', title: '3. Vérifier Android System WebView et les services Google' },
      { id: 'step-4', title: '4. Gérer les autorisations requises bloquées' },
      { id: 'step-5', title: '5. Réinstaller proprement l’application officielle' },
      { id: 'precautions', title: 'Cas des téléphones à 2 Go ou 3 Go de RAM' },
      { id: 'faq', title: 'Questions fréquentes (FAQ)' }
    ],
    steps: [
      {
        number: 1,
        title: 'Forcer l’arrêt de l’application',
        description: 'Une application figée conserve des processus corrompus en mémoire vive.',
        detailPoints: [
          'Allez dans Paramètres > Applications > Gestion des applications.',
          'Sélectionnez l’application qui pose problème.',
          'Touchez « Forcer l’arrêt », puis redémarrez normalement votre smartphone.'
        ]
      },
      {
        number: 2,
        title: 'Supprimer le cache corrompu',
        description: '90% des fermetures inopinées proviennent d’un fichier de cache téléchargé de manière incomplète lors d’une coupure de réseau.',
        detailPoints: [
          'Dans la fiche de l’application, touchez « Stockage et cache » > « Vider le cache ».',
          'Relancez l’application. Si le bug persiste, touchez « Effacer le stockage » (attention, vous devrez ressaisir vos identifiants).'
        ]
      },
      {
        number: 3,
        title: 'Mettre à jour "Android System WebView"',
        description: 'Ce composant système gère l’affichage du contenu web au sein de toutes les applications. S’il est obsolète, des dizaines d’applications crashent simultanément.',
        detailPoints: [
          'Ouvrez le Google Play Store et recherchez « Android System WebView ».',
          'Si un bouton « Mettre à jour » apparaît, cliquez dessus immédiatement.',
          'Faites de même pour « Google Chrome ».'
        ]
      },
      {
        number: 4,
        title: 'Vérifier les autorisations critiques',
        description: 'Certaines applications bancaires ou de messagerie se ferment immédiatement si une autorisation obligatoire (stockage, appareil photo) leur a été refusée.',
        detailPoints: [
          'Dans Paramètres > Applications > Autorisations.',
          'Accordez les autorisations essentielles demandées par l’éditeur.'
        ]
      }
    ],
    precautions: [
      'Si votre téléphone dispose de seulement 2 Go de RAM (ex: itel, anciens Tecno Pop), les applications lourdes comme Facebook classique crasheront inévitablement par manque de mémoire. Installez leurs équivalents « Lite ».'
    ],
    proTips: [
      'Redémarrez votre smartphone au moins une fois par semaine pour nettoyer les fuites de mémoire vive résiduelles.'
    ],
    faq: [
      {
        question: 'Pourquoi mon application crashe dès que j’allume ma connexion internet ?',
        answer: 'L’application tente probablement de charger des bannières publicitaires corrompues ou de synchroniser une base de données corrompue. Videz le cache et les données de l’application.'
      }
    ],
    relatedArticleIds: ['art-1', 'art-8', 'art-4']
  },
  {
    id: 'art-6',
    slug: 'sauvegarder-contacts-compte-google',
    title: 'Comment sauvegarder ses contacts téléphoniques sur son compte Google pour ne jamais les perdre',
    metaTitle: 'Sauvegarder ses contacts sur Google Contacts | Aide Mobile Afrique',
    metaDescription: 'Ne perdez plus vos numéros en cas de vol ou de changement de carte SIM : guide étape par étape pour synchroniser tous vos contacts sur Gmail.',
    category: 'android-smartphones',
    featuredImage: '/src/assets/images/google_contacts_sync_1792189772861.jpg',
    imageAlt: 'Utilisatrice professionnelle affichant ses contacts téléphoniques synchronisés sur son compte Google',
    author: AUTHORS['amadou-traore'],
    publishedAt: '2026-10-11',
    updatedAt: '2026-10-11',
    readingTimeMinutes: 5,
    difficulty: 'Débutant',
    targetCountries: ['Togo', 'Bénin', 'Côte d’Ivoire', 'Sénégal', 'Cameroun', 'RDC'],
    isFeatured: false,
    isTrending: false,
    viewsCount: 11200,
    summary: 'Enregistrer ses contacts sur la carte SIM ou dans la mémoire du téléphone est une erreur courante. En cas de perte, de vol ou de casse, vous perdez tout votre carnet d’adresses. Voici la méthode définitive.',
    prerequisites: [
      'Un compte Google (adresse Gmail) actif',
      'L’application Contacts (Google ou constructeur)'
    ],
    tableOfContents: [
      { id: 'step-1', title: '1. Pourquoi la carte SIM est le pire endroit pour stocker' },
      { id: 'step-2', title: '2. Importer les contacts de la SIM vers le compte Google' },
      { id: 'step-3', title: '3. Définir Google comme emplacement de sauvegarde par défaut' },
      { id: 'step-4', title: '4. Créer un fichier de secours .VCF hors-ligne' },
      { id: 'precautions', title: 'Points de vigilance' },
      { id: 'faq', title: 'Questions fréquentes (FAQ)' }
    ],
    steps: [
      {
        number: 1,
        title: 'Comprendre les limites dangereuses de la carte SIM',
        description: 'Une carte SIM ne peut enregistrer que 250 contacts au maximum, tronque les noms à quelques caractères et ne stocke pas les adresses email ni les seconds numéros.',
        detailPoints: [
          'Si la puce est endommagée, perdue ou volée, vos contacts disparaissent définitivement.',
          'Le compte Google offre un stockage illimité et sécurisé accessible depuis n’importe quel appareil.'
        ]
      },
      {
        number: 2,
        title: 'Déplacer tous vos numéros existants vers votre compte Google',
        description: 'La procédure pour transférer tous les contacts déjà enregistrés sur la SIM ou le téléphone.',
        detailPoints: [
          'Ouvrez l’application « Contacts » > Allez dans l’onglet « Corriger et gérer » (ou Paramètres de l’application).',
          'Touchez « Importer à partir de la carte SIM ».',
          'Sélectionnez votre compte Google (votre adresse Gmail) comme destination, puis cochez « Tout sélectionner » et validez.'
        ]
      },
      {
        number: 3,
        title: 'Définir Google comme compte par défaut pour les nouveaux contacts',
        description: 'Pour que chaque nouveau numéro enregistré aille directement sur Google sans manipulation supplémentaire.',
        detailPoints: [
          'Dans l’application Contacts > Paramètres > Compte par défaut pour les nouveaux contacts.',
          'Choisissez impérativement votre adresse Gmail au lieu de « Téléphone » ou « Carte SIM ».'
        ]
      },
      {
        number: 4,
        title: 'Créer un fichier de secours VCF sur carte mémoire ou clé USB',
        description: 'Une sécurité supplémentaire si vous n’avez pas toujours accès à internet.',
        detailPoints: [
          'Touchez « Exporter vers un fichier » > nommez-le « Sauvegarde_Contacts_2026.vcf ».',
          'Envoyez-le sur votre propre adresse email ou conservez-le sur une carte mémoire externe.'
        ]
      }
    ],
    precautions: [
      'Notez bien le mot de passe de votre compte Google sur un carnet papier à la maison. Sans le mot de passe et l’accès à votre numéro de récupération, vous ne pourrez pas restaurer vos contacts sur un nouveau téléphone.'
    ],
    proTips: [
      'Rendez-vous sur le site contacts.google.com depuis un ordinateur pour nettoyer vos doublons et organiser vos contacts avec des libellés (Famille, Travail, Clients).'
    ],
    faq: [
      {
        question: 'Comment retrouver mes contacts si j’achète un nouveau smartphone ?',
        answer: 'Il vous suffit d’entrer votre adresse Gmail lors de la configuration initiale du nouveau téléphone. Tous vos numéros réapparaîtront automatiquement en moins de 2 minutes.'
      }
    ],
    relatedArticleIds: ['art-3', 'art-5', 'art-1']
  },
  {
    id: 'art-7',
    slug: 'eviter-arnaques-faux-depots-mobile-money',
    title: 'Comment reconnaître et éviter les arnaques de faux dépôts Mobile Money (Orange, MTN, Wave, Moov)',
    metaTitle: 'Arnaques Mobile Money : détecter les faux dépôts | Aide Mobile Afrique',
    metaDescription: 'Attention aux faux SMS de dépôt Wave, Orange Money ou MTN MoMo : apprenez à déjouer les techniques des escrocs à Abidjan, Dakar, Douala, Cotonou et Lomé.',
    category: 'mobile-money',
    featuredImage: '/src/assets/images/mobile_money_transfer_1792188806432.jpg',
    imageAlt: 'Écran de smartphone avec notification de transfert Mobile Money sécurisé',
    author: AUTHORS['marie-pascale'],
    publishedAt: '2026-10-10',
    updatedAt: '2026-10-10',
    readingTimeMinutes: 7,
    difficulty: 'Débutant',
    targetCountries: ['Togo', 'Bénin', 'Côte d’Ivoire', 'Sénégal', 'Cameroun', 'RDC'],
    isFeatured: false,
    isTrending: true,
    viewsCount: 22100,
    summary: '« J’ai fait une erreur de transfert sur votre compte, renvoyez-moi l’argent s’il vous plaît ! ». Cette arnaque a déjà coûté des centaines de millions de FCFA aux commerçants et particuliers. Voici comment démasquer les faux SMS en 10 secondes.',
    prerequisites: [
      'Un compte Mobile Money actif (Orange Money, MTN MoMo, Wave, Moov Money, T-Money, M-Pesa)',
      'Savoir composer les codes USSD officiels de solde'
    ],
    tableOfContents: [
      { id: 'step-1', title: '1. Le mode opératoire de l’escroc décrypté' },
      { id: 'step-2', title: '2. Différencier un vrai SMS opérateur d’un faux SMS pirate' },
      { id: 'step-3', title: '3. La règle absolue : toujours consulter son solde via USSD' },
      { id: 'step-4', title: '4. Les arnaques aux faux agents de service client' },
      { id: 'step-5', title: '5. Numéros d’urgence et recours par pays' },
      { id: 'precautions', title: 'Les 3 règles d’or de sécurité' },
      { id: 'faq', title: 'Questions fréquentes (FAQ)' }
    ],
    steps: [
      {
        number: 1,
        title: 'Le piège du faux dépôt par erreur',
        description: 'L’arnaqueur vous envoie un SMS contrefait imitant à la perfection un message d’Orange Money, Wave ou MTN MoMo indiquant un crédit de 50 000 FCFA. Quelques secondes plus tard, il vous appelle en panique et en pleurs en prétendant s’être trompé de numéro pour soigner un enfant malade.',
        detailPoints: [
          'La victime émue renvoie l’argent depuis son propre solde.',
          'En réalité, aucun dépôt n’a jamais été effectué : la victime a perdu 50 000 FCFA de ses propres économies.'
        ]
      },
      {
        number: 2,
        title: 'Repérer les indices révélateurs du faux SMS',
        description: 'Un faux SMS laisse toujours des traces flagrantes si on prend le temps d’observer attentivement.',
        detailPoints: [
          'Regardez le numéro de l’expéditeur : un vrai message d’Orange Money ou MTN vient d’un nom officiel (Sender ID "OrangeMoney", "MTNMoMo", "Wave"), JAMAIS d’un numéro ordinaire commençant par 07, 05, 90, 97 ou 69.',
          'Attention : certains escrocs utilisent des passerelles SMS en ligne pour falsifier l’expéditeur. Ne vous fiez donc JAMAIS au seul texte d’un SMS.'
        ]
      },
      {
        number: 3,
        title: 'La seule vérification infaillible : composer le code USSD ou ouvrir l’application',
        description: 'Le solde affiché par votre opérateur sur ses serveurs est la seule vérité juridique et financière.',
        detailPoints: [
          'Ne croyez aucun SMS. Composez votre code USSD de solde officiel (#144#, *133#, *145#, *880#, #150#) ou ouvrez l’application officielle Wave / Orange Money.',
          'Consultez votre historique de transactions récentes : si le dépôt n’y figure pas, c’est une arnaque à 100%.'
        ]
      },
      {
        number: 4,
        title: 'L’arnaque au faux agent qui demande d’annuler une transaction',
        description: 'Un individu se présente comme agent Orange, MTN ou Moov et vous dicte une syntaxe USSD complexe soit-disant pour « valider votre compte » ou « annuler un transfert ».',
        detailPoints: [
          'En réalité, la syntaxe qu’il vous dicte est un ordre de transfert vers son propre compte.',
          'AUCUN opérateur ne vous demandera jamais de composer un code USSD ou de divulguer votre code secret PIN.'
        ]
      },
      {
        number: 5,
        title: 'Que faire en cas de véritable erreur de transfert ?',
        description: 'Si quelqu’un s’est réellement trompé de numéro, voici la seule procédure légale.',
        detailPoints: [
          'Dites poliment à l’appelant de contacter directement le service client officiel de l’opérateur (ou Wave).',
          'L’opérateur procèdera au gel et au reversement légal après enquête. Ne faites jamais de transfert vous-même.'
        ]
      }
    ],
    precautions: [
      'Votre code secret PIN à 4 ou 5 chiffres ne doit JAMAIS être partagé, ni à un ami, ni à un gérant de kiosque, ni à un soi-disant technicien.',
      'Masquez votre écran lorsque vous composez votre code secret dans un point de retrait de rue.'
    ],
    proTips: [
      'Activez la notification par empreinte digitale sur vos applications Wave et Mobile Money pour empêcher quiconque utilise votre téléphone de transférer vos fonds.',
      'Changez votre code PIN tous les 3 à 6 mois.'
    ],
    faq: [
      {
        question: 'Un opérateur peut-il annuler un transfert sans mon accord ?',
        answer: 'Sur Wave ou Orange Money, un transfert erroné peut être suspendu par le support technique si le destinataire n’a pas encore retiré les fonds, après vérification des deux parties.'
      },
      {
        question: 'Que faire si j’ai déjà envoyé de l’argent à un escroc ?',
        answer: 'Appelez immédiatement le service client officiel de votre opérateur pour demander le blocage du compte récepteur, puis déposez une plainte auprès de la brigade de cybercriminalité locale (PLCC en CI, OCRC au Bénin, DSC au Sénégal).'
      }
    ],
    relatedArticleIds: ['art-3', 'art-2', 'art-5']
  },
  {
    id: 'art-8',
    slug: 'accelerer-smartphone-android-lent',
    title: 'Comment accélérer et améliorer les performances d’un smartphone Android ralenti',
    metaTitle: 'Accélérer un smartphone Android lent et bloqué | Aide Mobile Afrique',
    metaDescription: 'Votre smartphone rame ou chauffe ? Découvrez 6 réglages efficaces pour doubler la réactivité de votre téléphone sans dépenser un centime.',
    category: 'android-smartphones',
    featuredImage: '/src/assets/images/smartphone_speed_boost_1792189771999.jpg',
    imageAlt: 'Tableau de bord et interface d’optimisation de vitesse sur smartphone Android',
    author: AUTHORS['amadou-traore'],
    publishedAt: '2026-10-09',
    updatedAt: '2026-10-09',
    readingTimeMinutes: 6,
    difficulty: 'Intermédiaire',
    targetCountries: ['Togo', 'Bénin', 'Côte d’Ivoire', 'Sénégal', 'Cameroun', 'RDC'],
    isFeatured: false,
    isTrending: false,
    viewsCount: 15340,
    summary: 'Avec le temps, les téléphones Android (notamment les modèles d’entrée de gamme avec 2 Go ou 3 Go de RAM) deviennent lents, chauffent et mettent plusieurs secondes à ouvrir le clavier. Voici les astuces techniques méconnues pour leur redonner une seconde jeunesse.',
    prerequisites: [
      'Un smartphone Android 8.0 ou plus récent',
      'Accès aux Options pour développeurs d’Android'
    ],
    tableOfContents: [
      { id: 'step-1', title: '1. L’astuce magique des échelles d’animation (0.5x)' },
      { id: 'step-2', title: '2. Supprimer les bloatwares et applications préinstallées inutiles' },
      { id: 'step-3', title: '3. Désinstaller les faux optimiseurs de RAM et nettoyeurs' },
      { id: 'step-4', title: '4. Garder au moins 20% de stockage libre' },
      { id: 'step-5', title: '5. Passer aux applications "Lite" et web apps' },
      { id: 'precautions', title: 'Limites matérielles à connaître' },
      { id: 'faq', title: 'Questions fréquentes (FAQ)' }
    ],
    steps: [
      {
        number: 1,
        title: 'L’astuce des échelles d’animation système (effet instantané)',
        description: 'Android applique de jolies animations lors de l’ouverture des fenêtres et des menus. En réduisant leur durée par deux, le téléphone paraît deux fois plus rapide immédiatement.',
        detailPoints: [
          'Allez dans Paramètres > À propos du téléphone > appuyez 7 fois consécutives sur « Numéro de build » jusqu’à voir « Vous êtes désormais développeur ! ».',
          'Revenez dans Paramètres > Système > « Options pour les développeurs ».',
          'Descendez jusqu’à la section Dessin : réglez « Échelle d’animation des fenêtres », « Échelle d’animation des transitions » et « Échelle de durée d’animation » sur 0.5x (ou Désactivée).'
        ]
      },
      {
        number: 2,
        title: 'Désactiver ou désinstaller les applications d’origine inutiles',
        description: 'Les smartphones Tecno (HiOS), Infinix (XOS) et Samsung regorgent de jeux et services préinstallés qui démarrent silencieusement au boot.',
        detailPoints: [
          'Allez dans Paramètres > Applications > Gestion des applications.',
          'Passez en revue les applications que vous n’utilisez jamais.',
          'Si le bouton « Désinstaller » n’est pas disponible, appuyez sur « Désactiver » pour couper toute activité en arrière-plan.'
        ]
      },
      {
        number: 3,
        title: 'Bannir les applications de nettoyage tierces (Cleaners, RAM Boosters)',
        description: 'C’est le paradoxe le plus fréquent : pour accélérer leur téléphone, les utilisateurs téléchargent des applications qui le ralentissent encore plus.',
        detailPoints: [
          'Ces applications forcent la fermeture de processus système essentiels. Le processeur doit alors redéployer ces processus, ce qui fait chauffer la batterie et vide votre autonomie.',
          'Désinstallez tout nettoyeur tiers. Fiez-vous uniquement à l’outil natif du fabricant ou à Files by Google.'
        ]
      },
      {
        number: 4,
        title: 'Maintenir la mémoire flash interne sous les 80% de remplissage',
        description: 'Sur la mémoire flash eMMC (utilisée sur les téléphones économiques), la vitesse d’écriture chute dramatiquement dès que le disque approche de la saturation.',
        detailPoints: [
          'Si votre téléphone a 32 Go, assurez-vous d’avoir au moins 5 Go libres en permanence.',
          'Si votre téléphone a 64 Go, conservez au moins 8 Go libres.'
        ]
      },
      {
        number: 5,
        title: 'Privilégier les versions allégées des réseaux sociaux',
        description: 'Facebook, Messenger, TikTok et Twitter possèdent des versions Lite spécialement conçues pour consommer 5 fois moins de mémoire RAM.',
        detailPoints: [
          'Téléchargez « Facebook Lite » et « Messenger Lite » depuis le Play Store.',
          'Pour TikTok, réduisez la qualité du cache dans les paramètres internes de l’application.'
        ]
      }
    ],
    precautions: [
      'Dans les Options pour développeurs, ne modifiez JAMAIS les paramètres liés au GPU, aux pilotes graphiques ou au verrouillage OEM sans instructions précises.',
      'Un smartphone ne peut pas dépasser ses limites physiques : un processeur 4 cœurs avec 2 Go de RAM ne pourra pas faire tourner des jeux 3D lourds de manière fluide.'
    ],
    proTips: [
      'Redémarrez complètement votre smartphone deux fois par semaine pour vider les caches temporaires accumulés par le système.'
    ],
    faq: [
      {
        question: 'Pourquoi mon téléphone devient-il brûlant quand je navigue sur TikTok ou joue ?',
        answer: 'La surchauffe est due à une sollicitation maximale du processeur combinée à une température ambiante élevée. Retirez la coque de protection épaisse et fermez les applications en arrière-plan.'
      },
      {
        question: 'La réinitialisation d’usine (formater le téléphone) est-elle utile ?',
        answer: 'Oui, une fois par an ou tous les deux ans, réinitialiser complètement le téléphone après avoir sauvegardé ses données (Google Contacts, photos) élimine toutes les corruptions logicielles accumulées.'
      }
    ],
    relatedArticleIds: ['art-1', 'art-5', 'art-2']
  }
];
