import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';

const Team = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary-orange font-bold uppercase tracking-[0.2em] text-sm mb-3">Our Team</h2>
          <h3 className="text-4xl font-bold font-display text-slate-900">The Experts Behind the Network</h3>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            A diverse team of professionals dedicated to bringing world-class connectivity to every corner of Kenya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative mb-6 rounded-[32px] overflow-hidden aspect-[4/5] shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="flex gap-3">
                    {[Linkedin, Twitter, Mail].map((Icon, idx) => (
                      <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-primary-orange transition-all hover:scale-110">
                        <Icon size={18} className="text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
                <p className="text-primary-orange font-bold text-sm uppercase tracking-wider mb-3 leading-tight">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed px-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
