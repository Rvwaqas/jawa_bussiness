import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Asterisk, Layers, Cloud, Cpu, ShieldCheck, Database, Server } from "lucide-react";
import CoderaHeader from "@/components/codera/CoderaHeader";
import CoderaFooter from "@/components/codera/CoderaFooter";
import CoderaPageBanner from "@/components/codera/CoderaPageBanner";
import CoderaScrollToTop from "@/components/codera/CoderaScrollToTop";

export const metadata = {
  title: "Portfolio – Jawa IT Solutions",
  description:
    "Explore Jawa's featured enterprise project deliveries, software architectures, and cloud transformations.",
};

const projects = [
  {
    id: "cloud-infrastructure",
    title: "Enterprise Multi-Cloud Infrastructure",
    category: "Cloud Services",
    icon: Cloud,
    image: "/img/services/service-01.jpg",
    description: "Architected multi-region Kubernetes cluster with 99.999% uptime and zero-downtime rolling updates.",
    metric: "99.999% SLA Uptime",
  },
  {
    id: "software-automation",
    title: "Financial Ledger & Microservices API",
    category: "Software Solutions",
    icon: Cpu,
    image: "/img/services/service-02.jpg",
    description: "Built high-throughput cryptographic microservices processing 20,000 requests/sec with low latency.",
    metric: "20k Trans/sec",
  },
  {
    id: "zero-trust-defense",
    title: "Zero-Trust Identity & SIEM Network",
    category: "Cyber Security",
    icon: ShieldCheck,
    image: "/img/services/service-03.jpg",
    description: "Automated telemetry threat prevention stopping unauthorized infiltration across 4,000 corporate endpoints.",
    metric: "100% Interception",
  },
  {
    id: "workflow-automation",
    title: "Intelligent Supply Chain Workflow",
    category: "IT Consulting",
    icon: Layers,
    image: "/img/content/about-01.jpg",
    description: "Optimized operational logistical dispatch system cutting turnaround overhead by 45% annually.",
    metric: "45% Cost Reduction",
  },
  {
    id: "enterprise-bi-data",
    title: "Real-Time BI Telemetry Engine",
    category: "Data Analytics",
    icon: Database,
    image: "/img/content/about-02.jpg",
    description: "Distributed Kafka streaming pipeline ingesting 800M transactions daily with real-time dashboards.",
    metric: "Sub-Second BI",
  },
  {
    id: "hybrid-network-sdwan",
    title: "Global SD-WAN Infrastructure Migration",
    category: "Managed IT",
    icon: Server,
    image: "/img/content/process-05.jpg",
    description: "Engineered high-speed WAN connection linking 35 global subsidiaries with automated failover redundancy.",
    metric: "Zero Data Loss",
  },
];

export default function CasesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <CoderaScrollToTop />
      <CoderaHeader />
      <main className="flex-1">
        <CoderaPageBanner
          title="Our Portfolio"
          subtitle="Recent Case Studies"
          breadcrumb="Portfolio"
          bgImage="/img/bg/bg-03.jpg"
        />

        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <Asterisk className="w-5 h-5 text-[#fa510f] animate-rotate-icon" />
                <span className="text-[#101824] font-bold text-xs uppercase tracking-widest">
                  Featured Work
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101824] tracking-tight">
                Innovative IT solutions in action
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.id}
                    className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#fa510f]/30 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-60 w-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-[#101824]/90 backdrop-blur-sm text-white px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                          {project.category}
                        </div>
                      </div>

                      <div className="p-6 sm:p-8">
                        <div className="flex items-center gap-2 mb-3">
                          <Icon className="w-4 h-4 text-[#fa510f]" />
                          <span className="text-xs font-bold uppercase tracking-wider text-[#fa510f]">
                            {project.category}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-[#101824] group-hover:text-[#fa510f] transition-colors mb-3">
                          {project.title}
                        </h3>

                        <p className="text-[#4a5257] text-sm leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 flex items-center justify-between border-t border-gray-100 pt-4">
                      <span className="text-xs font-bold text-[#fa510f] bg-[#fa510f]/10 px-3 py-1 rounded-full">
                        {project.metric}
                      </span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#101824] group-hover:text-[#fa510f] transition-colors"
                      >
                        <span>Case Inquiry</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <CoderaFooter />
    </div>
  );
}
