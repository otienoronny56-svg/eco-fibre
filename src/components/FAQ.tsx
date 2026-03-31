import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Phone } from 'lucide-react';
import { FAQS } from '../constants';
import { cn } from '../lib/utils';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-orange/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-primary-orange font-black uppercase tracking-[0.3em] text-sm mb-4">Support Center</h2>
          <h3 className="text-4xl md:text-5xl font-black font-display text-slate-900 mb-6 tracking-tight">Got Questions? <br className="hidden md:block" /> We've Got Answers</h3>
          <div className="w-24 h-1.5 bg-primary-orange mx-auto rounded-full"></div>
        </div>
        
        {/* Two-column layout for FAQ */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {FAQS.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "group rounded-[32px] transition-all duration-500 overflow-hidden border-2",
                openIndex === idx 
                  ? "bg-white border-primary-orange shadow-2xl scale-[1.02]" 
                  : "bg-white/50 backdrop-blur-md border-transparent hover:border-slate-200 hover:shadow-xl"
              )}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-7 text-left flex justify-between items-center"
              >
                <span className={cn(
                  "text-lg font-bold transition-colors duration-300",
                  openIndex === idx ? "text-primary-orange" : "text-slate-800"
                )}>{faq.question}</span>
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                  openIndex === idx ? "bg-primary-orange text-white rotate-180" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                )}>
                  <ChevronDown size={20} strokeWidth={3} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-8 pb-8 text-slate-600 text-base leading-relaxed font-medium">
                      <div className="pt-4 border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        {/* Improved CTA section */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-primary-blue rounded-[40px] rotate-1 scale-[0.98] blur-2xl opacity-10"></div>
          <div className="relative bg-slate-900 p-10 md:p-14 rounded-[40px] text-center overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-orange/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-3xl bg-primary-orange/20 flex items-center justify-center text-primary-orange mb-8 shadow-inner">
                <Phone size={36} strokeWidth={2.5} />
              </div>
              <h4 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Need 1-on-1 Support?</h4>
              <p className="text-xl text-slate-400 mb-10 max-w-2xl font-medium">Our expert support team is locally based and available 24/7 to solve your connectivity challenges.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <a 
                  href="https://wa.me/254710172828" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-2xl md:text-3xl transition-all hover:scale-105 shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] flex items-center gap-4 group"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  +254710172828
                </a>
                <span className="text-slate-500 font-bold uppercase tracking-[0.2em] text-sm">WhatsApp Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
