import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0c10] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <h3 className="text-3xl font-serif text-primary tracking-tighter uppercase mb-6">
              Arvona Property Solutions
            </h3>
            <p className="text-secondary text-sm leading-relaxed">
              We Guide You Before You Buy. Ideal for elite families & smart investors seeking premium lifestyle and long-term value.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-secondary hover:text-accent transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-secondary hover:text-accent transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-secondary hover:text-accent transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-secondary hover:text-accent transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-primary font-serif text-xl mb-6">Contact</h4>
            <ul className="space-y-4 text-secondary text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <span>North Khulshi R/A, Road 3<br/>Chattogram</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span>017 9006 5171</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <span>info@arvona.kinboekhaney.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3 text-secondary text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Search Properties</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Our Agents</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Neighborhood Guides</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Market Reports</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-serif text-xl mb-6">Newsletter</h4>
            <p className="text-secondary text-sm mb-4">
              Subscribe to receive exclusive off-market listings and luxury real estate insights.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-[#12151c] text-primary px-4 py-3 w-full border border-white/10 focus:border-accent outline-none text-sm transition-colors"
              />
              <button type="submit" className="bg-accent text-[#0a0c10] px-4 py-3 font-medium hover:bg-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary/60">
          <p>&copy; {new Date().getFullYear()} Arvona Property Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
