import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-glass/90 backdrop-blur-md shadow-neon' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-futuristic font-bold text-primary cursor-pointer">
              Rafiul<span className="text-accent">Shafin</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-3 py-2 text-lg font-medium text-white hover:text-primary transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className={`w-6 h-6 flex flex-col justify-center items-center transition-all duration-300 ${isOpen ? 'rotate-90' : ''}`}>
                <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-glass/95 backdrop-blur-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-primary hover:bg-white/10 rounded-md transition-all duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 