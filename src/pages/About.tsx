import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Users, Info, Heart } from 'lucide-react';
import Team from '../components/Team';


export default function About() {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-orange font-bold uppercase tracking-[0.2em] text-sm mb-3"
          >
            About Eco-Fibre
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold font-display text-slate-900"
          >
            Empowering Kenya Through <br /> Digital Connectivity
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-4xl font-bold font-display text-slate-900 mb-6 relative">
                Our Story
                <span className="absolute -bottom-2 left-0 w-20 h-1.5 bg-primary-orange rounded-full"></span>
              </h4>
              <p className="text-xl text-slate-700 leading-relaxed font-medium">
                Founded in the heart of Rongo Town, Eco-Fibre Network Solutions was born from a simple yet powerful vision: <span className="text-primary-orange">every Kenyan deserves world-class internet.</span>
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Local Roots", text: "Started as a small local initiative in Rongo and grew into a leading force for digital transformation in Migori and Kisii." },
                { icon: Users, title: "Community First", text: "We prioritize local talent and invest in infrastructure that powers thousands of homes, schools, and businesses." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-colors duration-300 shadow-sm">
                    <item.icon size={26} />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-slate-900 text-lg">{item.title}</h5>
                    <p className="text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-[12px] border-white relative bg-slate-100">
              <img 
                src="/eco_fibre_our_story_new_1774961373699.png" 
                alt="Our Story Impact" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Redesigned Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-4 w-44 h-44 bg-white/40 backdrop-blur-xl border border-white/50 rounded-full flex items-center justify-center text-primary-orange text-center p-8 shadow-2xl group hover:scale-110 transition-transform duration-500"
            >
              <div className="bg-primary-orange rounded-full p-4 w-full h-full flex items-center justify-center text-white shadow-lg overflow-hidden group-hover:rotate-12 transition-transform">
                <span className="font-black text-lg leading-tight uppercase tracking-widest">Digital <br /> Success</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Impact Stats Row */}
        <section className="mb-24 px-6">
          <div className="max-w-6xl mx-auto rounded-[40px] bg-primary-blue p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              {[
                { label: "Homes Connected", value: "10,000+" },
                { label: "Network Uptime", value: "99.9%" },
                { label: "Community Hubs", value: "50+" },
                { label: "Technical Staff", value: "120+" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="text-white font-black text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-primary-orange font-bold text-xs uppercase tracking-widest leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="grid grid-cols-2 gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-slate-100"
              >
                <img 
                  src="/technician.png" 
                  alt="Eco-Fibre Technician" 
                  className="w-full h-[450px] object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white mt-16 bg-slate-100"
              >
                <img 
                  src="/office_team.png" 
                  alt="Eco-Fibre Team" 
                  className="w-full h-[450px] object-cover"
                />
              </motion.div>
            </div>
            <div className="absolute -bottom-12 -right-6 z-20 w-44 h-44 bg-primary-blue rounded-full rotate-12 flex items-center justify-center text-white text-center p-8 shadow-2xl border-[10px] border-white group hover:scale-110 transition-transform duration-500 cursor-default">
              <span className="font-bold text-xl leading-tight uppercase tracking-widest">Founded <br /> in Rongo</span>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue shadow-inner">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Our Roots: Rongo Town</h4>
                <p className="text-lg text-slate-600 leading-relaxed">Our journey began in Rongo Town with a simple vision: to ensure that no Kenyan is left behind in the digital revolution. Today, our main office remains in Rongo, serving as the heart of our operations.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-orange/10 flex items-center justify-center text-primary-orange shadow-inner">
                <Heart size={28} />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Community First</h4>
                <p className="text-lg text-slate-600 leading-relaxed">We don't just sell internet; we build communities. By connecting schools and churches, we are opening doors to global education and spiritual connection.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 shadow-inner">
                <Users size={28} />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Local Talent</h4>
                <p className="text-lg text-slate-600 leading-relaxed">Eco-Fibre is proud to be a local employer. We hire and train talent from within our coverage areas, fostering economic growth where it matters most.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <Team />

        <div className="bg-slate-900 rounded-[32px] p-12 text-white text-center relative overflow-hidden">

          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-orange/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h4 className="text-3xl font-bold font-display mb-6">"Connectivity is the bridge to opportunity. We are building that bridge for every Kenyan household."</h4>
            <div className="w-16 h-1 bg-primary-orange mx-auto mb-4"></div>
            <p className="text-xl font-bold text-primary-orange">Ronny Winstone Otieno — Founder & CEO, Eco-Fibre Network</p>
          </div>
        </div>
      </section>
    </div>
  );
}
