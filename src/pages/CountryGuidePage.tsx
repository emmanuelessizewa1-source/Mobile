import { useState } from 'react';
import { COUNTRIES } from '../data/countries';
import { ARTICLES } from '../data/articles';
import { Breadcrumb } from '../components/Breadcrumb';
import { ArticleCard } from '../components/ArticleCard';
import { SeoHead } from '../components/SeoHead';
import { Globe, PhoneCall, ShieldAlert, CreditCard, ChevronRight } from 'lucide-react';

interface CountryGuideProps {
  onNavigate: (path: string) => void;
  onSelectArticle: (slug: string) => void;
}

export function CountryGuidePage({ onNavigate, onSelectArticle }: CountryGuideProps) {
  const [activeCountryCode, setActiveCountryCode] = useState<string>('CI');

  const country = COUNTRIES.find((c) => c.code === activeCountryCode) || COUNTRIES[0];

  // Specific country USSD tables
  const ussdCodesByCountry: Record<string, { label: string; code: string; operator: string }[]> = {
    TG: [
      { operator: 'Togocom', label: 'Menu T-Money (Mobile Money)', code: '*145#' },
      { operator: 'Togocom', label: 'Souscription Forfaits Internet', code: '*909#' },
      { operator: 'Moov Africa Togo', label: 'Moov Money', code: '*155#' },
      { operator: 'Moov Africa Togo', label: 'Forfaits Data & Voix', code: '*115#' },
      { operator: 'Autorité ARCEP', label: 'Plaintes qualité réseau', code: '8000 (Gratuit)' }
    ],
    BJ: [
      { operator: 'MTN Bénin', label: 'MTN MoMo (Mobile Money)', code: '*880#' },
      { operator: 'MTN Bénin', label: 'Forfaits Internet & Maxigigas', code: '*130#' },
      { operator: 'Moov Africa Bénin', label: 'Moov Money', code: '*855#' },
      { operator: 'Moov Africa Bénin', label: 'Menu Forfaits Moov', code: '*106#' },
      { operator: 'Celtiis', label: 'Alodo / Celtiis Cash', code: '*888#' }
    ],
    CI: [
      { operator: 'Orange CI', label: 'Orange Money Côte d’Ivoire', code: '#144#' },
      { operator: 'Orange CI', label: 'Pass Internet & Mix', code: '#111#' },
      { operator: 'MTN CI', label: 'MTN MoMo', code: '*133#' },
      { operator: 'MTN CI', label: 'Forfaits Internet MTN', code: '*105#' },
      { operator: 'Moov Africa CI', label: 'Moov Money', code: '*155#' },
      { operator: 'Wave CI', label: 'Application Wave ou Service Client', code: '1315 (Gratuit)' }
    ],
    SN: [
      { operator: 'Orange Sénégal', label: 'Orange Money Sénégal', code: '#144#' },
      { operator: 'Orange Sénégal', label: 'Pass Internet Illimix', code: '#123#' },
      { operator: 'Free Sénégal', label: 'Free Money', code: '*150#' },
      { operator: 'Wave Sénégal', label: 'Support & Opposition Wave', code: '200600 (Gratuit)' },
      { operator: 'Expresso', label: 'E-Money', code: '*100#' }
    ],
    CM: [
      { operator: 'MTN Cameroon', label: 'MTN Mobile Money (MoMo)', code: '*126#' },
      { operator: 'MTN Cameroon', label: 'Forfaits Wanda Net & Yamo', code: '*123#' },
      { operator: 'Orange Cameroun', label: 'Orange Money Cameroun', code: '#150#' },
      { operator: 'Orange Cameroun', label: 'Pass Data Orange', code: '#131#' },
      { operator: 'Camtel Blue', label: 'Forfaits Blue Home & Mobile', code: '*825#' }
    ],
    CD: [
      { operator: 'Vodacom RDC', label: 'M-Pesa RDC', code: '*1122# ou *1222#' },
      { operator: 'Vodacom RDC', label: 'Forfaits Internet & M-Net', code: '*1111#' },
      { operator: 'Airtel RDC', label: 'Airtel Money RDC', code: '*501#' },
      { operator: 'Orange RDC', label: 'Orange Money RDC', code: '*144#' },
      { operator: 'Africell RDC', label: 'Afrimoney', code: '*111#' }
    ]
  };

  const ussdList = ussdCodesByCountry[country.code] || [];

  return (
    <div className="space-y-8 pb-16">
      <SeoHead
        title={`Guides Télécoms & Codes USSD : ${country.name} | Aide Mobile Afrique`}
        description={`Retrouvez les codes USSD officiels Mobile Money (Orange, MTN, Wave, Moov), les numéros anti-arnaque et réglages opérateurs pour ${country.name}.`}
        canonicalPath="/guides-pays"
      />

      <Breadcrumb
        items={[{ label: 'Guides pratiques par pays' }]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-cyan-700 uppercase tracking-wider mb-2">
          <Globe className="w-4 h-4" />
          <span>Annuaire Télécoms Régional</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Guides pratiques et codes USSD par pays
        </h1>
        <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
          Sélectionnez votre pays pour accéder instantanément aux syntaxes officielles de vérification de solde, souscription de forfaits internet et numéros d’urgence contre les arnaques.
        </p>

        {/* Country selector tabs */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {COUNTRIES.map((c) => (
            <button
              key={c.code}
              onClick={() => setActiveCountryCode(c.code)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCountryCode === c.code
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span className="text-base">{c.flag}</span>
              <span>{c.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Country Detail Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: USSD Codes Table */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-cyan-600" />
              <span>Codes USSD Officiels en {country.name}</span>
            </h2>
            <span className="text-xs text-slate-500 font-mono">Devise : {country.currency}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider border-b border-slate-100">
                <tr>
                  <th className="py-2.5 px-3 font-semibold">Opérateur</th>
                  <th className="py-2.5 px-3 font-semibold">Service</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Code à composer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ussdList.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-3 px-3 font-medium text-slate-900">{item.operator}</td>
                    <td className="py-3 px-3 text-slate-600">{item.label}</td>
                    <td className="py-3 px-3 text-right">
                      <span className="inline-block px-2.5 py-1 bg-cyan-50 text-cyan-900 border border-cyan-200 rounded font-mono font-bold text-xs">
                        {item.code}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-100">
            Note : Les syntaxes USSD sont vérifiées régulièrement. En cas de changement d'un opérateur, contactez la rédaction d’Aide Mobile Afrique.
          </p>
        </div>

        {/* Right: Emergency & Cybercrime Services */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white rounded-xl p-5 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              <span>Sécurité & Arnaques en {country.name}</span>
            </div>

            <h3 className="text-sm font-bold text-white">
              Recours officiel en cas de vol Mobile Money ou chantage
            </h3>

            <div className="space-y-2 text-xs">
              <div className="p-3 bg-slate-800 rounded-lg">
                <span className="text-slate-400 block text-[11px]">Unité Nationale Cybercriminalité :</span>
                <span className="font-semibold text-cyan-300">{country.emergencyContacts.cybercrime}</span>
              </div>

              <div className="p-3 bg-slate-800 rounded-lg flex items-center justify-between">
                <span className="text-slate-400 text-[11px]">Police Secours :</span>
                <span className="font-mono font-bold text-white">{country.emergencyContacts.police}</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              Conservez toujours les captures d’écran des faux SMS et le relevé de transaction avant de déposer plainte.
            </p>
          </div>

          {/* Target Tutorial Shortcut */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Guide recommandé pour {country.name}
            </h4>
            <p className="text-xs text-slate-600">
              Comment reconnaître et éviter les arnaques de faux dépôts Mobile Money sur les réseaux locaux.
            </p>
            <button
              onClick={() => onSelectArticle('eviter-arnaques-faux-depots-mobile-money')}
              className="mt-2 text-xs font-bold text-cyan-700 hover:text-cyan-800 flex items-center gap-1 cursor-pointer"
            >
              <span>Consulter le tutoriel de sécurité</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
