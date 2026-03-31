import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Navigation, Compass, Globe, Eye, Maximize2, MousePointer2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { COVERAGE_AREAS } from '../constants';

export default function Coverage() {
  const [isMapActive, setIsMapActive] = useState(false);
  const allEstates = COVERAGE_AREAS.flatMap(area => area.estates);
  
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary-orange font-bold uppercase tracking-[0.2em] text-sm mb-3">Our Network</h2>
          <h1 className="text-4xl font-bold font-display text-slate-900 mb-4">Expanding Coverage</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We are committed to bringing high-speed fiber to every corner of South Nyanza. 
            Check below to see if your estate is already connected to the Eco-Fibre network.
          </p>
        </motion.div>
      </section>

      {/* Auto-scrolling Marquee */}
      <div className="relative py-8 bg-slate-50 border-y border-slate-100 overflow-hidden mb-16">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
        
        <motion.div 
          animate={{ x: [0, -2000] }} 
          transition={{ 
            repeat: Infinity, 
            duration: 40, 
            ease: "linear" 
          }}
          className="flex gap-4 whitespace-nowrap"
        >
          {[...allEstates, ...allEstates, ...allEstates].map((estate, i) => (
            <div 
              key={i} 
              className="px-6 py-3 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center gap-2.5 group hover:border-primary-orange transition-colors"
            >
              <div className="w-1.5 h-1.5 bg-primary-orange rounded-full"></div>
              <span className="font-bold text-slate-700 text-sm">{estate}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Region Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COVERAGE_AREAS.map((area, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-[24px] p-6 flex flex-col h-full border-t-4 border-primary-blue"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary-blue/10 text-primary-blue flex items-center justify-center">
                  <Navigation size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{area.region}</h4>
                  <p className="text-xs text-slate-500 font-medium">{area.estates.length} Estates Connected</p>
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="grid grid-cols-1 gap-2">
                  {area.estates.map((estate, eIdx) => (
                    <div 
                      key={eIdx} 
                      className="flex items-center text-xs font-medium text-slate-600 bg-slate-50/50 px-3 py-1.5 rounded-lg border border-slate-100 hover:bg-white hover:shadow-sm transition-all"
                    >
                      <MapPin size={12} className="text-primary-orange mr-2" />
                      {estate}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 mt-20">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">Our Coverage Snapshot</h3>
          <p className="text-slate-500 text-sm font-medium">Visualizing our growing footprint across South Nyanza.</p>
        </div>

        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-slate-50 h-[500px] bg-slate-100 group">
          {/* Main Map Iframe */}
          <iframe 
            src="https://maps.google.com/maps?q=Rongo,Kenya&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className={cn(
              "w-full h-full border-0 relative z-10",
              !isMapActive ? "pointer-events-none opacity-50" : "opacity-100 pointer-events-auto"
            )}
            title="Eco-Fibre Network Coverage Map"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>

          {/* Interaction Shield (Overlay) */}
          <AnimatePresence>
            {!isMapActive && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-950/40 backdrop-blur-md cursor-pointer group"
                onClick={() => setIsMapActive(true)}
              >
                <div className="w-20 h-20 rounded-full bg-primary-orange text-white flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(255,59,4,0.4)] group-hover:scale-110 transition-transform duration-500">
                  <MousePointer2 size={32} className="animate-bounce" />
                </div>
                <h4 className="text-2xl font-black text-white mb-2 tracking-tight">Click to Explore Map</h4>
                <p className="text-white/70 font-bold uppercase text-xs tracking-widest">Active Interaction Shield Enabled</p>
                
                {/* Visual HQ Marker Hint */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-orange rounded-full animate-ping scale-150 opacity-20"></div>
                    <div className="w-4 h-4 bg-primary-orange rounded-full border-4 border-white shadow-xl relative z-10"></div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Map Controls Floating Info */}
          <div className={cn(
            "absolute top-6 left-6 z-30 bg-white/90 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl transition-all duration-500",
            !isMapActive ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          )}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary-orange/20 text-primary-orange flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div>
                <h5 className="font-bold text-slate-900 leading-none mb-1 text-lg">Main Office HQ</h5>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Rongo Town</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                <div className="w-2 h-2 rounded-full bg-green-500"></div> Active Node: Migori
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                <div className="w-2 h-2 rounded-full bg-green-500"></div> Active Node: Kisii
              </div>
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsMapActive(false); }}
              className="mt-6 w-full text-xs font-black uppercase tracking-widest text-primary-orange hover:underline"
            >
              Lock Map Controls
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center bg-primary-blue rounded-[32px] p-10 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold font-display mb-3">Don't See Your Estate?</h3>
            <p className="text-blue-100 text-base mb-6 max-w-xl mx-auto">
              We are constantly expanding. Drop us a request and we'll prioritize your area in our next phase of deployment.
            </p>
            <button className="px-8 py-3 bg-primary-orange rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-orange-900/20 text-sm">
              Request Connection
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
