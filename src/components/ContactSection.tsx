import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { ContactForm } from '../types/portfolio';

export function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative z-10 w-full pb-32">
      {/* Background Separator */}
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-cyan-500 font-semibold tracking-wider uppercase text-sm mb-2 block">
            Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                Get In Touch
              </h3>
              
              <div className="space-y-5">
                {[
                  { icon: Mail, label: 'Email', value: 'vaishnavshalikumar49@gmail.com', href: 'https://mail.google.com/mail/u/1/#inbox?compose=CllgCJlKnTNXmSfJZdjMFxZDTcCbPlMgXwWsMwtdNDnTdRpkHvLhcWrSnkTPQXTKqXwVWfPBBZL' },
                  { icon: Phone, label: 'Phone', value: '8547612760', href: 'tel:8547612760' },
                  { icon: MapPin, label: 'Location', value: 'Pandalam, Pathanamthitta', href: 'https://maps.app.goo.gl/V9wx1L47rvJBPLx2A' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.03, x: 10 }}
                    className="flex items-center space-x-5 p-5 glass-card rounded-2xl hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-fuchsia-600 transition-all duration-500">
                      <Icon className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white text-lg">{label}</p>
                      <p className="text-slate-600 dark:text-slate-400 group-hover:text-cyan-500 transition-colors duration-300">{value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Connect Online
              </h4>
              <div className="flex space-x-5">
                {[
                  { icon: Github, href: 'https://github.com/itzychuu', label: 'GitHub', color: 'hover:bg-[#333] hover:text-white hover:border-[#333]' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/vaishnav-s-022a45293/', label: 'LinkedIn', color: 'hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]' },
                  { icon: Twitter, href: 'https://x.com/_why_choo_', label: 'Twitter', color: 'hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-900 hover:text-white hover:border-slate-900 dark:hover:border-white' },
                ].map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -4 }}
                    className={`p-4 rounded-xl glass-card text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 transition-all duration-300 shadow-lg ${color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card rounded-3xl p-8 lg:p-10 border border-white/20 dark:border-white/10 shadow-xl relative overflow-hidden"
          >
            {/* Subtle form background glow */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 relative z-10">
              Send Me a Message
            </h3>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="bg-green-500/10 border border-green-500/40 text-green-700 dark:text-green-400 px-5 py-4 rounded-xl mb-8 flex items-center shadow-lg shadow-green-500/5 backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 rounded-sm border border-slate-300/50 dark:border-white/10 bg-white/50 dark:bg-[#0B0F19]/50 backdrop-blur-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-300 shadow-inner font-mono"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 rounded-sm border border-slate-300/50 dark:border-white/10 bg-white/50 dark:bg-[#0B0F19]/50 backdrop-blur-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-300 shadow-inner font-mono"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-3.5 rounded-sm border border-slate-300/50 dark:border-white/10 bg-white/50 dark:bg-[#0B0F19]/50 backdrop-blur-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-300 resize-none shadow-inner font-mono"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(6,182,212,0.6)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-500 hover:bg-green-400 text-black py-4 px-6 rounded-sm font-black flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(34,197,94,0.4)] uppercase tracking-widest border border-green-400"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-white/30 border-t-white" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}