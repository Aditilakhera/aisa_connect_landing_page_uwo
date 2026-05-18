import React, { useState, useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, ArrowRight, Star, Zap, Globe, 
  Workflow, Database, Search, Smartphone, ShieldCheck,
  MessageCircle, Layout, ChevronDown, ChevronUp, X, Sparkles,
  User, Building2, Phone, Mail, Rocket, Cpu, BarChart3,
  Lightbulb, Briefcase, ChevronRight, CheckCircle2, History
} from 'lucide-react';

const aisaPlans = [
  {
    title: 'Starter Launch',
    tagline: 'Best for startups and small businesses',
    setup: '₹19,000',
    monthly: '₹7,500',
    features: [
      'Website Revamp (up to 5 pages)',
      <>AISA Connect<sup className="text-[0.6em]">TM</sup> WhatsApp automation</>,
      'Social media automation (3 platforms)'
    ],
    cta: 'Get Started',
    isPopular: false
  },
  {
    title: 'Growth Engine',
    tagline: 'Best for builders, schools, showrooms',
    setup: '₹49,000',
    monthly: '₹18,000',
    features: [
      'Website Revamp Premium (10 pages)',
      <>AISA Connect<sup className="text-[0.6em]">TM</sup> WhatsApp automation</>,
      'Social media automation',
      'AI workflow setup',
      'Lead automation',
      'CRM integrations'
    ],
    cta: 'Get Started',
    isPopular: true
  },
  {
    title: 'Enterprise Custom',
    tagline: 'Customized according to your industry',
    setup: 'CUSTOM',
    monthly: 'CUSTOM',
    features: [
      'Tailored business automation',
      'AI workflow systems',
      'CRM & API integrations',
      'Internal automation stack',
      'White-label ecosystem'
    ],
    cta: 'Get Started',
    isPopular: false,
    isGreen: true
  }
];

const instagramPlans = [
  {
    title: 'Starter Launch',
    tagline: 'Begin your AI social journey',
    setup: '₹5,000',
    monthly: 'One-time',
    features: ['DM automation', 'Comment automation', 'Auto replies', 'Keyword triggers'],
    cta: 'Get Started'
  },
  {
    title: 'Growth Engine',
    tagline: 'Scale your social engagement',
    setup: '₹12,000',
    monthly: 'One-time',
    features: ['Giveaway automation', 'Inquiry handling', 'Quick flows', 'AI responses', 'Story mention replies'],
    cta: 'Get Started',
    isPopular: true
  },
  {
    title: 'Enterprise',
    tagline: 'The ultimate social AI stack',
    setup: '₹25,000',
    monthly: 'One-time',
    features: ['Advanced DM funnels', 'Multi-staff inbox', 'Viral campaign AI', 'Analytics dashboard', 'CRM Sync'],
    cta: 'Get Started'
  }
];

