import React from 'react';
import { Zap, ShoppingBag, BookOpen, ShoppingCart, Star, Sparkles, CheckCircle2 } from 'lucide-react';

interface MinimalMainMenuProps {
  onNavigate: (sectionId: string) => void;
}

export const MinimalMainMenu: React.FC<MinimalMainMenuProps> = ({ onNavigate }) => {
  return (
    <section id="menu" className="py-10 bg-stone-900/90 border-y border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Minimalist Trust Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-800 text-xs text-stone-300">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-white">4.9 / 5.0</span>
            <span className="text-stone-400">• Over 1,200+ Venice CA Customers</span>
          </div>

          <div className="flex items-center gap-6 text-[11px] font-medium text-stone-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" /> Fast Express Shipping
            </span>
            <span className="hidden sm:inline">100% Organic Ingredients</span>
            <span className="hidden md:inline">Venice & Marina Del Rey Handcrafted</span>
          </div>
        </div>

        {/* Minimalist Main Menu Title */}
        <div className="text-center space-y-1">
          <h3 className="font-serif font-bold text-lg text-white uppercase tracking-widest text-emerald-400">
            QUICK EXPLORE MENU & STORE
          </h3>
          <p className="text-xs text-stone-400">Select a section to dive into our recipes, superfoods, or organic herbal store</p>
        </div>

        {/* Minimalist Main Grid Menu Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          
          {/* Card 1: Power 5 Smoothie */}
          <button
            onClick={() => onNavigate('power5')}
            className="bg-stone-950 hover:bg-stone-850 p-4 rounded-2xl border border-stone-800 hover:border-emerald-500/80 transition-all text-left group flex flex-col justify-between space-y-3 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-amber-950/80 text-amber-400 border border-amber-700/50 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950 px-2 py-0.5 rounded-full">
                #1 Recipe
              </span>
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-white group-hover:text-emerald-400 transition-colors">
                Power 5 Smoothie
              </h4>
              <p className="text-[11px] text-stone-400 mt-1 line-clamp-2">
                Moringa, Shilajit, Chaga, Neem & Amla vital blend
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 pt-1">
              View Formula ⚡
            </span>
          </button>

          {/* Card 2: Superfood Pantry */}
          <button
            onClick={() => onNavigate('supplements')}
            className="bg-stone-950 hover:bg-stone-850 p-4 rounded-2xl border border-stone-800 hover:border-emerald-500/80 transition-all text-left group flex flex-col justify-between space-y-3 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-700/50 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-full">
                Organic Store
              </span>
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-white group-hover:text-emerald-400 transition-colors">
                Superfood Pantry
              </h4>
              <p className="text-[11px] text-stone-400 mt-1 line-clamp-2">
                Raw Shilajit, Moringa, Chaga & Organic Herbs
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 pt-1">
              Shop Powders ↗
            </span>
          </button>

          {/* Card 3: 20+ Digital Recipe Vault */}
          <button
            onClick={() => onNavigate('recipes')}
            className="bg-stone-950 hover:bg-stone-850 p-4 rounded-2xl border border-stone-800 hover:border-emerald-500/80 transition-all text-left group flex flex-col justify-between space-y-3 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-purple-950/80 text-purple-400 border border-purple-700/50 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-950 px-2 py-0.5 rounded-full">
                20+ Meals
              </span>
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-white group-hover:text-purple-300 transition-colors">
                Recipe Catalog
              </h4>
              <p className="text-[11px] text-stone-400 mt-1 line-clamp-2">
                Anti-inflammatory, energy & detox food guides
              </p>
            </div>
            <span className="text-xs font-bold text-purple-400 flex items-center gap-1 pt-1">
              Browse Vault 📖
            </span>
          </button>

          {/* Card 4: Grocery Shopping List */}
          <button
            onClick={() => onNavigate('planner')}
            className="bg-stone-950 hover:bg-stone-850 p-4 rounded-2xl border border-stone-800 hover:border-emerald-500/80 transition-all text-left group flex flex-col justify-between space-y-3 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-blue-950/80 text-blue-400 border border-blue-700/50 flex items-center justify-center font-bold">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 bg-blue-950 px-2 py-0.5 rounded-full">
                Smart List
              </span>
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-white group-hover:text-blue-300 transition-colors">
                Grocery Planner
              </h4>
              <p className="text-[11px] text-stone-400 mt-1 line-clamp-2">
                Auto-generate your weekly shopping list
              </p>
            </div>
            <span className="text-xs font-bold text-blue-400 flex items-center gap-1 pt-1">
              Build List 📋
            </span>
          </button>

          {/* Card 5: Free Digital Guide & Blogs */}
          <button
            onClick={() => onNavigate('guide')}
            className="bg-stone-950 hover:bg-stone-850 p-4 rounded-2xl border border-stone-800 hover:border-amber-500/80 transition-all text-left group flex flex-col justify-between space-y-3 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-amber-950/80 text-amber-400 border border-amber-700/50 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-950 bg-amber-400 px-2 py-0.5 rounded-full">
                Free E-Book
              </span>
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                Digital Guide & Blogs
              </h4>
              <p className="text-[11px] text-stone-400 mt-1 line-clamp-2">
                Free PDF + aisearchbrief.blog & theflavorcrave.com
              </p>
            </div>
            <span className="text-xs font-bold text-amber-400 flex items-center gap-1 pt-1">
              Download Free 📥
            </span>
          </button>

        </div>

      </div>
    </section>
  );
};
