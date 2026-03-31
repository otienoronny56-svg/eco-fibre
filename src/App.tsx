import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Wifi, Phone, MapPin, ChevronDown, Facebook, Twitter, Instagram, Linkedin, BookOpen } from 'lucide-react';
import { FAQS } from './constants';
import { cn } from './lib/utils';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Coverage from './pages/Coverage';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import AcceptableUsePolicy from './pages/AcceptableUsePolicy';
import BlogPostDetail from './pages/BlogPostDetail';
import { MessageCircle } from 'lucide-react';

// --- Utilities ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Coverage', path: '/coverage' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-xl py-4" : "bg-transparent py-8"
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:shadow-md transition-shadow">
            <img 
              src="/logo.png" 
              alt="Eco-Fibre Network Solution" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-base font-bold transition-all hover:text-primary-orange relative",
                location.pathname === link.path ? "text-primary-orange" : "text-slate-600"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 w-full h-1 bg-primary-orange rounded-full" />
              )}
            </Link>
          ))}
          <Link 
            to="/services"
            className="btn-primary orange-gradient text-white shadow-lg shadow-orange-500/20 py-2 px-6 text-sm"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 p-2">
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-2xl overflow-hidden"
          >
            <div className="px-6 pt-4 pb-10 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block w-full text-left px-4 py-4 text-xl font-bold rounded-2xl transition-colors",
                    location.pathname === link.path ? "bg-primary-orange/10 text-primary-orange" : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center mt-6 btn-primary orange-gradient text-white"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


const Footer = () => (
  <footer className="bg-slate-900 text-white pt-20 pb-12">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="inline-flex">
            <div className="bg-white p-2.5 rounded-2xl shadow-lg border border-white/10 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Eco-Fibre Network Solution" 
                className="h-10 w-auto object-contain" 
              />
            </div>
          </Link>
          <p className="text-slate-400 text-base leading-relaxed">
            Providing reliable, high-speed fiber internet solutions to homes and businesses across Kenya. Connecting communities, empowering lives.
          </p>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary-orange transition-all hover:scale-110"><Icon size={20} /></a>
            ))}
            <a 
              href="https://wa.me/254710172828" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#25D366] transition-all hover:scale-110"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-8 text-primary-orange">Quick Links</h4>
          <ul className="space-y-4 text-slate-400 text-base">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Service Packages</Link></li>
            <li><Link to="/coverage" className="hover:text-white transition-colors">Coverage Areas</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Latest News</Link></li>
            <li><a href="/#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
            <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>

            <li><Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/acceptable-use" className="hover:text-white transition-colors">Acceptable Use Policy</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-8 text-primary-orange">Contact Us</h4>
          <ul className="space-y-6 text-slate-400 text-base">
            <li className="flex items-start">
              <MapPin size={20} className="mr-3 text-primary-orange flex-shrink-0 mt-1" />
              Main Office: Rongo Town, South Nyanza, Kenya
            </li>
            <li className="flex items-center">
              <a 
                href="https://wa.me/254710172828" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center hover:text-[#25D366] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mr-3 group-hover:bg-[#25D366]/20 transition-colors">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5 text-primary-orange group-hover:text-[#25D366]"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                +254710172828
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-8 text-primary-orange">Newsletter</h4>
          <p className="text-slate-400 text-base mb-6">Subscribe to get updates on new coverage areas and special offers.</p>
          <div className="flex flex-col gap-3">
            <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-primary-orange w-full text-base" />
            <button className="orange-gradient w-full py-3 rounded-xl font-bold text-base shadow-lg shadow-orange-500/20">Join Now</button>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm font-bold uppercase tracking-widest">
        <p>&copy; 2026 Eco-Fibre Network Solutions. All rights reserved.</p>
        <p>Developed by <a href="https://wa.me/254745806488" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary-orange transition-colors">Systems by Ronny</a></p>
      </div>
    </div>
  </footer>
);

// --- Main App ---
export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        
        {/* Floating WhatsApp Widget */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="fixed bottom-8 right-8 z-[9999] group flex flex-col items-end"
        >
          <AnimatePresence>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="mb-4 px-4 py-2 bg-white rounded-2xl shadow-xl border border-slate-100 text-slate-900 font-bold text-sm pointer-events-none group-hover:block hidden whitespace-nowrap"
            >
              Need help? Chat with us! 🇰🇪
            </motion.div>
          </AnimatePresence>
          
          <motion.a
            href="https://wa.me/254710172828"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              boxShadow: [
                "0 0 0 0px rgba(37, 211, 102, 0.4)",
                "0 0 0 20px rgba(37, 211, 102, 0)"
              ]
            }}
            transition={{ 
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl relative"
          >
            <svg 
              viewBox="0 0 24 24" 
              width="32" 
              height="32" 
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
          </motion.a>
        </motion.div>

        <header className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </header>
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/coverage" element={<Coverage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/acceptable-use" element={<AcceptableUsePolicy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
