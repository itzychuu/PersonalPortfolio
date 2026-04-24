
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

export function SkillsSection() {
  const categories = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools & DevOps',
    design: 'Design',
    network: 'Networking',
    programming: 'Programming Languages'
  };

  return (
    <section id="skills" className="py-20 relative z-10 w-full">
      {/* Optional Top Separator / Glow */}
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-cyan-500 font-semibold tracking-wider uppercase text-sm mb-2 block">
            My Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            The core tools and frameworks I use to bring digital experiences to life.
          </p>
        </motion.div>

        {Object.entries(categories).map(([categoryKey, categoryName]) => {
          const categorySkills = skills.filter(skill => skill.category === categoryKey);
          if (categorySkills.length === 0) return null;
          
          return (
            <motion.div
              key={categoryKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mb-14"
            >
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-8 max-w-max mx-auto md:mx-0">
                {categoryName}
              </h3>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, type: 'spring', stiffness: 100 }}
                    whileHover={{ y: -8 }}
                    className="glass-card rounded-2xl p-6 text-center group border border-white/20 dark:border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Hover Glow Behind Icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-cyan-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10 flex justify-center drop-shadow-md">
                      {skill.iconImage ? (
                        <img
                          src={skill.iconImage}
                          alt={skill.name}
                          className="w-12 h-12 object-contain"
                        />
                      ) : (
                        skill.icon
                      )}
                    </div>
                    <h4 className="font-bold text-slate-800 dark:text-white mb-3 relative z-10">
                      {skill.name}
                    </h4>
                    
                    {/* Skill Level Bar Container */}
                    <div className="w-full bg-slate-200/50 dark:bg-[#0B0F19]/60 rounded-full h-1.5 mb-2 overflow-hidden shadow-inner backdrop-blur-sm relative z-10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]"
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 relative z-10">
                      {skill.level}%
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}