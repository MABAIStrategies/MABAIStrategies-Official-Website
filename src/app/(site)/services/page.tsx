import type { Metadata } from 'next';
import { services } from '@/data/services';
import { ServiceDetailCard } from '@/components/cards/service-detail-card';

export const metadata: Metadata = {
  title: 'Services | MAB AI Strategies',
  description: 'AI automation architecture, multi-agent workflows, and advisory services.'
};

export default function ServicesPage() {
  return (
    <div className="section-padding">
      <div className="container space-y-12">
        <header className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Services</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Systems thinking, measurable impact.</h1>
          <p className="mt-4 text-slate-300">
            Use the quick links to jump to the service that matches your mandate.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-teal-200">
            {services.map((service) => (
              <a key={service.slug} href={`#${service.slug}`} className="rounded-full border border-teal-200/30 px-4 py-2">
                {service.name}
              </a>
            ))}
          </div>
        </header>
        <div className="space-y-8">
          {services
            .sort((a, b) => a.priority - b.priority)
            .map((service) => (
              <ServiceDetailCard key={service.id} service={service} />
            ))}
        </div>
      </div>
    </div>
  );
}
