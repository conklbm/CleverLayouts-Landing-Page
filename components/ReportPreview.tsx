import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, FileText, Image as ImageIcon } from 'lucide-react';

interface ReportPreviewProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReportPreview: React.FC<ReportPreviewProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Visual Markup & Annotations",
      description: "We analyze your page and circle exactly what's broken, with specific notes on why it's costing you conversions.",
      image: "/images/samples/LAAI-Deliverable1-1.jpg",
      icon: <ImageIcon className="h-5 w-5" />
    },
    {
      title: "Prioritized Action Checklist",
      description: "Get 9+ high-impact fixes ranked by importance. Each item includes specific rewrites and implementation details.",
      image: "/images/samples/LAAI-Deliverable1-2.jpg",
      icon: <FileText className="h-5 w-5" />
    }
  ];

  if (!isOpen) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all"
        aria-label="Close preview"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Modal Content */}
      <div className="relative max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-center gap-3">
          <div className="bg-brand-500 p-2 rounded-lg">
            {slides[currentSlide].icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold">{slides[currentSlide].title}</h3>
            <p className="text-slate-300 text-sm mt-1">{slides[currentSlide].description}</p>
          </div>
          <div className="text-sm text-slate-400">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {/* Image Container */}
        <div className="relative bg-slate-50 p-8 max-h-[70vh] overflow-y-auto">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-auto rounded-lg shadow-lg border border-slate-200"
          />
        </div>

        {/* Navigation */}
        {slides.length > 1 && (
          <div className="bg-white border-t border-slate-200 p-4 flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors disabled:opacity-50"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    idx === currentSlide ? 'bg-brand-600 w-8' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
              disabled={currentSlide === slides.length - 1}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* CTA Footer */}
        <div className="bg-brand-50 border-t border-brand-100 p-6 text-center">
          <p className="text-slate-700 font-medium mb-3">
            This is what you'll receive for every landing page we audit.
          </p>
          <a
            href="#pricing"
            onClick={onClose}
            className="inline-block px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-brand-500/20"
          >
            Get Your Custom Audit
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReportPreview;
