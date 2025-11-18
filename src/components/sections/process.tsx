const steps = [
  {
    title: 'Diagnose',
    description: 'Rapid assessment, data pulls, and shadowing to expose leverage points.'
  },
  {
    title: 'Design',
    description: 'Blueprints, automation roadmaps, and clear governance for humans + AI.'
  },
  {
    title: 'Deploy',
    description: 'Implementation sprints with telemetry, training, and success metrics.'
  }
];

export function ProcessSection() {
  return (
    <section className="section-padding">
      <div className="container text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-teal-200">How it works</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Diagnose → Design → Deploy.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-white/5 bg-slate-900/50 p-6">
              <p className="text-sm text-teal-200">Step {index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
