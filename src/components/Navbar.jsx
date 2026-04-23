import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Heart, User } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Arvona Property Solutions" className="h-12 object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {['The Project', 'Gallery', 'Location'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors">
              {item}
            </a>
          ))}
          <button onClick={onOpenContact} className="text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors">
            Contact
          </button>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button onClick={onOpenContact} className="btn-primary py-2 px-6">Enquire Now</button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0e1117] border-t border-white/10 p-6 flex flex-col gap-6 shadow-2xl">
          {['The Project', 'Gallery', 'Location'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-lg font-medium tracking-widest uppercase text-primary hover:text-accent" onClick={() => setIsMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <button onClick={() => { setIsMobileMenuOpen(false); onOpenContact(); }} className="text-lg font-medium tracking-widest uppercase text-left text-primary hover:text-accent">
            Contact
          </button>
          <button onClick={() => { setIsMobileMenuOpen(false); onOpenContact(); }} className="btn-primary w-full">Enquire Now</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
