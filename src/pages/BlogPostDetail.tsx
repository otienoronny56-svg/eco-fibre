import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, Eye } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { cn } from '../lib/utils';

export default function BlogPostDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === Number(id));
  
  const [views, setViews] = useState(post?.baseViews || 0);

  useEffect(() => {
    if (!post) return;
    
    // Simulate live views increasing
    const interval = setInterval(() => {
      setViews(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 7000);

    return () => clearInterval(interval);
  }, [post]);

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <Link to="/blog" className="text-primary-blue hover:underline">Back to Blogs</Link>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      {/* Article Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center p-6">
          <div className="max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold mb-6 uppercase tracking-widest border border-white/20"
            >
              <Tag size={14} /> {post.category}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight mb-8 drop-shadow-2xl"
            >
              {post.title}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-6 text-white/80 font-bold text-sm"
            >
              <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
              <span className="flex items-center gap-2"><User size={16} /> By {post.author}</span>
              <span className="flex items-center gap-2 bg-primary-orange/20 px-3 py-1 rounded-full text-primary-orange">
                <Eye size={16} /> {views.toLocaleString()} reads
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-primary-orange font-bold mb-12 transition-colors uppercase tracking-widest text-xs"
        >
          <ArrowLeft size={16} /> Back to Insights
        </button>

        <div className="grid lg:grid-cols-[1fr_80px] gap-12">
          {/* Article Body */}
          <article className="prose prose-lg max-w-none prose-slate prose-headings:font-display prose-headings:font-black prose-p:text-slate-600 prose-p:leading-relaxed">
            <p className="text-xl font-medium text-slate-900 mb-10 leading-relaxed border-l-4 border-primary-orange pl-6 py-2 bg-slate-50 rounded-r-2xl">
              {post.excerpt}
            </p>
            <div className="text-slate-700 space-y-6">
              {post.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <p>At Eco-Fibre, our goal is to ensure that every household in Rongo, Migori, and beyond has the power of the internet at their fingertips. Connectivity isn't just about speed; it's about stability and reliability when you need it most.</p>
              <p>If you're interested in learning more about how our fiber technology can transform your home or business, don't hesitate to reach out to our team at any time.</p>
            </div>
          </article>

          {/* Social Share Sticky */}
          <aside className="lg:block">
            <div className="sticky top-32 flex lg:flex-col items-center gap-4">
              <span className="text-[10px] font-black uppercase text-slate-400 lg:mb-2 tracking-widest [writing-mode:vertical-lr] hidden lg:block">Share Article</span>
              {[Facebook, Twitter, Linkedin, Share2].map((Icon, i) => (
                <button key={i} className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary-orange hover:text-white transition-all shadow-sm">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </aside>
        </div>

        {/* Author Bio Simple */}
        <div className="mt-20 p-8 rounded-[32px] bg-neutral-soft border border-slate-100 flex items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-white shadow-inner flex items-center justify-center text-primary-blue font-black text-2xl border border-slate-200">
            {post.author.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h4 className="text-xl font-bold mb-1">Written by {post.author}</h4>
            <p className="text-slate-500 text-sm font-medium">Eco-Fibre Editorial Team & Industry Experts</p>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-3xl font-black font-display mb-12 text-center">More from the Blog</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post, i) => (
              <Link 
                to={`/blog/${post.id}`}
                key={post.id}
                className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2 leading-tight group-hover:text-primary-blue transition-colors line-clamp-2">{post.title}</h4>
                  <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
