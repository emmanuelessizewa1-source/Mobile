import { useState } from 'react';
import { Mail, CheckCircle2, MessageSquare, AlertCircle, Send } from 'lucide-react';
import { COUNTRIES } from '../data/countries';
import { Breadcrumb } from '../components/Breadcrumb';
import { SeoHead } from '../components/SeoHead';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'CI',
    deviceModel: '',
    subject: 'tuto_request',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorMsg('Veuillez renseigner une adresse email valide.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);

    // Save message locally
    try {
      const existing = JSON.parse(localStorage.getItem('ama_contact_messages') || '[]');
      existing.push({
        ...formData,
        date: new Date().toISOString()
      });
      localStorage.setItem('ama_contact_messages', JSON.stringify(existing));
    } catch {
      // ignore
    }
  };

  return (
    <div className="space-y-8 pb-16 max-w-3xl mx-auto">
      <SeoHead
        title="Contact & Proposition de Tutoriels | Aide Mobile Afrique"
        description="Contactez la rédaction d'Aide Mobile Afrique pour proposer un tutoriel, signaler une erreur technique ou échanger avec nos experts."
        canonicalPath="/contact"
      />

      <Breadcrumb
        items={[{ label: 'Contact' }]}
        onNavigate={onNavigate}
      />

      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
        <div>
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">
            Échanger avec la rédaction
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Proposer un tutoriel ou nous contacter
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Vous avez un problème avec votre smartphone (Tecno, Infinix, Samsung) ? Vous avez repéré une nouvelle arnaque Mobile Money ? Envoyez-nous votre demande.
          </p>
        </div>

        {/* Transparent notice required by instructions */}
        <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-500 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
          <span>
            <strong>Information transparence :</strong> Votre message est enregistré dans notre système de démonstration. Pour les urgences bancaires, contactez toujours votre opérateur télécom directement.
          </span>
        </div>

        {submitted ? (
          <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl space-y-3 text-center animate-in fade-in">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h3 className="text-base font-bold text-emerald-900">Message bien enregistré !</h3>
            <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
              Merci {formData.name}, votre demande a été transmise à notre équipe éditoriale (Amadou & Marie-Pascale). Nous l'étudierons pour notre prochaine salve de tutoriels.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  country: 'CI',
                  deviceModel: '',
                  subject: 'tuto_request',
                  message: ''
                });
              }}
              className="mt-2 text-xs font-semibold text-emerald-800 underline cursor-pointer"
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMsg && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nom ou Prénom *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Koffi Mensah"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-cyan-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Adresse Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Ex: koffi@example.com"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-cyan-500 focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Votre Pays
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 focus:outline-none focus:border-cyan-500 focus:bg-white cursor-pointer"
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.flag} {c.name}
                    </option>
                  ))}
                  <option value="AUTRE">Autre pays d'Afrique</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Modèle de votre smartphone
                </label>
                <input
                  type="text"
                  value={formData.deviceModel}
                  onChange={(e) => setFormData({ ...formData, deviceModel: e.target.value })}
                  placeholder="Ex: Tecno Spark 10 Pro, Samsung A14..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-cyan-500 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Objet de votre message
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 focus:outline-none focus:border-cyan-500 focus:bg-white cursor-pointer"
              >
                <option value="tuto_request">Demande de nouveau tutoriel</option>
                <option value="bug_report">Signaler une erreur dans un guide</option>
                <option value="scam_alert">Alerter sur une nouvelle arnaque Mobile Money</option>
                <option value="partnership">Proposition de partenariat ou annonce publicitaire</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Détail de votre message ou question *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Décrivez clairement ce qui vous arrive ou le tutoriel que vous aimeriez voir publié..."
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-cyan-500 focus:bg-white"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-700 hover:bg-cyan-800 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Envoyer le message</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
