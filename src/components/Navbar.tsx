import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, BookOpen, Leaf, Phone, Heart } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onNavigate,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-stone-100 shadow-xl border-b border-stone-800">
      {/* Announcement Bar */}
      <div className="bg-emerald-900/90 text-emerald-100 text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-emerald-800/50">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>🌿 <strong>FREE SHIPPING</strong> on orders over $50 • Handcrafted in Venice, California</span>
        <span className="hidden md:inline text-emerald-300">| Call Us: +1-310-303-4808</span>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500/40 bg-stone-950 p-1 group-hover:border-emerald-400 transition-colors shadow-inner">
              <img 
                src="https://storage.googleapis.com/gpt-engineer-file-uploads/nDxhnnGL7uQOn8jSXTU9uEnlsGf1/uploads/1760477003396-AQPVESRJb8_SIV1S1YKg5laLhaREuRxLClxJPJoqOhZACE4Xq-33_vmlb4WBUVlK1X89ANjEfZvqSd7XThuUpZbRxvJqvvkNDtP_whQb3VobmC9SGe4WpTwIvgzyWb43IVUv51dSdns73XhR3dfl8_IJqf7i6Q.png" 
                alt="Health Is Wealth Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <div className="text-xl font-serif font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                HEALTH IS WEALTH
              </div>
              <div className="text-[10px] text-emerald-400/90 tracking-widest uppercase font-semibold">
                Natural Wellness & Healing Food
              </div>
            </div>
          </button>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <button 
              onClick={() => handleNavClick('power5')}
              className="hover:text-emerald-400 transition-colors text-amber-300 flex items-center gap-1.5"
            >
              <Leaf className="w-4 h-4 text-emerald-400" />
              Power 5 Smoothie
            </button>

            <button 
              onClick={() => handleNavClick('recipes')}
              className="hover:text-emerald-400 transition-colors text-stone-300"
            >
              20+ Recipes
            </button>

            <button 
              onClick={() => handleNavClick('supplements')}
              className="hover:text-emerald-400 transition-colors text-stone-300"
            >
              Supplements
            </button>

            <button 
              onClick={() => handleNavClick('planner')}
              className="hover:text-emerald-400 transition-colors text-stone-300"
            >
              Grocery List
            </button>

            <button 
              onClick={() => handleNavClick('guide')}
              className="hover:text-emerald-400 transition-colors text-stone-300"
            >
              Digital Guide
            </button>

            <button 
              onClick={() => handleNavClick('about')}
              className="hover:text-emerald-400 transition-colors text-stone-300"
            >
              Our Story
            </button>
          </nav>

          {/* Action Controls */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={onOpenSearch}
              className="p-2 text-stone-300 hover:text-white hover:bg-stone-800 rounded-lg transition-colors"
              title="Search Recipes & Supplements"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenCart}
              className="relative p-2.5 bg-stone-800 hover:bg-emerald-950 text-emerald-400 rounded-xl transition-all border border-stone-700 hover:border-emerald-600/50 flex items-center gap-2"
              title="View Cart"
            >
              <ShoppingBag className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-semibold text-white hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-stone-950 text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-md">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => handleNavClick('guide')}
              className="hidden sm:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-emerald-900/40"
            >
              <BookOpen className="w-4 h-4" />
              <span>Free Guide</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-300 hover:text-white rounded-lg hover:bg-stone-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950 border-b border-stone-800 px-4 pt-4 pb-6 space-y-3">
          <button
            onClick={() => handleNavClick('power5')}
            className="w-full text-left px-4 py-3 rounded-xl bg-emerald-950/60 text-emerald-300 font-semibold flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-emerald-400" />
              Power 5 Health Smoothie
            </span>
            <span className="text-xs bg-emerald-600 text-white px-2 py-0.5 rounded">Free Recipe</span>
          </button>

          <button
            onClick={() => handleNavClick('recipes')}
            className="w-full text-left px-4 py-2.5 text-stone-200 hover:bg-stone-800 rounded-lg font-medium"
          >
            20+ Natural Wellness Recipes
          </button>

          <button
            onClick={() => handleNavClick('supplements')}
            className="w-full text-left px-4 py-2.5 text-stone-200 hover:bg-stone-800 rounded-lg font-medium"
          >
            Venice Beach Superfood Supplements
          </button>

          <button
            onClick={() => handleNavClick('planner')}
            className="w-full text-left px-4 py-2.5 text-stone-200 hover:bg-stone-800 rounded-lg font-medium"
          >
            Grocery Shopping Planner
          </button>

          <button
            onClick={() => handleNavClick('guide')}
            className="w-full text-left px-4 py-2.5 text-stone-200 hover:bg-stone-800 rounded-lg font-medium"
          >
            Digital Recipe Guide E-Book
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className="w-full text-left px-4 py-2.5 text-stone-200 hover:bg-stone-800 rounded-lg font-medium"
          >
            About Us & Contact
          </button>

          <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400 px-4">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-400" /> +1-310-303-4808</span>
            <span>Marina Del Rey, CA</span>
          </div>
        </div>
      )}
    </header>
  );
};
