import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertCircle, CheckCircle2, ArrowRight, Zap, 
  Clock, Users, MessageSquareOff, MessageSquare, 
  BarChart3, Workflow, Sparkles, ShieldAlert,
  Terminal, Database, Radio, Share2, X
} from 'lucide-react';

const ManualWorkflow = () => (
  <div className="relative w-full h-[180px] bg-white rounded-2xl border border-red-50 overflow-hidden p-4 shadow-inner">
    <div className="absolute inset-0 bg-wa-pattern grayscale opacity-[0.03]" />
    
    <div className="relative z-10 flex flex-col gap-3 opacity-40">
      <div className="flex items-center justify-between">
        <div className="h-2 w-16 bg-gray-200 rounded" />
        <div className="px-1.5 py-0.5 bg-red-50 text-red-400 rounded text-[7px] font-black uppercase">Pending</div>
      </div>
      
      <div className="space-y-2">
        {[
          { icon: <MessageSquareOff size={10} />, text: "Manual Data", status: "Slow" },
          { icon: <Clock size={10} />, text: "Delay", status: "Missed" },
          { icon: <Users size={10} />, text: "Overload", status: "Stress" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 p-1.5 bg-gray-50/50 rounded-lg border border-gray-100">
            <div className="text-gray-400">{item.icon}</div>
            <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <motion.div 
                animate={{ width: ["10%", "30%", "10%"] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="h-full bg-red-200" 
              />
            </div>
            <span className="text-[7px] font-black text-gray-300 uppercase">{item.status}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Floating Warning */}
    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{ repeat: Infinity, duration: 3 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-red-50 border border-red-100 rounded-full shadow-sm"
    >
      <AlertCircle size={12} className="text-red-400" />
      <span className="text-[9px] font-black text-red-500 uppercase">Efficiency: 12%</span>
    </motion.div>
  </div>
);

const AIWorkflow = () => (
  <div className="relative w-full h-[180px] bg-white rounded-2xl border border-primary/10 overflow-hidden p-4 shadow-inner">
    <div className="absolute inset-0 bg-mesh-green opacity-20" />
    
    <div className="relative z-10 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Sparkles size={12} className="text-primary fill-primary animate-pulse" />
          <div className="h-2 w-16 bg-primary/20 rounded-full" />
        </div>
        <div className="px-1.5 py-0.5 bg-primary/10 text-primary rounded-full text-[7px] font-black uppercase tracking-widest animate-ai-pulse">100% Automated</div>
      </div>
      
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { icon: <Zap size={12} />, text: "Reply", val: "0.1s" },
          { icon: <Radio size={12} />, text: "Active", val: "24/7" },
          { icon: <Share2 size={12} />, text: "CRM", val: "Live" },
          { icon: <BarChart3 size={12} />, text: "Stats", val: "Auto" }
        ].map((item, i) => (
          <div key={i} className="p-2 bg-white/60 backdrop-blur-md rounded-xl border border-primary/5 flex flex-col items-center gap-0.5">
            <div className="text-primary">{item.icon}</div>
            <div className="text-[7px] font-black text-[#334155] uppercase tracking-tighter">{item.text}</div>
            <div className="text-xs font-black text-primary">{item.val}</div>
          </div>
        ))}
      </div>

      <div className="relative h-8 w-full rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
        />
        <div className="flex gap-3">
          <Workflow size={14} className="text-primary/40" />
          <div className="flex items-center gap-0.5">
            <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
            <div className="w-1 h-1 rounded-full bg-primary/40" />
            <div className="w-1 h-1 rounded-full bg-primary/20" />
          </div>
          <Database size={14} className="text-primary/40" />
        </div>
      </div>
    </div>
  </div>
);

const ComparisonCard = ({ title, subtitle, icon: Icon, isPro, children, points }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    className={`flex-1 p-6 lg:p-10 rounded-[32px] border transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
      isPro 
      ? 'bg-white border-primary/20 shadow-primary/5 whatsapp-shadow' 
      : 'bg-red-50/30 border-red-100/50 shadow-sm'
    }`}
  >
    <div className="flex items-center gap-3 mb-6">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${
        isPro ? 'bg-primary text-white shadow-primary/30' : 'bg-white text-red-400 border border-red-50'
      }`}>
        <Icon size={20} />
      </div>
      <div>
        <h3 className="text-lg font-black text-black leading-tight">{title}</h3>
        <p className={`text-[9px] font-black uppercase tracking-[0.2em] ${isPro ? 'text-primary' : 'text-red-400'}`}>
          {subtitle}
        </p>
      </div>
    </div>

    {children}

    <div className="mt-8 space-y-3">
      {points.map((point, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
            isPro ? 'bg-primary/10 text-primary' : 'bg-red-50 text-red-400'
          }`}>
            {isPro ? <CheckCircle2 size={10} /> : <X size={10} />}
          </div>
          <span className={`text-xs sm:text-sm font-bold ${isPro ? 'text-black' : 'text-[#475569]'}`}>
            {point}
          </span>
        </div>
      ))}
    </div>

    {isPro && (
      <a 
        href="https://connect.aisa24.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full mt-10 btn-primary !shadow-primary/10 py-3.5 flex items-center justify-center gap-2"
      >
        Explore AISA Connect<sup className="text-[0.6em]">TM</sup> <ArrowRight size={18} />
      </a>
    )}
  </motion.div>
);

const ProblemSolution = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-0 w-96 h-96 bg-red-400/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-secondary font-black text-[9px] uppercase tracking-[0.2em] mb-4"
          >
            Efficiency Comparison
          </motion.div>
          <h2 className="heading-lg text-foreground mb-4">
            Evolve from Manual Chaos to <br className="hidden md:block" />
            <span className="text-gradient">Intelligent Automation.</span>
          </h2>
          <p className="subheading text-center mx-auto">
            Compare the slow, manual systems of the past with the synchronized, AI-powered future of business operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch relative">
          
          {/* Transformation Bridge (Desktop Only) */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 items-center justify-center">
            <motion.div
              animate={{ x: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-primary"
            >
              <ArrowRight size={20} />
            </motion.div>
          </div>

          <ComparisonCard
            title="The Old Way"
            subtitle="Manual & Inefficient"
            icon={AlertCircle}
            isPro={false}
            points={[
              "Missed leads",
              "Slow replies",
              "Manual follow-ups",
              "Team dependency",
              "Leads not converting"
            ]}
          >
            <ManualWorkflow />
          </ComparisonCard>

          <ComparisonCard
            title={<>The AISA Connect<sup className="text-[0.6em]">TM</sup> Way</>}
            subtitle="Intelligent & Automated"
            icon={Zap}
            isPro={true}
            points={[
              "Instant AI replies",
              "Automated workflows",
              "Smart lead qualification",
              "Auto reminders",
              "AI sales assistant"
            ]}
          >
            <AIWorkflow />
          </ComparisonCard>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
