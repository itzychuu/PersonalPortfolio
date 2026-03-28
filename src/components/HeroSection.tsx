
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Full Hero 3D Spline Background */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 w-full h-full">
          <Spline scene="https://prod.spline.design/sklS7N38rUwkHq7Y/scene.splinecode" />
        </div>
        
        {/* Subtle Dark overlays for readability - pointer-events-none allows interacting with Spline underneath */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-12 max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-flex mb-8 px-5 py-2 rounded-none border border-green-500/50 bg-black/80 backdrop-blur-md text-green-400 font-mono text-sm shadow-[0_0_15px_rgba(34,197,94,0.3)] tracking-widest uppercase"
            >
              $ ./initialize_system.sh 🌌
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-tight drop-shadow-2xl"
            >
              Hi, I'm{' '}
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 animate-text-gradient bg-[length:200%_auto] pb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] px-2 font-mono">
                Vaishnav S
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-6 text-xl md:text-3xl text-slate-200 leading-relaxed max-w-3xl font-light drop-shadow-lg"
            >
              <p>
                I’m a passionate learner and aspiring developer with a strong curiosity
                for technology, design, and cybersecurity. I enjoy building dynamic UIs and exploring the
                depths of ethical hacking.
              </p>
            </motion.div>
          </div>

          {/* CTA Buttons - ENLARGED AND BOLD */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl mt-8"
          >
            <motion.a
              href="https://drive.google.com/file/d/18xetZ5bfTEs4l4O-6HwYkka6g2oGWuVf/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 40px rgba(34, 197, 94, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black border-2 border-green-400 px-12 py-6 rounded-sm font-black text-2xl uppercase tracking-widest flex items-center justify-center space-x-4 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            >
              <Download className="w-8 h-8" />
              <span>Resume</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(34,197,94,0.15)", borderColor: "rgba(34,197,94,0.8)", boxShadow: "0px 0px 20px rgba(34, 197, 94, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-12 py-6 rounded-sm font-black text-2xl uppercase tracking-widest text-green-400 transition-all duration-300 border-2 border-green-500/50 bg-black/50 backdrop-blur-md shadow-xl"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="flex items-center justify-center space-x-6 pt-10"
          >
            {[
              { icon: Github, href: 'https://github.com/itzychuu', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/vaishnav-s-022a45293/', label: 'LinkedIn' },
              { icon: Mail, href: 'https://mail.google.com/mail/u/1/#inbox?compose=CllgCJlKnTNXmSfJZdjMFxZDTcCbPlMgXwWsMwtdNDnTdRpkHvLhcWrSnkTPQXTKqXwVWfPBBZL', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="p-5 rounded-sm bg-black/60 hover:bg-green-500 hover:text-black hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] hover:border-green-400 backdrop-blur-md border border-green-500/30 text-green-500 transition-all duration-300 shadow-xl"
              >
                <Icon className="w-8 h-8" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative floating shapes */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[10%] w-24 h-24 bg-black/50 backdrop-blur-xl rounded-none border border-green-500/30 flex items-center justify-center text-4xl shadow-[0_0_40px_rgba(34,197,94,0.2)] hidden lg:flex font-mono text-green-500"
      >
        {"{}"}
      </motion.div>
      <motion.div
        animate={{ y: [20, -20, 20], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-[15%] w-20 h-20 bg-black/50 backdrop-blur-xl rounded-none border border-green-500/30 flex items-center justify-center text-3xl shadow-[0_0_40px_rgba(34,197,94,0.2)] hidden lg:flex font-mono text-green-500"
      >
        {"_"}
      </motion.div>
    </section>
  );
}