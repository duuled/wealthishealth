import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, Check, Sparkles } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [formData, setFormData] = useState({ name: '', email: '', address: '', city: '', zip: '' });

  if (!isOpen) return null;

  const rawSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = rawSubtotal * (discountPercent / 100);
  const subtotal = rawSubtotal - discountAmount;
  const freeShippingThreshold = 50;
  const shipping = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 5.99;
  const grandTotal = subtotal + shipping;

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'VENICE10') {
      setDiscountPercent(10);
      setPromoError('');
    } else if (promoCode.trim().toUpperCase() === 'POWER5') {
      setDiscountPercent(15);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try "VENICE10" for 10% off!');
    }
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('success');
    setTimeout(() => {
      onClearCart();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex justify-end">
      <div className="bg-stone-900 w-full max-w-md h-full flex flex-col justify-between border-l border-stone-800 text-stone-100 shadow-2xl relative">
        
        {/* Header */}
        <div className="p-6 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-emerald-400" />
            <h3 className="font-serif font-bold text-lg text-white">Your Shopping Cart</h3>
            <span className="text-xs bg-stone-800 text-stone-300 px-2 py-0.5 rounded-full font-bold">
              {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {checkoutStep === 'cart' && (
            <>
              {/* Express Warehouse Banner */}
              <div className="bg-emerald-950/60 p-3.5 rounded-2xl border border-emerald-700/60 text-xs space-y-1">
                <div className="flex items-center justify-between text-emerald-300 font-bold">
                  <span className="flex items-center gap-1.5">
                    📦 Express Fulfillment & Direct Shipping
                  </span>
                  <span className="text-[10px] bg-emerald-400 text-stone-950 font-black px-2 py-0.5 rounded-full uppercase">
                    Guaranteed
                  </span>
                </div>
                <p className="text-stone-300 text-[11px] leading-relaxed">
                  All herbal superfoods and botanical supplements are fulfilled with fast express delivery directly to your door.
                </p>
              </div>

              {/* Free Shipping Progress Bar */}
              <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800 space-y-2 text-xs">
                {rawSubtotal >= freeShippingThreshold ? (
                  <p className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> You unlocked FREE Shipping!
                  </p>
                ) : (
                  <p className="text-stone-300">
                    Add <strong>${(freeShippingThreshold - rawSubtotal).toFixed(2)}</strong> more for <strong>FREE Shipping</strong>
                  </p>
                )}
                <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-emerald-500 h-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (rawSubtotal / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Items List */}
              {cartItems.length === 0 ? (
                <div className="text-center py-16 text-stone-500 space-y-3">
                  <ShoppingBag className="w-12 h-12 mx-auto opacity-30" />
                  <p className="text-sm font-semibold">Your cart is empty</p>
                  <p className="text-xs">Explore our Venice Beach superfood supplements and bundles!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cartItems.map((item) => {
                    const itemAmazonUrl = item.amazonUrl || `https://www.amazon.com/s?k=${encodeURIComponent(item.name)}&tag=healthiswealth-20`;
                    return (
                      <div key={item.id} className="p-3 bg-stone-950 rounded-2xl border border-stone-800 flex gap-3 items-center">
                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover border border-stone-800" />
                        
                        <div className="flex-1 min-w-0 text-xs">
                          <span className="font-bold text-white block truncate">{item.name}</span>
                          <span className="text-emerald-400 font-bold">${item.price.toFixed(2)}</span>

                          <div className="flex items-center gap-2 mt-2">
                            <div className="flex items-center bg-stone-900 rounded-lg border border-stone-800 px-1">
                              <button
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="w-5 h-5 text-stone-300 hover:text-white text-xs font-bold"
                              >
                                -
                              </button>
                              <span className="w-6 text-center text-xs font-bold text-white">{item.quantity}</span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="w-5 h-5 text-stone-300 hover:text-white text-xs font-bold"
                              >
                                +
                              </button>
                            </div>

                            <a
                              href={itemAmazonUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[10px] bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 font-bold px-2 py-1 rounded border border-emerald-500/40 shrink-0"
                            >
                              Direct ↗
                            </a>

                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-stone-500 hover:text-rose-400 text-xs p-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <div className="text-right text-xs font-bold text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Promo Code Input */}
              {cartItems.length > 0 && (
                <form onSubmit={applyPromo} className="space-y-1 pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Promo Code (e.g. VENICE10)"
                      className="flex-1 bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white uppercase focus:outline-none focus:border-emerald-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-bold"
                    >
                      Apply
                    </button>
                  </div>
                  {discountPercent > 0 && (
                    <p className="text-[11px] text-emerald-400 font-semibold">✓ Promo applied: {discountPercent}% discount</p>
                  )}
                  {promoError && (
                    <p className="text-[11px] text-rose-400">{promoError}</p>
                  )}
                </form>
              )}
            </>
          )}

          {checkoutStep === 'checkout' && (
            <form onSubmit={handleCheckoutSubmit} className="space-y-4 text-xs">
              <h4 className="font-serif font-bold text-base text-white border-b border-stone-800 pb-2">
                Shipping Information
              </h4>

              <div>
                <label className="block text-stone-300 mb-1 font-semibold">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1 font-semibold">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1 font-semibold">Street Address</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="1078 Princeton Dr"
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-stone-300 mb-1 font-semibold">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Marina Del Rey"
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-stone-300 mb-1 font-semibold">ZIP Code</label>
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    placeholder="90292"
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider mt-4 shadow-lg"
              >
                Place Order • ${grandTotal.toFixed(2)}
              </button>

              <button
                type="button"
                onClick={() => setCheckoutStep('cart')}
                className="w-full text-center text-stone-400 hover:text-white text-xs pt-2"
              >
                ← Back to Cart
              </button>
            </form>
          )}

          {checkoutStep === 'success' && (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-stone-950 flex items-center justify-center mx-auto text-2xl font-bold shadow-lg">
                ✓
              </div>
              <h3 className="font-serif font-bold text-2xl text-white">Order Confirmed!</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Thank you, <strong>{formData.name || 'Friend'}</strong>! Your order has been placed. We are preparing your superfoods at our Venice Beach studio.
              </p>
              <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800 text-xs text-stone-400 text-left space-y-1">
                <p><strong>Shipping to:</strong> {formData.address || 'Marina Del Rey, CA'}</p>
                <p><strong>Total Paid:</strong> ${grandTotal.toFixed(2)}</p>
                <p><strong>Free Bonus Included:</strong> 20+ Digital Recipe Guide sent to {formData.email || 'your email'}.</p>
              </div>

              <button
                onClick={() => {
                  setCheckoutStep('cart');
                  onClose();
                }}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-bold text-xs"
              >
                Continue Browsing Recipes
              </button>
            </div>
          )}

        </div>

        {/* Footer Summary */}
        {checkoutStep === 'cart' && cartItems.length > 0 && (
          <div className="p-6 border-t border-stone-800 bg-stone-950 space-y-4">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-400">
                <span>Subtotal</span>
                <span>${rawSubtotal.toFixed(2)}</span>
              </div>

              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Discount ({discountPercent}%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between text-stone-400">
                <span>Estimated Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>

              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-stone-800">
                <span>Total</span>
                <span className="text-emerald-400">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href={
                  cartItems.length > 0 && cartItems[0].amazonUrl
                    ? cartItems[0].amazonUrl
                    : `https://www.amazon.com/s?k=${encodeURIComponent(cartItems.map(i => i.name).join(' '))}&tag=healthiswealth-20`
                }
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl transition-all"
              >
                <span>Order Direct Checkout ↗</span>
                <span className="text-[10px] bg-amber-400 text-stone-950 px-2 py-0.5 rounded font-black">
                  Express
                </span>
              </a>

              <button
                onClick={() => setCheckoutStep('checkout')}
                className="w-full bg-stone-800 hover:bg-stone-700 text-stone-300 py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all border border-stone-700"
              >
                <span>Enter Custom Shipping Address</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
