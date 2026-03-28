import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 bg-black">
      {/* Background gradients */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_left_center,rgba(34,197,94,0.05),transparent_50%)]" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full min-h-[80vh]">
        
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-10 flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-1"
        >
          <div className="flex flex-col items-center lg:items-start max-w-2xl">
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
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 animate-text-gradient bg-[length:200%_auto] pb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] pr-2 font-mono">
                Vaishnav S
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-6 text-xl md:text-2xl text-slate-300 leading-relaxed font-light drop-shadow-lg"
            >
              <p>
                I’m a passionate learner and aspiring developer with a strong curiosity
                for technology, design, and cybersecurity. I enjoy building dynamic UIs and exploring the
                depths of ethical hacking.
              </p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 w-full pt-4"
          >
            <motion.a
              href="https://drive.google.com/file/d/18xetZ5bfTEs4l4O-6HwYkka6g2oGWuVf/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 40px rgba(34, 197, 94, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black border-2 border-green-400 px-10 py-5 rounded-full font-black text-xl uppercase tracking-widest flex items-center justify-center space-x-4 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            >
              <Download className="w-7 h-7" />
              <span>Resume</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(34,197,94,0.15)", borderColor: "rgba(34,197,94,0.8)", boxShadow: "0px 0px 20px rgba(34, 197, 94, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-10 py-5 rounded-full font-black text-xl uppercase tracking-widest text-green-400 transition-all duration-300 border-2 border-green-500/50 bg-black/50 backdrop-blur-md shadow-xl"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="flex items-center justify-center lg:justify-start space-x-6 pt-6"
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
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-4 rounded-full bg-black/60 hover:bg-green-500 hover:text-black hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] hover:border-green-400 backdrop-blur-md border border-green-500/30 text-green-500 transition-all duration-300 shadow-xl"
              >
                <Icon className="w-7 h-7" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Spline Robot */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="w-full h-[60vh] lg:h-[80vh] relative z-20 order-2 flex items-center justify-center pointer-events-none"
        >
          {/* A massive invisible canvas perfectly centered on the right column so the wave animation never clips */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150%] lg:h-[120%] flex items-center justify-center pointer-events-none">
            <Spline scene="https://prod.spline.design/LtSPYkHtkyH8jVdA/scene.splinecode" />
          </div>
          
          {/* Decorative shapes integrated with model visually */}
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 -left-10 w-20 h-20 bg-black/50 backdrop-blur-xl rounded-full border border-green-500/30 flex items-center justify-center text-3xl shadow-[0_0_40px_rgba(34,197,94,0.2)] hidden lg:flex font-mono text-green-500 pointer-events-none"
          >
            {"{}"}
          </motion.div>
          <motion.div
            animate={{ y: [20, -20, 20], rotate: [0, -10, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-0 w-16 h-16 bg-black/50 backdrop-blur-xl rounded-full border border-green-500/30 flex items-center justify-center text-2xl shadow-[0_0_40px_rgba(34,197,94,0.2)] hidden lg:flex font-mono text-green-500 pointer-events-none"
          >
            {"_"}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}