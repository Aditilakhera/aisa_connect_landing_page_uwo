import React, { useState, useEffect } from 'react';
import { Mail, Phone, Send, X, Shield, Lock, CheckCircle2, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  useEffect(() => {
    if (isPrivacyOpen || isTermsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPrivacyOpen, isTermsOpen]);

  return (
    <footer className="bg-white border-t border-gray-100 pt-8 sm:pt-12 pb-16 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 text-center">
            <div className="flex flex-col items-center cursor-pointer mb-5" onClick={() => window.location.href = '../index.html'}>
              <img src="/aisa-connect/aisa-connect-logo.png" alt="AISA Connect" className="h-9 w-auto" />
              <span className="text-[11px] font-black tracking-tight text-foreground mt-1 leading-none">
                AISA Connect<sup className="text-[7px]">TM</sup>
              </span>
            </div>
            <p className="text-sm text-[#334155] font-bold leading-relaxed mb-6">
              AI-powered WhatsApp automation. Official Meta Business Partner.
            </p>
            <div className="flex items-center gap-3 justify-center">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-foreground/30 hover:bg-primary hover:text-white active:scale-95 transition-all">
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>


          {/* Company */}
          <div className="text-center">
            <h4 className="text-foreground font-black uppercase tracking-widest text-xs mb-5 underline decoration-primary decoration-2 underline-offset-4">Company</h4>
            <ul className="space-y-3">
              {[
                {
                  name: 'Terms',
                  href: '#',
                  onClick: (e) => {
                    e.preventDefault();
                    setIsTermsOpen(true);
                  }
                },
                {
                  name: 'Privacy',
                  href: '#',
                  onClick: (e) => {
                    e.preventDefault();
                    setIsPrivacyOpen(true);
                  }
                },
                { name: 'Demo booking', href: 'https://calendly.com/admin-uwo24/30min' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    onClick={item.onClick}
                    target={item.href !== '#' && !item.onClick ? '_blank' : '_self'}
                    rel={item.href !== '#' && !item.onClick ? 'noopener noreferrer' : ''}
                    className="text-sm text-[#334155] hover:text-primary font-black transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <h4 className="text-foreground font-black uppercase tracking-widest text-xs mb-5 underline decoration-primary decoration-2 underline-offset-4">Newsletter</h4>
            <p className="text-sm text-[#334155] font-bold mb-4">Get AI automation insights every week.</p>
            <div className="relative max-w-xs mx-auto sm:mx-0">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="w-full bg-cream border-none rounded-xl px-5 py-3.5 text-sm font-semibold focus:ring-2 focus:ring-primary/20 outline-none"
              />
              <button
                onClick={() => {
                  const email = document.getElementById('newsletter-email').value;
                  if (email) {
                    window.location.href = `mailto:ai.mall@uwo24.com?subject=Newsletter Subscription Request&body=Hello AISA Connect team,%0D%0A%0D%0APlease add my email address (${email}) to your AI automation newsletter list.%0D%0A%0D%0ABest regards.`;
                  }
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-primary text-white rounded-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-10 border-t border-gray-50 gap-4 text-center">
          <p className="text-[#475569] font-black text-xs uppercase tracking-widest">
            © 2026 UWO™ — All Rights Reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="mailto:ai.mall@uwo24.com" className="flex items-center gap-1.5 text-[#334155] font-black text-xs hover:text-primary transition-colors">
              <Mail size={13} className="text-primary" /> ai.mall@uwo24.com
            </a>
            <a 
              href="https://wa.me/918359890909?text=Hello%20AISA%20Connect!%20I'm%20interested%20in%20exploring%20AI%20automation%20for%20my%20business." 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#334155] font-black text-xs hover:text-primary transition-colors"
            >
              <Phone size={13} className="text-primary" /> +91 83598 90909
            </a>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPrivacyOpen(false)}
              className="fixed inset-0 bg-[#0F172A]/60 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-white border border-[#F0F2F5] shadow-2xl rounded-3xl overflow-hidden flex flex-col max-h-[85vh] z-10"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#25D366]/5 to-[#128C7E]/0 p-6 sm:p-8 border-b border-[#F0F2F5] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <Shield size={20} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#0F172A] tracking-tight leading-none">
                      AISA Connect™ – Privacy Policy
                    </h3>
                    <span className="text-[10px] uppercase font-black tracking-widest text-[#475569]/60 mt-1.5 block">
                      Last Updated: May 18, 2026
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsPrivacyOpen(false)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-[#0F172A]/40 hover:bg-[#F0F2F5] hover:text-[#0F172A] active:scale-95 transition-all"
                >
                  <X size={18} className="stroke-[2.5]" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-6 sm:p-8 space-y-6 text-[#334155]">
                {/* Intro Alert Box */}
                <div className="p-4 sm:p-5 bg-[#25D366]/[0.03] rounded-2xl border border-[#25D366]/10 flex gap-3.5">
                  <Lock className="text-[#25D366] shrink-0 stroke-[2] mt-0.5" size={18} />
                  <p className="text-sm font-semibold text-[#334155] leading-relaxed">
                    At AISA Connect™, we care about your privacy and data security. This policy explains how we collect and protect your information.
                  </p>
                </div>

                {/* Sections */}
                <div className="space-y-4">
                  {/* Section 1 */}
                  <div className="p-5 rounded-2xl border border-gray-100 bg-[#F0F2F5]/30 hover:border-[#25D366]/20 transition-colors">
                    <div className="flex items-center gap-2 mb-3.5">
                      <span className="text-xs font-black text-[#25D366] tracking-widest bg-[#25D366]/10 px-2 py-0.5 rounded-md uppercase">01</span>
                      <h4 className="text-sm font-black text-[#0F172A] uppercase tracking-wider">What Information We Collect</h4>
                    </div>
                    <p className="text-xs text-[#475569] font-medium mb-3">We may collect:</p>
                    <ul className="space-y-2">
                      {[
                        "Your account and business details",
                        "API and integration information",
                        "Chat and automation data",
                        "Device and browser information"
                      ].map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#334155] font-bold">
                          <CheckCircle2 size={15} className="text-[#25D366] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 2 */}
                  <div className="p-5 rounded-2xl border border-gray-100 bg-[#F0F2F5]/30 hover:border-[#25D366]/20 transition-colors">
                    <div className="flex items-center gap-2 mb-3.5">
                      <span className="text-xs font-black text-[#25D366] tracking-widest bg-[#25D366]/10 px-2 py-0.5 rounded-md uppercase">02</span>
                      <h4 className="text-sm font-black text-[#0F172A] uppercase tracking-wider">How We Use Your Data</h4>
                    </div>
                    <p className="text-xs text-[#475569] font-medium mb-3">We use your information to:</p>
                    <ul className="space-y-2">
                      {[
                        "Manage your account and billing",
                        "Run WhatsApp automation services",
                        "Improve chatbot performance",
                        "Generate analytics and reports"
                      ].map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#334155] font-bold">
                          <CheckCircle2 size={15} className="text-[#25D366] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div className="p-5 rounded-2xl border border-gray-100 bg-[#F0F2F5]/30 hover:border-[#25D366]/20 transition-colors">
                    <div className="flex items-center gap-2 mb-3.5">
                      <span className="text-xs font-black text-[#25D366] tracking-widest bg-[#25D366]/10 px-2 py-0.5 rounded-md uppercase">03</span>
                      <h4 className="text-sm font-black text-[#0F172A] uppercase tracking-wider">Data Safety</h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-[#334155] font-bold">
                        <CheckCircle2 size={15} className="text-[#25D366] shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>
                          We <span className="text-[#25D366] font-black underline decoration-2 decoration-[#25D366]/20 underline-offset-2">never</span> sell your data
                        </span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#334155] font-bold">
                        <CheckCircle2 size={15} className="text-[#25D366] shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>Your information is protected with secure systems</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#334155] font-bold">
                        <CheckCircle2 size={15} className="text-[#25D366] shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>Data is only shared when legally required</span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 4 */}
                  <div className="p-5 rounded-2xl border border-gray-100 bg-[#F0F2F5]/30 hover:border-[#25D366]/20 transition-colors">
                    <div className="flex items-center gap-2 mb-3.5">
                      <span className="text-xs font-black text-[#25D366] tracking-widest bg-[#25D366]/10 px-2 py-0.5 rounded-md uppercase">04</span>
                      <h4 className="text-sm font-black text-[#0F172A] uppercase tracking-wider">Your Rights</h4>
                    </div>
                    <p className="text-xs text-[#475569] font-medium mb-3">You can:</p>
                    <ul className="space-y-2">
                      {[
                        "Access your data",
                        "Update account information",
                        "Request account deletion anytime"
                      ].map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#334155] font-bold">
                          <CheckCircle2 size={15} className="text-[#25D366] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 5 */}
                  <div className="p-5 rounded-2xl border border-[#25D366]/15 bg-gradient-to-br from-[#25D366]/[0.02] to-[#128C7E]/[0.02] hover:border-[#25D366]/30 transition-colors">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-black text-[#25D366] tracking-widest bg-[#25D366]/10 px-2 py-0.5 rounded-md uppercase">05</span>
                      <h4 className="text-sm font-black text-[#0F172A] uppercase tracking-wider">Contact Us</h4>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-black text-[#0F172A]">UWO™ — Unified Web Options & Services Pvt. Ltd.</h5>
                        <p className="text-xs text-[#475569] font-semibold mt-0.5">Jabalpur, Madhya Pradesh, India</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <a
                          href="mailto:ai.mall@uwo24.com?subject=AISA%20Connect%20-%20Privacy%20Query"
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#F0F2F5] hover:border-[#25D366]/30 hover:shadow-sm transition-all group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                            <Mail size={14} className="stroke-[2.5]" />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[10px] font-black uppercase text-[#475569]/60 block leading-none mb-1">Email Us</span>
                            <span className="text-xs font-bold text-[#0F172A] block truncate group-hover:text-[#25D366] transition-colors">ai.mall@uwo24.com</span>
                          </div>
                        </a>
                        <a
                          href="https://wa.me/918359890909?text=Hello%20AISA%20Connect!%20I%20have%20a%20privacy-related%20question."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#F0F2F5] hover:border-[#25D366]/30 hover:shadow-sm transition-all group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                            <Phone size={14} className="stroke-[2.5]" />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[10px] font-black uppercase text-[#475569]/60 block leading-none mb-1">WhatsApp</span>
                            <span className="text-xs font-bold text-[#0F172A] block truncate group-hover:text-[#25D366] transition-colors">+91 83598 90909</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Terms of Service Modal */}
      <AnimatePresence>
        {isTermsOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTermsOpen(false)}
              className="fixed inset-0 bg-[#0F172A]/60 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-white border border-[#F0F2F5] shadow-2xl rounded-3xl overflow-hidden flex flex-col max-h-[85vh] z-10"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#25D366]/5 to-[#128C7E]/0 p-6 sm:p-8 border-b border-[#F0F2F5] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <FileText size={20} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#0F172A] tracking-tight leading-none">
                      AISA Connect™ – Terms of Service
                    </h3>
                    <span className="text-[10px] uppercase font-black tracking-widest text-[#475569]/60 mt-1.5 block">
                      Last Updated: May 18, 2026
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsTermsOpen(false)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-[#0F172A]/40 hover:bg-[#F0F2F5] hover:text-[#0F172A] active:scale-95 transition-all"
                >
                  <X size={18} className="stroke-[2.5]" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar p-6 sm:p-8 space-y-6 text-[#334155]">
                {/* Intro Alert Box */}
                <div className="p-4 sm:p-5 bg-[#25D366]/[0.03] rounded-2xl border border-[#25D366]/10 flex gap-3.5">
                  <Lock className="text-[#25D366] shrink-0 stroke-[2] mt-0.5" size={18} />
                  <p className="text-sm font-semibold text-[#334155] leading-relaxed">
                    Welcome to AISA Connect™. AISA Connect™ is a WhatsApp automation and AI communication platform created by UWO™ (Unified Web Options & Services Pvt. Ltd.). By using our platform, you agree to follow these terms.
                  </p>
                </div>

                {/* Sections */}
                <div className="space-y-4">
                  {/* Section 1 */}
                  <div className="p-5 rounded-2xl border border-gray-100 bg-[#F0F2F5]/30 hover:border-[#25D366]/20 transition-colors">
                    <div className="flex items-center gap-2 mb-3.5">
                      <span className="text-xs font-black text-[#25D366] tracking-widest bg-[#25D366]/10 px-2 py-0.5 rounded-md uppercase">01</span>
                      <h4 className="text-sm font-black text-[#0F172A] uppercase tracking-wider">Our Services</h4>
                    </div>
                    <p className="text-xs text-[#475569] font-medium mb-3">We provide:</p>
                    <ul className="space-y-2">
                      {[
                        "AI chatbot automation",
                        "WhatsApp Business API integration",
                        "CRM and lead management tools",
                        "Analytics and automation features"
                      ].map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#334155] font-bold">
                          <CheckCircle2 size={15} className="text-[#25D366] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 2 */}
                  <div className="p-5 rounded-2xl border border-gray-100 bg-[#F0F2F5]/30 hover:border-[#25D366]/20 transition-colors">
                    <div className="flex items-center gap-2 mb-3.5">
                      <span className="text-xs font-black text-[#25D366] tracking-widest bg-[#25D366]/10 px-2 py-0.5 rounded-md uppercase">02</span>
                      <h4 className="text-sm font-black text-[#0F172A] uppercase tracking-wider">User Responsibilities</h4>
                    </div>
                    <p className="text-xs text-[#475569] font-medium mb-3">To use AISA Connect™, you must:</p>
                    <ul className="space-y-2">
                      {[
                        "Be 18 years or older",
                        "Give correct account information",
                        "Keep your account secure",
                        "Follow Meta/WhatsApp policies",
                        "Send messages only to users who gave permission"
                      ].map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#334155] font-bold">
                          <CheckCircle2 size={15} className="text-[#25D366] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 3 */}
                  <div className="p-5 rounded-2xl border border-amber-100 bg-amber-50/20 hover:border-amber-200 transition-colors">
                    <div className="flex items-center gap-2 mb-3.5">
                      <span className="text-xs font-black text-amber-600 tracking-widest bg-amber-100 px-2 py-0.5 rounded-md uppercase">03</span>
                      <h4 className="text-sm font-black text-[#0F172A] uppercase tracking-wider">Important Notice</h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-[#334155] font-bold">
                        <CheckCircle2 size={15} className="text-amber-500 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>AI replies may sometimes contain mistakes</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#334155] font-bold">
                        <CheckCircle2 size={15} className="text-amber-500 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>Please review important automated messages</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-[#334155] font-bold">
                        <CheckCircle2 size={15} className="text-amber-500 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>UWO™ is not responsible for losses caused by incorrect AI responses</span>
                      </li>
                    </ul>
                  </div>

                  {/* Section 4 */}
                  <div className="p-5 rounded-2xl border border-gray-100 bg-[#F0F2F5]/30 hover:border-[#25D366]/20 transition-colors">
                    <div className="flex items-center gap-2 mb-3.5">
                      <span className="text-xs font-black text-[#25D366] tracking-widest bg-[#25D366]/10 px-2 py-0.5 rounded-md uppercase">04</span>
                      <h4 className="text-sm font-black text-[#0F172A] uppercase tracking-wider">Payments</h4>
                    </div>
                    <ul className="space-y-2">
                      {[
                        "Subscription fees are non-refundable",
                        "WhatsApp/Meta API charges are separate",
                        "GST or taxes may apply"
                      ].map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#334155] font-bold">
                          <CheckCircle2 size={15} className="text-[#25D366] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Section 5 */}
                  <div className="p-5 rounded-2xl border border-gray-100 bg-[#F0F2F5]/30 hover:border-[#25D366]/20 transition-colors">
                    <div className="flex items-center gap-2 mb-3.5">
                      <span className="text-xs font-black text-[#25D366] tracking-widest bg-[#25D366]/10 px-2 py-0.5 rounded-md uppercase">05</span>
                      <h4 className="text-sm font-black text-[#0F172A] uppercase tracking-wider">Ownership</h4>
                    </div>
                    <p className="text-sm text-[#334155] font-bold leading-relaxed">
                      All software, branding, and platform systems belong to <span className="text-[#25D366] font-black">UWO™</span>.
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div className="p-5 rounded-2xl border border-[#25D366]/15 bg-gradient-to-br from-[#25D366]/[0.02] to-[#128C7E]/[0.02] hover:border-[#25D366]/30 transition-colors">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-black text-[#25D366] tracking-widest bg-[#25D366]/10 px-2 py-0.5 rounded-md uppercase">06</span>
                      <h4 className="text-sm font-black text-[#0F172A] uppercase tracking-wider">Contact Us</h4>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-black text-[#0F172A]">UWO™ — Unified Web Options & Services Pvt. Ltd.</h5>
                        <p className="text-xs text-[#475569] font-semibold mt-0.5">Jabalpur, Madhya Pradesh, India</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <a
                          href="mailto:ai.mall@uwo24.com?subject=AISA%20Connect%20-%20Terms%20Query"
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#F0F2F5] hover:border-[#25D366]/30 hover:shadow-sm transition-all group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                            <Mail size={14} className="stroke-[2.5]" />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[10px] font-black uppercase text-[#475569]/60 block leading-none mb-1">Email Us</span>
                            <span className="text-xs font-bold text-[#0F172A] block truncate group-hover:text-[#25D366] transition-colors">ai.mall@uwo24.com</span>
                          </div>
                        </a>
                        <a
                          href="https://wa.me/918359890909?text=Hello%20AISA%20Connect!%20I%20have%20a%20question%20about%20your%20terms%20of%20service."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#F0F2F5] hover:border-[#25D366]/30 hover:shadow-sm transition-all group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                            <Phone size={14} className="stroke-[2.5]" />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[10px] font-black uppercase text-[#475569]/60 block leading-none mb-1">WhatsApp</span>
                            <span className="text-xs font-bold text-[#0F172A] block truncate group-hover:text-[#25D366] transition-colors">+91 83598 90909</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
