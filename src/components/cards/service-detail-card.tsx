import type { Service } from '@/types';
import { Button } from '@/components/ui/button';

export function ServiceDetailCard({ service }: { service: Service }) {
  return (
    <section id={service.slug} className="rounded-3xl border border-white/5 bg-slate-900/60 p-8">
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-teal-200">{service.category}</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">{service.name}</h2>
          <p className="mt-2 text-slate-300">{service.description}</p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Example deliverables</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-300">
            {service.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white">Outcomes</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-300">
            {service.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-4">
          <p className="text-sm text-slate-200">Ideal for: {service.idealCustomer}</p>
        </div>
        <Button href="/contact" variant="secondary" className="self-start">
          Talk to us about this service
        </Button>
      </div>
    </section>
  );
}
