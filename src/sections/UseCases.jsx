import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation, useMotionValue } from 'framer-motion';
import { 
  Hospital, Banknote, Megaphone, Target, Palette, 
  Users, GraduationCap, Building2, Hammer, Scale,
  ArrowRight, X, CheckCircle2, MessageSquare, 
  Zap, Calendar, Database, ShieldCheck, Sparkles,
  ChevronLeft, ChevronRight
} from 'lucide-react';

const industries = [
  {
    id: 'hospital',
    name: 'AI Hospital',
    icon: Hospital,
    useCase: 'Automate patient bookings, reminders, and follow-ups instantly.',
    workflow: ['Inquiry', 'AI Qualify', 'Booking', 'Follow-up']
  },
  {
    id: 'cashflow',
    name: 'AI Cashflow',
    icon: Banknote,
    useCase: 'Automate payment reminders and invoice tracking.',
    workflow: ['Invoice', 'AI Track', 'Reminder', 'Sync']
  },
  {
    id: 'ads',
    name: 'AI Ads',
    icon: Megaphone,
    useCase: 'Transform ad leads into qualified prospects through AI chat.',
    workflow: ['Ad Click', 'AI Chat', 'Qualify', 'CRM']
  },
  {
    id: 'sales',
    name: 'AI Sales',
    icon: Target,
    useCase: '24/7 sales agent that qualifies leads and closes deals.',
    workflow: ['Lead', 'AI Demo', 'Negotiate', 'Sale']
  },
  {
    id: 'creative',
    name: 'AI Creative',
    icon: Palette,
    useCase: 'Automate brief collection and project updates.',
    workflow: ['Brief', 'AI Review', 'Approval', 'Update']
  },
  {
    id: 'hr',
    name: 'AI HR',
    icon: Users,
    useCase: 'Screen candidates, schedule interviews, and automate onboarding.',
    workflow: ['Apply', 'AI Screen', 'Schedule', 'Hire']
  },
  {
    id: 'school',
    name: 'AI School',
    icon: GraduationCap,
    useCase: 'Manage admissions and student queries automatically.',
    workflow: ['Inquiry', 'AI Assist', 'Admission', 'Notify']
  },
  {
    id: 'bank',
    name: 'AI Bank',
    icon: Building2,
    useCase: 'Secure AI automation for account queries and loans.',
    workflow: ['Query', 'AI Verify', 'Process', 'Secure']
  },
  {
    id: 'builder',
    name: 'AI Builder',
    icon: Hammer,
    useCase: 'Automate site visit bookings and material quotes.',
    workflow: ['Inquiry', 'AI Quote', 'Site Visit', 'Contract']
  },
  {
    id: 'legal',
    name: 'AI Legal',
    icon: Scale,
    useCase: 'Automate legal intake and document collection.',
    workflow: ['Intake', 'AI Review', 'Update', 'File']
  }
];

const getGoogleFormUrl = (industryId) => {
  const baseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfS8tjE_ZfO9CLOQMWuIaomaectutZCBJjur_uCbJ0MAQ6xfA/viewform?usp=pp_url";
  
  const industryMapping = {
    hospital: "Hospital",
    sales: "Sales",
    cashflow: "Finance",
    ads: "Marketing",
    creative: "Creative",
    hr: "HR",
    school: "Education",
    bank: "Banking",
    builder: "Construction",
    legal: "Legal"
  };
  
  const val = industryMapping[industryId] || "AI Automation";
  return `${baseUrl}&entry.2087930461=${encodeURIComponent(val)}`;
};

const WorkflowVisual = ({ steps }) => (
  <div className="relative mt-4 py-2.5 px-3 bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
    <div className="absolute inset-0 bg-mesh-green opacity-10" />
    <div className="relative z-10 flex items-center justify-between">
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 rounded-lg bg-white border border-gray-100 shadow-sm flex items-center justify-center text-primary transition-all duration-300">
              {i === 0 && <Megaphone size={10} />}
              {i === 1 && <Zap size={10} />}
              {i === 2 && <Calendar size={10} />}
              {i === 3 && <Database size={10} />}
            </div>
            <span className="text-[5.5px] font-black text-black uppercase tracking-tighter">{step}</span>
          </div>
          {i < steps.length - 1 && (
            <div className="flex-1 px-0.5">
              <motion.div 
                animate={{ x: [0, 4, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.5 }}
                className="h-px bg-primary/30" 
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

const UseCaseCard = ({ industry }) => {
  const Icon = industry.icon;
  return (
    <motion.div
      className="flex-shrink-0 w-[270px] sm:w-[285px] bg-white p-5 sm:p-6 rounded-[24px] whatsapp-shadow border border-gray-100 group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[360px]"
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 transition-all" />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="w-10 h-10 bg-cream rounded-xl flex items-center justify-center text-primary mb-3 transition-all duration-300 shadow-lg shadow-primary/5">
            <Icon size={20} />
          </div>
          
          <h3 className="text-lg font-black text-black mb-1.5 transition-colors leading-tight">{industry.name}</h3>
          <p className="text-[11px] font-bold text-[#334155] leading-relaxed min-h-[32px] mb-3">
            {industry.useCase}
          </p>

          <WorkflowVisual steps={industry.workflow} />
        </div>

        <div className="mt-5">
          <a 
            href={getGoogleFormUrl(industry.id)}
            target="_blank"
            rel="noopener noreferrer"
            data-industry={industry.id}
            className="group/btn w-full py-3.5 bg-gray-50 hover:bg-primary text-black hover:text-white font-black text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98] border border-gray-100 hover:border-primary hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
          >
            Get Early Access 
            <Sparkles size={14} className="group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const UseCases = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="section-padding bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-mesh-green opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10 lg:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-secondary font-black text-[8px] uppercase tracking-[0.2em] mb-4"
          >
            AI Industry Ecosystems
          </motion.span>
          <h2 className="heading-lg text-foreground mb-4">
            Built for <span className="text-gradient">Every Industry.</span>
          </h2>
          <p className="subheading text-center mx-auto">
            Experience how AISA Connect<sup className="text-[0.6em]">TM</sup> transforms traditional manual workflows into live, intelligent AI automation ecosystems.
          </p>
        </div>

        {/* Carousel Container - Adjusted for 4 cards */}
        <div className="relative group/carousel max-w-[1240px] mx-auto">
          <div 
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto pb-10 pt-4 px-4 -mx-4 scroll-smooth no-scrollbar snap-x snap-mandatory"
          >
            {industries.map((industry) => (
              <div key={industry.id} className="snap-center">
                <UseCaseCard 
                  industry={industry} 
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-2xl border border-gray-100 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all opacity-0 group-hover/carousel:opacity-100 hidden xl:flex z-20"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-2xl border border-gray-100 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all opacity-0 group-hover/carousel:opacity-100 hidden xl:flex z-20"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex lg:hidden items-center justify-center gap-2 mt-1 text-[9px] font-black text-black/60 uppercase tracking-[0.2em]">
          <ArrowRight size={12} className="animate-pulse" /> Swipe to explore
        </div>
      </div>
    </section>
  );
};

export default UseCases;
