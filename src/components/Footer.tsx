import React, { useState } from 'react';
import { Leaf, Phone, Mail, MapPin, Instagram, Globe, Heart, ArrowRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-400 text-xs border-t border-stone-800">
      
      {/* Top Newsletter Strip */}
      <div className="border-b border-stone-800 py-10 bg-stone-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="font-serif font-bold text-lg text-white">Join Our Weekly Natural Recipe Club</h3>
              <p className="text-stone-400">Receive free seasonal superfood recipes, wellness guides, and exclusive discounts.</p>
            </div>

            <form onSubmit={handleSubscribe} className="flex max-w-md w-full gap-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 bg-stone-950 border border-stone-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-bold text-xs shrink-0 transition-colors"
              >
                {subscribed ? '✓ Subscribed' : 'Subscribe Free'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Schema Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-emerald-500/40 bg-stone-900 p-0.5">
                <img 
                  src="https://storage.googleapis.com/gpt-engineer-file-uploads/nDxhnnGL7uQOn8jSXTU9uEnlsGf1/uploads/1760477003396-AQPVESRJb8_SIV1S1YKg5laLhaREuRxLClxJPJoqOhZACE4Xq-33_vmlb4WBUVlK1X89ANjEfZvqSd7XThuUpZbRxvJqvvkNDtP_whQb3VobmC9SGe4WpTwIvgzyWb43IVUv51dSdns73XhR3dfl8_IJqf7i6Q.png" 
                  alt="Health Is Wealth" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-base text-white block">HEALTH IS WEALTH</span>
                <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">Natural Wellness & Healing Food</span>
              </div>
            </div>

            <p className="text-stone-400 leading-relaxed font-light">
              Your trusted destination for plant-based wellness recipes, mental health awareness, and premium superfood supplements handcrafted in Venice & Marina Del Rey, California.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-stone-300 pt-2">
              <a href="https://aisearchbrief.blog" target="_blank" rel="noreferrer" className="px-3 py-1.5 bg-stone-900 rounded-lg hover:text-emerald-400 hover:bg-stone-800 transition-colors font-bold text-[11px] border border-stone-800">
                aisearchbrief.blog ↗
              </a>
              <a href="https://theflavorcrave.com" target="_blank" rel="noreferrer" className="px-3 py-1.5 bg-stone-900 rounded-lg hover:text-amber-400 hover:bg-stone-800 transition-colors font-bold text-[11px] border border-stone-800">
                theflavorcrave.com ↗
              </a>
              <a href="https://www.instagram.com/aisearchblog/" target="_blank" rel="noreferrer" className="p-2 bg-stone-900 rounded-lg hover:text-emerald-400 hover:bg-stone-800 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://aisearchblog.wordpress.com/" target="_blank" rel="noreferrer" className="p-2 bg-stone-900 rounded-lg hover:text-emerald-400 hover:bg-stone-800 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm">Wellness Vault</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('power5')} className="hover:text-emerald-400 transition-colors">
                  Power 5 Smoothie
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('recipes')} className="hover:text-emerald-400 transition-colors">
                  20+ Digital Recipes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('planner')} className="hover:text-emerald-400 transition-colors">
                  Grocery Shopping List
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('guide')} className="hover:text-emerald-400 transition-colors">
                  Digital Recipe Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Superfoods */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm">Superfood Shop</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('supplements')} className="hover:text-emerald-400 transition-colors">
                  Moringa Leaf Powder
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('supplements')} className="hover:text-emerald-400 transition-colors">
                  Pure Himalayan Shilajit
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('supplements')} className="hover:text-emerald-400 transition-colors">
                  Wild Chaga Mushroom
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('supplements')} className="hover:text-emerald-400 transition-colors">
                  Organic Neem Powder
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('supplements')} className="hover:text-emerald-400 transition-colors">
                  Organic Amla Powder
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm">Customer Care</h4>
            <div className="space-y-2 text-stone-400">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>1078 Princeton Dr, Marina Del Rey, CA 90292</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="tel:+13103034808" className="hover:text-white">+1-310-303-4808</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="mailto:healthiswealth@healthiswealth.live" className="hover:text-white truncate">healthiswealth@healthiswealth.live</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} Health Is Wealth. All rights reserved. Venice, California.</p>
          <div className="flex items-center gap-4">
            <a href="https://healthiswealth.live" target="_blank" rel="noreferrer" className="hover:text-stone-300">healthiswealth.live</a>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Privacy Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
