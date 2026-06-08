import { AboutHero } from "@/components/about/AboutHero";
import { CorePrinciples } from "@/components/about/CorePrinciples";
import { JourneySection } from "@/components/about/JourneySection";
import { TrustSection } from "@/components/about/TrustSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function AboutPage() {
  return (
    <>
      <SiteHeader activeNav="about" />
      <main>
        <AboutHero />
        <CorePrinciples />
        <JourneySection />
        <TrustSection />
      </main>
      <SiteFooter variant="about" />
    </>
  );
}
