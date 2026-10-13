import Link from "next/link";
import Image from "next/image";
import {
  Cloud,
  Code,
  ShieldCheck,
  Server,
  Database,
  Headset,
  ArrowUpRight,
  Asterisk,
} from "lucide-react";
import CoderaHeader from "@/components/codera/CoderaHeader";
import CoderaFooter from "@/components/codera/CoderaFooter";
import CoderaPageBanner from "@/components/codera/CoderaPageBanner";
import CoderaProcess from "@/components/codera/CoderaProcess";
import CoderaScrollToTop from "@/components/codera/CoderaScrollToTop";

export const metadata = {
  title: "Services – Jawa IT Solutions",
  description:
    "Explore Jawa's comprehensive IT solutions: Cloud Migration, Custom Software, Cybersecurity, Data Analytics, and Managed IT Services.",
};

const fullServices = [
  {
    num: "01",
    title: "Cloud Services",
    tag: "Cloud Architecture",
    desc: "Migrate and optimize cloud workloads across AWS, Azure, and Google Cloud with multi-region redundancy and continuous cost management.",
    image: "/img/services/service-01.jpg",
    icon: Cloud,
  },
  {
    num: "02",
    title: "Software Solutions",
    tag: "Custom Development",
    desc: "Bespoke web applications, APIs, and scalable mobile platforms engineered with high standards of maintainability, speed, and security.",
    image: "/img/services/service-02.jpg",
    icon: Code,
  },
  {
    num: "03",
    title: "Cyber Security",
    tag: "Threat Protection",
    desc: "Comprehensive security audits, continuous network telemetry, zero-trust infrastructure, and incident response readiness.",
    image: "/img/services/service-03.jpg",
    icon: ShieldCheck,
  },
  {
    num: "04",
    title: "IT Consulting",
    tag: "Strategic Advisory",
    desc: "Strategic technical guidance, software architecture planning, compliance roadmaps, and digital transformation roadmapping.",
    image: "/img/content/about-01.jpg",
    icon: Server,
  },
  {
    num: "05",
    title: "Data Analytics",
    tag: "Business Intelligence",
    desc: "Transform enterprise raw data into actionable intelligence with automated ETL pipelines, data warehouses, and interactive dashboards.",
    image: "/img/content/about-02.jpg",
    icon: Database,
  },
  {
    num: "06",
    title: "Managed IT Services",
    tag: "24/7 Operations",
    desc: "Proactive 24/7 infrastructure monitoring, rapid helpdesk resolution, hardware virtualization, and disaster recovery SLA compliance.",
    image: "/img/content/process-05.jpg",
    icon: Headset,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <CoderaScrollToTop />
      <CoderaHeader />
      <main className="flex-1">
        <CoderaPageBanner
          title="Our Services"
          subtitle="What We Provide"
          breadcrumb="Services"
          bgImage="/img/bg/bg-01.jpg"
        />

        {/* 6-Grid Services */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <Asterisk className="w-5 h-5 text-[#fa510f] animate-rotate-icon" />
                <span className="text-[#101824] font-bold text-xs uppercase tracking-widest">
                  Comprehensive Services
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101824] tracking-tight">
                Enterprise IT solutions tailored for growth
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fullServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.num}
                    className="bg-white border border-gray-100 hover:border-[#fa510f]/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-56 w-full overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#101824]/90 text-white font-bold text-xs flex items-center justify-center">
                          {service.num}
                        </div>
                      </div>

                      <div className="p-6 sm:p-8">
                        <div className="flex items-center gap-2.5 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-[#fa510f]/10 text-[#fa510f] flex items-center justify-center">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#fa510f]">
                            {service.tag}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-[#101824] mb-3 group-hover:text-[#fa510f] transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-[#4a5257] text-sm leading-relaxed mb-6">
                          {service.desc}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#101824] group-hover:text-[#fa510f] transition-colors"
                      >
                        <span>Inquire Service</span>
                        <div className="w-7 h-7 rounded-full border border-gray-200 group-hover:border-[#fa510f] group-hover:bg-[#fa510f] group-hover:text-white flex items-center justify-center transition-all">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CoderaProcess />
      </main>
      <CoderaFooter />
    </div>
  );
}
