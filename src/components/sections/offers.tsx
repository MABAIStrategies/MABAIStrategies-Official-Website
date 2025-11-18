import { offers } from '@/data/offers';
import { Button } from '@/components/ui/button';

export function OffersSection() {
  return (
    <section className="section-padding border-y border-white/5 bg-slate-950">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Signature offers</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Repeatable motions, custom outcomes.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {offers.map((offer) => (
            <div key={offer.title} className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold text-white">{offer.title}</h3>
              <p className="mt-2 text-slate-300">{offer.description}</p>
              <Button href="/contact" variant="secondary" size="sm" className="mt-4">
                {offer.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
