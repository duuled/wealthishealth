import React, { useState } from 'react';
import { ShoppingCart, Check, Plus, Trash2, Printer, Copy, Sparkles, BookOpen } from 'lucide-react';
import { recipes } from '../data/recipes';
import { Recipe } from '../types';

interface ShoppingListBuilderProps {
  plannerRecipes: Recipe[];
  onRemoveFromPlanner: (id: string) => void;
  onClearPlanner: () => void;
  onAddRecipeToPlanner: (recipe: Recipe) => void;
}

export const ShoppingListBuilder: React.FC<ShoppingListBuilderProps> = ({
  plannerRecipes,
  onRemoveFromPlanner,
  onClearPlanner,
  onAddRecipeToPlanner
}) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  // Aggregate ingredients
  const combinedIngredients = plannerRecipes.flatMap(r => 
    r.ingredients.map(ing => ({
      recipeTitle: r.title,
      item: ing.item,
      amount: ing.amount,
      notes: ing.notes
    }))
  );

  const toggleCheck = (key: string) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCopyList = () => {
    const text = combinedIngredients.map(ing => `• ${ing.amount} ${ing.item} (${ing.recipeTitle})`).join('\n');
    navigator.clipboard.writeText(`HEALTH IS WEALTH GROCERY LIST:\n\n${text}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="planner" className="py-16 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/90 border border-emerald-800 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <ShoppingCart className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Meal & Grocery Planner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Recipe Grocery List Builder
          </h2>
          <p className="text-stone-400 text-sm">
            Select recipes from our 20+ wellness vault to generate a consolidated ingredient checklist for your weekly grocery shopping.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Selected Recipes Selector */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-stone-950 p-6 rounded-3xl border border-stone-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-lg text-white">Selected Recipes ({plannerRecipes.length})</h3>
                {plannerRecipes.length > 0 && (
                  <button
                    onClick={onClearPlanner}
                    className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 font-semibold"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Clear All
                  </button>
                )}
              </div>

              {plannerRecipes.length === 0 ? (
                <div className="text-center py-8 text-stone-500 space-y-2">
                  <BookOpen className="w-8 h-8 mx-auto opacity-50" />
                  <p className="text-xs">No recipes added yet. Pick from below to build your shopping list!</p>
                </div>
              ) : (
                <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                  {plannerRecipes.map((r) => (
                    <div key={r.id} className="flex items-center justify-between bg-stone-900 p-3 rounded-xl border border-stone-800 text-xs">
                      <div className="flex items-center gap-3">
                        <img src={r.image} alt={r.title} className="w-10 h-10 rounded-lg object-cover" />
                        <div>
                          <span className="font-bold text-white block">{r.title}</span>
                          <span className="text-[10px] text-emerald-400">{r.category}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveFromPlanner(r.id)}
                        className="text-stone-400 hover:text-rose-400 p-1"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Quick Add Featured Recipes */}
              <div className="pt-4 border-t border-stone-800 space-y-2">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Quick Add Popular Recipes:</span>
                <div className="space-y-1.5">
                  {recipes.slice(0, 4).map((r) => {
                    const isAdded = plannerRecipes.some(p => p.id === r.id);
                    return (
                      <button
                        key={r.id}
                        disabled={isAdded}
                        onClick={() => onAddRecipeToPlanner(r)}
                        className={`w-full text-left p-2.5 rounded-xl text-xs font-medium flex items-center justify-between border transition-colors ${
                          isAdded
                            ? 'bg-emerald-950/30 border-emerald-900/50 text-stone-400'
                            : 'bg-stone-900 hover:bg-stone-800 border-stone-800 text-stone-200'
                        }`}
                      >
                        <span className="truncate mr-2">{r.title}</span>
                        <span className="font-bold text-emerald-400 shrink-0">
                          {isAdded ? '✓ Added' : '+ Add'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Aggregated Shopping List */}
          <div className="lg:col-span-7">
            <div className="bg-stone-950 p-6 sm:p-8 rounded-3xl border border-stone-800 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-800">
                <div>
                  <h3 className="font-serif font-bold text-xl text-white">Aggregated Grocery Checklist</h3>
                  <p className="text-xs text-stone-400">Total Ingredients: {combinedIngredients.length}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyList}
                    disabled={combinedIngredients.length === 0}
                    className="px-3.5 py-2 bg-stone-800 hover:bg-stone-700 disabled:opacity-50 text-stone-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-stone-700"
                  >
                    <Copy className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{copied ? 'Copied!' : 'Copy List'}</span>
                  </button>

                  <button
                    onClick={() => window.print()}
                    disabled={combinedIngredients.length === 0}
                    className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print List</span>
                  </button>
                </div>
              </div>

              {combinedIngredients.length === 0 ? (
                <div className="text-center py-12 text-stone-500 space-y-2">
                  <ShoppingCart className="w-10 h-10 mx-auto opacity-40" />
                  <p className="text-sm font-semibold">Your grocery list is currently empty</p>
                  <p className="text-xs">Add recipes from the left panel or recipe vault to populate ingredients!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[500px] overflow-y-auto pr-1">
                  {combinedIngredients.map((ing, idx) => {
                    const itemKey = `${ing.item}-${idx}`;
                    const isChecked = checkedItems[itemKey];

                    return (
                      <div
                        key={itemKey}
                        onClick={() => toggleCheck(itemKey)}
                        className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                          isChecked
                            ? 'bg-emerald-950/30 border-emerald-900/50 text-stone-500 line-through'
                            : 'bg-stone-900 border-stone-800 text-stone-200 hover:border-emerald-700/50'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                          isChecked ? 'bg-emerald-500 text-stone-950' : 'border border-stone-700 bg-stone-950'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 font-bold" />}
                        </div>
                        <div className="text-xs">
                          <span className="font-bold text-emerald-400 mr-1">{ing.amount}</span>
                          <span className="font-medium">{ing.item}</span>
                          <span className="block text-[10px] text-stone-500">For: {ing.recipeTitle}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
