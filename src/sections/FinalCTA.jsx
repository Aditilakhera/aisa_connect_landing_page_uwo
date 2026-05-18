import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';

const FinalCTA = () => (
  <section className="px-4 sm:px-6 py-8 sm:py-12 bg-white relative overflow-hidden">
    <div className="max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-primary to-secondary rounded-[32px] sm:rounded-[48px] p-6 sm:p-16 text-center relative overflow-hidden"
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <h2 className="text-3xl sm:text-5xl font-black text-white mb-5 relative z-10 leading-tight">
          Your Business Should Reply in Seconds, Not Hours
        </h2>
        <p className="text-base sm:text-xl text-white/90 font-bold mb-10 max-w-xl mx-auto relative z-10">
          Start automating sales, support, and follow-ups with AISA Connect<sup className="text-[0.6em]">TM</sup> today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 flex-wrap">
          <a 
            href="https://connect.aisa24.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white text-primary rounded-2xl font-black text-base sm:text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-2"
          >
            Explore AISA Connect<sup className="text-[0.6em]">TM</sup> <ArrowRight size={20} />
          </a>
          <a
            href="https://calendly.com/aisa24"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-black/20 backdrop-blur-lg border border-white/20 text-white rounded-2xl font-black text-base sm:text-lg hover:bg-black/30 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Calendar size={20} /> Book Demo
          </a>
          <a
            href="https://wa.me/918359890909?text=Hello%20AISA%20Connect!%20I'm%20ready%20to%20revolutionize%20my%20business%20with%20AI.%20Can%20we%20discuss%20the%20onboarding%20process%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-black/20 backdrop-blur-lg border border-white/20 text-white rounded-2xl font-black text-base sm:text-lg hover:bg-black/30 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} /> WhatsApp Us
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
