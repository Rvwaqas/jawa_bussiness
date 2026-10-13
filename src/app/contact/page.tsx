"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import CoderaHeader from "@/components/codera/CoderaHeader";
import CoderaFooter from "@/components/codera/CoderaFooter";
import CoderaPageBanner from "@/components/codera/CoderaPageBanner";
import CoderaScrollToTop from "@/components/codera/CoderaScrollToTop";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us 24/7",
    desc: "+92 348 0227414",
    sub: "Direct Technical Helpdesk",
  },
  {
    icon: Mail,
    title: "Email Inquiry",
    desc: "rvwaqas602@gmail.com",
    sub: "Response within 2 hours",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    desc: "4211 Webster Street",
    sub: "Rahway, Franklin Park, IN",
  },
  {
    icon: Clock,
    title: "Operating Hours",
    desc: "Mon - Fri: 9:00 - 18:00",
    sub: "Emergency on-call 24/7",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <CoderaScrollToTop />
      <CoderaHeader />
      <main className="flex-1">
        <CoderaPageBanner
          title="Contact Us"
          subtitle="Get In Touch"
          breadcrumb="Contact"
          bgImage="/img/banner/video-bg-img.jpg"
        />

        {/* 4 Contact Info Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="p-8 rounded-2xl bg-[#F7F8F9] border border-gray-100 text-center flex flex-col items-center justify-between hover:shadow-xl hover:border-[#fa510f]/20 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#fa510f]/10 text-[#fa510f] flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#101824] mb-1">
                        {card.title}
                      </h3>
                      <p className="text-base font-semibold text-[#101824] mb-1">
                        {card.desc}
                      </p>
                      <p className="text-xs text-[#4a5257]">{card.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Message Form & Details */}
        <section className="py-20 bg-[#F7F8F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Info Column */}
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#fa510f] mb-3 inline-block">
                  Have Questions?
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101824] tracking-tight leading-[1.15] mb-6">
                  Let’s build something intelligent together.
                </h2>
                <p className="text-[#4a5257] text-base leading-relaxed mb-8">
                  Whether you require an enterprise cloud migration, a custom software system, or end-to-end security audits, our team is prepared to architect the right solution.
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white border border-gray-100 flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#fa510f]" />
                    <span className="text-sm font-semibold text-[#101824]">
                      Free initial technology assessment and architectural roadmap
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-gray-100 flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#fa510f]" />
                    <span className="text-sm font-semibold text-[#101824]">
                      Dedicated technical squad assigned within 24 hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Form Column */}
              <div className="lg:col-span-7">
                <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-black/[0.04]">
                  {submitted ? (
                    <div className="text-center py-12 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#101824]">
                        Thank You for Reaching Out!
                      </h3>
                      <p className="text-sm text-[#4a5257] max-w-md mx-auto">
                        Your message has been safely received. A Jawa technical lead will review your request and contact you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#101824] mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#fa510f] text-sm text-[#101824]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#101824] mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#fa510f] text-sm text-[#101824]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#101824] mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            placeholder="+92 348 0227414"
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#fa510f] text-sm text-[#101824]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#101824] mb-2">
                            Service Interested In
                          </label>
                          <select className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#fa510f] text-sm text-[#101824] bg-white">
                            <option>Cloud Services</option>
                            <option>Software Solutions</option>
                            <option>Cyber Security</option>
                            <option>IT Consulting</option>
                            <option>Data Analytics</option>
                            <option>Managed IT Services</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#101824] mb-2">
                          Your Message *
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Tell us about your project requirements or timeline..."
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#fa510f] text-sm text-[#101824]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-[#fa510f] hover:bg-[#101824] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all btn-shine-effect shadow-lg shadow-[#fa510f]/20"
                      >
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <section className="h-[420px] w-full bg-gray-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
            className="w-full h-full border-0 grayscale contrast-125"
            loading="lazy"
            title="Jawa Office Map"
          />
        </section>
      </main>
      <CoderaFooter />
    </div>
  );
}
