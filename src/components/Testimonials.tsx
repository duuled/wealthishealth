import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Dr. Sarah Jenkins, ND',
      location: 'Venice Beach, CA',
      comment: 'The Power 5 Smoothie changed my entire morning routine. Drinking Moringa and Shilajit together gives me sustainable energy all day without caffeine crashes.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120'
    },
    {
      name: 'Marcus Vance',
      location: 'Santa Monica, CA',
      comment: 'The 20+ digital recipe guide is brilliant! The step-by-step ingredient scaling feature makes prepping meals for my whole family effortless.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120'
    },
    {
      name: 'Elena Rostova',
      location: 'Marina Del Rey, CA',
      comment: 'Pure Himalayan Shilajit and Chaga tea from Health Is Wealth are unmatched in quality. My joint stiffness dissolved within two weeks.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120'
    }
  ];

  return (
    <section className="py-16 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="text-amber-400 text-sm font-bold flex justify-center gap-1">★★★★★</div>
          <h2 className="text-3xl font-serif font-bold text-white">Community Reviews</h2>
          <p className="text-stone-400 text-xs">Verified feedback from our Southern California & global wellness community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-stone-900 p-6 rounded-2xl border border-stone-800 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-400 text-xs">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-stone-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-stone-800">
                <img src={rev.avatar} alt={rev.name} className="w-10 h-10 rounded-full object-cover border border-emerald-500/40" />
                <div>
                  <span className="font-bold text-xs text-white flex items-center gap-1">
                    {rev.name} <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  </span>
                  <span className="text-[11px] text-stone-400 block">{rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
