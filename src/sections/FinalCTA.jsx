import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';

const FinalCTA = () => (
  <section className="px-4 sm:px-6 py-8 sm:py-12 bg-white relative overflow-hidden flex justify-center w-full">
    <div className="w-full max-w-5xl mx-auto relative z-10 flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-[340px] sm:max-w-none bg-gradient-to-br from-primary to-secondary rounded-[28px] sm:rounded-[48px] p-5 sm:p-16 text-center relative overflow-hidden box-border mx-auto"
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <h2 className="text-2xl sm:text-5xl font-black text-white mb-3 relative z-10 leading-tight">
          Your Business Should Reply in Seconds, Not Hours
        </h2>
        <p className="text-xs sm:text-xl text-white/90 font-bold mb-6 max-w-xl mx-auto relative z-10 leading-relaxed">
          Start automating sales, support, and follow-ups with AISA Connect<sup className="text-[0.6em]">TM</sup> today.
        </p>

        {/* Restructured 2-row CTA layout on mobile */}
        <div className="grid grid-cols-2 gap-2 w-full max-w-[310px] mx-auto sm:max-w-none sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-4 relative z-10">
          <a 
            href="https://connect.aisa24.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 w-full sm:w-auto px-4 py-2.5 sm:px-8 sm:py-4 bg-white text-primary rounded-xl sm:rounded-2xl font-black text-xs sm:text-lg hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-1.5 min-h-[36px] sm:min-h-[56px]"
          >
            Explore AISA Connect<sup className="text-[0.6em]">TM</sup> <ArrowRight size={14} className="sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://calendly.com/admin-uwo24/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-3 py-2.5 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-xl sm:rounded-2xl font-black text-[10.5px] sm:text-lg hover:bg-white/20 active:scale-95 transition-all flex items-center justify-center gap-1 min-h-[36px] sm:min-h-[56px] whitespace-nowrap"
          >
            <Calendar size={12} className="sm:w-5 sm:h-5" /> Book Demo
          </a>
          <a
            href="https://wa.me/918359890909?text=Hello%20AISA%20Connect!%20I'm%20ready%20to%20revolutionize%20my%20business%20with%20AI.%20Can%20we%20discuss%20the%20onboarding%20process%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-3 py-2.5 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-xl sm:rounded-2xl font-black text-[10.5px] sm:text-lg hover:bg-white/20 active:scale-95 transition-all flex items-center justify-center gap-1 min-h-[36px] sm:min-h-[56px] whitespace-nowrap"
          >
            <MessageCircle size={12} className="sm:w-5 sm:h-5" /> WhatsApp Us
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
