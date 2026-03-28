
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { certificates } from '../data/portfolioData';

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 relative z-10 w-full">
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
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Certificates
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
              className="glass-card rounded-2xl overflow-hidden group border border-white/20 dark:border-white/10 hover:border-cyan-500/40 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col"
            >
              {/* Certificate Image */}
              <div className="h-48 relative overflow-hidden bg-slate-900 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B0F19]/90 to-transparent z-20 pointer-events-none" />
                <div className="absolute top-4 right-4 z-30">
                  <div className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 shadow-lg group-hover:shadow-[0_0_15px_rgba(250,204,21,0.5)] transition-shadow">
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6 flex flex-col flex-grow relative z-30 -mt-8">
                <div className="bg-slate-100/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/30 dark:border-white/10 flex-grow flex flex-col justify-between group-hover:border-cyan-500/30 transition-colors">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-cyan-500 transition-colors">
                      {certificate.title}
                    </h3>
                    
                    <p className="text-fuchsia-600 dark:text-fuchsia-400 font-semibold mb-3 text-sm">
                      {certificate.issuer}
                    </p>
                    
                    <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 mb-4 bg-white/50 dark:bg-[#0B0F19]/50 w-max px-3 py-1 rounded-full border border-slate-200 dark:border-white/5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">{certificate.date}</span>
                    </div>

                    {certificate.credentialId && (
                      <p className="text-xs text-slate-500 dark:text-slate-500 mb-4 break-all">
                        ID: <span className="font-mono">{certificate.credentialId}</span>
                      </p>
                    )}
                  </div>

                  {certificate.link && (
                    <motion.a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center space-x-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium text-sm mt-auto"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}