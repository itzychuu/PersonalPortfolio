import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { CommunitiesSection } from './components/CommunitiesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="dark min-h-screen bg-black text-green-500 overflow-hidden relative font-mono selection:bg-green-500/30 selection:text-green-200">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0 bg-black">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-green-500/20 dark:bg-green-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-60 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-emerald-500/20 dark:bg-emerald-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-teal-500/20 dark:bg-teal-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-60 animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-8 right-[20%] w-96 h-96 bg-lime-500/20 dark:bg-lime-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-60 animate-blob"></div>
      </div>
      
      {/* CRT Scanline Overlay */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-50 scanlines opacity-30 mix-blend-overlay"></div>

      <div className="relative z-10">
        <Navbar />
        
        <main>
          <HeroSection />
          <SkillsSection />
          <CertificatesSection />
          <CommunitiesSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;