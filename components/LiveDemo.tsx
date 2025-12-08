import React, { useState } from 'react';
import { Sparkles, ArrowRight, Loader2, Bot } from 'lucide-react';
import { generateSampleAudit } from '../services/geminiService';
import { AnalysisStatus } from '../types';
import Markdown from 'react-markdown';

const LiveDemo: React.FC = () => {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<AnalysisStatus>(AnalysisStatus.IDLE);
  const [result, setResult] = useState<string>('');

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setStatus(AnalysisStatus.ANALYZING);
    try {
      const audit = await generateSampleAudit(url, 'Headline Effectiveness');
      setResult(audit);
      setStatus(AnalysisStatus.COMPLETE);
    } catch (error) {
      setResult("Oops! The AI is overloaded. Try again in a moment.");
      setStatus(AnalysisStatus.ERROR);
    }
  };

  return (
    <div id="demo" className="w-full max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/50 relative">
        <div className="absolute top-0 right-0 p-32 bg-brand-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="p-8 md:p-12 relative z-10">
            <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold border border-indigo-100 mb-4">
                    <Sparkles className="h-3 w-3" />
                    Instant AI Preview
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">See the Magic (Free Sample)</h2>
                <p className="text-slate-500 max-w-xl mx-auto">
                  Enter a URL to see how our AI engine analyzes headlines. This is just <span className="text-slate-900 font-bold">1%</span> of the manual insight you get in the paid audit.
                </p>
            </div>

            <form onSubmit={handleAudit} className="flex flex-col sm:flex-row gap-3 mb-8 max-w-xl mx-auto">
                <input 
                    type="text" 
                    placeholder="e.g. www.your-startup.com" 
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all shadow-sm"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button 
                    type="submit" 
                    disabled={status === AnalysisStatus.ANALYZING || !url}
                    className="bg-slate-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                    {status === AnalysisStatus.ANALYZING ? (
                        <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                        </>
                    ) : (
                        <>
                            Audit Me
                        </>
                    )}
                </button>
            </form>

            {status === AnalysisStatus.COMPLETE && (
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 animate-fade-in relative">
                    <div className="absolute -top-4 left-8 bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-bold text-slate-500 flex items-center gap-2 shadow-sm">
                      <Bot className="h-4 w-4 text-brand-500" />
                      AI Analysis
                    </div>
                    <div className="prose prose-slate prose-sm max-w-none">
                        <Markdown>{result}</Markdown>
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                        <p className="text-sm text-slate-500 mb-4 font-medium">This was just a robot. Want a human expert to tear it down?</p>
                        <a href="#pricing" className="text-brand-600 font-bold hover:text-brand-700 text-sm inline-flex items-center gap-1 group">
                            Get the Full 50-Point Manual Audit <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
};

export default LiveDemo;