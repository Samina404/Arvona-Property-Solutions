import React from 'react';
import { X } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="absolute inset-0 bg-[#0a0c10]/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-background border border-white/10 shadow-2xl rounded-sm custom-scrollbar">
        <div className="sticky top-0 bg-background/95 backdrop-blur-md border-b border-white/10 px-8 py-6 flex justify-between items-center z-10">
          <div>
            <h3 className="text-2xl font-serif text-primary">Inquire Now</h3>
            <p className="text-sm text-secondary tracking-widest uppercase mt-1">We Guide You Before You Buy</p>
          </div>
          <button 
            onClick={onClose}
            className="text-secondary hover:text-accent transition-colors p-2"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-8">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Info */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-secondary uppercase tracking-wider">Full Name *</label>
                <input type="text" className="w-full bg-[#12151c] border border-white/5 px-4 py-3 text-primary focus:border-accent outline-none transition-colors rounded-sm" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-secondary uppercase tracking-wider">WhatsApp/IMO Number *</label>
                <input type="tel" className="w-full bg-[#12151c] border border-white/5 px-4 py-3 text-primary focus:border-accent outline-none transition-colors rounded-sm" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-secondary uppercase tracking-wider">Contact Number 1 *</label>
                <input type="tel" className="w-full bg-[#12151c] border border-white/5 px-4 py-3 text-primary focus:border-accent outline-none transition-colors rounded-sm" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-secondary uppercase tracking-wider">Contact Number 2</label>
                <input type="tel" className="w-full bg-[#12151c] border border-white/5 px-4 py-3 text-primary focus:border-accent outline-none transition-colors rounded-sm" />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-medium text-secondary uppercase tracking-wider">Address</label>
                <input type="text" className="w-full bg-[#12151c] border border-white/5 px-4 py-3 text-primary focus:border-accent outline-none transition-colors rounded-sm" />
              </div>

              {/* Requirements */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-secondary uppercase tracking-wider">Required Location</label>
                <input type="text" className="w-full bg-[#12151c] border border-white/5 px-4 py-3 text-primary focus:border-accent outline-none transition-colors rounded-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-secondary uppercase tracking-wider">Required Size (sq.ft. / katha)</label>
                <input type="text" className="w-full bg-[#12151c] border border-white/5 px-4 py-3 text-primary focus:border-accent outline-none transition-colors rounded-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-secondary uppercase tracking-wider">Initial Budget</label>
                <input type="text" className="w-full bg-[#12151c] border border-white/5 px-4 py-3 text-primary focus:border-accent outline-none transition-colors rounded-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-secondary uppercase tracking-wider">Unit Requirement</label>
                <input type="number" placeholder="Number of apartments/units" className="w-full bg-[#12151c] border border-white/5 px-4 py-3 text-primary focus:border-accent outline-none transition-colors rounded-sm" />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-medium text-secondary uppercase tracking-wider">Preferred Project Status</label>
                <select className="w-full bg-[#12151c] border border-white/5 px-4 py-3 text-primary focus:border-accent outline-none transition-colors rounded-sm appearance-none">
                  <option value="">Select Status</option>
                  <option value="Ready">Ready</option>
                  <option value="On-going">On-going</option>
                  <option value="Initial">Initial</option>
                  <option value="Handed Over">Handed Over</option>
                </select>
              </div>

              {/* Additional Details */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-medium text-secondary uppercase tracking-wider">Required Facilities (Bank Loan, Cash Payment, Tax Issue, etc.)</label>
                <input type="text" className="w-full bg-[#12151c] border border-white/5 px-4 py-3 text-primary focus:border-accent outline-none transition-colors rounded-sm" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-medium text-secondary uppercase tracking-wider">Family Members (Spouse, Children – optional)</label>
                <input type="text" className="w-full bg-[#12151c] border border-white/5 px-4 py-3 text-primary focus:border-accent outline-none transition-colors rounded-sm" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-medium text-secondary uppercase tracking-wider">Special Notes / Preferences</label>
                <textarea rows="3" className="w-full bg-[#12151c] border border-white/5 px-4 py-3 text-primary focus:border-accent outline-none transition-colors rounded-sm resize-none"></textarea>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex justify-end">
              <button type="submit" className="btn-primary w-full md:w-auto">
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
