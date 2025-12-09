import React from 'react';
import { Activity } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-brand-50 p-2 rounded-lg">
              <Activity className="h-6 w-6 text-brand-600" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">PageDoctor</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#evidence" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Results</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Process</a>
            <a href="#demo" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">AI Demo</a>
            <a href="#pricing" className="px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
              Get Audited
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;