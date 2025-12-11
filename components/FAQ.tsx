import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What exactly will I receive?",
    answer: "You'll get a comprehensive PDF report with annotated screenshots showing exactly what's wrong with your landing page. Each issue includes visual markup, a detailed explanation of why it's hurting conversions, and specific recommendations for how to fix it. Every recommendation is prioritized by impact (high/medium/low) so you know what to tackle first."
  },
  {
    question: "How long does it take to get my audit?",
    answer: "Your audit will be delivered within 48 hours or less from the time you submit your URL. Most audits are completed within 24 hours. You'll receive an email with a link to download your report as soon as it's ready."
  },
  {
    question: "What if I'm not satisfied with the audit?",
    answer: "I stand behind my work with a unique guarantee: If you're not completely satisfied with your audit, I'll donate 110% of what you paid to the non-profit organization of your choice!"
  },
  {
    question: "Do you provide the fixes, or just identify problems?",
    answer: "This audit provides detailed analysis and actionable recommendations—I'll tell you exactly what's wrong and how to fix it. The implementation is up to you or your team. Think of it as a blueprint: you'll know exactly what needs to change, but you'll handle the actual changes. If you need implementation help, we can discuss that separately."
  },
  {
    question: "What types of websites do you audit?",
    answer: "I specialize in landing pages, sales pages, and any conversion-focused page where you're trying to get visitors to take action (sign up, buy, book a call, etc.). Whether you're selling products, services, courses, or collecting leads, the principles of conversion optimization apply."
  },
  {
    question: "Why does the price keep increasing?",
    answer: "I can only handle a limited number of audits per week while maintaining quality. To reward early action and manage demand, I use tiered pricing—as spots fill up at each level, the price increases. This ensures fairness for people who act quickly and helps me manage my workload."
  },
  {
    question: "Can I submit multiple pages or just one?",
    answer: "Each purchase covers one landing page or sales page. A 'page' is defined as a single URL with a specific conversion goal (one checkout page, one opt-in page, one sales letter, etc.). If you have multiple pages you'd like audited, you'll need to purchase separate audits. Contact me if you're interested in bulk pricing for multiple pages."
  },
  {
    question: "Will this work for my industry/niche?",
    answer: "Yes. While every industry has unique characteristics, the core principles of conversion optimization—clarity, trust, persuasion, and removing friction—apply universally. What matters most isn't your industry, it's whether you have a page where conversions matter."
  }
];

const FAQItem: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
      >
        <span className="text-lg font-semibold text-slate-900 pr-8">
          {item.question}
        </span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-brand-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-slate-600 leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to know about the landing page audit
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => toggleItem(index)}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-600 mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:brooks.fastsolutions@gmail.com"
            className="text-brand-600 hover:text-brand-700 font-semibold"
          >
            Email me directly
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
