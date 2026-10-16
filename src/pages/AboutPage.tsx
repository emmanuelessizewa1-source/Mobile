import { ShieldCheck, Smartphone, Target, Award, Users } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SeoHead } from '../components/SeoHead';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="space-y-8 pb-16 max-w-4xl mx-auto">
      <SeoHead
        title="À Propos d’Aide Mobile Afrique | Notre Mission & Charte Éditoriale"
        description="Découvrez l'équipe, la mission et la méthodologie de test d'Aide Mobile Afrique, premier média pratique tech pour l'Afrique francophone."
        canonicalPath="/a-propos"
      />

      <Breadcrumb
        items={[{ label: 'À propos' }]}
        onNavigate={onNavigate}
      />

      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
        <header className="space-y-3">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">
            Notre Raison d'Être
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Démocratiser la maîtrise du smartphone en Afrique francophone
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Aide Mobile Afrique est né d’un constat évident : la majorité des tutoriels technologiques disponibles en ligne sont conçus pour les pays occidentaux, avec des forfaits 5G illimités et des smartphones haut de gamme à 1000 euros.
          </p>
        </header>

        {/* Realities we address */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Target className="w-5 h-5 text-cyan-600" />
            <span>Les réalités du terrain que nous traitons au quotidien</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
              <strong className="text-slate-900 block font-bold">1. Le problème du stockage saturé</strong>
              <p className="text-slate-600 leading-relaxed">
                Les téléphones d'entrée de gamme (32 Go ou 64 Go de stockage) sont rapidement bloqués par les médias WhatsApp dupliqués et les applications volumineuses.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
              <strong className="text-slate-900 block font-bold">2. Le coût élevé des données mobiles</strong>
              <p className="text-slate-600 leading-relaxed">
                Le giga d'internet représente une part non négligeable du budget mensuel. Nous fournissons des méthodes concrètes pour bloquer les fuites de Mo invisibles.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
              <strong className="text-slate-900 block font-bold">3. Les arnaques financières mobiles</strong>
              <p className="text-slate-600 leading-relaxed">
                Les escroqueries de faux dépôts et de détournements de comptes WhatsApp ciblent commerçants et particuliers. Nous décryptons leurs pièges avant qu'il ne soit trop tard.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
              <strong className="text-slate-900 block font-bold">4. L'hétérogénéité des constructeurs</strong>
              <p className="text-slate-600 leading-relaxed">
                Tecno (HiOS), Infinix (XOS), itel, Xiaomi (MIUI/HyperOS) et Samsung (One UI) possèdent tous des menus différents. Nous détaillons chaque manipulation pour chaque marque.
              </p>
            </div>
          </div>
        </section>

        {/* Fleet of testing devices */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-cyan-600" />
            <span>Notre parc d'appareils de test</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Pour garantir qu'aucun conseil n'est purement théorique, nos rédacteurs testent physiquement chaque étape sur un banc d'essai représentatif des ventes en Afrique de l'Ouest et Centrale :
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-medium text-slate-700">
            <li className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-center">Tecno Spark & Camon</li>
            <li className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-center">Infinix Hot & Note</li>
            <li className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-center">Samsung Galaxy A series</li>
            <li className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-center">Xiaomi Redmi series</li>
          </ul>
        </section>

        {/* Editorial Charter */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-600" />
            <span>Notre charte éthique et publicitaire</span>
          </h2>
          <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              • <strong>Indépendance totale :</strong> Nous ne sommes pas sponsorisés par les fabricants de téléphones ni par les opérateurs télécoms (Orange, MTN, Wave, Moov). Si un service a des défauts ou des frais cachés, nous le disons clairement.
            </p>
            <p>
              • <strong>Publicité respectueuse :</strong> Les publicités affichées sur notre site sont identifiées comme telles. Nous refusons les popups bloquants, les faux boutons de téléchargement et les redirections agressives.
            </p>
            <p>
              • <strong>Vérification systématique :</strong> Aucune procédure de Mobile Money n’est publiée sans vérification préalable auprès des syntaxes officielles des banques centrales (BCEAO, BEAC) et des opérateurs locaux.
            </p>
          </div>
        </section>

        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            Vous souhaitez proposer un sujet ou signaler une erreur ?
          </div>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Contacter la rédaction
          </button>
        </div>
      </div>
    </div>
  );
}
