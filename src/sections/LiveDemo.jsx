import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, ArrowRight, Play, Cpu, 
  MessageSquare, Database, CheckCircle2, 
  Sparkles, Calendar, Workflow, BarChart3, Clock
} from 'lucide-react';

const MetricCard = ({ icon: Icon, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.6 }}
    className="bg-white p-4 rounded-2xl flex items-center gap-3 w-56 shadow-xl border border-gray-100"
  >
    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary relative">
      <Icon size={20} />
    </div>
    <div className="flex flex-col">
      <span className="text-[11px] font-black text-foreground uppercase tracking-widest">{text}</span>
      <div className="flex items-center gap-1 mt-0.5">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="text-[9px] font-bold text-primary uppercase">Active Now</span>
      </div>
    </div>
  </motion.div>
);

const FlowCard = ({ icon: Icon, text, delay, isLast }) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.6 }}
    className="relative"
  >
    <div className="bg-white p-4 rounded-2xl flex items-center gap-3 w-56 shadow-xl border border-gray-100">
      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary relative">
        <Icon size={20} />
      </div>
      <div className="flex flex-col">
        <span className="text-[11px] font-black text-foreground uppercase tracking-widest">{text}</span>
        <span className="text-[9px] font-bold text-foreground/40 uppercase">Processed</span>
      </div>
      <div className="ml-auto">
        <CheckCircle2 size={16} className="text-primary" />
      </div>
    </div>
    {!isLast && (
      <div className="absolute left-9 -bottom-6 w-0.5 h-6 bg-gradient-to-b from-primary/50 to-transparent" />
    )}
  </motion.div>
);

const LiveDemo = () => {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden font-plus-jakarta">
      {/* Cinematic Background Design */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-mesh-green opacity-[0.03]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] bg-primary/5 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-black text-[10px] uppercase tracking-[0.2em] mb-6 shadow-[0_0_20px_rgba(37,211,102,0.2)]"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#25D366]" />
            LIVE AI AUTOMATION DEMO
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-6 leading-tight">
            Watch AISA Connect<sup className="text-[0.6em]">TM</sup> <br />
            <span className="text-gradient">Automate Conversations</span> Live.
          </h2>

          <p className="text-lg md:text-xl text-[#0F172A] font-bold max-w-3xl mx-auto leading-relaxed">
            See how AISA Connect<sup className="text-[0.6em]">TM</sup> handles customer chats, lead qualification, follow-ups, CRM syncing, and business automation in real time — powered entirely by AI.
          </p>
        </div>

        {/* Video Showcase Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main Frame */}
          <div className="relative bg-cream/40 backdrop-blur-xl rounded-[48px] p-4 lg:p-8 overflow-hidden shadow-2xl border border-white/50 group">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-wa-pattern opacity-[0.05]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 opacity-50" />
            
            {/* Ambient Glows */}
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] animate-pulse-soft" />

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[400px] lg:h-[520px]">
              
              {/* LEFT SIDE: Metrics (Hidden on Mobile) */}
              <div className="hidden lg:flex flex-col gap-4 z-20">
                <MetricCard icon={Zap} text="0.3s AI Response" delay={0.2} />
                <MetricCard icon={Clock} text="24/7 Automation" delay={0.4} />
                <MetricCard icon={Workflow} text="CRM Synced" delay={0.6} />
                <MetricCard icon={Sparkles} text="Lead Qualification" delay={0.8} />
              </div>

              {/* CENTER: PHONE VIDEO */}
              <div className="relative z-10 w-full lg:w-auto flex justify-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="relative group/video"
                >
                  {/* Glowing Ring behind phone */}
                  <div className="absolute inset-0 bg-primary/30 rounded-[3rem] blur-3xl opacity-40 scale-110" />
                  
                  {/* Phone Frame */}
                  <div className="relative w-[240px] h-[480px] lg:w-[260px] lg:h-[500px] bg-black rounded-[3rem] p-2.5 border-[6px] border-white/10 shadow-2xl overflow-hidden cursor-pointer"
                    onClick={(e) => {
                      const video = e.currentTarget.querySelector('video');
                      if (video) {
                        video.muted = !video.muted;
                        const icon = e.currentTarget.querySelector('.mute-icon');
                        if (icon) icon.style.opacity = video.muted ? '1' : '0';
                      }
                    }}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-[2.2rem]"
                    >
                      <source src="/aisa-connect/aisa-automation-ecosystem.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Mute/Unmute Overlay Icon */}
                    <div className="mute-icon absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 pointer-events-none">
                      <div className="w-16 h-16 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white backdrop-blur-md">
                        <div className="flex flex-col items-center gap-1">
                          <Play size={24} fill="white" />
                          <span className="text-[8px] font-black uppercase tracking-widest">Tap for Sound</span>
                        </div>
                      </div>
                    </div>

                    {/* Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Live Indicator */}
                  <div className="absolute -top-4 -right-4 bg-primary text-white px-3 py-1 rounded-full text-[9px] font-black tracking-widest flex items-center gap-1.5 shadow-xl">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    LIVE DEMO
                  </div>
                </motion.div>
              </div>

              {/* RIGHT SIDE: Flow (Hidden on Mobile) */}
              <div className="hidden lg:flex flex-col gap-4 z-20">
                <FlowCard icon={MessageSquare} text="WhatsApp Inquiry" delay={0.3} />
                <FlowCard icon={Zap} text="AI Qualification" delay={0.5} />
                <FlowCard icon={Database} text="CRM Sync" delay={0.7} />
                <FlowCard icon={Calendar} text="Demo Scheduled" delay={0.9} isLast={true} />
              </div>

              {/* Mobile Only Side Elements Grid */}
              <div className="grid grid-cols-2 gap-3 lg:hidden w-full">
                <div className="bg-white border border-gray-100 p-3 rounded-xl flex items-center gap-2 shadow-sm">
                  <Zap size={14} className="text-primary" />
                  <span className="text-[9px] font-black text-foreground uppercase">0.3s Reply</span>
                </div>
                <div className="bg-white border border-gray-100 p-3 rounded-xl flex items-center gap-2 shadow-sm">
                  <Workflow size={14} className="text-primary" />
                  <span className="text-[9px] font-black text-foreground uppercase">CRM Sync</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTAs */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://connect.aisa24.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !w-full sm:!w-auto !px-10 !py-4 flex items-center justify-center gap-2 shadow-xl shadow-primary/30"
          >
            Explore AISA Connect<sup className="text-[0.6em]">TM</sup> <ArrowRight size={20} />
          </a>
          <a 
            href="https://calendly.com/admin-uwo24/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !w-full sm:!w-auto !px-10 !py-4 flex items-center justify-center gap-2"
          >
            Book Live Demo <Play size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
