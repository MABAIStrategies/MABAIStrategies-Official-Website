import { services } from '@/data/services';

export function ServiceOverview() {
  return (
    <section className="section-padding border-t border-white/5 bg-slate-950" id="services">
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Core Services</p>
          <h2 className="text-3xl font-semibold text-white">Architecture to outcomes.</h2>
          <p className="text-slate-300">
            Strategy, engineering, and enablement to launch AI automations with confidence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.id} className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-teal-200">{service.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{service.name}</h3>
              <p className="mt-2 text-slate-300">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {service.deliverables.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
