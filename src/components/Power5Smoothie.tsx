import React, { useState } from 'react';
import { Leaf, Sparkles, Check, Clock, Flame, Printer, Share2, Plus, ShoppingCart, Zap, Heart } from 'lucide-react';
import { recipes } from '../data/recipes';
import { Recipe } from '../types';

interface Power5SmoothieProps {
  onAddToCart: (item: { id: string; name: string; price: number; image: string; type: 'supplement' }) => void;
  onOpenRecipeModal: (recipe: Recipe) => void;
}

export const Power5Smoothie: React.FC<Power5SmoothieProps> = ({ onAddToCart, onOpenRecipeModal }) => {
  const recipe = recipes.find(r => r.id === 'power-5-health-smoothie') || recipes[0];
  const [servings, setServings] = useState(2);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [copied, setCopied] = useState(false);

  const multiplier = servings / 2;

  const toggleCheck = (index: number) => {
    setCheckedIngredients(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="power5" className="py-16 bg-stone-950 text-stone-100 border-b border-stone-800 relative overflow-hidden">
      
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/70 border border-amber-700/50 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Featured Wellness Recipe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            The Power 5 Health Smoothie
          </h2>
          <p className="text-stone-300 text-base leading-relaxed">
            Our signature ancient superfood blend formulated in Venice, California. A synergistic fusion of <strong>Moringa, Neem, Chaga, and Shilajit</strong> for optimal vital energy and cellular protection.
          </p>
        </div>

        {/* Recipe Main Card Container */}
        <div className="bg-stone-900 rounded-3xl border border-stone-800 overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Image & Stats Panel */}
            <div className="lg:col-span-5 relative bg-stone-950 p-6 lg:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-800">
              
              <div>
                <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden mb-6 shadow-xl border border-stone-800 group">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    5 Superfoods
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-stone-200">
                    <span className="bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-700 font-semibold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" /> {recipe.prepTime} Prep
                    </span>
                    <span className="bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-700 font-semibold flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-amber-400" /> {Math.round(recipe.calories * multiplier)} Cal
                    </span>
                  </div>
                </div>

                {/* Key Benefits List */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" /> Key Health Benefits
                  </h4>
                  {recipe.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="pt-4 border-t border-stone-800 flex items-center justify-between gap-3">
                <button
                  onClick={handlePrint}
                  className="flex-1 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border border-stone-700 transition-colors"
                >
                  <Printer className="w-4 h-4 text-emerald-400" /> Print Recipe
                </button>

                <button
                  onClick={handleCopyLink}
                  className="py-2.5 px-4 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border border-stone-700 transition-colors"
                >
                  <Share2 className="w-4 h-4 text-emerald-400" />
                  <span>{copied ? 'Copied!' : 'Share'}</span>
                </button>
              </div>

            </div>

            {/* Right Recipe Ingredients & Preparation */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-8">
              
              {/* Servings Adjuster */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-800">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white">{recipe.title}</h3>
                  <p className="text-xs text-stone-400 mt-0.5">Adjust servings below to auto-scale ingredients</p>
                </div>

                <div className="flex items-center bg-stone-950 p-1.5 rounded-xl border border-stone-800">
                  <span className="text-xs font-semibold text-stone-400 px-3">Servings:</span>
                  <button
                    onClick={() => setServings(Math.max(1, servings - 1))}
                    className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-100 font-bold flex items-center justify-center text-sm transition-colors"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-emerald-400 text-sm">{servings}</span>
                  <button
                    onClick={() => setServings(Math.min(10, servings + 1))}
                    className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-100 font-bold flex items-center justify-center text-sm transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Ingredients Checklist */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-emerald-400" />
                    Ingredients Checklist ({recipe.ingredients.length})
                  </h4>
                  <span className="text-[11px] text-amber-400 font-semibold bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-700/50">
                    📦 Fresh Express Delivery
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {recipe.ingredients.map((ing, idx) => {
                    const isChecked = checkedIngredients[idx];
                    return (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border transition-all flex items-start justify-between gap-2 ${
                          isChecked 
                            ? 'bg-emerald-950/40 border-emerald-800/80 text-stone-400' 
                            : 'bg-stone-950 border-stone-800/80 text-stone-200'
                        }`}
                      >
                        <div 
                          onClick={() => toggleCheck(idx)}
                          className="flex items-start gap-2.5 cursor-pointer flex-1 min-w-0"
                        >
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            isChecked ? 'bg-emerald-500 text-stone-950' : 'border border-stone-700 bg-stone-900'
                          }`}>
                            {isChecked && <Check className="w-3.5 h-3.5 font-bold" />}
                          </div>
                          <div className="text-xs">
                            <span className="font-bold text-emerald-300 mr-1.5">
                              {/* Scaled amount display */}
                              {ing.amount.replace(/^(\d+(\.\d+)?)/, (match) => {
                                const val = parseFloat(match) * multiplier;
                                return val % 1 === 0 ? val.toString() : val.toFixed(1);
                              })}
                            </span>
                            <span className={`font-medium ${isChecked ? 'line-through' : ''}`}>{ing.item}</span>
                            {ing.notes && <span className="block text-[11px] text-stone-400 italic font-normal">{ing.notes}</span>}
                          </div>
                        </div>

                        {ing.amazonUrl && (
                          <a
                            href={ing.amazonUrl}
                            target="_blank"
                            rel="noreferrer"
                            title={`Order ${ing.item}`}
                            className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 hover:text-amber-200 px-2 py-1 rounded-lg text-[10px] font-bold shrink-0 flex items-center gap-1 border border-amber-500/40 transition-colors"
                          >
                            Order Direct ↗
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step By Step Instructions */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                  Step-by-Step Preparation
                </h4>
                <div className="space-y-3">
                  {recipe.instructions.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-stone-950 p-3.5 rounded-xl border border-stone-800">
                      <span className="w-6 h-6 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs text-stone-300 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Superfoods Callout Banner */}
              <div className="bg-gradient-to-r from-emerald-950 to-stone-950 p-4 rounded-2xl border border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="text-xs font-bold text-white uppercase tracking-wide">Need the Complete Power 5 Superfood Powders?</h5>
                  <p className="text-xs text-stone-300">100% organic Moringa, Neem, Chaga & Shilajit delivered directly to your door.</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <a
                    href="https://www.amazon.com/s?k=moringa+shilajit+chaga+neem+amla+superfood&tag=healthiswealth-20"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-amber-500 hover:bg-amber-400 text-stone-950 px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-lg transition-all"
                  >
                    <span>Order Bundle Direct ↗</span>
                  </a>
                  <button
                    onClick={() => onAddToCart({
                      id: 'power-5-superfood-bundle',
                      name: 'Power 5 Superfood Bundle',
                      price: 89.99,
                      image: recipe.image,
                      type: 'supplement'
                    })}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-lg transition-all"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" /> + Cart ($89.99)
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
