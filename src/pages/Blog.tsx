import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

export default function Blog() {
  return (
    <div className="pt-24 pb-20 bg-neutral-soft min-h-screen">
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-blue font-bold uppercase tracking-[0.2em] text-sm mb-3">Insights & News</h2>
          <h3 className="text-4xl font-bold font-display text-slate-900">The Eco-Fibre Blog</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col"
            >
              <Link to={`/blog/${post.id}`} className="h-64 overflow-hidden relative block">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-primary-blue">
                  {post.category}
                </div>
              </Link>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-slate-400 text-[10px] font-bold mb-4 uppercase tracking-widest">
                  <span className="flex items-center gap-2 px-2.5 py-1 bg-slate-50 rounded-lg group-hover:bg-primary-blue/10 group-hover:text-primary-blue transition-colors"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-2 px-2.5 py-1 bg-slate-50 rounded-lg group-hover:bg-primary-blue/10 group-hover:text-primary-blue transition-colors"><User size={12} /> {post.author}</span>
                  <span className="flex items-center gap-2 px-2.5 py-1 bg-primary-orange/10 text-primary-orange rounded-lg"><Eye size={12} /> {post.baseViews.toLocaleString()} Views</span>
                </div>
                <Link to={`/blog/${post.id}`} className="block">
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-blue transition-colors leading-tight">{post.title}</h4>
                </Link>
                <p className="text-base text-slate-600 mb-8 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="mt-auto">
                  <Link to={`/blog/${post.id}`} className="text-primary-orange font-bold text-lg flex items-center group-hover:translate-x-2 transition-transform">
                    Read Article <ArrowRight size={20} className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-white rounded-[40px] shadow-xl text-center relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-blue/5 rounded-full -mr-32 -mb-32"></div>
          <h4 className="text-3xl font-bold font-display mb-6">Stay Updated with Eco-Fibre</h4>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">Subscribe to our newsletter to get the latest tech tips and coverage updates directly in your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-6 py-4 rounded-2xl bg-slate-100 border-2 border-transparent focus:border-primary-blue focus:bg-white outline-none text-lg transition-all" 
            />
            <button className="btn-primary blue-gradient text-white px-10">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
