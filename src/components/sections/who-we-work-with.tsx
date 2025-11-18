const audience = [
  'Mid-market and enterprise operators',
  'GTM, RevOps, and CX leaders',
  'IT, HR, and Compliance stakeholders',
  'Founders and boards needing clarity'
];

export function WhoWeWorkWith() {
  return (
    <section className="section-padding">
      <div className="container rounded-3xl border border-white/5 bg-slate-900/50 p-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Who we work with</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Leaders accountable for real impact.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {audience.map((item) => (
            <p key={item} className="rounded-2xl border border-white/5 bg-slate-900/80 px-4 py-3 text-slate-200">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
