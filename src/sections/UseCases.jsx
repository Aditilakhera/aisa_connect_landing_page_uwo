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

const Modal = ({ isOpen, onClose, industryName }) => {
  const [step, setStep] = useState('form');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-secondary/20 backdrop-blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-[40px] shadow-2xl border border-white/40 overflow-hidden"
          >
            <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10">
              <X size={20} />
            </button>

            <div className="p-8 sm:p-12">
              {step === 'form' ? (
                <>
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-black text-[10px] uppercase tracking-widest mb-4">
                      Early Access Beta
                    </div>
                    <h2 className="text-3xl font-black text-foreground mb-2">Deploy {industryName}</h2>
                    <p className="text-sm font-semibold text-foreground/50">Experience the future of AI-powered business automation.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-wider text-foreground/40 ml-1">Full Name</label>
                        <input required type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-sm" placeholder="John Doe" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-wider text-foreground/40 ml-1">Work Email</label>
                        <input required type="email" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-sm" placeholder="john@company.com" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-wider text-foreground/40 ml-1">Company Name</label>
                        <input type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-sm" placeholder="AISA Tech" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-wider text-foreground/40 ml-1">Industry</label>
                        <input readOnly value={industryName} type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl font-bold text-sm text-primary" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-wider text-foreground/40 ml-1">Specific Requirements</label>
                      <textarea rows={3} className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-bold text-sm resize-none" placeholder="Tell us about your automation goals..." />
                    </div>

                    <button type="submit" className="w-full py-5 bg-primary text-white rounded-2xl font-black text-base shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 mt-4">
                      Request Beta Access <Sparkles size={20} />
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={40} className="text-primary animate-ai-pulse" />
                  </div>
                  <h2 className="text-3xl font-black text-foreground mb-4">Request Submitted!</h2>
                  <p className="text-foreground/50 font-semibold mb-10 px-4">
                    Your AI ecosystem request for <span className="text-primary">{industryName}</span> has been received. Our team will contact you within 24 hours.
                  </p>
                  <button onClick={onClose} className="btn-secondary !w-auto !px-10">
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
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

const UseCaseCard = ({ industry, onOpenModal }) => {
  const Icon = industry.icon;
  return (
    <motion.div
      className="flex-shrink-0 w-[270px] sm:w-[285px] bg-white p-5 sm:p-6 rounded-[24px] whatsapp-shadow border border-gray-100 group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 transition-all" />
      
      <div className="relative z-10">
        <div className="w-10 h-10 bg-cream rounded-xl flex items-center justify-center text-primary mb-3 transition-all duration-300 shadow-lg shadow-primary/5">
          <Icon size={20} />
        </div>
        
        <h3 className="text-lg font-black text-black mb-1.5 transition-colors leading-tight">{industry.name}</h3>
        <p className="text-[11px] font-bold text-[#334155] leading-relaxed min-h-[32px]">
          {industry.useCase}
        </p>

        <WorkflowVisual steps={industry.workflow} />

        <button 
          onClick={() => onOpenModal(industry.name)}
          className="w-full mt-5 py-3.5 bg-gray-50 text-black font-black text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-[0.98]"
        >
          Get Early Access <Sparkles size={14} />
        </button>
      </div>
    </motion.div>
  );
};

const UseCases = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const scrollRef = useRef(null);

  const openModal = (name) => {
    setSelectedIndustry(name);
    setModalOpen(true);
  };

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
            {industries.map((industry, i) => (
              <div key={industry.id} className="snap-center">
                <UseCaseCard 
                  industry={industry} 
                  onOpenModal={openModal}
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

      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        industryName={selectedIndustry} 
      />
    </section>
  );
};

export default UseCases;
