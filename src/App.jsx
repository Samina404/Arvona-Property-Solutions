import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar onOpenContact={() => setIsContactModalOpen(true)} />
      <main className="flex-grow">
        <Hero onOpenContact={() => setIsContactModalOpen(true)} />
        
        {/* Short Info Section */}
        <section className="py-24 bg-background border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              Luxury Living in Prime North Khulshi!
            </h2>
            <p className="text-secondary text-lg font-light leading-relaxed mb-10">
              Ideal for elite families & smart investors seeking premium lifestyle and long-term value. Developed on 20 Katha land, West Facing with wide 40 ft road access.
            </p>
            <div className="flex justify-center gap-12 text-center">
              <div>
                <div className="text-4xl font-serif text-accent mb-2">3650</div>
                <div className="text-sm text-secondary uppercase tracking-widest">Max Sq Ft</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-accent mb-2">20</div>
                <div className="text-sm text-secondary uppercase tracking-widest">Katha Land</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-accent mb-2">40<span className="text-2xl">ft</span></div>
                <div className="text-sm text-secondary uppercase tracking-widest">Road Access</div>
              </div>
            </div>
          </div>
        </section>

        <ProjectDetails onOpenContact={() => setIsContactModalOpen(true)} />
      </main>
      <Footer />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}

export default App;
