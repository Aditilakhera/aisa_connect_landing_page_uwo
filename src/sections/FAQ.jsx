import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { question: "What is WhatsApp API?", answer: "The WhatsApp Business API is a powerful solution by Meta designed for businesses to communicate with customers at scale, enabling automation, chatbot integration, and high-volume messaging." },
  { question: "Is this official?", answer: <>Yes! AISA Connect<sup className="text-[0.6em]">TM</sup> uses the official Meta Cloud API giving you access to broadcasts, green badge verification, and highly stable messaging without ban risk.</> },
  { question: "Can I use my existing number?", answer: "Yes, you can use your existing number as long as it is not actively registered on the regular WhatsApp or WhatsApp Business apps during setup." },
  { question: "Is coding required?", answer: "Not at all. AISA is completely no-code. Set up your AI, build workflows, and manage contacts using our intuitive visual dashboard." },
  { question: "How fast can setup happen?", answer: "Setup is incredibly fast. You can link your Meta Business account, verify your number, and deploy your AI assistant in just a few minutes." },
  { question: "Can AI answer customers automatically?", answer: "Absolutely. Our advanced AI understands context and intent to provide instant, accurate responses 24/7, with seamless human handoff if needed." },
  { question: "Does this support broadcasts?", answer: "Yes! You can send bulk promotional broadcasts to thousands of opted-in customers instantly, complete with delivery and read analytics." }
];

const FAQItem = ({ question, answer, index, isOpen, toggle }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.07 }}
    className={`mb-3 overflow-hidden rounded-2xl border transition-all duration-300 ${
      isOpen ? 'border-primary/30 bg-mint/10' : 'border-gray-100 bg-white hover:border-primary/20'
    }`}
  >
    <button
      onClick={toggle}
      className="flex w-full items-center justify-between px-5 py-4 sm:px-6 sm:py-5 text-left touch-manipulation active:opacity-70"
    >
      <span className={`text-sm sm:text-base font-bold pr-4 ${isOpen ? 'text-primary' : 'text-foreground'}`}>
        {question}
      </span>
      <div className={`flex h-7 w-7 items-center justify-center rounded-full flex-shrink-0 transition-all ${
        isOpen ? 'bg-primary text-white' : 'bg-cream text-foreground/40'
      }`}>
        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.28 }}
        >
          <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#334155] font-bold leading-relaxed">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="heading-lg text-foreground mb-3">
            Common <span className="text-gradient">Questions</span>
          </motion.h2>
          <p className="text-[#475569] font-black uppercase tracking-[0.2em] text-xs">Everything you need to know</p>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              {...faq}
              index={i}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
