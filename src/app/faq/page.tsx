"use client";

import { useState } from "react";
import { ChevronDown, Asterisk } from "lucide-react";
import CoderaHeader from "@/components/codera/CoderaHeader";
import CoderaFooter from "@/components/codera/CoderaFooter";
import CoderaPageBanner from "@/components/codera/CoderaPageBanner";
import CoderaScrollToTop from "@/components/codera/CoderaScrollToTop";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What types of IT solutions does Codera provide?",
      a: "Codera specializes in enterprise cloud infrastructure, custom software engineering, cybersecurity threat protection, automated IT management, and distributed data analytics solutions.",
    },
    {
      q: "How does Codera ensure data security and compliance?",
      a: "We implement zero-trust network architectures, end-to-end data encryption, automated SIEM threat detection, and stringent ISO/SOC2 compliance standards.",
    },
    {
      q: "What is your typical onboarding timeline for new projects?",
      a: "Our initial technical discovery sprint takes between 1 to 2 weeks. During this period, our architects conduct a comprehensive audit, define milestones, and allocate a dedicated technical squad.",
    },
    {
      q: "Can you modernize our existing legacy software systems?",
      a: "Yes. Our senior developers routinely migrate monolithic legacy systems into resilient, high-speed microservices frameworks without causing downtime for your active users.",
    },
    {
      q: "How does your pricing model work?",
      a: "We provide transparent, flexible monthly retainer packages as well as milestone-based fixed contracts with defined SLAs and zero hidden maintenance fees.",
    },
    {
      q: "Will we retain full ownership of the intellectual property?",
      a: "Absolutely. You retain 100% ownership of all source code, configurations, architectural blueprints, and digital assets upon milestone completion.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <CoderaScrollToTop />
      <CoderaHeader />
      <main className="flex-1">
        <CoderaPageBanner
          title="Frequently Asked Questions"
          subtitle="Questions & Answers"
          breadcrumb="FAQ"
          bgImage="/img/bg/bg-02.jpg"
        />

        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <Asterisk className="w-5 h-5 text-[#fa510f] animate-rotate-icon" />
                <span className="text-[#101824] font-bold text-xs uppercase tracking-widest">
                  Quick Answers
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101824] tracking-tight">
                Everything you need to know
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 bg-[#F7F8F9]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 font-bold text-lg text-[#101824] hover:text-[#fa510f] transition-colors focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#fa510f] shrink-0 transition-transform duration-300 ${
                        openIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openIndex === idx && (
                    <div className="px-6 sm:px-7 pb-6 text-[#4a5257] text-base leading-relaxed border-t border-gray-200 pt-4 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CoderaFooter />
    </div>
  );
}
