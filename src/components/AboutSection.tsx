import React from 'react';
import { MapPin, Phone, Mail, Award, Heart, ShieldCheck, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Venice Beach & Marina Del Rey Roots</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Rooted in Natural Healing Wisdom & Coastal Vitality
            </h2>

            <p className="text-stone-300 text-sm leading-relaxed font-light">
              Founded in West Los Angeles, <strong>Health Is Wealth</strong> was born from a simple belief: real health is created in the kitchen through nutrient-dense, unadulterated plant foods and wildcrafted adaptogens.
            </p>

            <p className="text-stone-300 text-sm leading-relaxed font-light">
              We directly source native, sun-dried organic herbs including <strong>Moringa, Shilajit, Chaga, Neem & Amla</strong> from organic co-op farms. Every powder and liquid resin is small-batch tested for purity and formulated right here in Venice, California.
            </p>

            {/* Quality Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800 space-y-1">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                <h4 className="font-bold text-xs text-white">100% Organic</h4>
                <p className="text-[11px] text-stone-400">Zero synthetic fillers or additives</p>
              </div>

              <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800 space-y-1">
                <Award className="w-6 h-6 text-amber-400" />
                <h4 className="font-bold text-xs text-white">Third-Party Tested</h4>
                <p className="text-[11px] text-stone-400">Lab verified heavy metal & purity</p>
              </div>

              <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800 space-y-1">
                <Heart className="w-6 h-6 text-emerald-400" />
                <h4 className="font-bold text-xs text-white">Ethically Sourced</h4>
                <p className="text-[11px] text-stone-400">Directly supporting indigenous farmers</p>
              </div>
            </div>

          </div>

          {/* Location & Contact Info Card */}
          <div className="lg:col-span-5">
            <div className="bg-stone-950 rounded-3xl p-8 border border-stone-800 shadow-2xl space-y-6">
              
              <div className="flex items-center gap-3 pb-4 border-b border-stone-800">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500/50 bg-stone-900 p-1">
                  <img 
                    src="https://storage.googleapis.com/gpt-engineer-file-uploads/nDxhnnGL7uQOn8jSXTU9uEnlsGf1/uploads/1760477003396-AQPVESRJb8_SIV1S1YKg5laLhaREuRxLClxJPJoqOhZACE4Xq-33_vmlb4WBUVlK1X89ANjEfZvqSd7XThuUpZbRxvJqvvkNDtP_whQb3VobmC9SGe4WpTwIvgzyWb43IVUv51dSdns73XhR3dfl8_IJqf7i6Q.png" 
                    alt="Health Is Wealth Logo" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-white">Health Is Wealth HQ</h3>
                  <p className="text-xs text-emerald-400 font-medium">Venice Beach & Marina Del Rey Studio</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Apothecary & Customer Studio:</strong>
                    <span>1078 Princeton Dr, Marina Del Rey, CA 90292</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="text-white block">Phone Support:</strong>
                    <a href="tel:+13103034808" className="hover:text-emerald-400 transition-colors">+1-310-303-4808</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="text-white block">Email Support:</strong>
                    <a href="mailto:healthiswealth@healthiswealth.live" className="hover:text-emerald-400 transition-colors">healthiswealth@healthiswealth.live</a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://healthiswealth.live"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-stone-800 hover:bg-stone-700 text-stone-200 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border border-stone-700 transition-colors"
                >
                  Visit Official Website: healthiswealth.live
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
