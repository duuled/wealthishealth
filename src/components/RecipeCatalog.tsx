import React, { useState } from 'react';
import { Search, Filter, Clock, Flame, Sparkles, BookOpen, ChevronRight, Star, Heart } from 'lucide-react';
import { recipes } from '../data/recipes';
import { Recipe, Category } from '../types';

interface RecipeCatalogProps {
  onSelectRecipe: (recipe: Recipe) => void;
  searchQuery?: string;
}

export const RecipeCatalog: React.FC<RecipeCatalogProps> = ({ onSelectRecipe, searchQuery: initialSearch = '' }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const categories: Category[] = ['All', 'Energy & Vitality', 'Healing & Detox', 'Immunity & Strength', 'Mind & Rest'];

  const filteredRecipes = recipes.filter(r => {
    const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || r.difficulty === selectedDifficulty;
    const matchesSearch = searchTerm === '' || 
      r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.superfoodsUsed.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
      r.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  return (
    <section id="recipes" className="py-16 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Digital Recipe Vault</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              20+ Natural Wellness & Healing Recipes
            </h2>
            <p className="text-stone-400 text-sm mt-1 max-w-xl">
              Plant-based, nutrient-dense, and formulated to restore cellular vitality. Click any recipe to view complete ingredients & steps.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by ingredient (Moringa, Shilajit, Amla)..."
              className="w-full bg-stone-950 border border-stone-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const count = cat === 'All' ? recipes.length : recipes.filter(r => r.category === cat).length;
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-2 ${
                  isActive
                    ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-950'
                    : 'bg-stone-950 border-stone-800 text-stone-300 hover:border-stone-700 hover:text-white'
                }`}
              >
                <span>{cat}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  isActive ? 'bg-emerald-800 text-white' : 'bg-stone-800 text-stone-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Recipes Grid */}
        {filteredRecipes.length === 0 ? (
          <div className="text-center py-16 bg-stone-950 rounded-2xl border border-stone-800 space-y-3">
            <Search className="w-10 h-10 text-stone-500 mx-auto" />
            <p className="text-stone-300 font-semibold text-sm">No wellness recipes found matching "{searchTerm}"</p>
            <p className="text-stone-500 text-xs">Try searching for ingredients like "Moringa", "Chaga", "Amla" or reset filters.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-2 text-xs text-emerald-400 font-bold underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                onClick={() => onSelectRecipe(recipe)}
                className="group bg-stone-950 rounded-2xl border border-stone-800/80 hover:border-emerald-600/60 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-emerald-950/20"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-emerald-300 border border-emerald-800/60">
                      {recipe.category}
                    </div>

                    <div className="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur-md px-2 py-1 rounded-md text-[11px] font-bold text-amber-300 flex items-center gap-1 border border-stone-800">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{recipe.rating}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="font-serif font-bold text-lg text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                      {recipe.title}
                    </h3>

                    <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed font-light">
                      {recipe.description}
                    </p>

                    {/* Superfoods Used Badges */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {recipe.superfoodsUsed.map((s, i) => (
                        <span key={i} className="text-[10px] font-semibold bg-emerald-950/80 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800/50">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 pb-5 pt-2 border-t border-stone-900 flex items-center justify-between text-xs text-stone-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-emerald-400" /> {recipe.prepTime}</span>
                    <span className="flex items-center gap-1"><Flame className="w-3.5 h-3.5 text-amber-400" /> {recipe.calories} Cal</span>
                  </div>

                  <span className="text-emerald-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    View Recipe <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
