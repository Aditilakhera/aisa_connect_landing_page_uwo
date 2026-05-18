import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, Zap, Code2, Users, 
  MessageSquare, BarChart3, Clock, Globe2, 
  Database, Send, CheckCheck, Sparkles, 
  Layers, Cpu, Workflow, Bell 
} from 'lucide-react';

const chatSequence = [
  {
    type: 'user',
    text: "Hi! I want automation for my business.",
    time: "10:42",
    benefit: null
  },
  {
    type: 'ai',
    text: <>Welcome 👋 AISA Connect<sup className="text-[0.6em]">TM</sup> automates replies, follow-ups, and lead management instantly.</>,
    time: "10:42",
    benefit: { id: 1, title: "Instant Lead Capture", icon: "⚡", color: "bg-pink-50" }
  },
  {
    type: 'user',
    text: "Can it reply 24/7?",
    time: "10:43",
    benefit: null
  },
  {
    type: 'ai',
    text: "Yes! Your AI assistant replies instantly even while your team sleeps. 🌙",
    time: "10:43",
    benefit: { id: 2, title: "24/7 Availability", icon: "🕒", color: "bg-blue-50" }
  },
  {
    type: 'user',
    text: "How do I track leads?",
    time: "10:44",
    benefit: null
  },
  {
    type: 'ai',
    text: "You get real-time conversation analytics and AI lead tracking dashboards. 📈",
    time: "10:44",
    benefit: { id: 3, title: "Analytics Dashboard", icon: "📊", color: "bg-emerald-50" }
  },
  {
    type: 'user',
    text: "Can it integrate with my CRM?",
    time: "10:45",
    benefit: null
  },
  {
    type: 'ai',
    text: "Yes — CRM, WhatsApp API, and automation integrations are supported. 🔗",
    time: "10:45",
    benefit: { id: 4, title: "Easy Integration", icon: "🔗", color: "bg-purple-50" }
  }
];

const showcaseBenefits = [
  { 
    title: "Instant Lead Capture", 
    tagline: "Capture and qualify every lead automatically in real time.",
    icon: <Zap size={32} />, 
    color: "#25D366" 
  },
  { 
    title: "24/7 Availability", 
    tagline: "Your AI assistant responds instantly — even while your team sleeps.",
    icon: <Clock size={32} />, 
    color: "#34b7f1" 
  },
  { 
    title: "Smart Analytics", 
    tagline: "Track conversations, conversions, and business performance live.",
    icon: <BarChart3 size={32} />, 
    color: "#ff3b30" 
  },
  { 
    title: "AI-Powered Replies", 
    tagline: "Human-like intelligent conversations powered by AI.",
    icon: <Cpu size={32} />, 
    color: "#5856d6" 
  },
  { 
    title: "CRM & Workflow Integration", 
    tagline: "Connect WhatsApp, CRM, automation, and workflows seamlessly.",
    icon: <Workflow size={32} />, 
    color: "#ff9500" 
  }
];

