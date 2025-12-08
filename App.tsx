import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import LiveDemo from './components/LiveDemo';
import PricingLadder from './components/PricingLadder';
import { ArrowUpRight, Check, FileText, ArrowRight, AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-brand-100 selection:text-brand-900">
      
      <main>
        <Hero />
        
        {/* Visual Evidence Section: Problem vs Solution */}
        <section id="evidence" className="py-24 bg-white relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Don't guess. <span className="text-brand-600">Know exactly what to fix.</span></h2>
               <p className="text-lg text-slate-600">
                 We don't just say "it looks bad." We show you exactly where you're losing money and how to stop the bleeding.
               </p>
             </div>

             <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
               {/* The Problem: Before Screenshot */}
               <div className="relative group">
                 <div className="absolute -inset-4 bg-red-50 rounded-3xl -z-10 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                 <div className="space-y-4 mb-6">
                    <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        <AlertCircle className="h-4 w-4" /> The Problem
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Your Current Landing Page</h3>
                    <p className="text-slate-600">
                        Confusing headers, weak CTAs, and layout issues that confuse visitors. This is where 98% of your traffic leaves without paying.
                    </p>
                 </div>
                 <div className="rounded-xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-200 relative">
                   <div className="absolute top-4 left-4 z-10 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                        Leaking Revenue
                   </div>
                   <img 
                      src="https://placehold.co/800x600/f1f5f9/94a3b8?text=Your+Website+(Before)" 
                      alt="Before Audit Landing Page" 
                      className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                    />
                 </div>
               </div>

               {/* The Solution: The Audit Report */}
               <div className="relative group mt-12 lg:mt-0">
                 <div className="absolute -inset-4 bg-brand-50 rounded-3xl -z-10 transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                 <div className="space-y-4 mb-6">
                    <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        <FileText className="h-4 w-4" /> The Solution
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">The 50-Point Audit Report</h3>
                    <p className="text-slate-600">
                        Specific, tactical markups. We circle exactly what to remove, rewrite, and move. It's a checklist for doubling your conversion rate.
                    </p>
                 </div>
                 <div className="rounded-xl overflow-hidden shadow-glow border border-brand-200 relative">
                    <div className="absolute top-4 left-4 z-10 bg-brand-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
                        <Check className="h-3 w-3" /> Actionable Fixes
                   </div>
                   <img 
                      src="https://placehold.co/800x600/ecfdf5/16a34a?text=Our+Report+Suggestions" 
                      alt="Audit Report Suggestions" 
                      className="w-full h-auto"
                    />
                 </div>
               </div>
             </div>
           </div>
        </section>

        {/* Features Section */}
        <section id="how-it-works" className="py-24 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">We Don't Guess. We Analyze.</h2>
              <p className="text-slate-500">
                Stop tweaking button colors randomly. Our comprehensive audit covers the 4 pillars of high-converting pages.
              </p>
            </div>
            <FeatureGrid />
          </div>
        </section>

        {/* Live Demo Section */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <LiveDemo />
           </div>
        </section>

        {/* New Pricing Section */}
        <section id="pricing" className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
              <div className="max-w-lg text-center lg:text-left">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Secure your audit before the price jumps.</h2>
                <p className="text-lg text-slate-600 mb-8">
                  We limit the number of active audits to ensure high quality. As slots fill up, the price automatically increases.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="bg-brand-100 p-2 rounded-full text-brand-600">
                      <Check className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Video walkthrough of your page</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="bg-brand-100 p-2 rounded-full text-brand-600">
                      <Check className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Annotated PDF report</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="bg-brand-100 p-2 rounded-full text-brand-600">
                      <Check className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Rewritten headline & CTA copy</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full max-w-md relative">
                 <div className="absolute inset-0 bg-brand-500/5 blur-3xl rounded-full transform rotate-3 scale-110"></div>
                 <PricingLadder />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl text-slate-900">PageDoctor</span>
              <span className="text-slate-400 text-sm">© 2024</span>
            </div>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-900 transition-colors flex items-center gap-1">
                Twitter <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;