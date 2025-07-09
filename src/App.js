import React, { useEffect, useState } from 'react';
import './index.css';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero3D from './components/Hero3D';
import Loader from './components/Loader';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const projects = [
  { id: 1, title: 'LINHA 14', img: 'https://via.placeholder.com/300x300/1a2236/fff?text=LINHA+14' },
  { id: 2, title: 'SIGMA', img: 'https://via.placeholder.com/300x300/1a2236/fff?text=SIGMA' },
  { id: 3, title: 'LINEA VOL.1', img: 'https://via.placeholder.com/300x300/1a2236/fff?text=LINEA+VOL.1' },
  { id: 4, title: 'GUARA', img: 'https://via.placeholder.com/300x300/1a2236/fff?text=GUARA' },
];

const highlights = [
  {
    title: 'Boundless Art: 3D Discovery',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    desc: 'Nova ae egestas congue, quisque egestas diam orci cursus euismod lacinia quis risus ultricies odio enim gravida sodales montes a penatibus sodales neque malesuada bibendum orci accumsan. Suspendisse turpis cursus.',
  },
  {
    title: 'ART UNBOUND ODYSSEY',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    desc: 'Personal Project',
  },
];

const footerProjects = [
  { title: 'TNQ PROJECT', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80' },
  { title: 'DREAMS', img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8a?auto=format&fit=crop&w=600&q=80' },
  { title: 'ESCAPE', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80' },
];

function App() {
  const [activeSection, setActiveSection] = useState('About');
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    // Loader timeout
    const timer = setTimeout(() => setLoading(false), 1200);
    // Section highlight on scroll
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sec.charAt(0).toUpperCase() + sec.slice(1));
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Show welcome screen after loader
  useEffect(() => {
    if (!loading) {
      setShowWelcome(true);
      const welcomeTimer = setTimeout(() => setShowWelcome(false), 1500);
      return () => clearTimeout(welcomeTimer);
    }
  }, [loading]);

  if (loading) return <Loader />;
  if (showWelcome) {
    return (
      <div className="fixed inset-0 z-50 bg-darkBg flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-accent drop-shadow-lg text-center"
        >
          Welcome to my Portfolio
        </motion.h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1222] to-[#181f2a] text-white font-serif scroll-smooth">
      {/* Navigation */}
      <motion.nav initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="sticky top-0 z-50 flex justify-between items-center px-8 py-6 max-w-6xl mx-auto uppercase tracking-widest text-sm bg-[#0a1222]/80 backdrop-blur-md shadow-lg">
        <div className="flex-1 flex justify-start gap-8">
          {navLinks.slice(0, 2).map(link => (
            <a
              key={link.label}
              href={link.href}
              className={`hover:text-[#e6b87a] transition-colors font-futuristic`} style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: activeSection === link.label ? 'bold' : 'normal', textDecoration: activeSection === link.label ? 'underline' : 'none', textUnderlineOffset: activeSection === link.label ? '4px' : undefined, color: activeSection === link.label ? '#e6b87a' : undefined }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex-1 flex justify-center">
          <a href="#" className="text-3xl font-bold tracking-widest hover:text-[#e6b87a] transition-colors font-futuristic" aria-label="Go to top" style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.2em' }}>PORTFOLIO</a>
        </div>
        <div className="flex-1 flex justify-end items-center gap-8">
          {navLinks.slice(2).map(link => (
            <a
              key={link.label}
              href={link.href}
              className={`hover:text-[#e6b87a] transition-colors font-futuristic`} style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: activeSection === link.label ? 'bold' : 'normal', textDecoration: activeSection === link.label ? 'underline' : 'none', textUnderlineOffset: activeSection === link.label ? '4px' : undefined, color: activeSection === link.label ? '#e6b87a' : undefined }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
                document.documentElement.requestFullscreen();
            }}
            className="ml-4 px-4 py-2 rounded-lg bg-accent text-darkBg font-bold shadow-neon hover:bg-primary transition-all duration-300 text-xs uppercase tracking-widest"
            style={{letterSpacing: '0.15em'}}
            aria-label="Go Fullscreen"
          >
            Fullscreen
          </button>
        </div>
      </motion.nav>
      {/* 3D Hero Background */}
      <Hero3D />
      {/* Hero Section */}
      <motion.header initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative flex flex-col items-center justify-center text-center py-32">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-64 h-64 flex items-center justify-center mb-8 relative"
          style={{ perspective: '1200px' }}
        >
          {/* Static Profile Image */}
          <img
            src="/profile.jpg"
            alt="Rafiul Hasan Shafin"
            className="relative w-56 h-56 object-cover rounded-full border-4 border-accent shadow-neon"
            style={{ zIndex: 3, boxShadow: '0 0 32px 4px #00fff7, 0 0 8px 2px #1a1a2e' }}
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-2">Rafiul Hasan Shafin</h1>
          <p className="text-white/80 mb-6 text-lg">Software Engineer & Problem Solver</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm justify-center mb-2">
            <div className="bg-darkBg/50 rounded-lg p-3">
              <div className="text-primary font-bold">5+</div>
              <div className="text-white/60">Projects</div>
            </div>
            <div className="bg-darkBg/50 rounded-lg p-3">
              <div className="text-primary font-bold">3+</div>
              <div className="text-white/60">Years Experience</div>
            </div>
            <div className="bg-darkBg/50 rounded-lg p-3">
              <div className="text-primary font-bold">10+</div>
              <div className="text-white/60">Technologies</div>
            </div>
            <div className="bg-darkBg/50 rounded-lg p-3">
              <div className="text-primary font-bold">AIUB</div>
              <div className="text-white/60">University</div>
            </div>
          </div>
        </motion.div>
      </motion.header>
      {/* About Section */}
      <motion.div id="about" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}>
        <About />
      </motion.div>
      {/* Skills Section */}
      <motion.div id="skills" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}>
        <Skills />
      </motion.div>
      {/* Contact Section */}
      <motion.div id="contact" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}>
        <Contact />
      </motion.div>
      {/* All content below Contact section has been removed as per user request */}
    </div>
  );
}

export default App;
