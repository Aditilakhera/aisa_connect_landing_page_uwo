import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, MessageSquare, Zap, UserCheck, Calendar, RefreshCcw, DollarSign } from 'lucide-react';

const steps = [
  { icon: Megaphone, label: 'Meta Ad', desc: 'Customer sees your ad' },
  { icon: MessageSquare, label: 'WhatsApp', desc: 'Clicks to chat instantly' },
  { icon: Zap, label: 'AI Reply', desc: 'AI responds in 0.3 seconds' },
  { icon: UserCheck, label: 'Qualification', desc: 'AI qualifies the lead' },
  { icon: Calendar, label: 'Demo Booking', desc: 'Auto-books a meeting' },
  { icon: RefreshCcw, label: 'Follow-up', desc: 'Smart follow-up sequence' },
  { icon: DollarSign, label: 'Sale', desc: 'Deal closed automatically' },
];

const Workflow = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="heading-lg text-foreground mb-4">
            The Ultimate <span className="text-gradient">Sales Funnel</span>
          </motion.h2>
          <p className="subheading text-center mx-auto px-4">Every step automated. Every lead nurtured. Every sale closed.</p>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="block lg:hidden relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary opacity-30" />
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="absolute left-5 top-0 w-0.5 bg-gradient-to-b from-primary to-secondary origin-top"
          />

          <div className="space-y-6 pl-14">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Circle */}
                <div className="absolute -left-[38px] w-10 h-10 bg-white rounded-full border-2 border-primary flex items-center justify-center text-primary whatsapp-shadow">
                  <step.icon size={18} />
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-4 border border-gray-100 whatsapp-shadow hover:border-primary/40 transition-all active:scale-[0.99]">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-black text-black text-sm">{step.label}</div>
                      <div className="text-[#334155] text-xs font-bold mt-0.5">{step.desc}</div>
                    </div>
                    <div className="ml-auto text-xs font-black text-primary bg-mint/50 px-2 py-1 rounded-full">
                      Step {i + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden lg:block relative">
          <div className="absolute top-10 left-8 right-8 h-0.5 bg-gray-100" />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 'calc(100% - 64px)' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="absolute top-10 left-8 h-0.5 bg-gradient-to-r from-primary to-secondary origin-left"
          />

          <div className="flex justify-between gap-2">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center w-full group"
              >
                <div className="w-20 h-20 bg-white rounded-2xl whatsapp-shadow border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10 mb-4">
                  <step.icon size={28} />
                </div>
                <div className="font-black text-black text-sm group-hover:text-primary transition-colors">{step.label}</div>
                <div className="text-[#475569] text-xs font-bold mt-1 leading-snug">{step.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
