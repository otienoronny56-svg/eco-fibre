import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials = () => {
  // Duplicate the list for seamless infinite scroll
  const scrollingTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-primary-orange font-bold uppercase tracking-[0.2em] text-sm mb-3">Testimonials</h2>
          <h3 className="text-4xl font-bold font-display text-slate-900">What Our Community Says</h3>
        </div>
      </div>

      <div className="relative flex overflow-hidden group py-10">
        <motion.div 
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: 'fit-content' }}
        >
          {scrollingTestimonials.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="flex-shrink-0 w-[320px] md:w-[380px] px-4"
            >
              <div className="glass-card p-6 md:p-8 rounded-[32px] h-full flex flex-col justify-between border-t-4 border-primary-orange shadow-lg hover:shadow-xl transition-all duration-500 group/card bg-white">
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <Quote size={32} className="text-secondary-orange/20 group-hover/card:scale-110 transition-transform" />
                    <div className="flex gap-0.5">
                      {[...Array(t.stars)].map((_, idx) => (
                        <Star key={idx} size={14} className="fill-primary-orange text-primary-orange" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 text-base md:text-lg italic leading-relaxed">"{t.quote}"</p>
                </div>
                
                <div className="flex items-center gap-4 border-t border-slate-100 pt-5">
                  <div className="relative">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-12 h-12 rounded-xl object-cover shadow-md border-2 border-white"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">{t.name}</h4>
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Gradients to fade out the edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default Testimonials;