const BenefitCard = ({ benefit, index, isLatest, isHighlighted }) => {
  const positions = [
    { top: '6%', left: '-110px' },
    { top: '26%', right: '-110px' },
    { top: '50%', left: '-110px' },
    { top: '70%', right: '-110px' },
  ];
  
  const pos = positions[index % positions.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: pos.left ? -40 : 40 }}
      animate={{ 
        opacity: 1, 
        scale: isHighlighted ? 1.05 : 1,
        x: 0,
        boxShadow: isHighlighted ? '0 0 40px rgba(37, 211, 102, 0.4)' : '0 10px 25px rgba(0,0,0,0.05)'
      }}
      className={`absolute z-30 hidden lg:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-panel border-l-4 transition-all duration-700 ${
        isHighlighted ? 'border-primary ring-2 ring-primary/20' : 'border-primary/20'
      } ${isLatest ? 'animate-float-sm' : 'animate-float'}`}
      style={pos}
    >
      <div className={`w-9 h-9 rounded-xl ${benefit.color} flex items-center justify-center text-base shadow-sm ${isHighlighted ? 'animate-pulse' : ''}`}>
        {benefit.icon}
      </div>
      <div className="whitespace-nowrap">
        <div className={`text-[9px] font-black uppercase tracking-widest mb-0.5 ${isHighlighted ? 'text-primary' : 'text-foreground/40'}`}>
          {isHighlighted ? 'Feature Unlocked' : 'Analyzing...'}
        </div>
        <div className={`text-xs font-bold ${isHighlighted ? 'text-foreground' : 'text-foreground/60'}`}>{benefit.title}</div>
      </div>
      
      <svg className={`absolute top-1/2 ${pos.left ? '-right-16' : '-left-16'} w-16 h-0.5 pointer-events-none`} overflow="visible">
        <motion.path
          d={`M 0 0 L ${pos.left ? 64 : -64} 0`}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          className={isHighlighted ? 'text-primary' : 'text-primary/10'}
          animate={{ pathLength: 1 }}
        />
      </svg>
    </motion.div>
  );
};

