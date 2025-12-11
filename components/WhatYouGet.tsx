import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import ReportPreview from './ReportPreview';

const WhatYouGet: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Your Website Audit Report
          </h2>
          <p className="text-xl text-slate-600">
            See exactly what's included in your webpage audit
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Before */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute top-4 left-4 z-10 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
                <AlertCircle className="h-3 w-3" /> Before
              </div>
              <img
                src="/images/samples/LAAI-before.jpg"
                alt="Landing page before audit"
                className="w-full h-auto"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-sm text-slate-600">Your current page</p>
            </div>
          </div>

          {/* Deliverable 1: Visual Markup */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute top-4 left-4 z-10 bg-brand-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                Deliverable 1
              </div>
              <img
                src="/images/samples/LAAI-Deliverable1 (1).jpg"
                alt="Landing page audit with annotated markup"
                className="w-full h-auto cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setShowPreview(true)}
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-sm font-semibold text-slate-900">Visual markup with annotations</p>
            </div>
          </div>

          {/* Deliverable 2: Action Checklist */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute top-4 left-4 z-10 bg-brand-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                Deliverable 2
              </div>
              <img
                src="/images/samples/LAAI-Deliverable1 (2).jpg"
                alt="Prioritized action checklist for landing page improvements"
                className="w-full h-auto cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setShowPreview(true)}
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-sm font-semibold text-slate-900">Prioritized action checklist</p>
            </div>
          </div>
        </div>
      </div>

      <ReportPreview isOpen={showPreview} onClose={() => setShowPreview(false)} />
    </>
  );
};

export default WhatYouGet;
