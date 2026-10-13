import CoderaHeader from "@/components/codera/CoderaHeader";
import CoderaHero from "@/components/codera/CoderaHero";
import CoderaAbout from "@/components/codera/CoderaAbout";
import CoderaServices from "@/components/codera/CoderaServices";
import CoderaProcess from "@/components/codera/CoderaProcess";
import CoderaCounter from "@/components/codera/CoderaCounter";
import CoderaTeam from "@/components/codera/CoderaTeam";
import CoderaTestimonials from "@/components/codera/CoderaTestimonials";
import CoderaPricing from "@/components/codera/CoderaPricing";
import CoderaBlog from "@/components/codera/CoderaBlog";
import CoderaFooter from "@/components/codera/CoderaFooter";
import CoderaScrollToTop from "@/components/codera/CoderaScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <CoderaScrollToTop />
      <CoderaHeader />
      <main className="flex-1">
        <CoderaHero />
        <CoderaAbout />
        <CoderaServices />
        <CoderaProcess />
        <CoderaCounter />
        <CoderaTeam />
        <CoderaTestimonials />
        <CoderaPricing />
        <CoderaBlog />
      </main>
      <CoderaFooter />
    </div>
  );
}
