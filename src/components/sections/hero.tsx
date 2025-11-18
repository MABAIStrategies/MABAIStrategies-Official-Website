import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="section-padding">
      <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-200">MAB AI Strategies LLC</p>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            Engineering AI systems that think, sell, and scale.
          </h1>
          <p className="text-lg text-slate-300">
            We design AI-driven workflows, multi-agent systems, and automations that turn B2B operations
            into high-leverage, scalable machines.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact">Book a Systems Strategy Call</Button>
            <Button href="#insights" variant="secondary">
              Download the AI Systems Brief
            </Button>
          </div>
        </div>
        <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-card">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Signals we optimize</p>
          <ul className="mt-6 space-y-4 text-slate-100">
            <li className="flex items-start gap-3">
              <span className="text-teal-200">●</span>
              Pipeline velocity, conversion, and accuracy.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-200">●</span>
              Human hours removed from manual governance.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-200">●</span>
              Data reliability across revenue, ops, and finance.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
