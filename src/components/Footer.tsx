
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative z-10 w-full glass-card border-t border-white/20 dark:border-white/5 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 relative z-10"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-fuchsia-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <span className="text-white font-bold text-2xl tracking-wider">VS</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Vaishnav S</h3>
            <p className="text-cyan-600 dark:text-cyan-400 font-medium tracking-wide">Enthusiastic Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border-t border-slate-200 dark:border-white/10 pt-8 mt-8 relative z-10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between text-slate-600 dark:text-slate-400">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <span>© 2024 Vaishnav S. Made with</span>
                <Heart className="w-4 h-4 text-fuchsia-500 fill-fuchsia-500 drop-shadow-[0_0_5px_rgba(217,70,239,0.5)]" />
                <span>and</span>
                <Code className="w-4 h-4 text-cyan-500 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" />
              </div>
              
              <div className="text-sm font-medium">
                Built with <span className="text-cyan-600 dark:text-cyan-400">React</span>, <span className="text-blue-500 dark:text-blue-400">TypeScript</span> & <span className="text-fuchsia-600 dark:text-fuchsia-400">Tailwind CSS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}