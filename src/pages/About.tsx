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
                About Us
                <span className="absolute -bottom-2 left-0 w-20 h-1.5 bg-primary-orange rounded-full"></span>
              </h4>
              <div className="space-y-6 text-xl text-slate-700 leading-relaxed font-medium">
                <p>
                  Eco-Fibre Network Solution is a leading ICT infrastructure and fibre optic internet service provider headquartered in Awendo, with offices in Rongo and Nairobi. Established to bridge the digital divide in underserved communities, we specialize in fibre optic installations, network maintenance, internet service delivery, and digital customer support.
                </p>
                <p>
                  Our presence in Migori County, coupled with our expanding regional footprint, positions us as a trusted partner for residential estates, businesses, and institutions seeking reliable connectivity.
                </p>
                <p>
                  Our solutions are designed with a strong focus on network reliability, uptime guarantees, redundancy, and preventive maintenance, ensuring clients enjoy uninterrupted digital services.
                </p>
              </div>
            </div>
            
            <div className="pt-8">
              <h4 className="text-3xl font-bold font-display text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-10 h-1 bg-primary-orange rounded-full"></span>
                Core Values
              </h4>
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Integrity", "Excellence", "Collaboration",
                  "Innovation", "Sustainability", "Customer-Centricity"
                ].map((value, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-primary-orange group-hover:scale-150 transition-transform"></div>
                    <span className="text-lg font-bold text-slate-700 group-hover:text-primary-orange transition-colors">{value}</span>
                  </div>
                ))}
              </div>
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



        {/* Meet Our Team Section */}
        <Team />

        <div className="bg-slate-50 rounded-[48px] p-12 md:p-20 mb-20 border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h4 className="text-3xl font-bold font-display text-slate-900 flex items-center gap-3">
                <span className="w-10 h-1 bg-green-500 rounded-full"></span>
                Our Commitment
              </h4>
              <p className="text-xl text-slate-700 leading-relaxed font-medium italic">
                "Our product is environmentally friendly, does not decompose and can be <span className="text-green-600">100% recycled</span>."
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Sustainability is at the core of our operations. We choose materials and processes that protect the beautiful environment of South Nyanza while providing world-class digital infrastructure.
              </p>
            </div>
            <div className="w-full md:w-1/3 aspect-square rounded-[32px] bg-green-50 flex items-center justify-center text-green-600">
              <Heart size={80} className="opacity-20" />
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[32px] p-12 text-white text-center relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-orange/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h4 className="text-3xl font-bold font-display mb-6">"Connectivity is the bridge to opportunity. We are building that bridge for every Kenyan household."</h4>
            <div className="w-16 h-1 bg-primary-orange mx-auto mb-4"></div>
            <p className="text-xl font-bold text-primary-orange">Ronny Winstone Otieno — Founder & CEO, Eco-Fibre Network</p>
          </div>
        </div>

        {/* Section 1: Engineering the Last Mile (Field Action) */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { src: 'a.png', delay: 0 },
                  { src: 'b.png', delay: 0.1 },
                  { src: 'c.png', delay: 0.2 },
                  { src: 'd.png', delay: 0.3 },
                  { src: 'e.png', delay: 0.4 },
                  { src: 'f.png', delay: 0.5 }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay }}
                    className={`rounded-3xl overflow-hidden shadow-lg border-4 border-white aspect-[3/4] ${
                      idx % 3 === 1 ? 'mt-8' : ''
                    } ${idx % 3 === 2 ? 'mt-16' : ''}`}
                  >
                    <img 
                      src={`/technicians/${item.src}`} 
                      alt={`Technician in action ${idx + 1}`} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="absolute -bottom-10 -right-6 z-20 w-40 h-40 bg-primary-blue rounded-full rotate-12 flex items-center justify-center text-white text-center p-6 shadow-2xl border-[8px] border-white cursor-default">
                <span className="font-bold text-lg leading-tight uppercase tracking-widest text-white">South <br /> Nyanza</span>
              </div>
            </div>

            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary-orange/10 text-primary-orange text-xs font-bold uppercase tracking-widest mb-2">
                Field Excellence
              </div>
              <h3 className="text-4xl font-bold font-display text-slate-900 leading-tight">
                Engineering the <br /> <span className="text-primary-orange">Last Mile</span>
              </h3>
              <p className="text-xl text-slate-700 leading-relaxed font-medium">
                Our technicians don't just work in offices; they traverse the suburbs and rural landscapes of South Nyanza, climbing poles and laying fibre to ensure no household is left in the dark.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-blue/10 flex items-center justify-center text-primary-blue shadow-inner group-hover:bg-primary-blue group-hover:text-white transition-all">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-1">Deep Local Reach</h4>
                    <p className="text-lg text-slate-600 leading-relaxed">From the busy streets of Rongo to the quiet estates of Migori, we are physically there, building the network.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-orange/10 flex items-center justify-center text-primary-orange shadow-inner group-hover:bg-primary-orange group-hover:text-white transition-all">
                    <Users size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-1">Local Talent in Action</h4>
                    <p className="text-lg text-slate-600 leading-relaxed">We employ and train local technicians, fostering economic growth and ensuring community-led connectivity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Technical Precision (Workshop) */}
        <section className="mb-24">
          <div className="bg-slate-900 rounded-[56px] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>
            
            <div className="relative z-10 text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 text-primary-orange text-xs font-bold uppercase tracking-widest mb-4">
                The Rongo Hub
              </div>
              <h3 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">Technical Mastery at the Workshop</h3>
              <p className="text-xl text-slate-400 leading-relaxed">
                Before any fibre core reaches your home, it is precision-tested and prepared at our central workshop hub. Here, our experts ensure world-class standards for every installation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {[
                { src: '1.png', label: 'Equipment Splicing', desc: 'Precision fibre fusion for zero-loss signals.' },
                { src: '2.png', label: 'Network Strategy', desc: 'Planning the expansion across Nyanza region.' },
                { src: '3.png', label: 'Quality Assurance', desc: 'Testing every router before it leaves the hub.' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6 border-4 border-white/10 group-hover:border-primary-orange/50 transition-colors bg-slate-800">
                    <img 
                      src={`/technicians/${item.src}`} 
                      alt={item.label} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-x-4 bottom-4 glass-card p-4 rounded-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <p className="text-white font-bold text-center text-sm">{item.label}</p>
                    </div>
                  </div>
                  <h4 className="text-white text-xl font-bold text-center mb-2">{item.label}</h4>
                  <p className="text-slate-400 text-center text-base">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team in Action - Video Showcase */}
        <section className="mt-24 mb-10 overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="text-primary-orange font-bold uppercase tracking-[0.2em] text-sm mb-3">Eco-Fibre in Action</h2>
            <h3 className="text-4xl font-bold font-display text-slate-900">Meet the Hands Building Your Network</h3>
          </div>

          <div className="max-w-lg mx-auto relative group">
            {/* Portrait Video Container */}
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-white aspect-[9/16] bg-slate-900">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/9mGV7sB86gQ?autoplay=0&rel=0&modestbranding=1"
                title="Eco-Fibre Team in Action"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-orange/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-blue/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            
            {/* Technical Detail Label */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-600 text-sm font-bold">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                Standard Installation in Progress
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
