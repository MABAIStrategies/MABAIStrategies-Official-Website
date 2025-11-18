import { automationIdeas } from '@/data/ideas';

export function AutomationIdeasBank() {
  return (
    <section className="section-padding" id="ideas">
      <div className="container">
        <div className="rounded-3xl border border-white/5 bg-slate-900/60 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Automation ideas bank</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Prompts we turn into systems.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {automationIdeas.map((idea) => (
              <div key={idea} className="rounded-2xl border border-white/5 bg-slate-900/80 p-4 text-slate-200">
                {idea}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
