import React from 'react';
import { Leaf, Award, ShieldCheck, HeartPulse, Sparkles, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 text-stone-100 overflow-hidden pt-8 pb-16 lg:py-20 border-b border-stone-800">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Venice California • Handcrafted Natural Wellness</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.15]">
              Nourish Body & Mind With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                Natural Healing Recipes
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-stone-300 font-light leading-relaxed max-w-2xl">
              Discover <strong>20+ nutrient-dense plant-based recipes</strong> engineered to restore metabolic balance, boost physical stamina, and strengthen immunity. Infused with pure ancient superfoods: 
              <span className="text-emerald-300 font-medium"> Moringa, Shilajit, Chaga Mushroom, Neem & Amla</span>.
            </p>

            {/* Quick feature checks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-stone-300">
              <div className="flex items-center gap-2 bg-stone-800/60 p-2.5 rounded-lg border border-stone-700/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>20+ Plant-Based Meals</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-800/60 p-2.5 rounded-lg border border-stone-700/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Organic Superfoods</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-800/60 p-2.5 rounded-lg border border-stone-700/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Ayurvedic Wisdom</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('power5')}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-emerald-900/50 flex items-center justify-center gap-2 group"
              >
                <Leaf className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
                <span>Get Free Power 5 Recipe</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('recipes')}
                className="bg-stone-800 hover:bg-stone-700 text-stone-100 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all border border-stone-700 flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>Explore 20+ Recipes</span>
              </button>
            </div>

            {/* Social Trust Line */}
            <div className="pt-4 border-t border-stone-800/80 flex items-center gap-4 text-xs text-stone-400">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-stone-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-stone-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-stone-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="User" />
              </div>
              <div>
                <div className="flex text-amber-400 text-xs">★★★★★</div>
                <p>Loved by 12,000+ wellness enthusiasts in California & Worldwide</p>
              </div>
            </div>

          </div>

          {/* Hero Right Visual Card Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 opacity-30 blur-lg" />

              <div className="relative bg-stone-900 rounded-2xl p-6 border border-stone-800 shadow-2xl space-y-5">
                
                {/* Main Card Image */}
                <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=800" 
                    alt="Power 5 Superfood Smoothie" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                  
                  {/* Badge on image */}
                  <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-emerald-400 border border-emerald-500/40">
                    🌿 Power 5 Signature Blend
                  </div>

                  {/* Rating on image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-serif font-bold text-lg">Power 5 Health Smoothie</h3>
                    <p className="text-xs text-stone-300">Moringa • Neem • Chaga • Shilajit • Banana</p>
                  </div>
                </div>

                {/* Ingredients Pills */}
                <div>
                  <div className="text-xs font-bold uppercase text-stone-400 tracking-wider mb-2">
                    5 Superfood Ingredients:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-300 text-xs font-semibold border border-emerald-800">
                      Moringa Powder
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-300 text-xs font-semibold border border-emerald-800">
                      Neem Leaf
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-amber-950 text-amber-300 text-xs font-semibold border border-amber-800">
                      Chaga Mushroom
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-stone-800 text-stone-200 text-xs font-semibold border border-stone-700">
                      Pure Shilajit
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-950 text-emerald-300 text-xs font-semibold border border-emerald-800">
                      Organic Amla
                    </span>
                  </div>
                </div>

                {/* Quick Callout Box */}
                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 text-xs flex items-center justify-between">
                  <div>
                    <span className="text-stone-400 block">Digital Guide Included</span>
                    <span className="font-bold text-amber-300 text-sm">20 Healing Recipes E-Book</span>
                  </div>
                  <button
                    onClick={() => onNavigate('guide')}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg font-bold text-xs"
                  >
                    Download
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
