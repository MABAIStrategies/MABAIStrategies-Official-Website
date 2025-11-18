import { HeroSection } from '@/components/sections/hero';
import { ServiceOverview } from '@/components/sections/service-overview';
import { WhoWeWorkWith } from '@/components/sections/who-we-work-with';
import { OffersSection } from '@/components/sections/offers';
import { ProcessSection } from '@/components/sections/process';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { FinalCTA } from '@/components/sections/final-cta';
import { CaseStudiesPreview } from '@/components/sections/case-studies-preview';
import { AutomationIdeasBank } from '@/components/sections/ideas';
import { InsightsPreview } from '@/components/sections/insights-preview';

export default async function HomePage() {
  return (
    <div className="space-y-4">
      <HeroSection />
      <ServiceOverview />
      <WhoWeWorkWith />
      <OffersSection />
      <ProcessSection />
      <CaseStudiesPreview />
      <AutomationIdeasBank />
      <TestimonialsSection />
      <InsightsPreview />
      <FinalCTA />
    </div>
  );
}
