import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-16 overflow-hidden bg-white pattern-grid">
      {/* Background Elements */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">

        <h1 className="text-5xl lg:text-8xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-8">
          Your landing page is <br />
          <span className="gradient-text">leaking money.</span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          You're losing visitors at every step—and you don't even know where. Get our detailed analysis showing exactly what's costing you conversions (and the fix).
        </p>

        <div className="flex items-center justify-center mb-12">
          <a href="https://full-time-side-hustler.thrivecart.com/landing-page-analysis-report/" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-brand-600 hover:bg-brand-700 text-white text-xl font-bold rounded-full transition-all shadow-xl shadow-brand-600/20 hover:shadow-2xl hover:-translate-y-1">
            Get My Audit Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;