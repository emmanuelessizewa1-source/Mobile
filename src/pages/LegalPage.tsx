import { Breadcrumb } from '../components/Breadcrumb';
import { SeoHead } from '../components/SeoHead';

interface LegalPageProps {
  onNavigate: (path: string) => void;
}

export function LegalPage({ onNavigate }: LegalPageProps) {
  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      <SeoHead
        title="Mentions Légales & Avertissements | Aide Mobile Afrique"
        description="Mentions légales, identification de l'éditeur, hébergement et avertissements de responsabilité d'Aide Mobile Afrique."
        canonicalPath="/mentions-legales"
      />

      <Breadcrumb
        items={[{ label: 'Mentions légales' }]}
        onNavigate={onNavigate}
      />

      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <header className="border-b border-slate-100 pb-4">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">
            Informations Légales
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Mentions Légales
          </h1>
        </header>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Éditeur de la publication</h2>
          <p>
            Le site <strong>Aide Mobile Afrique</strong> est édité par le collectif de presse technologique indépendante Aide Mobile Afrique.<br />
            <strong>Direction de la publication :</strong> Amadou Traoré & Marie-Pascale Akissi.<br />
            <strong>Email de contact :</strong> contact@aidemobileafrique.com<br />
            <strong>Siège éditorial :</strong> Cocody Angré, Abidjan, République de Côte d'Ivoire.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">2. Hébergement technique</h2>
          <p>
            L'infrastructure technique est déployée sur Google Cloud / Cloud Run avec serveurs redondants et réseau de diffusion CDN à faible latence optimisé pour les connexions ouest-africaines et centre-africaines.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">3. Propriété intellectuelle</h2>
          <p>
            Tous les textes, tutoriels, logotypes et compositions éditoriales présents sur ce site sont protégés par le droit d'auteur. Toute reproduction totale ou partielle sans accord écrit préalable de la rédaction est formellement interdite. Les citations courtes sont autorisées à condition d'intégrer un lien hypertexte direct vers l'article source.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">4. Avertissement sur les services financiers et bancaires</h2>
          <p>
            Aide Mobile Afrique fournit des conseils éducatifs et des fiches d'information. Nous ne sommes en aucun cas une institution financière, une banque ou un émetteur de monnaie électronique.
          </p>
          <p>
            En cas de contestation de transaction Mobile Money (Orange Money, MTN MoMo, Wave, Moov Money, T-Money, M-Pesa), les internautes doivent s'adresser directement aux agences officielles de leur opérateur ou aux autorités judiciaires compétentes de leur pays.
          </p>
        </section>
      </div>
    </div>
  );
}
