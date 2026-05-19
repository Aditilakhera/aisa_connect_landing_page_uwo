import React, { useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
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

const whatsappPlans = [
  {
    title: 'Starter Launch',
    tagline: 'Best for startups & small businesses',
    setup: '₹10,000',
    monthly: '₹2,799/month',
    features: [
      'Advanced campaign filters',
      'Conversation analytics',
      'Additional chat automation',
      'Commerce workflows',
      'Order management panel',
      'WhatsApp Pay',
      '24-hour SLA support',
      'Up to 3 integrations',
      'API rate limit: 300 msgs/min',
      'Campaign summary reports',
      'Quick replies & broadcasts'
    ],
    cta: 'Get Started'
  },
  {
    title: 'Growth Engine',
    tagline: 'POPULAR PLAN',
    setup: '₹25,000',
    monthly: '₹3,799/month',
    features: [
      'Unlimited external app integrations',
      'Session message APIs',
      'Incoming message automation',
      'AI agent stats',
      'AI + trait-based routing',
      'Detailed campaign reports',
      'All WhatsApp features included',
      'Labels & broadcasts',
      'CRM integrations'
    ],
    cta: 'Scale With AI',
    isPopular: true
  },
  {
    title: 'Enterprise',
    tagline: 'For enterprise automation',
    setup: '₹1 Lac+',
    monthly: '₹50,000/month',
    features: [
      'API limit up to 60,000 msg/min',
      'Dedicated customer success manager',
      'Custom user-level reporting',
      'High-speed messaging',
      'MarTech integrations',
      'Clevertap/WebEngage integration',
      'Advanced CRM orchestration',
      'Enterprise AI workflows'
    ],
    cta: 'Contact Sales'
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
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
        className="relative w-[calc(100%-16px)] sm:w-full max-w-[1200px] h-[95vh] sm:h-[90vh] bg-white rounded-[24px] sm:rounded-[40px] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col mx-auto"
      >
        <button onClick={onClose} className="absolute top-3 right-3 sm:top-8 sm:right-8 p-2 rounded-full hover:bg-gray-100 transition-colors z-[100] text-gray-400 hover:text-black bg-white/90 backdrop-blur-sm shadow-sm border border-gray-100 sm:border-0">
          <X size={18} className="sm:w-6 sm:h-6" />
        </button>

        <div className="flex-1 flex flex-col md:flex-row overflow-hidden pt-10 sm:pt-0">
          {/* Step 1: Configuration */}
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col md:flex-row overflow-hidden w-full max-w-full"
              >
                {/* Sidebar */}
                <div className="w-full md:w-80 bg-gray-50 p-4 sm:p-8 flex flex-col relative overflow-hidden border-b md:border-b-0 md:border-r border-gray-100 flex-shrink-0">
                  {/* Subtle Glows */}
                  <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4 sm:mb-10 pr-10 sm:pr-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 flex-shrink-0">
                        <Cpu size={18} className="animate-pulse" />
                      </div>
                      <div>
                        <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#0F172A]">AI Configuration</h3>
                        <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Build Your Automation Stack</p>
                      </div>
                    </div>

                    <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible gap-1.5 pb-2 md:pb-0 scrollbar-hide w-full snap-x snap-mandatory">
                      {addonCategories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setActiveCategory(cat.id)}
                          className={`flex-shrink-0 snap-center w-auto md:w-full group flex items-center justify-between px-3.5 sm:px-5 py-2 sm:py-3.5 rounded-xl sm:rounded-2xl transition-all duration-300 relative overflow-hidden ${activeCategory === cat.id
                              ? 'bg-primary/10 text-primary'
                              : 'text-[#475569] hover:bg-white hover:text-[#0F172A] hover:shadow-sm'
                            }`}
                        >
                          <div className="flex items-center gap-2 sm:gap-4">
                            <span className={activeCategory === cat.id ? 'text-primary' : 'text-gray-400 group-hover:text-primary transition-colors'}>{cat.icon}</span>
                            <span className={`text-[10px] sm:text-[11px] font-black uppercase tracking-wider ${activeCategory === cat.id ? 'text-primary' : ''}`}>{cat.title}</span>
                          </div>
                          {activeCategory === cat.id && (
                            <motion.div
                              layoutId="active-dot"
                              className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_#22C55E] hidden md:block"
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto relative z-10 pt-4 border-t border-gray-200 hidden md:block">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-400">
                        <History size={16} />
                      </div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">AISA Version 2.0.4</span>
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="flex-1 flex flex-col bg-[#F8FAFC] relative overflow-hidden min-h-0">
                  {/* Mesh Gradients */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]" />
                  </div>

                  {/* Right Header */}
                  <div className="p-4 sm:p-10 pb-3 sm:pb-6 flex items-center justify-between relative z-10 bg-white/50 backdrop-blur-md border-b border-gray-100 flex-shrink-0">
                    <div>
                      <h2 className="text-xl sm:text-3xl font-black text-[#0F172A] mb-1">{currentCategory?.title}</h2>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="flex items-center gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-primary/10 text-primary text-[8px] sm:text-[9px] font-black uppercase tracking-widest">
                          <div className="w-1 h-1 rounded-full bg-primary animate-ping" /> AI Optimized
                        </span>
                        <span className="text-[9px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                          {currentCategory?.items.length} Modules Available
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Grid of Cards */}
                  <div className="flex-1 overflow-y-auto p-4 sm:p-10 pt-4 relative z-10 custom-scrollbar min-h-0">
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
                            className={`group p-3.5 px-4 rounded-xl border-2 transition-all duration-300 cursor-pointer relative overflow-hidden flex items-center justify-between ${isSelected
                                ? 'bg-white border-primary shadow-[0_5px_20px_rgba(34,197,94,0.05)] ring-4 ring-primary/5'
                                : 'bg-white border-gray-100 hover:border-primary/20 hover:bg-gray-50/50'
                              }`}
                          >
                            <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                              {/* Selection Indicator */}
                              <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${isSelected ? 'bg-primary border-primary text-white' : 'border-gray-200 text-transparent group-hover:border-primary/40'
                                }`}>
                                <Check size={12} strokeWidth={4} />
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-0.5">
                                  <h4 className="text-xs sm:text-sm font-black text-[#0F172A]">
                                    {item.name}
                                  </h4>
                                  {item.tag && (
                                    <span className="px-1.5 py-0.5 rounded-md bg-primary/10 text-primary text-[6px] sm:text-[7px] font-black uppercase tracking-widest">
                                      {item.tag}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[10px] sm:text-[11px] font-bold text-[#475569] line-clamp-1 opacity-70">
                                  {item.desc}
                                </p>
                              </div>
                            </div>

                            <div className="text-right ml-4 sm:ml-6 flex-shrink-0">
                              <span className="text-xs sm:text-sm font-black text-primary block">{item.price}</span>
                              {isSelected && (
                                <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-widest text-primary/60">
                                  Added
                                </span>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {currentCategory?.disclaimer && (
                      <p className="text-[9px] sm:text-[10px] text-gray-400 italic mt-6 text-center bg-gray-100/50 py-2 rounded-lg border border-gray-200/50 px-2">
                        {currentCategory?.disclaimer}
                      </p>
                    )}
                  </div>

                  {/* Summary Bar - Moved back outside but compact */}
                  <div className="p-3 sm:p-5 px-4 sm:px-10 bg-white border-t border-gray-100 mt-auto relative z-20 flex-shrink-0">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                      <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-start">
                        <div className="flex items-center gap-3">
                          <div>
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <span className="text-base sm:text-xl font-black text-[#0F172A]">{selectedItems.length}</span>
                              <span className="text-[8px] sm:text-[9px] font-black text-gray-400 uppercase tracking-widest pt-1">Selected</span>
                            </div>
                            <div className="w-20 sm:w-32 h-1 bg-gray-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${(selectedItems.length / 28) * 100}%` }}
                                className="h-full bg-primary"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="h-8 w-px bg-gray-100 hidden sm:block" />

                        <div className="text-right sm:text-left">
                          <p className="text-[8px] sm:text-[9px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Estimated Setup</p>
                          <p className="text-base sm:text-xl font-black text-primary">₹{totalPrice.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="hidden lg:flex items-center gap-2 text-primary bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
                          <Lightbulb size={12} />
                          <span className="text-[8px] font-black uppercase tracking-widest">AI Proposal Ready</span>
                        </div>
                        <button
                          onClick={() => {
                            if (selectedItems.length > 0) setStep(2);
                          }}
                          disabled={selectedItems.length === 0}
                          className={`btn-primary !px-4 sm:!px-8 !py-2.5 flex items-center justify-center gap-2 text-xs shadow-xl shadow-primary/25 w-full sm:w-auto whitespace-nowrap ${selectedItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          Continue to Proposal <ChevronRight size={14} />
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
                className="flex-1 flex flex-col md:flex-row overflow-hidden bg-[#F8FAFC] w-full max-w-full"
              >
                {/* Step 2 Sidebar (Summary) */}
                <div className="w-full md:w-[400px] bg-gray-50 p-4 sm:p-10 flex flex-col relative overflow-hidden border-b md:border-b-0 md:border-r border-gray-100 flex-shrink-0">
                  <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                  <div className="relative z-10">
                    <button
                      onClick={() => setStep(1)}
                      className="flex items-center gap-2 text-gray-400 hover:text-[#0F172A] transition-colors mb-4 sm:mb-10 text-xs font-black uppercase tracking-widest"
                    >
                      <ChevronDown className="rotate-90" size={16} /> Back to Stack
                    </button>

                    <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] mb-3 sm:mb-6">Stack Summary</h3>

                    <div className="space-y-2 max-h-[15vh] md:max-h-[50vh] overflow-y-auto pr-2 scrollbar-hide mb-4 sm:mb-8">
                      {selectedItems.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-gray-100 shadow-sm">
                          <span className="text-xs font-bold text-[#475569]">{item}</span>
                          <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 sm:pt-8 border-t border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Total Configuration</span>
                        <span className="text-xl sm:text-2xl font-black text-primary">₹{totalPrice.toLocaleString()}</span>
                      </div>
                      <p className="text-[9px] sm:text-[10px] text-gray-400 font-bold leading-relaxed uppercase tracking-widest">
                        Estimated setup cost. Monthly maintenance as per selection.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 Form */}
                <div className="flex-1 p-4 sm:p-10 md:p-16 flex flex-col overflow-y-auto bg-white">
                  <div className="max-w-2xl">
                    <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] mb-1">Finalize Proposal</h2>
                    <p className="text-[#475569] font-bold text-xs sm:text-sm mb-6 sm:mb-10">Fill in your business details to receive a personalized AI automation strategy.</p>

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
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
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
                            onChange={(e) => setForm({ ...form, type: e.target.value })}
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
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]">Budget Range</label>
                          <select
                            className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-primary focus:bg-white transition-all outline-none font-bold appearance-none"
                            value={form.budget}
                            onChange={(e) => setForm({ ...form, budget: e.target.value })}
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
                            onChange={(e) => setForm({ ...form, notes: e.target.value })}
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
      className="snap-center flex-shrink-0 w-[85%] min-w-[85%] max-w-[85%] sm:w-auto sm:min-w-0 sm:max-w-none relative"
    >
      <div className={`relative h-full rounded-[32px] border transition-all duration-500 group ${plan.isPopular
          ? 'bg-white border-primary ring-4 ring-primary/5 shadow-2xl z-10 sm:scale-105'
          : plan.isGreen
            ? 'bg-[#F5FFF0] border-primary/20 text-black shadow-xl shadow-primary/5'
            : 'bg-white border-gray-100 whatsapp-shadow hover:border-primary/40'
        }`}>
        {/* Internal Overflow Clip for Glows */}
        <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none">
          {/* Decorative Glows */}
          {plan.isPopular && (
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px] -mr-16 -mt-16" />
          )}
        </div>

        {plan.isPopular && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-primary text-white px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest shadow-xl shadow-primary/30 z-[30] whitespace-nowrap">
            <Star size={10} fill="white" className="animate-pulse" /> MOST POPULAR
          </div>
        )}

        <div className="p-5 sm:p-6 relative z-10 flex flex-col h-full">
          <div className="mb-4">
            <h3 className={`text-xl font-black mb-1 text-black`}>
              {plan.title}
            </h3>
            <p className={`text-[10px] font-black uppercase tracking-widest ${plan.isGreen ? 'text-primary' : 'text-[#475569]'}`}>
              {plan.tagline}
            </p>
          </div>

          <div className="mb-4 space-y-1">
            {/* Monthly Price (Bigger & On Top) */}
            <div className="flex items-baseline gap-1.5">
              <span className="text-[10px] font-black uppercase tracking-wider text-gray-400">Monthly:</span>
              <span className={`text-xl font-black ${plan.isGreen ? 'text-primary' : 'text-black'}`}>
                {plan.monthly}{(!plan.monthly.includes('/') && plan.monthly !== 'CUSTOM' && !plan.monthly.includes('month')) ? '/month' : ''}
              </span>
            </div>
            {/* Setup Price (Smaller & On Bottom) */}
            <div className="flex items-baseline gap-1.5">
              <span className="text-[9px] font-black uppercase tracking-wider text-gray-400">Setup:</span>
              <span className={`text-sm font-black ${plan.isGreen ? 'text-primary/70' : 'text-gray-500'}`}>
                {plan.setup}{plan.setup !== 'CUSTOM' && plan.setup !== '₹1 Lac+' ? ' (One-time)' : ''}
              </span>
            </div>
          </div>

          <div className="h-px w-full bg-gray-50 mb-4" />

          <ul className="space-y-2 mb-6">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[13px] font-bold leading-tight">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.isPopular ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                  }`}>
                  <Check size={9} strokeWidth={4} />
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
            className={`w-full py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 mt-auto group/btn ${plan.isPopular
                ? 'bg-primary text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1'
                : plan.isGreen
                  ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary/30 border border-primary/20'
                  : 'bg-gray-50 text-black hover:bg-primary hover:text-white border border-gray-100 hover:border-primary'
              }`}
          >
            {plan.cta}
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const [mode, setMode] = useState('whatsapp'); // 'whatsapp' | 'aisa'
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="pricing" className="py-8 sm:py-16 px-0 sm:px-6 bg-white relative overflow-hidden">
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
          <div className="relative p-1.5 bg-gray-100 rounded-2xl flex items-center shadow-inner min-w-[310px] sm:min-w-[450px]">
            <motion.div
              layoutId="switcher"
              className="absolute h-[calc(100%-12px)] bg-primary/10 border border-primary/20 rounded-xl z-0"
              style={{ width: 'calc(50% - 6px)' }}
              animate={{ x: mode === 'whatsapp' ? 0 : '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button
              onClick={() => setMode('whatsapp')}
              className={`relative z-10 flex-1 px-2 sm:px-4 py-2.5 sm:py-3.5 rounded-xl text-[8px] sm:text-[10px] font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 ${mode === 'whatsapp' ? 'text-primary' : 'text-gray-400 hover:text-gray-600'
                }`}
            >
              <FaWhatsapp size={11} className="sm:w-3.5 sm:h-3.5" /> WhatsApp Automation
            </button>
            <button
              onClick={() => setMode('aisa')}
              className={`relative z-10 flex-1 px-2 sm:px-4 py-2.5 sm:py-3.5 rounded-xl text-[8px] sm:text-[10px] font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 ${mode === 'aisa' ? 'text-primary' : 'text-gray-400 hover:text-gray-600'
                }`}
            >
              <Rocket size={11} className="sm:w-3.5 sm:h-3.5" /> AISA Connect<sup className="text-[0.6em]">TM</sup>
            </button>
          </div>
        </div>

        {/* Pricing Cards Container - Full-bleed on mobile with horizontal scroll snapping */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-3 gap-5 lg:gap-8 pb-10 -mx-4 px-6 pt-8 items-stretch touch-pan-x"
            >
              {(mode === 'aisa' ? aisaPlans : whatsappPlans).map((plan, i) => (
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

        {/* Bottom Features / Trust - Locked in exactly 1 row on mobile */}
        <div className="mt-12 sm:mt-20 flex flex-row flex-nowrap justify-center items-center gap-2 sm:gap-12 border-t border-gray-100 pt-10 sm:pt-16 opacity-60 overflow-hidden w-full px-1.5">
          <div className="flex items-center gap-1 sm:gap-3 whitespace-nowrap">
            <div className="w-5 h-5 sm:w-10 sm:h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary flex-shrink-0">
              <ShieldCheck size={11} className="sm:w-5 sm:h-5" />
            </div>
            <span className="text-[6.5px] sm:text-xs font-black uppercase tracking-wider text-black">Meta Partner</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-3 whitespace-nowrap">
            <div className="w-5 h-5 sm:w-10 sm:h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary flex-shrink-0">
              <Zap size={11} className="sm:w-5 sm:h-5" />
            </div>
            <span className="text-[6.5px] sm:text-xs font-black uppercase tracking-wider text-black">GST Invoicing</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-3 whitespace-nowrap">
            <div className="w-5 h-5 sm:w-10 sm:h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary flex-shrink-0">
              <Zap size={11} className="sm:w-5 sm:h-5" />
            </div>
            <span className="text-[6.5px] sm:text-xs font-black uppercase tracking-wider text-black">Instant Setup</span>
          </div>
        </div>
      </div>

      <CustomStackModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default Pricing;
