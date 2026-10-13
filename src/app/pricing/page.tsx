import CoderaHeader from "@/components/codera/CoderaHeader";
import CoderaFooter from "@/components/codera/CoderaFooter";
import CoderaPageBanner from "@/components/codera/CoderaPageBanner";
import CoderaPricing from "@/components/codera/CoderaPricing";
import CoderaTestimonials from "@/components/codera/CoderaTestimonials";
import CoderaScrollToTop from "@/components/codera/CoderaScrollToTop";

export const metadata = {
  title: "Pricing Plans – Jawa IT Solutions",
  description:
    "Transparent and predictable pricing plans for modern IT infrastructure, cloud hosting, and continuous software support.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <CoderaScrollToTop />
      <CoderaHeader />
      <main className="flex-1">
        <CoderaPageBanner
          title="Pricing Plans"
          subtitle="Simple & Transparent"
          breadcrumb="Pricing"
          bgImage="/img/bg/bg-03.jpg"
        />
        <CoderaPricing />
        <CoderaTestimonials />
      </main>
      <CoderaFooter />
    </div>
  );
}
