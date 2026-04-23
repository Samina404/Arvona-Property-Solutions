import React, { useState } from 'react';
import { BedDouble, Bath, Maximize, MapPin, Check } from 'lucide-react';

// Using Vite's import.meta.glob to dynamically import images from the photos folder
const photoModules = import.meta.glob('../assets/photos/*.webp', { eager: true });
const photos = Object.values(photoModules).map(module => module.default);

const ProjectDetails = ({ onOpenContact }) => {
  // Define specific images by URL from the assets folder. You can change these paths.
  const thumbnailImages = [
    new URL('../assets/photos/WhatsApp Image 2026-04-22 at 11.15.28 PM.webp', import.meta.url).href,
    new URL('../assets/photos/WhatsApp Image 2026-04-22 at 11.15.27 PM.webp', import.meta.url).href,
    new URL('../assets/photos/WhatsApp Image 2026-04-22 at 11.15.29 PM (1).webp', import.meta.url).href,
    new URL('../assets/photos/WhatsApp Image 2026-04-22 at 11.15.29 PM.webp', import.meta.url).href,
  ];
  
  const [activeImage, setActiveImage] = useState(thumbnailImages[0]);

  return (
    <div id="the-project">
      {/* Project Details Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="section-title">
            <span className="subtitle">Premium Apartments for Sale</span>
            <h2>Arvona Property Solutions</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <div className="aspect-[4/5] overflow-hidden rounded-sm relative">
                <img 
                  src={activeImage} 
                  alt="North Khulshi Property" 
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>
              {/* Product Card Style Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {thumbnailImages.map((thumb, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(thumb)}
                    className={`aspect-square overflow-hidden rounded-sm border-2 transition-all duration-300 ${activeImage === thumb ? 'border-accent opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={thumb} alt={`Thumbnail ${idx+1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <h3 className="text-3xl font-serif text-primary mb-4">Why This Project Stands Out</h3>
                <p className="text-secondary leading-relaxed">
                  This residence offers luxury apartments for sale in Chattogram, providing lavish amenities such as a rooftop heated pool with a lush garden, fully equipped gym and sauna, interior-designed common areas, patio space, multi-layered basement parking, and more. Ideal for elite families seeking a premium lifestyle.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/10">
                <div>
                  <div className="flex items-center gap-3 text-accent mb-2">
                    <MapPin size={20} />
                    <span className="font-serif text-xl text-primary">Location</span>
                  </div>
                  <p className="text-secondary text-sm">North Khulshi R/A, Road 3, Chattogram</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 text-accent mb-2">
                    <Maximize size={20} />
                    <span className="font-serif text-xl text-primary">Size</span>
                  </div>
                  <p className="text-secondary text-sm">3625 & 3650 SFT</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 text-accent mb-2">
                    <BedDouble size={20} />
                    <span className="font-serif text-xl text-primary">Facing</span>
                  </div>
                  <p className="text-secondary text-sm">West Facing</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 text-accent mb-2">
                    <Bath size={20} />
                    <span className="font-serif text-xl text-primary">Land Area</span>
                  </div>
                  <p className="text-secondary text-sm">20 Katha</p>
                </div>
              </div>

              <div>
                <h4 className="text-primary font-serif text-xl mb-4">Premium Amenities</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-secondary text-sm">
                  {[
                    'Rooftop heated pool & garden', 
                    'Fully equipped gym & sauna', 
                    'Hotel-quality lobby', 
                    '2 international standard lifts', 
                    'Multi-layer basement parking', 
                    '24/7 security & surveillance',
                    'Full-load generator',
                    'Rooftop BBQ & party space',
                    'Optional smart home automation'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4">
                <button onClick={onOpenContact} className="btn-outline">Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-[#0a0c10] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="section-title">
            <span className="subtitle">Visual Tour</span>
            <h2>Project Gallery</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.slice(2, 11).map((photo, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-sm bg-background border border-white/5">
                <img 
                  src={photo} 
                  alt={`Arvona Property Gallery ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="btn-primary">View Full Gallery</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
