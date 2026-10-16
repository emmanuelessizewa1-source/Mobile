import { useState } from 'react';
import { Smartphone, Mail, ShieldAlert, CheckCircle2, ChevronRight, Globe, Lock, ExternalLink } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { COUNTRIES } from '../data/countries';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSubmitted(true);
    // Local storage simulation
    const subscribers = JSON.parse(localStorage.getItem('ama_newsletter_subscribers') || '[]');
    subscribers.push({ email: newsletterEmail, date: new Date().toISOString() });
    localStorage.setItem('ama_newsletter_subscribers', JSON.stringify(subscribers));
  };

  return (
    <footer className="w-full bg-[#070b1a] text-slate-400 border-t border-slate-800 text-sm">
      {/* Top Banner: Local Tech Assurance */}
      <div className="bg-[#0a1128] border-b border-slate-800 py-6 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 shrink-0">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Testé sur téléphones réels</h4>
              <p className="text-slate-400 mt-0.5">
                Chaque tutoriel est expérimenté sur Tecno, Infinix, Samsung et Xiaomi vendus sur les marchés locaux.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 shrink-0">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Vérification anti-arnaques</h4>
              <p className="text-slate-400 mt-0.5">
                Procédures Mobile Money et alertes cybercriminalité validées avec les recommandations officielles des régulateurs.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 shrink-0">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Adapté aux réseaux locaux</h4>
              <p className="text-slate-400 mt-0.5">
                Optimisé pour les connexions 3G/4G instables, les forfaits limités et les petits budgets de connexion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand & Mission */}
        <div className="lg:col-span-2 space-y-4">
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-2.5 text-left cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-white font-bold">
              <Smartphone className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              Aide Mobile <span className="text-cyan-400">Afrique</span>
            </span>
          </button>

          <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
            Le premier média pratique francophone consacré au dépannage, à la sécurité et à l’optimisation des smartphones et services financiers mobiles en Afrique subsaharienne.
          </p>

          {/* Newsletter Box */}
          <div className="pt-2">
            <h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
              Recevoir l'astuce de la semaine (Gratuit)
            </h5>
            {newsletterSubmitted ? (
              <div className="p-3 bg-cyan-950/60 border border-cyan-800 rounded-lg text-xs text-cyan-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Merci ! Vous recevrez nos prochains guides et alertes sécurité.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Votre adresse email..."
                  required
                  className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 flex-1"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-colors shrink-0 cursor-pointer"
                >
                  S’inscrire
                </button>
              </form>
            )}
            <p className="text-[10px] text-slate-500 mt-1">Zéro spam. Désabonnement en 1 clic.</p>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
            Rubriques
          </h4>
          <ul className="space-y-2 text-xs">
            {CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => onNavigate(`/categories/${cat.slug}`)}
                  className="hover:text-cyan-400 transition-colors text-left truncate block max-w-full cursor-pointer"
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Target Countries */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
            Guides par pays
          </h4>
          <ul className="space-y-2 text-xs">
            {COUNTRIES.map((country) => (
              <li key={country.code}>
                <button
                  onClick={() => onNavigate(`/guides-pays#${country.code.toLowerCase()}`)}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>{country.flag}</span>
                  <span>{country.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Information & Legal */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
            Informations
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onNavigate('/a-propos')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                À propos de la rédaction
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('/auteurs')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                Équipe éditoriale
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('/contact')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                Proposer un tutoriel / Contact
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('/politique-confidentialite')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                Politique de confidentialité
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('/mentions-legales')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                Mentions légales
              </button>
            </li>
            <li>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1">
                <span>Plan du site (XML)</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
            <li>
              <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1">
                <span>Robots.txt</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Disclaimers */}
      <div className="border-t border-slate-800/80 bg-[#050813] py-6 px-4 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Aide Mobile Afrique. Média indépendant. Tous droits réservés.
          </p>

          <p className="text-[11px] text-center sm:text-right max-w-md text-slate-500">
            Android est une marque déposée de Google LLC. WhatsApp est une marque de Meta Platforms. Orange Money, MTN MoMo, Wave et Moov sont les propriétés de leurs détenteurs respectifs.
          </p>
        </div>
      </div>
    </footer>
  );
}
