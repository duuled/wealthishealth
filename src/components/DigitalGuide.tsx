import React, { useState } from 'react';
import { BookOpen, Download, CheckCircle, Sparkles, ShieldCheck, FileText, ArrowRight, ExternalLink } from 'lucide-react';

export const DigitalGuide: React.FC = () => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setDownloadSuccess(true);
      setTimeout(() => {
        setDownloadSuccess(false);
        setDownloadModalOpen(false);
        setEmailInput('');
      }, 3000);
    }
  };

  return (
    <section id="guide" className="py-16 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-stone-100 border-b border-stone-800 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-stone-900 rounded-3xl border border-stone-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Instant Digital E-Book Download</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Download the Complete 20+ Digital Recipe Guide
              </h2>

              <p className="text-stone-300 text-base leading-relaxed font-light">
                Get immediate access to our high-resolution digital master guide. Beautifully formatted with printable recipe cards, grocery shopping templates, and complete Ayurvedic superfood pairings.
              </p>

              {/* Featured Partner Publication Cards */}
              <div className="bg-stone-950/80 p-4 rounded-2xl border border-stone-800 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                  🌟 Includes Exclusive Access To Our Partner Media:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="https://aisearchbrief.blog"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-stone-900 rounded-xl border border-stone-800 hover:border-emerald-500 transition-colors group"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-white">
                      <span>aisearchbrief.blog</span>
                      <ExternalLink className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <p className="text-[11px] text-stone-400 mt-1">
                      AI, Search Trends & Natural Health Intelligence Briefing
                    </p>
                  </a>

                  <a
                    href="https://theflavorcrave.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-stone-900 rounded-xl border border-stone-800 hover:border-amber-500 transition-colors group"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-white">
                      <span>theflavorcrave.com</span>
                      <ExternalLink className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <p className="text-[11px] text-stone-400 mt-1">
                      Gourmet Natural Craving Recipes & Plant-Based Culinary Blog
                    </p>
                  </a>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium text-stone-200">
                <div className="flex items-center gap-2.5 bg-stone-950 p-3 rounded-xl border border-stone-800">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>20 Full Plant-Based Healing Meals</span>
                </div>
                <div className="flex items-center gap-2.5 bg-stone-950 p-3 rounded-xl border border-stone-800">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Interactive PDF Printable Format</span>
                </div>
                <div className="flex items-center gap-2.5 bg-stone-950 p-3 rounded-xl border border-stone-800">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Weekly Grocery Shopping Matrix</span>
                </div>
                <div className="flex items-center gap-2.5 bg-stone-950 p-3 rounded-xl border border-stone-800">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>aisearchbrief.blog & theflavorcrave.com VIP Perks</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => setDownloadModalOpen(true)}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-xl shadow-emerald-950 transition-all flex items-center gap-2 group"
                >
                  <Download className="w-5 h-5 text-amber-300 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Download Free Digital Guide (PDF)</span>
                </button>
              </div>
            </div>

            {/* Right Book Visual Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                {/* Glow behind book */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500 to-amber-500 rounded-3xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity" />

                <div className="relative bg-stone-950 p-6 rounded-3xl border border-stone-800 shadow-2xl text-center space-y-4 max-w-sm">
                  <div className="relative h-72 rounded-2xl overflow-hidden border border-stone-800 shadow-inner">
                    <img 
                      src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800" 
                      alt="Digital Recipe Guide Cover" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                    
                    <div className="absolute inset-x-4 bottom-6 text-white text-center space-y-1">
                      <div className="text-[10px] tracking-widest text-emerald-400 font-extrabold uppercase">HEALTH IS WEALTH</div>
                      <div className="font-serif font-bold text-xl">NATURAL WELLNESS RECIPES</div>
                      <div className="text-xs text-stone-300 font-light">20 Healing Food Formulas</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-stone-400 px-2">
                    <span className="flex items-center gap-1"><FileText className="w-3.5 h-3.5 text-emerald-400" /> PDF Digital E-Book</span>
                    <span className="font-bold text-emerald-400">100% FREE</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Download Modal */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 rounded-3xl max-w-md w-full p-6 sm:p-8 text-stone-100 relative shadow-2xl space-y-6">
            <button
              onClick={() => setDownloadModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center"
            >
              ✕
            </button>

            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center mx-auto text-xl">
                📥
              </div>
              <h3 className="font-serif font-bold text-xl text-white">Get Your Digital Recipe E-Book</h3>
              <p className="text-xs text-stone-400">
                Enter your email below to receive instant PDF download access to all 20+ wellness recipes & meal planner.
              </p>
            </div>

            {downloadSuccess ? (
              <div className="bg-emerald-950 p-4 rounded-xl border border-emerald-800 text-center space-y-2">
                <p className="text-emerald-300 font-bold text-sm">🎉 Recipe Guide Sent Successfully!</p>
                <p className="text-xs text-stone-300">Check your inbox for your PDF link. Download starting automatically...</p>
              </div>
            ) : (
              <form onSubmit={handleDownload} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all shadow-lg"
                >
                  Get Instant Free Download
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
