import React from 'react';
import { Eye, Zap, Target, MousePointer2 } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Visual Markup Analysis",
    description: "We circle every conversion killer on your page with specific notes on why it's costing you money and exactly how to fix it.",
    icon: <Eye className="h-6 w-6 text-indigo-600" />
  },
  {
    title: "Friction & Form Optimization",
    description: "Identify confusing elements, hidden blockers, and form issues. Get specific fixes to reduce drop-off at every step.",
    icon: <Zap className="h-6 w-6 text-amber-500" />
  },
  {
    title: "Copy Rewrites Included",
    description: "Not just 'make it better'—we rewrite your headlines, CTAs, and value props so you can copy/paste them directly.",
    icon: <Target className="h-6 w-6 text-red-500" />
  },
  {
    title: "Impact-Rated Priorities",
    description: "Each fix is rated High/Medium/Low impact so you know exactly which changes will move the needle most.",
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