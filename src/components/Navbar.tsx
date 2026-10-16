import { useState, useEffect } from 'react';
import { Search, Menu, X, Smartphone, Zap, Wifi, ShieldCheck, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { COUNTRIES } from '../data/countries';
import { useDataSaver } from '../context/DataSaverContext';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export function Navbar({ currentPath, onNavigate, onOpenSearch }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDataSaver, toggleDataSaver } = useDataSaver();

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'Android', path: '/categories/android-smartphones' },
    { label: 'WhatsApp', path: '/categories/whatsapp-reseaux' },
    { label: 'Économie Mo', path: '/categories/internet-economies' },
    { label: 'Mobile Money', path: '/categories/mobile-money' },
    { label: 'Guides Pays', path: '/guides-pays' }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#0a1128] text-white border-b border-slate-800 shadow-md">
        {/* Top operational strip: Data saver indicator + Country quick pill */}
        <div className="bg-[#070b1a] border-b border-slate-800/80 px-4 py-1 text-xs text-slate-400">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-[11px] truncate">
              <span className="text-cyan-400 font-medium">Afrique Tech :</span>
              <span className="hidden sm:inline">Togo · Bénin · Côte d’Ivoire · Sénégal · Cameroun · RDC</span>
              <span className="sm:hidden">Guides pratiques 100% testés</span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={toggleDataSaver}
                className={`flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                  isDataSaver
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Activez pour réduire le chargement des images et économiser vos données"
              >
                <Zap className={`w-3 h-3 ${isDataSaver ? 'text-cyan-400 fill-cyan-400' : ''}`} />
                <span>Mode Éco Mo : <span className="font-bold">{isDataSaver ? 'ON' : 'OFF'}</span></span>
              </button>
            </div>
          </div>
        </div>

        {/* Main 3-Zone Navigation Bar */}
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none shrink-0"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 flex items-center justify-center text-white shadow-sm shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Smartphone className="w-5 h-5 text-white stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-white leading-tight font-sans">
                Aide Mobile <span className="text-cyan-400">Afrique</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                Média Tech & Tutoriels
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <button
                  key={link.path}
                  onClick={() => onNavigate(link.path)}
                  className={`relative py-1 transition-colors whitespace-nowrap cursor-pointer text-sm ${
                    isActive ? 'text-cyan-400 font-semibold' : 'hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Search Action & Mobile Hamburger */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/70 text-slate-300 hover:text-white transition-colors text-xs cursor-pointer"
              aria-label="Rechercher un tutoriel"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Rechercher...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-slate-900/60 rounded text-slate-400 border border-slate-700">
                /
              </kbd>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none cursor-pointer"
              aria-label="Ouvrir le menu mobile"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col bg-[#0a1128] text-white overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="px-4 py-3 flex items-center justify-between border-b border-slate-800 bg-[#070b1a]">
            <button
              onClick={() => {
                onNavigate('/');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-white">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white">Aide Mobile <span className="text-cyan-400">Afrique</span></span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-400 hover:text-white"
              aria-label="Fermer le menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Quick search button in drawer */}
          <div className="p-4 border-b border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 text-sm"
            >
              <Search className="w-4 h-4 text-cyan-400" />
              <span>Rechercher un tutoriel, un code USSD...</span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="p-4 space-y-1">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2 py-1">
              Navigation Principale
            </div>
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  onNavigate(link.path);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                  currentPath === link.path ? 'bg-cyan-500/15 text-cyan-400 font-semibold' : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            ))}
          </div>

          {/* Categories Grid */}
          <div className="p-4 border-t border-slate-800/80">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2 py-1 mb-2">
              Toutes les Catégories
            </div>
            <div className="grid grid-cols-1 gap-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onNavigate(`/categories/${cat.slug}`);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-xs text-slate-300 hover:bg-slate-800/60 hover:text-white text-left"
                >
                  <span className="truncate">{cat.name}</span>
                  <span className="text-[11px] text-slate-500 font-mono tabular-nums">{cat.articleCount} articles</span>
                </button>
              ))}
            </div>
          </div>

          {/* Country list */}
          <div className="p-4 border-t border-slate-800/80">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-2 py-1 mb-2">
              Guides par Pays
            </div>
            <div className="grid grid-cols-2 gap-2">
              {COUNTRIES.map((c) => (
                <button
                  key={c.code}
                  onClick={() => {
                    onNavigate(`/guides-pays#${c.code.toLowerCase()}`);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-200 hover:border-cyan-500/50 text-left"
                >
                  <span className="text-base">{c.flag}</span>
                  <span className="truncate">{c.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Footer of drawer */}
          <div className="mt-auto p-4 border-t border-slate-800 bg-[#070b1a] text-xs text-slate-400 flex items-center justify-between">
            <span>Aide Mobile Afrique</span>
            <div className="flex gap-3">
              <button onClick={() => { onNavigate('/a-propos'); setMobileMenuOpen(false); }} className="hover:text-white">À propos</button>
              <button onClick={() => { onNavigate('/contact'); setMobileMenuOpen(false); }} className="hover:text-white">Contact</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
