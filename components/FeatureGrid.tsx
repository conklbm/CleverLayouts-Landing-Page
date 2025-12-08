import React from 'react';
import { Eye, Zap, Target, MousePointer2 } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Brutal Honesty",
    description: "No fluff. No polite padding. We tell you exactly why visitors bounce so you can fix it.",
    icon: <Eye className="h-6 w-6 text-indigo-600" />
  },
  {
    title: "Friction Analysis",
    description: "We spot the confusing forms and hidden blockers killing your sign-ups.",
    icon: <Zap className="h-6 w-6 text-amber-500" />
  },
  {
    title: "Copy Teardown",
    description: "Your headlines are boring. We rewrite them to hook readers instantly.",
    icon: <Target className="h-6 w-6 text-red-500" />
  },
  {
    title: "CTA Optimization",
    description: "Button placement, color, and text analysis to maximize clicks.",
    icon: <MousePointer2 className="h-6 w-6 text-brand-600" />
  }
];

const FeatureGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, idx) => (
        <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-soft hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="bg-slate-50 inline-flex p-4 rounded-xl mb-6">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
          <p className="text-slate-500 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;