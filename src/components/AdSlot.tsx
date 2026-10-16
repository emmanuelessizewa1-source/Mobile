import { useState } from 'react';
import { HelpCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { ADS_CONFIG } from '../config/ads';

interface AdSlotProps {
  placement: 'leaderboard_top' | 'in_article_mid' | 'in_article_bottom' | 'sidebar_sticky';
  className?: string;
  showHelp?: boolean;
}

export function AdSlot({ placement, className = '', showHelp = true }: AdSlotProps) {
  const [showConfigModal, setShowConfigModal] = useState(false);

  if (ADS_CONFIG.provider === 'disabled') {
    return null;
  }

  // Get dimensions and label based on placement
  const getPlacementDetails = () => {
    switch (placement) {
      case 'leaderboard_top':
        return {
          title: 'Emplacement Bannière Supérieure (Leaderboard 728×90 / 320×50)',
          dimensions: '728×90 px (Bureau) · 320×50 px (Mobile)',
          minHeight: 'min-h-[90px]',
          description: 'Idéal pour Google AdSense Leaderboard ou bannière haute Adsterra.'
        };
      case 'in_article_mid':
        return {
          title: 'Emplacement Encart Milieu d’Article (300×250 / Fluide)',
          dimensions: '300×250 px (Pavé IAB)',
          minHeight: 'min-h-[250px]',
          description: 'Positionné naturellement après le 2e paragraphe pour un fort taux de visibilité sans gêner la lecture.'
        };
      case 'in_article_bottom':
        return {
          title: 'Emplacement Fin de Tutoriel (300×250 ou Grand Rectangle)',
          dimensions: '336×280 px / 300×250 px',
          minHeight: 'min-h-[250px]',
          description: 'Emplacement idéal pour les recommandations de contenu ou bannières de conversion.'
        };
      case 'sidebar_sticky':
        return {
          title: 'Emplacement Colonne Latérale (300×600 ou 300×250)',
          dimensions: '300×250 px / 300×600 px',
          minHeight: 'min-h-[250px]',
          description: 'Reste visible lors du défilement des longs guides sur grand écran.'
        };
    }
  };

  const details = getPlacementDetails();

  return (
    <>
      <div
        className={`my-6 w-full flex flex-col items-center justify-center p-3 rounded-lg border border-dashed border-slate-300 bg-slate-50/80 transition-colors ${details.minHeight} ${className}`}
        role="region"
        aria-label="Emplacement publicitaire"
      >
        <div className="w-full flex items-center justify-between text-[11px] font-medium uppercase tracking-wider text-slate-400 mb-2 px-1">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            Espace Publicitaire Réservé
          </span>
          {showHelp && (
            <button
              onClick={() => setShowConfigModal(true)}
              className="inline-flex items-center gap-1 text-slate-500 hover:text-cyan-600 transition-colors cursor-pointer text-[10px] lowercase py-0.5 px-1.5 rounded hover:bg-slate-200/60"
              title="Informations d'intégration technique AdSense / Adsterra"
            >
              <HelpCircle className="w-3 h-3 text-cyan-600" />
              <span>Guide d’activation</span>
            </button>
          )}
        </div>

        <div className="w-full py-4 px-3 flex flex-col items-center text-center justify-center">
          <p className="text-xs font-semibold text-slate-600">{details.dimensions}</p>
          <p className="text-[11px] text-slate-500 mt-1 max-w-md">
            Emplacement prêt pour scripts autorisés (AdSense, Adsterra, partenariats télécoms). Conforme aux normes d’accessibilité et de vitesse Core Web Vitals.
          </p>
        </div>
      </div>

      {/* Modal d'aide pour l'administrateur / développeur */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-600" />
                <h3 className="font-semibold text-slate-900 text-base">Intégration Publicitaire Réelle</h3>
              </div>
              <button
                onClick={() => setShowConfigModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-3 text-sm text-slate-600 leading-relaxed">
              <p>
                Ce site est conçu pour accueillir vos identifiants publicitaires réels en toute simplicité, sans perturber le score SEO ni le temps de chargement sur mobile.
              </p>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs font-mono text-slate-800 space-y-1">
                <div className="text-slate-500">// Fichier de configuration :</div>
                <div className="text-cyan-700 font-bold">src/config/ads.ts</div>
                <div className="pt-2 text-slate-600">
                  1. Passez <code className="text-emerald-700 font-semibold">provider: 'adsense'</code> ou <code className="text-emerald-700 font-semibold">'adsterra'</code><br />
                  2. Renseignez votre identifiant <code className="text-slate-900">ca-pub-XXXXXXXXXX</code> ou clés d’emplacement.
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <p className="font-medium text-slate-800">Directives d’éthique publicitaire :</p>
                <ul className="list-disc pl-4 space-y-1 text-slate-500">
                  <li>Aucune fausse bannière ni incitation trompeuse au clic.</li>
                  <li>Hauteur minimale réservée pour éliminer tout décalage de mise en page (zéro CLS).</li>
                  <li>Respect scrupuleux du confort de lecture sur petits écrans Android.</li>
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowConfigModal(false)}
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
              >
                J’ai compris
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
