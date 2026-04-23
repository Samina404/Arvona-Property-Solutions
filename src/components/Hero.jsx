import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import heroBg from '../assets/photos/WhatsApp Image 2026-04-22 at 11.15.33 PM (1).webp';
//src/assets/photos/WhatsApp Image 2026-04-22 at 11.15.33 PM (1).webp
const Hero = ({ onOpenContact }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] scale-110"
        style={{ 
          backgroundImage: `url('${heroBg}')`,
        }}
      >
        <div className="absolute inset-0 bg-[#0e1117]/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-primary">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-accent uppercase tracking-[0.4em] text-sm font-bold mb-6 block">
            Where Value Meets Vision
          </span>
          <h1 className="text-4xl md:text-8xl font-serif mb-7 leading-tight">
            Arvona Property <br /> 
            <span className="italic">Solutions</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-secondary mb-10 font-light tracking-wide">
            Looking for an exclusive address in Chattogram? Your search ends here. We Guide You Before You Buy.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button onClick={onOpenContact} className="btn-primary flex items-center gap-2 group">
              Inquire Now
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#gallery" className="text-primary border-b border-white/30 pb-1 hover:border-accent hover:text-accent transition-colors tracking-widest uppercase text-xs font-medium">
              View Gallery
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex items-center gap-4 text-secondary/50 vertical-text uppercase tracking-[0.3em] text-[10px] transform -rotate-90 origin-left translate-y-12">
          <div className="w-[1px] h-20 bg-white/30" />
          Scroll to explore
        </div>
      </div>
    </section>
  );
};

export default Hero;
