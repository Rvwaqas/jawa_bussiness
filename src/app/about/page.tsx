import CoderaHeader from "@/components/codera/CoderaHeader";
import CoderaFooter from "@/components/codera/CoderaFooter";
import CoderaPageBanner from "@/components/codera/CoderaPageBanner";
import CoderaAbout from "@/components/codera/CoderaAbout";
import CoderaProcess from "@/components/codera/CoderaProcess";
import CoderaCounter from "@/components/codera/CoderaCounter";
import CoderaTeam from "@/components/codera/CoderaTeam";
import CoderaTestimonials from "@/components/codera/CoderaTestimonials";
import CoderaScrollToTop from "@/components/codera/CoderaScrollToTop";

export const metadata = {
  title: "About Us – Jawa IT Solutions",
  description:
    "Learn more about Jawa, our mission, experienced team of technology professionals, and proven IT delivery processes.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <CoderaScrollToTop />
      <CoderaHeader />
      <main className="flex-1">
        <CoderaPageBanner
          title="About Us"
          subtitle="Who We Are"
          breadcrumb="About Us"
          bgImage="/img/bg/bg-02.jpg"
        />
        <CoderaAbout />
        <CoderaProcess />
        <CoderaCounter />
        <CoderaTeam />
        <CoderaTestimonials />
      </main>
      <CoderaFooter />
    </div>
  );
}
