import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { LocationSection } from "@/components/contact/LocationSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function ContactPage() {
  return (
    <>
      <SiteHeader activeNav="contact" />
      <main className="relative">
        <ContactHero />
        <section className="py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
        </section>
        <LocationSection />
      </main>
      <SiteFooter variant="contact" />
    </>
  );
}
