import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactMethods } from "@/components/sections/contact/ContactMethods";
import { ContactOpportunities } from "@/components/sections/contact/ContactOpportunities";

export const metadata: Metadata = {
  title: "Contact | Divyansh Singh",
  description:
    "Connect with Divyansh Singh for opportunities across data analytics, AI, automation, PMO, and business technology.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <ContactHero />
      <ContactMethods />
      <ContactOpportunities />

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="text-center">
            <SectionHeading
              eyebrow="EXPLORE"
              heading="See My Work"
              description="Want to understand how I approach problems? Explore my project portfolio."
            />
            <Button
              href="/projects"
              variant="primary"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Explore My Work
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
