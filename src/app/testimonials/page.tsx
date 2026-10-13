import CoderaHeader from "@/components/codera/CoderaHeader";
import CoderaFooter from "@/components/codera/CoderaFooter";
import CoderaPageBanner from "@/components/codera/CoderaPageBanner";
import CoderaTestimonials from "@/components/codera/CoderaTestimonials";
import CoderaCounter from "@/components/codera/CoderaCounter";
import CoderaScrollToTop from "@/components/codera/CoderaScrollToTop";

export const metadata = {
  title: "Testimonials – Jawa IT Solutions",
  description:
    "Hear directly from technology leaders and enterprises that depend on Jawa for reliable IT systems and continuous innovation.",
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <CoderaScrollToTop />
      <CoderaHeader />
      <main className="flex-1">
        <CoderaPageBanner
          title="Client Testimonials"
          subtitle="What Our Clients Say"
          breadcrumb="Testimonials"
          bgImage="/img/bg/bg-02.jpg"
        />
        <CoderaTestimonials />
        <CoderaCounter />
      </main>
      <CoderaFooter />
    </div>
  );
}