const Hero = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [activeBenefits, setActiveBenefits] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [stage, setStage] = useState('demo'); // 'demo' | 'flipping' | 'showcase'
  const [visibleCount, setVisibleCount] = useState(0);
  const chatContainerRef = useRef(null);

  const startCinematicFlow = async () => {
    // Stage 1: Demo
    setMessages([]);
    setActiveBenefits([]);
    setIsFlipped(false);
    setStage('demo');

    for (let i = 0; i < chatSequence.length; i++) {
      const msg = chatSequence[i];
      if (msg.type === 'ai') {
        setIsTyping(true);
        await new Promise(r => setTimeout(r, 1200));
        setIsTyping(false);
      } else {
        await new Promise(r => setTimeout(r, 800));
      }
      setMessages(prev => [...prev, msg]);
      if (msg.benefit) setActiveBenefits(prev => [...prev, msg.benefit]);
      await new Promise(r => setTimeout(r, 1000));
    }

    // Wait after demo
    await new Promise(r => setTimeout(r, 2000));

    // Stage 2: Flip
    setStage('flipping');
    await new Promise(r => setTimeout(r, 800));
    setIsFlipped(true);
    await new Promise(r => setTimeout(r, 1000));
    setStage('showcase');

    // Stage 3: Cinematic Stacked Timeline Experience
    setVisibleCount(0);
    for (let s = 1; s <= showcaseBenefits.length; s++) {
      setVisibleCount(s);
      await new Promise(r => setTimeout(r, 2000));
    }

    // Reset for loop
    await new Promise(r => setTimeout(r, 4000));
    setIsFlipped(false);
    setStage('demo');
    await new Promise(r => setTimeout(r, 1200));
    startCinematicFlow();
  };

  useEffect(() => {
    startCinematicFlow();
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] pt-24 pb-6 lg:pt-28 lg:pb-8 overflow-hidden bg-white bg-mesh flex items-center">
      {/* Background Energy Layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-[60rem] h-[60rem] bg-primary/5 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 -left-1/4 w-[50rem] h-[50rem] bg-secondary/5 rounded-full blur-[120px] animate-pulse-soft" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 items-center">
          
          {/* LEFT: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint/60 border border-primary/20 text-secondary font-bold text-xs mb-6 shadow-sm">
              <Zap size={14} className="text-primary animate-pulse" />
              Official WhatsApp Business API Partner
            </div>

            <h1 className="heading-xl text-foreground mb-6 max-w-2xl mx-auto lg:mx-0">
              Automate Your Business on <span className="text-gradient">WhatsApp</span> with AISA Connect<sup className="text-[0.6em]">TM</sup>.
            </h1>

            <p className="text-base md:text-lg text-[#334155] font-semibold leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Convert leads, reply instantly, send broadcasts, automate follow-ups, and close more sales: all with AISA Connect<sup className="text-[0.6em]">TM</sup>.
            </p>

            <div className="flex flex-row flex-wrap gap-3 mb-10 justify-center lg:justify-start">
              <a 
                href="https://connect.aisa24.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !w-auto !px-6 !py-3.5 !text-sm !shadow-primary/30 flex items-center justify-center gap-2"
              >
                Explore AISA Connect<sup className="text-[0.6em]">TM</sup> <ArrowRight size={16} />
              </a>
              <a 
                href="https://calendly.com/admin-uwo24/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !w-auto !px-6 !py-3.5 !text-sm flex items-center justify-center"
              >
                Book Demo
              </a>
              <a
                href="https://wa.me/918359890909?text=Hello%20AISA%20Connect!%20I'm%20interested%20in%20exploring%20AI%20automation%20for%20my%20business.%20Can%20you%20please%20help%20me%20get%20started%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !w-auto !px-6 !py-3.5 !text-sm"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 opacity-40">
              <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-[#475569]">
                <ShieldCheck size={16} className="text-primary" />
                <span>Official API</span>
              </div>
              <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-[#475569]">
                <Code2 size={16} className="text-primary" />
                <span>No coding</span>
              </div>
              <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-[#475569]">
                <Globe2 size={16} className="text-primary" />
                <span>Global Scale</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: CINEMATIC PHONE EXPERIENCE */}
          <div className="relative perspective-2000 py-4 lg:py-8">
            {/* Holographic Glow behind phone */}
            <div className={`absolute inset-0 bg-primary/20 rounded-full blur-[120px] transition-all duration-1000 ${isFlipped ? 'scale-150 opacity-40' : 'opacity-20'}`} />

            <div className="relative h-[500px] lg:h-[580px] w-full flex items-center justify-center">
              
              {/* Floating Benefits (Stay Visible) */}
              <AnimatePresence>
                {!isFlipped && activeBenefits.map((benefit, i) => (
                  <BenefitCard 
                    key={`${benefit.id}-${i}`} 
                    benefit={benefit} 
                    index={i} 
                    isLatest={i === activeBenefits.length - 1}
                    isHighlighted={i < activeBenefits.length - 1}
                  />
                ))}
              </AnimatePresence>

              {/* 3D Rotating Phone Container */}
              <motion.div
                animate={{ 
                  rotateY: isFlipped ? 180 : 0,
                  scale: stage === 'flipping' ? 1.05 : 1,
                  z: stage === 'flipping' ? 100 : 0
                }}
                transition={{ 
                  duration: 1.2, 
                  type: "spring", 
                  stiffness: 80, 
                  damping: 15 
                }}
                className="relative w-[250px] h-[500px] lg:w-[280px] lg:h-[560px] preserve-3d"
              >
                {/* FRONT: CHAT INTERFACE */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="w-full h-full bg-foreground rounded-[3rem] p-3 shadow-2xl border-[8px] border-foreground/10 overflow-hidden relative">
                    {/* Glass Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-20" />
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground rounded-b-2xl z-30" />
                    
                    {/* Chat Content */}
                    <div className="w-full h-full bg-[#ECE5DD] rounded-[2.2rem] overflow-hidden flex flex-col relative">
                      <div className="bg-secondary px-4 pt-8 pb-3 flex items-center gap-3 shadow-md z-10">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <MessageSquare size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-bold text-[13px]">AISA Connect<sup className="text-[0.6em]">TM</sup></div>
                          <div className="text-[10px] text-white/70 font-bold">Online • Real-time Sync</div>
                        </div>
                      </div>
                      
                      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-wa-pattern bg-[length:300px] scrollbar-hide">
                        {messages.map((msg, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div className={`relative max-w-[85%] px-4 py-3 shadow-sm ${
                              msg.type === 'user' 
                              ? 'bg-mint rounded-2xl rounded-tr-none text-foreground' 
                              : 'bg-white rounded-2xl rounded-tl-none text-foreground'
                            }`}>
                              {msg.type === 'ai' && (
                                <div className="flex items-center gap-1.5 mb-1">
                                  <Sparkles size={10} className="text-primary fill-primary" />
                                  <span className="text-[9px] font-black uppercase tracking-tighter text-primary">Intelligence active</span>
                                </div>
                              )}
                              <p className="text-[13px] font-bold leading-relaxed">{msg.text}</p>
                              <div className="flex items-center justify-end gap-1 mt-1.5 opacity-30">
                                <span className="text-[8px] font-bold">{msg.time}</span>
                                <CheckCheck size={10} className="text-secondary" />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                        {isTyping && (
                          <div className="flex justify-start">
                            <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                              <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" />
                              <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce [animation-delay:0.2s]" />
                              <div className="w-1.5 h-1.5 bg-primary/80 rounded-full animate-bounce [animation-delay:0.4s]" />
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="p-3 bg-[#F0F2F5] flex items-center gap-2">
                        <div className="flex-1 bg-white rounded-full px-4 py-2.5 text-[12px] text-gray-400 font-bold">Type a message...</div>
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white shadow-lg"><Send size={18} fill="currentColor" /></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BACK: SHOWCASE STACKED TIMELINE */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="w-full h-full bg-foreground rounded-[3rem] p-3 shadow-2xl border-[8px] border-foreground/10 overflow-hidden relative">
                    {/* Cinematic Background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#060612] to-[#0A0A1F]" />
                    
                    {/* Floating Particles/Glows */}
                    <div className="absolute top-1/4 -left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
                    <div className="absolute bottom-1/4 -right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] animate-pulse-soft" />
                    
                    <div className="w-full h-full rounded-[2.2rem] overflow-hidden flex flex-col relative p-6">
                      {/* Top Indicator */}
                      <div className="flex justify-center mb-8">
                        <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          <span className="text-[8px] font-black text-white/40 uppercase tracking-[0.2em]">AI Ecosystem Active</span>
                        </div>
                      </div>

                      {/* Stacked Benefits Timeline */}
                      <div className="flex-1 flex flex-col gap-3 justify-center overflow-hidden">
                        <AnimatePresence>
                          {showcaseBenefits.slice(0, visibleCount).map((benefit, i) => (
                            <motion.div
                              key={benefit.title}
                              layout
                              initial={{ opacity: 0, y: 40, scale: 0.9 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ 
                                type: "spring",
                                stiffness: 200,
                                damping: 25
                              }}
                              className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl flex items-center gap-4 relative overflow-hidden group"
                            >
                              {/* Background Gradient */}
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-50" />
                              
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary relative flex-shrink-0">
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse" />
                                {React.cloneElement(benefit.icon, { size: 18 })}
                              </div>
                              
                              <div className="flex-1 text-left min-w-0">
                                <h4 className="text-xs font-black text-white mb-0.5 tracking-tight">{benefit.title}</h4>
                                <p className="text-[9px] text-white/40 font-medium leading-tight line-clamp-2">{benefit.tagline}</p>
                              </div>

                              {/* Small Pulse Dot */}
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse flex-shrink-0" />
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>

                      {/* Bottom Status Bar */}
                      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <div 
                              key={dot}
                              className={`w-1 h-1 rounded-full transition-all duration-500 ${
                                dot <= visibleCount ? 'bg-primary' : 'bg-white/10'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">
                          AISA Connect<sup className="text-[0.6em]">TM</sup> v4.0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Stage Indicator */}
      <div className="lg:hidden mt-10 px-6">
        <div className="flex items-center justify-between p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${stage === 'demo' ? 'bg-primary animate-pulse' : 'bg-secondary'}`} />
            <div className="text-xs font-black text-foreground uppercase tracking-widest">
              {stage === 'demo' ? 'Live Chat Simulation' : 'AI Benefit Showcase'}
            </div>
          </div>
          <Zap size={16} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