const addonCategories = [
  {
    id: 'web',
    title: 'Website & Funnels',
    icon: <Globe size={18} />,
    items: [
      { name: 'Basic Landing Page', price: '₹12,000', desc: 'High-converting responsive landing page for campaigns.', tag: 'Popular' },
      { name: '5 Page Website', price: '₹25,000', desc: 'Full-featured small business website with SEO optimization.', tag: 'Best Value' },
      { name: '10 Page Website', price: '₹45,000', desc: 'Comprehensive business ecosystem with advanced layout.', tag: 'Recommended' },
      { name: '15 Page Premium Website', price: '₹75,000', desc: 'Enterprise-grade website with premium animations and CMS.', tag: 'Automation Ready' },
      { name: 'Monthly Maintenance', price: '₹3,000–₹10,000/mo', desc: 'Complete security, updates, and performance monitoring.' }
    ]
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Automation',
    icon: <MessageCircle size={18} />,
    items: [
      { name: 'Basic Auto Reply', price: '₹15,000 + ₹3,000/mo', desc: 'Instant automated replies for basic business inquiries.' },
      { name: 'AI Sales Assistant', price: '₹25,000 + ₹5K–₹7.5K/mo', desc: 'Intelligent AI bot that qualifies leads and answers FAQs.', tag: 'Best Seller' },
      { name: 'Advanced Funnel', price: '₹45,000 + ₹12K/mo', desc: 'Complete multi-step sales funnel automation on WhatsApp.', tag: 'Highly Recommended' },
      { name: 'High Volume Setup', price: '₹75,000 + ₹25K/mo', desc: 'Enterprise-grade broadcasting and API integration.' }
    ],
    disclaimer: '*Meta conversation charges extra as per actual usage.*'
  },
  {
    id: 'social',
    title: 'Social Media',
    icon: <FaInstagram size={18} />,
    items: [
      { name: 'Basic Setup', price: '₹10,000', desc: 'Profile optimization and initial automation triggers.' },
      { name: '3 Platform Setup', price: '₹20,000', desc: 'Automation across Instagram, Facebook, and LinkedIn.', tag: 'Popular' },
      { name: 'Lead Funnel Setup', price: '₹35,000', desc: 'Direct lead generation from social media to CRM.' },
      { name: 'Monthly Management', price: '₹15K–₹50K/mo', desc: 'Done-for-you content and automation management.' }
    ]
  },
  {
    id: 'seo',
    title: 'SEO Menu',
    icon: <Search size={18} />,
    items: [
      { name: 'Basic SEO Setup', price: '₹15,000', desc: 'Initial keyword research and on-page optimization.' },
      { name: 'Local SEO', price: '₹12,000/mo', desc: 'Rank higher in local searches and Google Maps.', tag: 'Recommended' },
      { name: 'Growth SEO', price: '₹25,000/mo', desc: 'Advanced content strategy and backlink building.' },
      { name: 'Advanced SEO', price: '₹50,000/mo', desc: 'Enterprise-level SEO for competitive industries.' }
    ]
  },
  {
    id: 'crm',
    title: 'CRM & Systems',
    icon: <Database size={18} />,
    items: [
      { name: 'Basic Lead Sheet', price: '₹5,000', desc: 'Automated data capture into Google Sheets.' },
      { name: 'CRM Lite Dashboard', price: '₹20,000 + ₹5K/mo', desc: 'Centralized lead management with task tracking.', tag: 'Best Value' },
      { name: 'Custom CRM Setup', price: '₹50,000+', desc: 'Bespoke CRM tailored to your specific workflows.' },
      { name: 'API / System Integration', price: '₹25,000+', desc: 'Sync your data across all business platforms.' }
    ]
  },
  {
    id: 'ai',
    title: 'AI, Billing & Appointments',
    icon: <Zap size={18} />,
    items: [
      { name: 'AI Sales Script Training', price: '₹20,000', desc: 'Custom AI training based on your business data.' },
      { name: 'Industry AI Model', price: '₹35,000+', desc: 'Specialized LLM tuned for your industry niche.', tag: 'AI Optimized' },
      { name: 'Billing Software Integration', price: '₹25,000+', desc: 'Automated invoicing and payment reconciliation.' },
      { name: 'Multi-Staff Appointment System', price: '₹50,000+', desc: 'Sophisticated booking system with staff calendars.', tag: 'Automation Ready' }
    ]
  }
];

const CustomStackModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('web');
  const [form, setForm] = useState({
    name: '',
    company: '',
    type: '',
    phone: '',
    email: '',
    notes: '',
    budget: '₹50,000 - ₹1,00,000'
  });

  const calculateTotal = () => {
    let total = 0;
    selectedItems.forEach(itemName => {
      const allItems = addonCategories.flatMap(c => c.items);
      const item = allItems.find(i => i.name === itemName);
      if (item) {
        const priceStr = item.price.split('+')[0].split('–')[0].replace(/[^0-9]/g, '');
        const val = parseInt(priceStr);
        if (!isNaN(val)) total += val;
      }
    });
    return total;
  };

  const totalPrice = calculateTotal();

  if (!isOpen) return null;

  const handleToggle = (itemName) => {
    if (selectedItems.includes(itemName)) {
      setSelectedItems(selectedItems.filter(s => s !== itemName));
    } else {
      setSelectedItems([...selectedItems, itemName]);
    }
  };

  const currentCategory = addonCategories.find(c => c.id === activeCategory);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-xl" 
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-[1200px] h-[90vh] bg-white rounded-[40px] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
      >
        <button onClick={onClose} className="absolute top-8 right-8 p-3 rounded-full hover:bg-gray-100 transition-colors z-[100] text-gray-400 hover:text-black">
          <X size={24} />
        </button>

        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Step 1: Configuration */}
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col md:flex-row overflow-hidden"
              >
                {/* Sidebar */}
                <div className="w-full md:w-80 bg-gray-50 p-8 flex flex-col relative overflow-hidden border-r border-gray-100">
                  {/* Subtle Glows */}
                  <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-10">
                      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                        <Cpu size={20} className="animate-pulse" />
                      </div>
                      <div>
                        <h3 className="text-sm font-black uppercase tracking-widest text-[#0F172A]">AI Configuration</h3>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Build Your Automation Stack</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {addonCategories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setActiveCategory(cat.id)}
                          className={`w-full group flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                            activeCategory === cat.id 
                            ? 'bg-primary/10 text-primary' 
                            : 'text-[#475569] hover:bg-white hover:text-[#0F172A] hover:shadow-sm'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <span className={activeCategory === cat.id ? 'text-primary' : 'text-gray-400 group-hover:text-primary transition-colors'}>{cat.icon}</span>
                            <span className={`text-[11px] font-black uppercase tracking-wider ${activeCategory === cat.id ? 'text-primary' : ''}`}>{cat.title}</span>
                          </div>
                          {activeCategory === cat.id && (
                            <motion.div 
                              layoutId="active-dot"
                              className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_#22C55E]" 
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto relative z-10 pt-10 border-t border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-400">
                        <History size={16} />
                      </div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">AISA Version 2.0.4</span>
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="flex-1 flex flex-col bg-[#F8FAFC] relative overflow-hidden">
                  {/* Mesh Gradients */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]" />
                  </div>

                  {/* Right Header */}
                  <div className="p-10 pb-6 flex items-center justify-between relative z-10 bg-white/50 backdrop-blur-md border-b border-gray-100">
                    <div>
                      <h2 className="text-3xl font-black text-[#0F172A] mb-1">{currentCategory?.title}</h2>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[9px] font-black uppercase tracking-widest">
                          <div className="w-1 h-1 rounded-full bg-primary animate-ping" /> AI Optimized
                        </span>
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                          {currentCategory?.items.length} Modules Available
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Grid of Cards */}
                  <div className="overflow-y-auto p-10 pt-4 relative z-10 custom-scrollbar max-h-[50vh] min-h-0">
                    <div className="space-y-2">
                      {currentCategory?.items.map((item, i) => {
                        const isSelected = selectedItems.includes(item.name);
                        return (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.02 }}
                            onClick={() => handleToggle(item.name)}
                            className={`group p-3.5 px-4 rounded-xl border-2 transition-all duration-300 cursor-pointer relative overflow-hidden flex items-center justify-between ${
                              isSelected 
                              ? 'bg-white border-primary shadow-[0_5px_20px_rgba(34,197,94,0.05)] ring-4 ring-primary/5' 
                              : 'bg-white border-gray-100 hover:border-primary/20 hover:bg-gray-50/50'
                            }`}
                          >
                            <div className="flex items-center gap-4 flex-1">
                              {/* Selection Indicator */}
                              <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                                isSelected ? 'bg-primary border-primary text-white' : 'border-gray-200 text-transparent group-hover:border-primary/40'
                              }`}>
                                <Check size={12} strokeWidth={4} />
                              </div>

                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-0.5">
                                  <h4 className="text-sm font-black text-[#0F172A]">
                                    {item.name}
                                  </h4>
                                  {item.tag && (
                                    <span className="px-1.5 py-0.5 rounded-md bg-primary/10 text-primary text-[7px] font-black uppercase tracking-widest">
                                      {item.tag}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] font-bold text-[#475569] line-clamp-1 opacity-70">
                                  {item.desc}
                                </p>
                              </div>
                            </div>

                            <div className="text-right ml-6">
                              <span className="text-sm font-black text-primary block">{item.price}</span>
                              {isSelected && (
                                <span className="text-[8px] font-black uppercase tracking-widest text-primary/60">
                                  Added
                                </span>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                    
                    {currentCategory?.disclaimer && (
                      <p className="text-[10px] text-gray-400 italic mt-8 text-center bg-gray-100/50 py-2 rounded-lg border border-gray-200/50">
                        {currentCategory?.disclaimer}
                      </p>
                    )}
                  </div>

                  {/* Summary Bar - Moved back outside but compact */}
                  <div className="p-5 px-10 bg-white border-t border-gray-100 mt-auto relative z-20">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-6">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xl font-black text-[#0F172A]">{selectedItems.length}</span>
                            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest pt-1">Services Selected</span>
                          </div>
                          <div className="w-32 h-1 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${(selectedItems.length / 28) * 100}%` }}
                              className="h-full bg-primary"
                            />
                          </div>
                        </div>

                        <div className="h-8 w-px bg-gray-100 hidden sm:block" />

                        <div>
                          <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Configuration Total</p>
                          <p className="text-xl font-black text-primary">₹{totalPrice.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="hidden lg:flex items-center gap-2 text-primary bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
                          <Lightbulb size={12} />
                          <span className="text-[8px] font-black uppercase tracking-widest">AI Proposal Ready</span>
                        </div>
                        <button 
                          onClick={() => {
                            if (selectedItems.length > 0) setStep(2);
                          }}
                          disabled={selectedItems.length === 0}
                          className={`btn-primary !px-8 !py-2.5 flex items-center gap-2 text-xs shadow-xl shadow-primary/25 ${selectedItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          Continue Custom Proposal <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex-1 flex flex-col md:flex-row overflow-hidden bg-[#F8FAFC]"
              >
                {/* Step 2 Sidebar (Summary) */}
                <div className="w-full md:w-[400px] bg-gray-50 p-10 flex flex-col relative overflow-hidden border-r border-gray-100">
                  <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
                  
                  <div className="relative z-10">
                    <button 
                      onClick={() => setStep(1)}
                      className="flex items-center gap-2 text-gray-400 hover:text-[#0F172A] transition-colors mb-10 text-xs font-black uppercase tracking-widest"
                    >
                      <ChevronDown className="rotate-90" size={16} /> Back to Stack
                    </button>
                    
                    <h3 className="text-2xl font-black text-[#0F172A] mb-6">Stack Summary</h3>
                    
                    <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2 scroll-x-hide mb-8">
                      {selectedItems.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                          <span className="text-xs font-bold text-[#475569]">{item}</span>
                          <CheckCircle2 size={16} className="text-primary" />
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-8 border-t border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Total Configuration</span>
                        <span className="text-2xl font-black text-primary">₹{totalPrice.toLocaleString()}</span>
                      </div>
                      <p className="text-[10px] text-gray-400 font-bold leading-relaxed uppercase tracking-widest">
                        Estimated setup cost. Monthly maintenance as per selection.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 Form */}
                <div className="flex-1 p-10 md:p-16 flex flex-col overflow-y-auto bg-white">
                  <div className="max-w-2xl">
                    <h2 className="text-4xl font-black text-[#0F172A] mb-2">Finalize Proposal</h2>
                    <p className="text-[#475569] font-bold mb-10">Fill in your business details to receive a personalized AI automation strategy.</p>
                    
                    <form className="space-y-6" onSubmit={(e) => {
                      e.preventDefault();
                      const requirements = selectedItems.join(', ');
                      const body = `Hello AISA Connect team,%0D%0A%0D%0AI would like to request a custom proposal.%0D%0A%0D%0A--- Business Details ---%0D%0AName: ${form.name}%0D%0ACompany: ${form.company}%0D%0ABusiness Type: ${form.type}%0D%0APhone: ${form.phone}%0D%0AEmail: ${form.email}%0D%0ABudget Range: ${form.budget}%0D%0A%0D%0A--- Selected Stack ---%0D%0A${requirements}%0D%0AEstimated Total: ₹${totalPrice.toLocaleString()}%0D%0A%0D%0ANotes: ${form.notes}`;
                      window.location.href = `mailto:ai.mall@uwo24.com?subject=Proposal Request: ${form.company}&body=${body}`;
                    }}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]">Full Name</label>
                          <input 
                            required
                            type="text" 
                            placeholder="John Doe"
                            className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-primary focus:bg-white transition-all outline-none font-bold"
                            value={form.name}
                            onChange={(e) => setForm({...form, name: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]">Company Name</label>
                          <input 
                            required
                            type="text" 
                            placeholder="AISA Connect Ltd"
                            className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-primary focus:bg-white transition-all outline-none font-bold"
                            value={form.company}
                            onChange={(e) => setForm({...form, company: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]">Business Type</label>
                          <input 
                            required
                            type="text" 
                            placeholder="Showroom / Clinic / School"
                            className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-primary focus:bg-white transition-all outline-none font-bold"
                            value={form.type}
                            onChange={(e) => setForm({...form, type: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]">Phone Number</label>
                          <input 
                            required
                            type="tel" 
                            placeholder="+91 00000 00000"
                            className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-primary focus:bg-white transition-all outline-none font-bold"
                            value={form.phone}
                            onChange={(e) => setForm({...form, phone: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]">Corporate Email</label>
                          <input 
                            required
                            type="email" 
                            placeholder="john@company.com"
                            className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-primary focus:bg-white transition-all outline-none font-bold"
                            value={form.email}
                            onChange={(e) => setForm({...form, email: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]">Budget Range</label>
                          <select 
                            className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-primary focus:bg-white transition-all outline-none font-bold appearance-none"
                            value={form.budget}
                            onChange={(e) => setForm({...form, budget: e.target.value})}
                          >
                            <option>₹19,000 - ₹50,000</option>
                            <option>₹50,000 - ₹1,50,000</option>
                            <option>₹1,50,000 - ₹5,00,000</option>
                            <option>₹5,00,000+</option>
                          </select>
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]">Specific Requirements</label>
                          <textarea 
                            rows={3}
                            placeholder="Tell us about your specific automation needs..."
                            className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-primary focus:bg-white transition-all outline-none font-bold resize-none"
                            value={form.notes}
                            onChange={(e) => setForm({...form, notes: e.target.value})}
                          />
                        </div>
                      </div>

                      <button 
                        type="submit"
                        className="w-full btn-primary !py-5 flex items-center justify-center gap-3 text-lg shadow-2xl shadow-primary/30 mt-4 group"
                      >
                        Submit Proposal Request 
                        <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

const PricingCard = ({ plan, isAisa, onOpenModal }) => {
  const isStarter = plan.title.includes('Starter');
  const isEnterprise = plan.title.includes('Enterprise');
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="snap-center flex-shrink-0 w-[85vw] sm:w-auto relative"
    >
      <div className={`relative h-full rounded-[40px] border transition-all duration-500 group ${
        plan.isPopular 
          ? 'bg-white border-primary ring-4 ring-primary/5 shadow-2xl z-10 sm:scale-105' 
          : plan.isGreen 
            ? 'bg-[#F5FFF0] border-primary/20 text-black shadow-xl shadow-primary/5'
            : 'bg-white border-gray-100 whatsapp-shadow hover:border-primary/40'
      }`}>
        {/* Internal Overflow Clip for Glows */}
        <div className="absolute inset-0 rounded-[40px] overflow-hidden pointer-events-none">
          {/* Decorative Glows */}
          {plan.isPopular && (
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] -mr-16 -mt-16" />
          )}
        </div>
        
        {plan.isPopular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-primary text-white px-5 py-2 rounded-full text-[10px] font-black tracking-widest shadow-xl shadow-primary/30 z-[30] whitespace-nowrap">
            <Star size={12} fill="white" className="animate-pulse" /> MOST POPULAR
          </div>
        )}

        <div className="p-6 sm:p-8 relative z-10 flex flex-col h-full">
          <div className="mb-6">
            <h3 className={`text-2xl font-black mb-1.5 text-black`}>
              {plan.title}
            </h3>
            <p className={`text-[11px] font-black uppercase tracking-widest ${plan.isGreen ? 'text-primary' : 'text-[#475569]'}`}>
              {plan.tagline}
            </p>
          </div>

          <div className="mb-6 space-y-1">
            <div className="flex items-baseline gap-1.5">
              <span className={`text-[10px] font-black uppercase tracking-widest text-gray-400`}>Setup:</span>
              <span className={`text-2xl font-black ${plan.isGreen ? 'text-primary' : 'text-black'}`}>
                {plan.setup}
              </span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className={`text-[10px] font-black uppercase tracking-widest text-gray-400`}>Monthly:</span>
              <span className={`text-base font-black ${plan.isGreen ? 'text-primary/70' : 'text-[#334155]'}`}>
                {plan.monthly}
              </span>
            </div>
          </div>

          <div className="h-px w-full bg-gray-50 mb-6" />

          <ul className="space-y-3 mb-8">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-sm font-bold leading-tight">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                  plan.isPopular ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                }`}>
                  <Check size={12} strokeWidth={4} />
                </div>
                <span className="text-[#334155]">{f}</span>
              </li>
            ))}
          </ul>

          <button 
            onClick={() => {
              if (isEnterprise) {
                onOpenModal();
              } else {
                window.location.href = `mailto:ai.mall@uwo24.com?subject=${plan.title} Plan Inquiry&body=Hello AISA Connect team,%0D%0A%0D%0AI am interested in the ${plan.title} plan for my business.%0D%0A%0D%0APlease provide more information.%0D%0A%0D%0ABest regards.`;
              }
            }}
            className={`w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 mt-auto group/btn ${
              plan.isPopular
                ? 'bg-primary text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1'
                : plan.isGreen
                  ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary/30 border border-primary/20'
                  : 'bg-gray-50 text-black hover:bg-primary hover:text-white border border-gray-100 hover:border-primary'
            }`}
          >
            {plan.cta} 
            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const [mode, setMode] = useState('aisa'); // 'aisa' | 'insta'
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="pricing" className="section-padding bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-mesh-green opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-black text-[9px] uppercase tracking-[0.2em] mb-4"
          >
            Flexible Automation Stacks
          </motion.div>
          <h2 className="heading-lg text-black mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="subheading text-center mx-auto px-4">Choose the perfect automation stack for your business growth.</p>
        </div>

        {/* Mode Switcher */}
        <div className="flex justify-center mb-8">
          <div className="relative p-1.5 bg-gray-100 rounded-2xl flex items-center shadow-inner min-w-[320px] sm:min-w-[450px]">
            <motion.div
              layoutId="switcher"
              className="absolute h-[calc(100%-12px)] bg-primary/10 border border-primary/20 rounded-xl z-0"
              style={{ width: 'calc(50% - 6px)' }}
              animate={{ x: mode === 'insta' ? 0 : '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button
              onClick={() => setMode('insta')}
              className={`relative z-10 flex-1 px-4 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                mode === 'insta' ? 'text-primary' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <FaInstagram size={14} /> Instagram Automation
            </button>
            <button
              onClick={() => setMode('aisa')}
              className={`relative z-10 flex-1 px-4 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                mode === 'aisa' ? 'text-primary' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Rocket size={14} /> AISA Connect<sup className="text-[0.6em]">TM</sup> Suite
            </button>
          </div>
        </div>

        {/* Pricing Cards Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, x: mode === 'aisa' ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: mode === 'aisa' ? -40 : 40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex sm:grid sm:grid-cols-3 gap-6 lg:gap-8 pb-10 scroll-x-hide -mx-4 px-4 pt-8 items-stretch"
            >
              {(mode === 'aisa' ? aisaPlans : instagramPlans).map((plan, i) => (
                <PricingCard 
                  key={plan.title} 
                  plan={plan} 
                  isAisa={mode === 'aisa'} 
                  onOpenModal={() => setModalOpen(true)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Features / Trust */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 border-t border-gray-100 pt-16 opacity-60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary">
              <ShieldCheck size={20} />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-black">Official Meta Partner</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary">
              <Zap size={20} />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-black">GST Invoicing Available</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary">
              <Zap size={20} />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-black">Instant Onboarding</span>
          </div>
        </div>
      </div>

      <CustomStackModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Pricing;
