import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '../index.html' },
    { name: 'About UWO™', href: '../about.html' },
    { 
      name: 'Our Projects', 
      href: '#', 
      isDropdown: true,
      items: [
        { name: 'AISA™', href: '../aisa.html' },
        { name: <>AISA Connect<sup className="text-[0.6em]">TM</sup></>, id: 'aisa-connect', href: '#' },
        { name: 'AI Mall™', href: 'https://ai-mall.in', external: true },
        { name: 'EFV™', href: 'https://efvframework.com/', external: true },
      ]
    },
    { name: 'Our Team', href: '../our-team.html' },
    { name: 'Contact', href: '../contact.html' },
  ];

  const [activeDropdown, setActiveDropdown] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  const handleNavClick = (href, isDropdown) => {
    if (isDropdown) return;
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <>
      {/* Scroll Progress */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100/80 shadow-sm' : 'bg-transparent'
      }`}>
        <div className="w-full px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex flex-col items-center cursor-pointer group" onClick={() => window.location.href='../index.html'}>
            <img src="/aisa-connect/aisa-connect-logo.png" alt="AISA Connect" className="h-7 md:h-9 w-auto" />
            <span className="text-[10px] md:text-[11px] font-black tracking-tight text-foreground mt-1 leading-none">
              AISA Connect<sup className="text-[7px]">TM</sup>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            {navLinks.map((link) => (
              link.isDropdown ? (
                <div 
                  key={link.id || link.name} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(true)}
                  onMouseLeave={() => setActiveDropdown(false)}
                >
                  <button className="flex items-center gap-1 text-foreground/80 hover:text-primary font-bold text-sm transition-colors">
                    {link.name} <ChevronRight size={14} className={`transition-transform duration-200 ${activeDropdown ? 'rotate-90' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-2"
                      >
                        {link.items.map((item) => (
                          <a 
                            key={item.name} 
                            href={item.href}
                            target={item.href.startsWith('#') ? "_self" : "_blank"}
                            rel={item.href.startsWith('#') ? "" : "noopener noreferrer"}
                            className="block px-5 py-3 text-sm font-bold text-foreground/70 hover:text-primary hover:bg-mint/30 transition-all"
                          >
                            {item.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a key={link.id || link.name} href={link.href} target={link.href.startsWith('#') ? "_self" : "_blank"} rel={link.href.startsWith('#') ? "" : "noopener noreferrer"}
                  className="text-foreground/80 hover:text-primary font-bold text-sm transition-colors relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full" />
                </a>
              )
            ))}
          </div>

          {/* Mobile: Hamburger Only */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-cream text-foreground active:scale-95 transition-transform"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[85vw] max-w-xs bg-white z-50 md:hidden flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div className="flex flex-col items-center">
                  <img src="/aisa-connect/aisa-connect-logo.png" alt="AISA" className="h-8 w-auto" />
                  <span className="text-[9px] font-black tracking-tight text-foreground mt-1 leading-none">
                    AISA Connect<sup className="text-[6px]">TM</sup>
                  </span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="w-9 h-9 flex items-center justify-center rounded-xl bg-cream">
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex-1 overflow-y-auto p-5 space-y-1">
                {navLinks.map((link, i) => (
                  <div key={link.id || link.name}>
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => link.isDropdown ? setMobileProjectsOpen(!mobileProjectsOpen) : handleNavClick(link.href)}
                      className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-mint/40 active:bg-mint/70 transition-colors text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-foreground group-hover:text-primary transition-colors">{link.name}</span>
                      </div>
                      <ChevronRight size={18} className={`text-foreground/30 group-hover:text-primary transition-all ${link.isDropdown && mobileProjectsOpen ? 'rotate-90' : ''}`} />
                    </motion.button>
                    
                    {link.isDropdown && (
                      <AnimatePresence>
                        {mobileProjectsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-cream/50 rounded-2xl ml-4 mr-2 mb-2"
                          >
                            {link.items.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                target={item.href.startsWith('#') ? "_self" : "_blank"}
                                rel={item.href.startsWith('#') ? "" : "noopener noreferrer"}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block p-4 text-sm font-bold text-foreground/70 hover:text-primary border-b border-white/50 last:border-0"
                              >
                                {item.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>

              {/* Drawer Footer CTAs Removed */}
              <div className="p-5 space-y-3 border-t border-gray-100">
                <a 
                  href="https://calendly.com/admin-uwo24/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !w-full flex items-center justify-center"
                >
                  Book a Demo
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
