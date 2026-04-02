import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Heart, Share2, Download, Filter } from 'lucide-react';
import { toPng } from 'html-to-image';
import { COMMUNITY_POSTERS } from '../constants';
import { CommunityPoster } from '../types';

const CommunityPosterCard: React.FC<{ poster: CommunityPoster }> = ({ poster }) => {
  const posterRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!posterRef.current) return;
    setIsDownloading(true);
    try {
      const dataUrl = await toPng(posterRef.current, {
        cacheBust: true,
        quality: 1,
        pixelRatio: 2,
      });
      const link = document.createElement('a');
      link.download = `eco-fibre-${poster.title.toLowerCase().replace(/\s+/g, '-')}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to download poster:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `Eco-Fibre: ${poster.title}`,
      text: poster.message,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative aspect-[3/4] rounded-[48px] overflow-hidden shadow-2xl bg-slate-900 border-4 border-white"
    >
      {/* Poster Content to Capture */}
      <div ref={posterRef} className="absolute inset-0 w-full h-full bg-slate-900">
        {/* Background Image */}
        <img
          src={poster.backgroundImage}
          alt={poster.title}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" />

        {/* Brand & Content Overlay */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
          <div className="flex justify-between items-start">
            <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/20">
              <img src="/logo.png" alt="Eco-Fibre" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            <div className="bg-primary-orange/20 backdrop-blur-md px-4 py-2 rounded-full border border-primary-orange/30">
              <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">{poster.category}</span>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <h4 className="text-white font-black text-3xl md:text-4xl mb-2 leading-tight drop-shadow-lg">
                {poster.title}
              </h4>
              {poster.subtitle && (
                <p className="text-primary-orange font-bold text-base uppercase tracking-[0.15em] mb-4">
                  {poster.subtitle}
                </p>
              )}
              <div className="w-16 h-1.5 bg-primary-orange rounded-full mb-4"></div>
            </div>
            
            <p className="text-slate-200 text-base leading-relaxed mb-6 italic font-medium drop-shadow-md">
              "{poster.message}"
            </p>

            <div className="flex items-center text-white/70 text-[10px] font-black uppercase tracking-[0.2em] border-t border-white/10 pt-5">
              <Calendar size={16} className="mr-2 text-primary-orange" />
              {poster.date}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Controls (Hidden on captured image) */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={handleShare}
          className="w-11 h-11 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center hover:bg-primary-orange hover:text-white transition-all transform hover:scale-110"
          title="Share Poster"
        >
          <Share2 size={20} />
        </button>
        <button 
          onClick={handleDownload}
          disabled={isDownloading}
          className={`w-11 h-11 rounded-full bg-primary-orange text-white shadow-xl flex items-center justify-center hover:bg-slate-900 transition-all transform hover:scale-110 ${isDownloading ? 'animate-pulse opacity-50' : ''}`}
          title="Download Poster"
        >
          <Download size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default function Community() {
  const [filter, setFilter] = useState<'All' | 'Holiday' | 'Event'>('All');

  const filteredPosters = filter === 'All' 
    ? COMMUNITY_POSTERS 
    : COMMUNITY_POSTERS.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-orange font-black uppercase tracking-[0.3em] text-xs mb-4"
          >
            Community Corner
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black font-display text-slate-900 mb-8 tracking-tight"
          >
            Celebrating <span className="text-primary-orange">Our Journey.</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            At Eco-Fibre, we believe that true connectivity goes beyond cables. It's about the traditions, faiths, and milestones that bring our community together.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {(['All', 'Holiday', 'Event'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-[0.15em] transition-all duration-300 ${
                filter === cat 
                  ? 'bg-primary-orange text-white shadow-xl shadow-orange-500/20 scale-105' 
                  : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'All' ? 'Everything' : cat + 's'}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosters.map((poster) => (
              <CommunityPosterCard key={poster.id} poster={poster} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Local Impact Quote */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
            <span className="text-[20vw] font-black leading-none">COMMUNITY</span>
          </div>
          
          <div className="bg-slate-900 rounded-[64px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-orange/20 rounded-full blur-[140px] -mr-64 -mt-64"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-blue/20 rounded-full blur-[140px] -ml-64 -mb-64"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex p-5 bg-white/5 backdrop-blur-3xl rounded-[32px] border border-white/10 mb-10 shadow-2xl">
                <Heart className="text-primary-orange fill-primary-orange animate-pulse" size={48} />
              </div>
              <h4 className="text-4xl md:text-5xl font-black font-display text-white mb-10 leading-tight">
                "We are the bridge that brings <br /> our local stories together."
              </h4>
              <p className="text-2xl text-slate-400 mb-12 font-medium leading-relaxed italic">
                From the soapstone hills of Tabaka to the vibrant markets of Rongo, Eco-Fibre is proud to be the heart of connectivity in South Nyanza.
              </p>
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-1.5 bg-primary-orange rounded-full"></div>
                <span className="text-white/60 font-black uppercase tracking-[0.2em] text-xs">Since 2018 in Rongo</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
