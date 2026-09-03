import React, { useState } from 'react';
import { X, Clock, Flame, Check, Printer, Share2, Plus, Sparkles, BookOpen } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  onAddToPlanner?: (recipe: Recipe) => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose, onAddToPlanner }) => {
  if (!recipe) return null;

  const [servings, setServings] = useState(recipe.servings || 2);
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({});
  const [addedToPlanner, setAddedToPlanner] = useState(false);

  const multiplier = servings / (recipe.servings || 2);

  const toggleStep = (idx: number) => {
    setCheckedSteps(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handlePlannerClick = () => {
    if (onAddToPlanner) {
      onAddToPlanner(recipe);
      setAddedToPlanner(true);
      setTimeout(() => setAddedToPlanner(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="relative bg-stone-900 border border-stone-800 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto text-stone-100 shadow-2xl my-auto">
        
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 ml-auto z-10 w-10 h-10 rounded-full bg-stone-950/90 hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center border border-stone-700 transition-colors shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Header Image Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-700/80 text-xs font-bold uppercase tracking-wider">
              {recipe.category}
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white leading-tight">
              {recipe.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-stone-300">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-emerald-400" /> Prep: {recipe.prepTime}</span>
              <span className="flex items-center gap-1.5"><Flame className="w-4 h-4 text-amber-400" /> {Math.round(recipe.calories * multiplier)} Cal</span>
              <span className="flex items-center gap-1.5 text-amber-300">★ {recipe.rating} ({recipe.reviewsCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          <p className="text-stone-300 text-sm leading-relaxed border-l-2 border-emerald-500 pl-4 font-light">
            {recipe.description}
          </p>

          {/* Key Benefits */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" /> Key Health Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {recipe.keyBenefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2 bg-stone-950 p-2.5 rounded-xl text-xs text-stone-300 border border-stone-800">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Servings Adjuster Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-stone-950 border border-stone-800">
            <div>
              <span className="text-xs font-bold text-white block">Servings Multiplier</span>
              <span className="text-[11px] text-stone-400">Scale ingredients proportionately</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setServings(Math.max(1, servings - 1))}
                className="w-9 h-9 bg-stone-800 hover:bg-stone-700 text-white font-bold rounded-lg transition-colors"
              >
                -
              </button>
              <span className="text-emerald-400 font-bold text-base w-8 text-center">{servings}</span>
              <button
                onClick={() => setServings(Math.min(10, servings + 1))}
                className="w-9 h-9 bg-stone-800 hover:bg-stone-700 text-white font-bold rounded-lg transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Ingredients Section */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Ingredients
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {recipe.ingredients.map((ing, idx) => (
                <div key={idx} className="p-3 bg-stone-950 rounded-xl border border-stone-800 text-xs flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-stone-200">{ing.item}</span>
                    {ing.notes && <span className="block text-[10px] text-stone-400 italic">{ing.notes}</span>}
                  </div>
                  <span className="font-bold text-emerald-400 shrink-0 ml-2">
                    {ing.amount.replace(/^(\d+(\.\d+)?)/, (match) => {
                      const val = parseFloat(match) * multiplier;
                      return val % 1 === 0 ? val.toString() : val.toFixed(1);
                    })}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Step By Step Instructions */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Instructions
            </h3>
            <div className="space-y-3">
              {recipe.instructions.map((step, idx) => {
                const isChecked = checkedSteps[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleStep(idx)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                      isChecked
                        ? 'bg-emerald-950/30 border-emerald-800/80 text-stone-400 line-through'
                        : 'bg-stone-950 border-stone-800 text-stone-200 hover:border-stone-700'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full font-bold text-xs flex items-center justify-center shrink-0 ${
                      isChecked ? 'bg-emerald-500 text-stone-950' : 'bg-stone-800 text-stone-300'
                    }`}>
                      {idx + 1}
                    </span>
                    <p className="text-xs leading-relaxed">{step}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nutrition Facts Panel */}
          <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300">
              Nutritional Profile (Per Serving)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
              <div className="p-2 bg-stone-900 rounded-lg border border-stone-800">
                <span className="text-stone-400 block text-[10px]">Protein</span>
                <span className="font-bold text-emerald-400">{recipe.nutrition.protein}</span>
              </div>
              <div className="p-2 bg-stone-900 rounded-lg border border-stone-800">
                <span className="text-stone-400 block text-[10px]">Carbs</span>
                <span className="font-bold text-emerald-400">{recipe.nutrition.carbs}</span>
              </div>
              <div className="p-2 bg-stone-900 rounded-lg border border-stone-800">
                <span className="text-stone-400 block text-[10px]">Healthy Fat</span>
                <span className="font-bold text-emerald-400">{recipe.nutrition.fat}</span>
              </div>
              <div className="p-2 bg-stone-900 rounded-lg border border-stone-800">
                <span className="text-stone-400 block text-[10px]">Dietary Fiber</span>
                <span className="font-bold text-emerald-400">{recipe.nutrition.fiber}</span>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={handlePlannerClick}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>{addedToPlanner ? '✓ Added to Grocery Planner' : 'Add Ingredients to Grocery List'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="bg-stone-800 hover:bg-stone-700 text-stone-200 px-4 py-3 rounded-xl font-semibold text-xs flex items-center gap-2 border border-stone-700"
            >
              <Printer className="w-4 h-4 text-emerald-400" />
              <span>Print Recipe Card</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
