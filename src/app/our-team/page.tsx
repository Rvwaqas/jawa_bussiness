import CoderaHeader from "@/components/codera/CoderaHeader";
import CoderaFooter from "@/components/codera/CoderaFooter";
import CoderaPageBanner from "@/components/codera/CoderaPageBanner";
import CoderaTeam from "@/components/codera/CoderaTeam";
import CoderaCounter from "@/components/codera/CoderaCounter";
import CoderaScrollToTop from "@/components/codera/CoderaScrollToTop";

export const metadata = {
  title: "Our Team – Jawa IT Solutions",
  description:
    "Meet our expert technology engineers, software architects, and DevOps specialists powering innovative business solutions.",
};

export default function OurTeamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <CoderaScrollToTop />
      <CoderaHeader />
      <main className="flex-1">
        <CoderaPageBanner
          title="Our Team"
          subtitle="Leadership & Engineering"
          breadcrumb="Our Team"
          bgImage="/img/bg/bg-01.jpg"
        />
        <CoderaTeam />
        <CoderaCounter />
      </main>
      <CoderaFooter />
    </div>
  );
}
