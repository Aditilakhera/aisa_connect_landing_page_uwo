import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Share2, BarChart3, Globe, ShieldCheck } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.5, delay }}
    className="snap-card flex-shrink-0 w-[78vw] sm:w-auto bg-white p-5 sm:p-8 rounded-3xl border border-gray-100 whatsapp-shadow transition-all duration-300 active:scale-[0.98] hover:-translate-y-2 hover:border-primary/40 group"
  >
    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/8 rounded-2xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-lg sm:text-xl font-black text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-sm sm:text-base text-foreground/55 font-semibold leading-relaxed">{description}</p>
  </motion.div>
);

const Features = () => {
  const features = [
    { icon: Bot, title: 'AI Smart Assistant', description: 'Human-like AI that understands context and intent to reply 24/7 in 100+ languages.' },
    { icon: Zap, title: 'Official Meta API', description: 'Broadcast messages with green badge verified accounts and enterprise-grade stability.' },
    { icon: Share2, title: 'Workflow Builder', description: 'Drag-and-drop to automate lead qualification, demo bookings, and payment follow-ups.' },
    { icon: BarChart3, title: 'Business Intelligence', description: 'Deep analytics on response times, conversions, and agent performance in one dashboard.' },
    { icon: Globe, title: 'Multi-Channel Sync', description: 'Seamlessly sync your WhatsApp automation with CRM, website, and marketing tools.' },
    { icon: ShieldCheck, title: 'Enterprise Security', description: 'End-to-end encryption and enterprise-grade data protection for all your conversations.' }
  ];

  return (
    <section id="features" className="section-padding bg-white relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#128C7E 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 px-2">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-primary font-black uppercase tracking-widest text-xs">
            Capabilities
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="heading-lg text-foreground mt-3 mb-4">
            Everything for <span className="text-gradient">WhatsApp Growth</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} className="subheading text-center mx-auto px-2">
            Powerful tools designed to turn your WhatsApp into a high-performance sales engine.
          </motion.p>
        </div>

        {/* Mobile: horizontal scroll. Desktop: grid */}
        <div className="flex sm:hidden scroll-x-hide gap-4 pb-4 -mx-4 px-4">
          {features.map((f, i) => <FeatureCard key={i} {...f} delay={0} />)}
        </div>
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((f, i) => <FeatureCard key={i} {...f} delay={i * 0.08} />)}
        </div>

        {/* Mobile scroll hint */}
        <div className="flex justify-center mt-4 gap-1.5 sm:hidden">
          {features.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all ${i === 0 ? 'w-5 bg-primary' : 'w-1.5 bg-gray-200'}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
