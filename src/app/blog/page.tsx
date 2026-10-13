import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, Asterisk } from "lucide-react";
import CoderaHeader from "@/components/codera/CoderaHeader";
import CoderaFooter from "@/components/codera/CoderaFooter";
import CoderaPageBanner from "@/components/codera/CoderaPageBanner";
import CoderaScrollToTop from "@/components/codera/CoderaScrollToTop";

export const metadata = {
  title: "Blog & Insights – Jawa IT Solutions",
  description:
    "Read the latest technology ideas, cloud strategies, cybersecurity tips, and software engineering articles from Jawa.",
};

const allArticles = [
  {
    category: "Cloud",
    date: "March 15, 2026",
    title: "Cloud solutions for scalable IT infrastructure.",
    desc: "Discover how multi-cloud topologies and automated autoscaling clusters optimize enterprise resource consumption.",
    image: "/img/blog/blog-01.jpg",
  },
  {
    category: "Software",
    date: "March 13, 2026",
    title: "Innovative software solutions for modern enterprises.",
    desc: "Why event-driven microservices and decoupled frontend architectures accelerate release cycles.",
    image: "/img/blog/blog-02.jpg",
  },
  {
    category: "Cybersafe",
    date: "March 12, 2026",
    title: "Practical tips for secure IT systems checklist.",
    desc: "Essential zero-trust authentication protocols, endpoint telemetry safeguards, and disaster recovery preparedness.",
    image: "/img/blog/blog-03.jpg",
  },
  {
    category: "DevOps",
    date: "March 08, 2026",
    title: "Zero-downtime deployment strategies with Kubernetes.",
    desc: "Blue-green and canary delivery patterns that eliminate user disruption during critical software rollouts.",
    image: "/img/content/about-01.jpg",
  },
  {
    category: "Data",
    date: "March 05, 2026",
    title: "Real-time streaming telemetry and predictive analytics.",
    desc: "Harnessing Kafka and distributed data pipelines to power responsive executive decision dashboards.",
    image: "/img/content/about-02.jpg",
  },
  {
    category: "IT Support",
    date: "February 28, 2026",
    title: "The strategic value of 24/7 proactive IT management.",
    desc: "How managed telemetry and automated issue remediation save thousands of hours in unplanned outages.",
    image: "/img/content/process-05.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <CoderaScrollToTop />
      <CoderaHeader />
      <main className="flex-1">
        <CoderaPageBanner
          title="Blog & Insights"
          subtitle="Technology News"
          breadcrumb="Blog"
          bgImage="/img/bg/bg-01.jpg"
        />

        <section className="py-20 lg:py-32 bg-[#F7F8F9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <Asterisk className="w-5 h-5 text-[#fa510f] animate-rotate-icon" />
                <span className="text-[#101824] font-bold text-xs uppercase tracking-widest">
                  Latest Insights
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101824] tracking-tight">
                Tech ideas that fuel business success
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allArticles.map((article, idx) => (
                <article
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-black/[0.04] flex flex-col justify-between"
                >
                  <div>
                    <div className="image-hover relative h-60 w-full overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider bg-[#101824] group-hover:bg-[#fa510f] text-white px-3 py-1 rounded-full transition-colors">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-semibold text-[#4a5257]">
                          <Calendar className="w-3.5 h-3.5 text-[#fa510f]" />
                          {article.date}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#101824] group-hover:text-[#fa510f] transition-colors leading-snug mb-3">
                        <Link href="/contact">{article.title}</Link>
                      </h3>

                      <p className="text-[#4a5257] text-sm leading-relaxed">
                        {article.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 border-t border-gray-100 pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#101824] group-hover:text-[#fa510f] transition-colors"
                    >
                      <span>Read Full Article</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CoderaFooter />
    </div>
  );
}
