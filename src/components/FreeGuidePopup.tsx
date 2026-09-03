import React, { useState, useEffect } from 'react';
import { BookOpen, Download, X, Sparkles, ExternalLink, Mail, CheckCircle2, Gift } from 'lucide-react';

export const FreeGuidePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Initial subtle popup trigger after 5 seconds if not seen
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem('guide_popup_dismissed');
      if (!dismissed) {
        setIsOpen(true);
        setIsMinimized(false);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      localStorage.setItem('guide_popup_dismissed', 'true');
      setTimeout(() => {
        setIsOpen(false);
        setIsMinimized(true);
      }, 3000);
    }
  };

  const handleDismiss = () => {
    setIsOpen(false);
    setIsMinimized(true);
    localStorage.setItem('guide_popup_dismissed', 'true');
  };

  return (
    <>
      {/* Floating Sticky Trigger Button (Always available & pulse animates) */}
      {isMinimized && (
        <div className="fixed bottom-5 left-5 z-40 animate-bounce">
          <button
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
            }}
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-3 rounded-full shadow-2xl border-2 border-emerald-400 flex items-center gap-2 transition-transform hover:scale-105"
          >
            <Gift className="w-4 h-4 text-amber-300" />
            <span>Free 20+ Recipe Guide</span>
            <span className="bg-amber-400 text-stone-950 text-[10px] px-2 py-0.5 rounded-full uppercase font-black">
              FREE
            </span>
          </button>
        </div>
      )}

      {/* Main Incentive Popup Modal */}
      {isOpen && !isMinimized && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-stone-900 border-2 border-emerald-500/60 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-stone-100 relative shadow-2xl space-y-6 overflow-hidden">
            
            {/* Top Glow Accent */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-stone-400 hover:text-white p-2 rounded-full hover:bg-stone-800 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Badge */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Limited Free Gift • Instant Access</span>
              </div>
              
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                Claim Your Free 20+ Digital Recipe Guide
              </h3>
              
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Unlock instant access to printable superfood meal cards, weekly grocery shopping matrices, plus VIP updates from our official partner platforms.
              </p>
            </div>

            {/* Featured Partner Blogs & Newsletters */}
            <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                ⭐ Included Free With Your Guide:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* AISearchBrief Newsletter */}
                <a
                  href="https://aisearchbrief.blog"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-stone-900 hover:bg-stone-850 p-3 rounded-xl border border-stone-800 hover:border-emerald-500/50 transition-colors group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                      <span>aisearchbrief.blog</span>
                      <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-emerald-400" />
                    </div>
                    <p className="text-[11px] text-stone-400 leading-tight">
                      Weekly AI, Search & Natural Health Intelligence Briefing
                    </p>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold mt-2 block">Visit Newsletter ↗</span>
                </a>

                {/* The Flavor Crave */}
                <a
                  href="https://theflavorcrave.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-stone-900 hover:bg-stone-850 p-3 rounded-xl border border-stone-800 hover:border-amber-500/50 transition-colors group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                      <span>theflavorcrave.com</span>
                      <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-amber-400" />
                    </div>
                    <p className="text-[11px] text-stone-400 leading-tight">
                      Gourmet Natural Recipe Craving & Plant-Based Food Blog
                    </p>
                  </div>
                  <span className="text-[10px] text-amber-400 font-semibold mt-2 block">Explore Food Blog ↗</span>
                </a>
              </div>
            </div>

            {/* Form */}
            {submitted ? (
              <div className="bg-emerald-950/80 p-5 rounded-2xl border border-emerald-700 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white text-sm">Guide Sent Successfully!</h4>
                <p className="text-xs text-stone-300">
                  We sent the PDF download link to <strong>{email}</strong>. Don't forget to check out <strong>aisearchbrief.blog</strong> and <strong>theflavorcrave.com</strong>!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for instant download..."
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-amber-300" />
                  <span>Get Free Guide + Newsletter Access</span>
                </button>

                <p className="text-[10px] text-stone-500 text-center">
                  100% Free • No Spam • Unsubscribe anytime
                </p>
              </form>
            )}

          </div>
        </div>
      )}
    </>
  );
};
