import { useState } from 'react';
import { Wifi, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';

interface CalculatorProps {
  onOpenTutorial: (slug: string) => void;
}

export function DataSavingsCalculator({ onOpenTutorial }: CalculatorProps) {
  const [dailyMinutesTikTok, setDailyMinutesTikTok] = useState<number>(30);
  const [dailyMinutesYouTube, setDailyMinutesYouTube] = useState<number>(30);
  const [autoDownloadWhatsApp, setAutoDownloadWhatsApp] = useState<boolean>(true);

  // Standard consumption in MB per day
  // TikTok: ~8 MB / min standard, ~3 MB / min with data saver
  // YouTube 720p: ~15 MB / min standard, ~4 MB / min in 360p saver
  // WhatsApp auto media: ~150 MB / day vs ~20 MB / day manual
  const standardDailyMb = (dailyMinutesTikTok * 8) + (dailyMinutesYouTube * 15) + (autoDownloadWhatsApp ? 150 : 20);
  const optimizedDailyMb = (dailyMinutesTikTok * 3) + (dailyMinutesYouTube * 4) + 20;

  const monthlyStandardGb = ((standardDailyMb * 30) / 1024).toFixed(1);
  const monthlyOptimizedGb = ((optimizedDailyMb * 30) / 1024).toFixed(1);
  const savedGb = (Number(monthlyStandardGb) - Number(monthlyOptimizedGb)).toFixed(1);

  // Average price per GB in West/Central Africa ~ 800 - 1000 FCFA
  const estimatedSavingsFcfa = Math.round(Number(savedGb) * 900);

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-700 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Outil Pratique Interactif</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            Simulateur d’économies sur vos forfaits internet
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Estimez combien de gigas et de Francs CFA vous pouvez préserver chaque mois en appliquant nos réglages.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {/* Controls */}
        <div className="space-y-4 md:col-span-2 text-xs">
          <div>
            <div className="flex justify-between font-medium text-slate-700 mb-1">
              <span>Vidéos TikTok / Instagram Reels :</span>
              <span className="font-bold text-cyan-800">{dailyMinutesTikTok} min / jour</span>
            </div>
            <input
              type="range"
              min="0"
              max="120"
              step="10"
              value={dailyMinutesTikTok}
              onChange={(e) => setDailyMinutesTikTok(Number(e.target.value))}
              className="w-full accent-cyan-600 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between font-medium text-slate-700 mb-1">
              <span>Vidéos YouTube :</span>
              <span className="font-bold text-cyan-800">{dailyMinutesYouTube} min / jour</span>
            </div>
            <input
              type="range"
              min="0"
              max="120"
              step="10"
              value={dailyMinutesYouTube}
              onChange={(e) => setDailyMinutesYouTube(Number(e.target.value))}
              className="w-full accent-cyan-600 cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-slate-100">
            <span className="font-medium text-slate-700">Téléchargement auto des photos/vidéos WhatsApp :</span>
            <button
              onClick={() => setAutoDownloadWhatsApp(!autoDownloadWhatsApp)}
              className={`px-2.5 py-1 rounded text-xs font-semibold cursor-pointer transition-colors ${
                autoDownloadWhatsApp
                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                  : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
              }`}
            >
              {autoDownloadWhatsApp ? 'Activé (Gourmand)' : 'Désactivé (Recommandé)'}
            </button>
          </div>
        </div>

        {/* Results Panel */}
        <div className="bg-slate-900 text-white rounded-xl p-4 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
              Économie Mensuelle Estimée
            </span>
            <div className="text-3xl font-extrabold text-white tracking-tight">
              +{savedGb} <span className="text-base font-normal text-slate-400">Go sauvés</span>
            </div>
            <p className="text-xs text-emerald-400 font-medium">
              ≈ {estimatedSavingsFcfa.toLocaleString('fr-FR')} FCFA d'économisés / mois
            </p>
          </div>

          <button
            onClick={() => onOpenTutorial('economiser-donnees-mobiles-afrique')}
            className="mt-4 w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-colors cursor-pointer"
          >
            <span>Voir le tutoriel complet</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
