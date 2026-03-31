import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight, Send, FileText } from 'lucide-react';
import { CAREERS } from '../constants';

export default function Careers() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-orange font-bold uppercase tracking-[0.2em] text-sm mb-3">Join Our Team</h2>
          <h3 className="text-4xl font-bold font-display text-slate-900">Build the Future of <br /> Connectivity</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <p className="text-lg text-slate-600 leading-relaxed">We are looking for innovators, problem solvers, and community leaders to help us connect South Nyanza. At Eco-Fibre, your work directly impacts lives.</p>
            
            <div className="space-y-4">
              {CAREERS.map((job) => (
                <motion.div 
                  key={job.id}
                  whileHover={{ x: 10 }}
                  className="p-8 glass-card rounded-[32px] border-2 border-transparent hover:border-primary-blue/20 hover:bg-primary-blue/5 transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 group-hover:text-primary-blue mb-3">{job.title}</h4>
                      <div className="flex flex-wrap gap-6 text-base text-slate-500">
                        <span className="flex items-center gap-2"><Briefcase size={18} className="text-primary-orange" /> {job.department}</span>
                        <span className="flex items-center gap-2"><MapPin size={18} className="text-primary-orange" /> {job.location}</span>
                        <span className="flex items-center gap-2"><Clock size={18} className="text-primary-orange" /> {job.type}</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center text-primary-blue group-hover:orange-gradient group-hover:text-white transition-all">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-primary-blue rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Send size={24} />
                </div>
                <h4 className="text-3xl font-bold font-display">Quick Apply</h4>
              </div>
              
              <form className="space-y-6">
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-blue-200">Full Name</label>
                      <input type="text" className="w-full px-6 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-white outline-none text-lg transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-blue-200">Email</label>
                      <input type="email" className="w-full px-6 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-white outline-none text-lg transition-all" />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-blue-200">Position</label>
                    <select className="w-full px-6 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-white outline-none text-lg transition-all appearance-none">
                      <option value="" className="bg-primary-blue">Select a role</option>
                      {CAREERS.map(j => <option key={j.id} value={j.title} className="bg-primary-blue">{j.title}</option>)}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-blue-200">Resume Link (Drive/Dropbox)</label>
                    <input type="url" className="w-full px-6 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-white outline-none text-lg transition-all" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-blue-200">Message</label>
                    <textarea rows={3} className="w-full px-6 py-3.5 rounded-2xl bg-white/10 border-2 border-white/20 focus:border-white outline-none text-lg transition-all"></textarea>
                  </div>
                </div>

                <button type="button" className="w-full py-4 bg-white text-primary-blue rounded-2xl font-bold text-xl hover:bg-blue-50 transition-colors shadow-2xl flex items-center justify-center gap-3">
                  Submit Application <FileText size={24} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
