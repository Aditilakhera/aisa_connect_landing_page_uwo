import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const WhyAisa = () => {
  const comparison = [
    { feature: '24/7 replies', aisa: 'Always Live', others: 'Office Hours' },
    { feature: 'AI automation', aisa: 'Self-Learning', others: 'Basic Rules' },
    { feature: 'Instant lead response', aisa: 'Sub-Second', others: 'Delayed' },
    { feature: 'Multi-agent inbox', aisa: 'Unlimited', others: 'Limited' },
    { feature: 'Auto follow-ups', aisa: 'Infinite', others: 'Manual' },
  ];

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Why Choose <span className="text-primary">AISA Connect<sup className="text-[0.6em]">TM</sup></span>?
          </h2>
          <p className="subheading text-center mx-auto">
            The difference is clear when you compare intelligence and scale.
          </p>
        </div>

        <div className="bg-white rounded-[32px] sm:rounded-[40px] whatsapp-shadow border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full min-w-[500px] sm:min-w-0">
              <thead>
                <tr className="border-b border-gray-50 bg-gray-50/50">
                  <th className="p-4 sm:p-8 text-left text-[10px] sm:text-xs font-black uppercase tracking-widest text-black">Features</th>
                  <th className="p-4 sm:p-8 text-center text-[10px] sm:text-xs font-black uppercase tracking-widest text-black">AISA Connect<sup className="text-[0.6em]">TM</sup></th>
                  <th className="p-4 sm:p-8 text-center text-[10px] sm:text-xs font-black uppercase tracking-widest text-black">Others</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-cream transition-colors">
                    <td className="p-4 sm:p-8 text-xs sm:text-sm text-foreground font-bold">{row.feature}</td>
                    <td className="p-4 sm:p-8 text-xs sm:text-sm text-center text-primary font-black">{row.aisa}</td>
                    <td className="p-4 sm:p-8 text-xs sm:text-sm text-center text-black/40 font-bold">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAisa;
