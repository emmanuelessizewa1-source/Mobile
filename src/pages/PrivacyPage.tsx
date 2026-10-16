import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SeoHead } from '../components/SeoHead';

interface PrivacyPageProps {
  onNavigate: (path: string) => void;
}

export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      <SeoHead
        title="Politique de Confidentialité & Protection des Données | Aide Mobile Afrique"
        description="Découvrez nos engagements en matière de protection des données personnelles, cookies et transparence publicitaire conformément aux lois africaines et internationales."
        canonicalPath="/politique-confidentialite"
      />

      <Breadcrumb
        items={[{ label: 'Politique de confidentialité' }]}
        onNavigate={onNavigate}
      />

      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <header className="border-b border-slate-100 pb-4">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">
            Transparence & Données
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Politique de Confidentialité
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Dernière mise à jour : 16 octobre 2026
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900">1. Engagements généraux</h2>
          <p>
            Le site <strong>Aide Mobile Afrique</strong> s'engage à respecter la vie privée de ses utilisateurs. Nous collectons le strict minimum de données techniques nécessaires au bon fonctionnement de la plateforme et à l'optimisation des performances sur smartphones Android.
          </p>
          <p>
            Nos traitements de données sont conçus en conformité avec les réglementations de protection des données personnelles en vigueur en Afrique francophone (notamment la loi n° 2013-450 en Côte d’Ivoire auprès de l'ARTCI, la loi n° 2008-12 au Sénégal auprès de la CDP, le Code du Numérique au Bénin auprès de l'APDP, et les standards internationaux).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900">2. Données collectées</h2>
          <p>
            • <strong>Données de navigation anonymes :</strong> Pour mesurer l'intérêt de nos tutoriels et améliorer leur vitesse de chargement sur réseau 3G/4G, nous analysons des métriques agrégées (nombre de vues, pays de connexion, type de navigateur, système d'exploitation). Aucune donnée nominative n'est conservée.
          </p>
          <p>
            • <strong>Formulaire de contact et newsletter :</strong> Lorsque vous nous envoyez une suggestion ou vous inscrivez à notre newsletter, votre adresse email est traitée exclusivement pour vous répondre ou vous faire parvenir nos guides. Nous ne revendons ni ne cédons vos coordonnées à aucun tiers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900">3. Cookies et régies publicitaires</h2>
          <p>
            Aide Mobile Afrique peut afficher des encarts publicitaires opérés par des régies certifiées (telles que Google AdSense ou Adsterra) afin de financer la rédaction indépendante de nos guides gratuits.
          </p>
          <p>
            Ces régies peuvent utiliser des cookies standards pour diffuser des annonces pertinentes et prévenir la fraude au clic. Vous avez la liberté de configurer ou désactiver les cookies directement depuis les paramètres de votre navigateur mobile (Chrome, Opera Mini, Firefox).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900">4. Vos droits (Accès, Rectification, Suppression)</h2>
          <p>
            Vous disposez d'un droit permanent d'accès, de rectification et d'effacement des informations vous concernant. Pour toute demande relative à vos données, contactez notre délégué à la protection des données via notre <button onClick={() => onNavigate('/contact')} className="text-cyan-700 underline font-semibold cursor-pointer">page de contact</button>.
          </p>
        </section>
      </div>
    </div>
  );
}
