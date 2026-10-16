import { useState } from 'react';
import { Share2, Check, Copy, MessageCircle, Twitter, Facebook, Send } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const fullUrl = url.startsWith('http') ? url : `${window.location.origin}${url.startsWith('#') ? url : `#${url}`}`;
  const shareText = `Tutoriel pratique : ${title} - via Aide Mobile Afrique`;

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(fullUrl);
      } else {
        const input = document.createElement('input');
        input.value = fullUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const shareWhatsApp = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} : ${fullUrl}`)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const shareFacebook = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`;
    window.open(fbUrl, '_blank', 'noopener,noreferrer');
  };

  const shareTwitter = () => {
    const twUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(fullUrl)}`;
    window.open(twUrl, '_blank', 'noopener,noreferrer');
  };

  const shareTelegram = () => {
    const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(tgUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1 flex items-center gap-1.5">
        <Share2 className="w-3.5 h-3.5 text-cyan-600" />
        Partager :
      </span>

      {/* WhatsApp (most critical for African users) */}
      <button
        onClick={shareWhatsApp}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium transition-colors cursor-pointer shadow-xs"
        title="Partager sur WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5 fill-current" />
        <span>WhatsApp</span>
      </button>

      {/* Facebook */}
      <button
        onClick={shareFacebook}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-medium transition-colors cursor-pointer shadow-xs"
        title="Partager sur Facebook"
      >
        <Facebook className="w-3.5 h-3.5 fill-current" />
        <span className="hidden sm:inline">Facebook</span>
      </button>

      {/* X / Twitter */}
      <button
        onClick={shareTwitter}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-black text-white text-xs font-medium transition-colors cursor-pointer shadow-xs"
        title="Partager sur X (Twitter)"
      >
        <Twitter className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">X</span>
      </button>

      {/* Telegram */}
      <button
        onClick={shareTelegram}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#229ED9] hover:bg-[#1f8ec4] text-white text-xs font-medium transition-colors cursor-pointer shadow-xs"
        title="Partager sur Telegram"
      >
        <Send className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Telegram</span>
      </button>

      {/* Copy link */}
      <button
        onClick={copyToClipboard}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
          copied
            ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
            : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300'
        }`}
        title="Copier le lien"
      >
        {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
        <span>{copied ? 'Lien copié !' : 'Copier'}</span>
      </button>
    </div>
  );
}
