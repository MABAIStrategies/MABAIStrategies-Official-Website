import { Button } from '@/components/ui/button';

export function FinalCTA() {
  return (
    <section className="section-padding">
      <div className="container rounded-3xl border border-white/5 bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Ready when you are</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Book a systems strategy call.</h2>
        <p className="mt-3 text-slate-300">
          We meet you where you are, align stakeholders, and ship automations with proof.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button href="/contact">Book a call</Button>
          <Button href="/services" variant="secondary">
            Explore services
          </Button>
        </div>
      </div>
    </section>
  );
}
