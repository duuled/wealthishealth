import React, { useState } from 'react';
import { ShoppingBag, Star, Check, Sparkles, MapPin, ShieldCheck, Heart, Info, Plus } from 'lucide-react';
import { supplements } from '../data/supplements';
import { Supplement } from '../types';

interface SupplementStoreProps {
  onAddToCart: (item: { id: string; name: string; price: number; image: string; type: 'supplement' }, quantity: number) => void;
}

export const SupplementStore: React.FC<SupplementStoreProps> = ({ onAddToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState<Supplement | null>(null);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const handleQuantityChange = (id: string, delta: number) => {
    setQuantities(prev => {
      const current = prev[id] || 1;
      return { ...prev, [id]: Math.max(1, current + delta) };
    });
  };

  const handleAdd = (product: Supplement) => {
    const qty = quantities[product.id] || 1;
    onAddToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      type: 'supplement'
    }, qty);

    setAddedIds(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <section id="supplements" className="py-16 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/90 border border-emerald-800 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Venice California Apothecary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Premium Superfood Supplements
          </h2>
          <p className="text-stone-300 text-base leading-relaxed">
            100% pure, organic, wildcrafted superfood powders and resins bottled in Venice, CA. Sourced directly from native regions for maximum biological potency.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supplements.map((product) => {
            const qty = quantities[product.id] || 1;
            const isJustAdded = addedIds[product.id];

            return (
              <div
                key={product.id}
                className="bg-stone-900 rounded-3xl border border-stone-800 hover:border-emerald-600/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-emerald-950/30 group"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-64 overflow-hidden bg-stone-950">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />

                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-amber-500 text-stone-950 text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow">
                        {product.badge}
                      </div>
                    )}

                    <div className="absolute top-3 right-3 bg-stone-900/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs text-stone-300 border border-stone-700 flex items-center gap-1 font-semibold">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      <span>Venice, CA</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div className="flex items-center gap-1 bg-stone-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-amber-300 border border-stone-800">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{product.rating} ({product.reviewsCount})</span>
                      </div>
                      <span className="text-xs font-semibold text-emerald-300 bg-stone-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-stone-800">
                        {product.weight}
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-serif font-bold text-xl text-white group-hover:text-emerald-400 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-400 mt-0.5">{product.subtitle}</p>
                    </div>

                    <p className="text-xs text-stone-300 leading-relaxed font-light line-clamp-3">
                      {product.description}
                    </p>

                    {/* Key Benefits Checklist */}
                    <div className="space-y-1.5 pt-2 border-t border-stone-800/80">
                      {product.keyBenefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-stone-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing & Add To Cart Footer */}
                <div className="p-6 pt-0 space-y-4">
                  <div className="flex items-baseline justify-between border-t border-stone-800 pt-4">
                    <div>
                      <span className="text-2xl font-bold text-white">${product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-stone-500 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
                      )}
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center bg-stone-950 rounded-xl border border-stone-800 p-1">
                      <button
                        onClick={() => handleQuantityChange(product.id, -1)}
                        className="w-7 h-7 text-xs font-bold text-stone-300 hover:text-white hover:bg-stone-800 rounded-lg"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-white">{qty}</span>
                      <button
                        onClick={() => handleQuantityChange(product.id, 1)}
                        className="w-7 h-7 text-xs font-bold text-stone-300 hover:text-white hover:bg-stone-800 rounded-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <a
                      href={product.amazonUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
                    >
                      <span>Buy Direct Now ↗</span>
                      <span className="text-[10px] font-extrabold bg-amber-400 text-stone-950 px-1.5 py-0.5 rounded">Express</span>
                    </a>

                    <div className="grid grid-cols-12 gap-2">
                      <button
                        onClick={() => handleAdd(product)}
                        className={`col-span-9 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg ${
                          isJustAdded
                            ? 'bg-emerald-500 text-stone-950'
                            : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950'
                        }`}
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>{isJustAdded ? '✓ Added to Cart!' : `+ Cart • $${(product.price * qty).toFixed(2)}`}</span>
                      </button>

                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="col-span-3 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-xl font-semibold text-xs flex items-center justify-center border border-stone-700"
                        title="Quick Details"
                      >
                        <Info className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-stone-100 relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center"
            >
              ✕
            </button>

            <div className="flex gap-4 items-center">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-20 h-20 rounded-2xl object-cover border border-stone-700" />
              <div>
                <h3 className="text-xl font-serif font-bold text-white">{selectedProduct.name}</h3>
                <p className="text-xs text-emerald-400 font-semibold">{selectedProduct.subtitle}</p>
                <p className="text-sm font-bold text-white mt-1">${selectedProduct.price.toFixed(2)}</p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-stone-300">
              <p><strong>Description:</strong> {selectedProduct.description}</p>
              <p><strong>Suggested Dosage:</strong> {selectedProduct.dosage}</p>
              <p><strong>Origin & Craft:</strong> {selectedProduct.origin}</p>
              <div>
                <strong>Key Health Benefits:</strong>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  {selectedProduct.keyBenefits.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => {
                handleAdd(selectedProduct);
                setSelectedProduct(null);
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-bold text-xs"
            >
              Add {selectedProduct.name} to Cart
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
