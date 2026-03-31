import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Star, Zap, Building2, Home as HomeIcon } from 'lucide-react';
import { HOME_PACKAGES, BUSINESS_PACKAGES } from '../constants';
import { cn } from '../lib/utils';

export default function Services() {
  const [tab, setTab] = useState<'home' | 'business'>('home');

  return (
    <div className="pt-24 pb-20 bg-neutral-soft min-h-screen">
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-blue font-bold uppercase tracking-[0.2em] text-sm mb-3">Our Packages</h2>
          <h3 className="text-4xl font-bold font-display text-slate-900 mb-10">High Speed, Low Cost</h3>
          
          <div className="inline-flex p-1.5 bg-white rounded-2xl shadow-xl border border-slate-200">
            <button
              onClick={() => setTab('home')}
              className={cn(
                "px-8 py-3 rounded-xl font-bold text-lg transition-all flex items-center gap-2",
                tab === 'home' ? "orange-gradient text-white shadow-lg" : "text-slate-500 hover:text-slate-700"
              )}
            >
              <HomeIcon size={20} /> Home WiFi
            </button>
            <button
              onClick={() => setTab('business')}
              className={cn(
                "px-8 py-3 rounded-xl font-bold text-lg transition-all flex items-center gap-2",
                tab === 'business' ? "blue-gradient text-white shadow-lg" : "text-slate-500 hover:text-slate-700"
              )}
            >
              <Building2 size={20} /> Business WiFi
            </button>
          </div>
        </div>

        <motion.div 
          key={tab}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {(tab === 'home' ? HOME_PACKAGES : BUSINESS_PACKAGES).map((pkg, idx) => (
            <div 
              key={idx} 
              className={cn(
                "glass-card p-6 md:p-8 rounded-[28px] transition-all duration-500 hover:-translate-y-2 flex flex-col relative group border border-slate-200/50 shadow-lg",
                idx === 2 && tab === 'home' && "ring-2 ring-primary-orange shadow-orange-500/10"
              )}
            >
              {idx === 2 && tab === 'home' && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 orange-gradient text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
                  Best Value
                </div>
              )}
              
              <div className="mb-8">
                <div className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">{pkg.type} Plan</div>
                <div className="text-4xl font-bold text-slate-900 group-hover:text-primary-blue transition-colors">{pkg.speed}</div>
              </div>
              
              <div className="mb-10">
                <div className="text-4xl font-bold text-primary-blue">Ksh {pkg.price}</div>
                <div className="text-slate-500 text-base mt-1">per month</div>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-slate-700 text-base">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0 shadow-sm">
                      <Check size={14} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href={`https://wa.me/254710172828?text=${encodeURIComponent(`Hello Eco-Fibre! I would like to get connected to the ${pkg.speed} ${pkg.type} package for Ksh ${pkg.price} per month.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full btn-primary shadow-xl mb-4 py-4 rounded-2xl flex items-center justify-center text-center",
                  tab === 'home' ? "orange-gradient shadow-orange-500/20" : "blue-gradient shadow-blue-500/20"
                )}
              >
                Get Connected
              </a>
              
              <p className="text-[11px] text-slate-400 text-center font-medium italic">
                * Small one-time installation fee applies
              </p>
            </div>
          ))}
        </motion.div>

        {tab === 'business' && (
          <div className="mt-16 p-12 bg-primary-blue text-white rounded-[40px] flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-4">
                <Star size={14} className="mr-2 fill-white" /> Enterprise Solutions
              </div>
              <h4 className="text-4xl font-bold font-display mb-4">Custom Dedicated Fiber</h4>
              <p className="text-xl text-blue-100 leading-relaxed">For large corporations, schools, and hospitals requiring 100+ Mbps. We offer dedicated bandwidth at 220 Ksh per Mbps.</p>
            </div>
            <a 
              href={`https://wa.me/254710172828?text=${encodeURIComponent('Hello Eco-Fibre! I am interested in your Custom Dedicated Fiber solutions for my organization/office.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 px-10 py-4 bg-white text-primary-blue rounded-2xl font-bold text-xl hover:bg-blue-50 transition-colors shadow-2xl flex items-center justify-center text-center"
            >
              Request Quote
            </a>
          </div>
        )}
      </section>
    </div>
  );
}
