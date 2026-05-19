import React from 'react';
import { motion } from 'framer-motion';

const SocialProof = () => {
  const logos = [
    'Real Estate', 'E-commerce', 'Healthcare', 'Education', 'Banking', 'SaaS', 'Retail', 'Logistics'
  ];

  return (
    <section className="py-10 sm:py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[#475569] font-black uppercase tracking-[0.2em] text-[9px] sm:text-xs mb-6 sm:mb-10">
          Empowering Industries Worldwide with Official WhatsApp Automation
        </p>
        
        <div className="flex flex-wrap justify-center gap-5 sm:gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-base sm:text-2xl font-black text-foreground tracking-tighter"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
