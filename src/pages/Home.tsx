import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Zap, Shield, Headphones, Target, Eye, TrendingUp, Check, Wifi, MessageSquare, LayoutGrid, MapPin, Settings, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const HERO_IMAGES = [
  '/hero1.png',
  '/hero2.png',
  '/hero3.png',
  '/hero4.png',
  '/hero5.png'
];

export default function Home() {
  const [currentHeroIndex, setCurrentHeroIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section - Full Background Slider */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900 pt-32 pb-20 lg:pb-0">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <img 
                src={HERO_IMAGES[currentHeroIndex]} 
                className="w-full h-full object-cover" 
                alt="Eco-Fibre Experience"
              />
              <div className="absolute inset-0 bg-slate-950/40"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary-orange/20 rounded-full blur-[120px]"
          />
        </div>
        
        <div className="max-w-7xl xl:max-w-screen-2xl mx-auto px-6 lg:px-12 relative z-20 w-full">
          <div className="grid lg:grid-cols-2 items-center gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-2xl">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)] animate-pulse"></span>
                <span className="text-xs font-black text-white uppercase tracking-[0.2em] leading-none">Powering 10,000+ Kenyan Homes</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black font-display leading-[1.1] text-white mb-6 tracking-tight drop-shadow-2xl">
                Internet That <br />
                <span className="text-white/90">Moves At Your</span> <br />
                <span className="text-[#FF3B04] drop-shadow-[0_0_30px_rgba(255,59,4,0.3)]">Speed.</span>
              </h1>
              
              <p className="text-2xl text-slate-200 mb-12 max-w-xl leading-relaxed font-medium drop-shadow-lg">
                Experience the future of high-speed connectivity in <span className="text-white font-bold underline decoration-primary-orange decoration-4 underline-offset-8">Rongo, Awendo, and Kisii</span> with South Nyanza's leading fiber network.
              </p>

              {/* Icon Benefits */}
              <div className="flex flex-wrap gap-8 mb-14">
                {[
                  { icon: Zap, label: "Unlimited", color: "bg-primary-orange" },
                  { icon: Shield, label: "Reliable", color: "bg-blue-600" },
                  { icon: Headphones, label: "24/7 Local", color: "bg-purple-600" }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${benefit.color} flex items-center justify-center shadow-xl`}>
                      <benefit.icon size={26} className="text-white" />
                    </div>
                    <span className="font-bold text-lg text-white tracking-tight">{benefit.label}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <Link to="/services" className="w-full sm:w-auto btn-primary orange-gradient text-white flex items-center justify-center shadow-2xl shadow-orange-500/40 text-xl font-bold py-5 px-12 rounded-[24px] hover:scale-105 transition-all">
                  Explore Packages <ArrowRight className="ml-3" size={24} />
                </Link>
                <Link to="/coverage" className="w-full sm:w-auto text-white font-black text-lg py-5 px-8 flex items-center hover:bg-white/10 rounded-[20px] transition-colors group">
                  Check Coverage <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                </Link>
              </div>
            </motion.div>

            {/* Redesigned Active Status Card - Overlapping on cinematic BG */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden lg:flex flex-col items-end"
            >
              <div className="bg-white/10 backdrop-blur-3xl p-10 rounded-[48px] border border-white/20 shadow-2xl relative">
                <div className="absolute -top-12 -right-6 w-36 h-36 bg-primary-orange rounded-full flex items-center justify-center text-white border-[10px] border-slate-900 shadow-2xl rotate-12">
                  <div className="text-center">
                    <div className="text-[10px] uppercase font-black tracking-[0.2em] opacity-80 mb-1">UP TO</div>
                    <div className="text-4xl font-black leading-none">100</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest mt-1">Mbps</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 rounded-3xl bg-green-500/20 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)] animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="text-green-500 font-black text-lg uppercase tracking-widest">Active Now</h3>
                    <p className="text-white/60 font-bold uppercase text-xs">South Nyanza Wide</p>
                  </div>
                </div>
                <p className="text-2xl text-white font-bold leading-tight max-w-[240px]">
                  Connecting <span className="text-primary-orange">10,000+ happy families</span> in Migori & Kisii.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30">
          {HERO_IMAGES.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentHeroIndex(idx)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-500",
                currentHeroIndex === idx ? "w-12 bg-[#FF3B04]" : "w-4 bg-white/20 hover:bg-white/40"
              )}
            />
          ))}
        </div>
      </section>
      
      {/* Mission, Vision, Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Target size={32} />, 
                title: 'Our Mission', 
                desc: 'To deliver innovative, customer-focused internet solutions that enhance communication, education, business growth, and community development through reliable fibre optic connectivity.',
                image: '/mission.png',
                color: 'text-primary-orange'
              },
              { 
                icon: <Eye size={32} />, 
                title: 'Our Vision', 
                desc: 'To be the most trusted provider of affordable, high-speed fibre internet solutions in East Africa, empowering individuals, businesses, and communities to thrive in the digital age.',
                image: '/vision.png',
                color: 'text-primary-blue'
              },
              { 
                icon: <TrendingUp size={32} />, 
                title: 'Our Impact', 
                desc: 'Connecting 10,000+ homes, supporting local businesses, and enabling digital learning for thousands of students in our community.',
                image: '/impact.png',
                color: 'text-green-600'
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative overflow-hidden rounded-[32px] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className={`mb-4 ${item.color}`}>
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-neutral-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary-orange font-bold uppercase tracking-[0.2em] text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-4xl font-bold font-display text-slate-900">The Eco-Fibre Advantage</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap size={32} />, title: 'Ultra Fast', desc: 'Symmetrical speeds for both uploads and downloads.', color: 'bg-orange-100 text-orange-600' },
              { icon: <Shield size={32} />, title: 'Reliable', desc: '99.9% uptime guaranteed with our redundant network.', color: 'bg-blue-100 text-blue-600' },
              { icon: <Headphones size={32} />, title: 'Local Support', desc: 'Our team is right here in Rongo to help you 24/7.', color: 'bg-purple-100 text-purple-600' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="glass-card p-8 rounded-[30px] text-center"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-slate-600 text-base">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-[24px] overflow-hidden shadow-xl h-[350px]">
              <img 
                src="/hero1.png" 
                alt="Smart Home Experience" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-display leading-tight">Smart Homes Need <br /> Smart Connections</h3>
              <p className="text-base text-slate-600">From streaming 4K movies to online classes and remote work, we ensure your home is always ready for the future.</p>
              <ul className="space-y-2">
                {['Buffer-free 4K Streaming', 'Lag-free Online Gaming', 'Seamless Video Calls', 'Multiple Device Support'].map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-bold text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-primary-orange/20 text-primary-orange flex items-center justify-center mr-2">
                      <Check size={10} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Connected Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-primary-orange font-bold uppercase tracking-[0.2em] text-sm mb-3">Simple Process</h2>
            <h3 className="text-4xl md:text-5xl font-black font-display mb-6 leading-tight">
              Get Connected with <span className="text-primary-orange">Eco-Fibre</span>
            </h3>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
              Join the fastest network in South Nyanza in 5 simple steps. We ensure a seamless transition to high-speed fiber.
            </p>
          </div>

          <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-[60px] left-8 right-8 h-1 bg-gradient-to-r from-primary-orange/20 via-primary-orange to-primary-orange/20 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
              {[
                { 
                  step: '01', 
                  title: 'Contact Us', 
                  desc: 'Reach out via WhatsApp or call +254710172828 to start your journey.',
                  icon: <MessageSquare size={28} />
                },
                { 
                  step: '02', 
                  title: 'Choose Plan', 
                  desc: 'Select from our Home or Business packages starting at 2,000 Ksh.',
                  icon: <LayoutGrid size={28} />
                },
                { 
                  step: '03', 
                  title: 'Site Survey', 
                  desc: 'Our experts visit your location to assess the optimal fiber route.',
                  icon: <MapPin size={28} />
                },
                { 
                  step: '04', 
                  title: 'Installation', 
                  desc: 'We handle the setup, configuration, and testing—all in one day.',
                  icon: <Settings size={28} />
                },
                { 
                  step: '05', 
                  title: 'Go Live!', 
                  desc: 'Enjoy unlimited, blazing-fast internet with our 24/7 support.',
                  icon: <Globe size={28} />
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-[32px] bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-primary-orange group-hover:bg-primary-orange group-hover:text-white transition-all duration-500 shadow-2xl relative z-10">
                      {item.icon}
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary-orange text-white flex items-center justify-center font-black text-sm z-20 shadow-lg group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-4 tracking-tight group-hover:text-primary-orange transition-colors">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link 
              to="/services"
              className="inline-flex items-center gap-3 px-10 py-4 orange-gradient text-white rounded-2xl font-black text-lg shadow-2xl shadow-orange-500/40 hover:scale-105 transition-all"
            >
              Get Started Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Community Corner Teaser */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[48px] overflow-hidden shadow-2xl border-[12px] border-slate-50 relative group bg-slate-900">
                <img 
                  src="/community/bg_mashujaa.png" 
                  alt="Community Celebration" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl w-fit shadow-lg">
                    <img src="/logo.png" alt="Eco-Fibre" className="h-8 w-auto object-contain" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-4xl mb-4 leading-tight">Happy <br /> Mashujaa Day</h4>
                    <p className="text-primary-orange font-bold text-lg uppercase tracking-wider">Celebrating Our Heroes</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-orange rounded-full flex items-center justify-center text-white text-center p-4 shadow-2xl border-8 border-white font-bold text-sm uppercase tracking-widest rotate-12"
              >
                Local & Proud
              </motion.div>
            </motion.div>

            <div className="space-y-8">
              <h2 className="text-primary-orange font-bold uppercase tracking-[0.2em] text-sm mb-3">Eco-Fibre Community</h2>
              <h3 className="text-4xl md:text-5xl font-black font-display text-slate-900 leading-tight">
                More Than Just a <br /> <span className="text-primary-orange">Network.</span>
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                At Eco-Fibre, we celebrate the diverse cultures and traditions that make Kenya vibrant. From national holidays to religious festivals, we are honored to be part of your celebrations and your daily life.
              </p>
              <div className="pt-4">
                <Link 
                  to="/community"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all group shadow-xl"
                >
                  Visit Community Corner
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />
    </div>

  );
}
