import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-white pattern-grid">
      {/* Background Elements */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Branding removed to focus purely on copy/offer */}

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wide uppercase mb-8 shadow-xl shadow-slate-900/10 transform hover:scale-105 transition-transform">
          <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
          Only 3 spots left at this price
        </div>
        
        <h1 className="text-5xl lg:text-8xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-8">
          Your landing page is <br />
          <span className="gradient-text">leaking money.</span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          You're losing visitors at every step—and you don't even know where. Get our detailed analysis showing exactly what's costing you conversions (and the fix).
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto">
          <a href="#pricing" className="w-full sm:w-auto px-10 py-5 bg-brand-600 hover:bg-brand-700 text-white text-lg font-bold rounded-full transition-all shadow-xl shadow-brand-600/20 text-center hover:shadow-2xl hover:-translate-y-1">
            Fix My Page
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;