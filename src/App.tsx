import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MinimalMainMenu } from './components/MinimalMainMenu';
import { Power5Smoothie } from './components/Power5Smoothie';
import { RecipeCatalog } from './components/RecipeCatalog';
import { RecipeModal } from './components/RecipeModal';
import { SupplementStore } from './components/SupplementStore';
import { ShoppingListBuilder } from './components/ShoppingListBuilder';
import { DigitalGuide } from './components/DigitalGuide';
import { AboutSection } from './components/AboutSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { FreeGuidePopup } from './components/FreeGuidePopup';
import { recipes } from './data/recipes';
import { Recipe, CartItem } from './types';
import { Search, X } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [plannerRecipes, setPlannerRecipes] = useState<Recipe[]>([recipes[0], recipes[1]]);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [globalSearch, setGlobalSearch] = useState('');

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = (item: { id: string; name: string; price: number; image: string; type: 'supplement'; amazonUrl?: string }, quantity: number = 1) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i);
      }
      return [...prev, { ...item, quantity }];
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(i => {
      if (i.id === id) {
        const nextQty = i.quantity + delta;
        return nextQty > 0 ? { ...i, quantity: nextQty } : i;
      }
      return i;
    }));
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleAddRecipeToPlanner = (recipe: Recipe) => {
    if (!plannerRecipes.some(r => r.id === recipe.id)) {
      setPlannerRecipes(prev => [...prev, recipe]);
    }
  };

  const handleRemoveFromPlanner = (id: string) => {
    setPlannerRecipes(prev => prev.filter(r => r.id !== id));
  };

  const handleClearPlanner = () => {
    setPlannerRecipes([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-emerald-500 selection:text-stone-950">
      
      {/* Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Page Layout */}
      <main>
        <Hero onNavigate={handleNavigate} />
        
        {/* Minimalist Main Menu before Power 5 Smoothie */}
        <MinimalMainMenu onNavigate={handleNavigate} />

        <Power5Smoothie 
          onAddToCart={handleAddToCart}
          onOpenRecipeModal={(recipe) => setSelectedRecipe(recipe)}
        />

        <RecipeCatalog 
          onSelectRecipe={(recipe) => setSelectedRecipe(recipe)}
          searchQuery={globalSearch}
        />

        <SupplementStore onAddToCart={handleAddToCart} />

        <ShoppingListBuilder 
          plannerRecipes={plannerRecipes}
          onRemoveFromPlanner={handleRemoveFromPlanner}
          onClearPlanner={handleClearPlanner}
          onAddRecipeToPlanner={handleAddRecipeToPlanner}
        />

        <DigitalGuide />

        <Testimonials />

        <AboutSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Persistent Recurring Free Guide Popup Incentive */}
      <FreeGuidePopup />

      {/* Recipe Detail Modal */}
      <RecipeModal 
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        onAddToPlanner={handleAddRecipeToPlanner}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Quick Global Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-start justify-center pt-20 p-4">
          <div className="bg-stone-900 border border-stone-800 rounded-3xl max-w-xl w-full p-6 text-stone-100 relative shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <h3 className="font-serif font-bold text-lg text-white">Search Health Is Wealth Vault</h3>
              <button
                onClick={() => setSearchModalOpen(false)}
                className="text-stone-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                autoFocus
                value={globalSearch}
                onChange={(e) => setGlobalSearch(e.target.value)}
                placeholder="Type superfood (Moringa, Shilajit, Chaga) or goal..."
                className="w-full bg-stone-950 border border-stone-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => {
                  setSearchModalOpen(false);
                  handleNavigate('recipes');
                }}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-bold text-xs"
              >
                Search Recipes
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
