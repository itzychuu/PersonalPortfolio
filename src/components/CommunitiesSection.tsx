
import { motion } from 'framer-motion';
import { Users, Star, Calendar } from 'lucide-react';
import { communities } from '../data/portfolioData';

export function CommunitiesSection() {
  return (
    <section id="communities" className="py-20 relative z-10 w-full">
      {/* Background Separator */}
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-fuchsia-500 font-semibold tracking-wider uppercase text-sm mb-2 block">
            Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Community Involvement
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Active participation in tech communities, contributing to open source, and helping fellow developers grow.
          </p>
        </motion.div>

        <div className="space-y-8">
          {communities.map((community, index) => (
            <motion.div
              key={community.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 80 }}
              className="glass-card rounded-2xl p-8 border border-white/20 dark:border-white/10 hover:border-cyan-500/30 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle hover glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-fuchsia-500/0 group-hover:from-cyan-500/5 group-hover:to-fuchsia-500/5 transition-all duration-300 pointer-events-none"></div>

              <div className="grid lg:grid-cols-3 gap-8 items-center relative z-10">
                {/* Community Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] transition-all duration-300 transform group-hover:-rotate-6">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                        {community.name}
                      </h3>
                      <p className="text-cyan-600 dark:text-cyan-400 font-semibold tracking-wide">
                        {community.role}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                    {community.description}
                  </p>
                  
                  <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 bg-slate-100/50 dark:bg-white/5 w-max px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/5">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{community.period}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="lg:col-span-1 bg-slate-50/50 dark:bg-[#0B0F19]/60 p-6 rounded-xl border border-slate-200 dark:border-white/5">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center space-x-2">
                    <Star className="w-5 h-5 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                    <span>Key Achievements</span>
                  </h4>
                  <ul className="space-y-3">
                    {community.achievements?.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-slate-600 dark:text-slate-300 text-sm flex items-start space-x-3 group/item"
                      >
                        <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full mt-1.5 flex-shrink-0 group-hover/item:scale-150 group-hover/item:shadow-[0_0_10px_rgba(217,70,239,0.8)] transition-all" />
                        <span className="leading-snug">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}