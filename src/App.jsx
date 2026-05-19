import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import SocialProof from './sections/SocialProof';
import ProblemSolution from './sections/ProblemSolution';
import Features from './sections/Features';
import UseCases from './sections/UseCases';
import LiveDemo from './sections/LiveDemo';

import Workflow from './sections/Workflow';
import WhyAisa from './sections/WhyAisa';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import Footer from './components/Footer';
import { ArrowRight, MessageCircle } from 'lucide-react';

function App() {
  useEffect(() => {
    // Disable smooth scroll on mobile for native momentum scrolling
    if (window.innerWidth < 1024) return;

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      lerp: 0.1, // Smoothness factor
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-white text-foreground selection:bg-primary selection:text-white min-h-screen overflow-x-hidden w-full relative">
      <Navbar />
      <main className="overflow-x-hidden w-full relative">
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <Features />
        <UseCases />
        <LiveDemo />

        <Workflow />
        <WhyAisa />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />

      {/* Sticky Mobile CTA Bar */}
      <div className="sticky-cta">
        <a
          href="https://wa.me/918359890909?text=Hello%20AISA%20Connect!%20I%20saw%20your%20website%20on%20mobile%20and%20want%20to%20learn%20more%20about%20AI%20automation."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg bg-primary text-white font-black text-[10px] active:scale-95 transition-transform shadow-lg shadow-primary/25 min-h-[32px]"
        >
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp
        </a>
        <a 
          href="https://connect.aisa24.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg bg-secondary text-white font-black text-[10px] active:scale-95 transition-transform shadow-md shadow-secondary/15 min-h-[32px]"
        >
          Explore AISA Connect<sup className="text-[0.6em]">TM</sup> <ArrowRight size={10} />
        </a>
      </div>
    </div>
  );
}

export default App;
