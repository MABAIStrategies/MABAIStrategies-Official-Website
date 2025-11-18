import type { Metadata } from 'next';

const experiments = [
  {
    title: 'Revenue Systems Monitor',
    description: 'Live telemetry dashboard for automations running across CRM, CPQ, and finance stacks.'
  },
  {
    title: 'Policy Copilot',
    description: 'Agent that drafts compliant policy updates and routes approvals with full traceability.'
  }
];

export const metadata: Metadata = {
  title: 'Lab | MAB AI Strategies',
  description: 'Experimental tools and prototypes from the MAB AI Lab.'
};

export default function LabPage() {
  return (
    <div className="section-padding">
      <div className="container space-y-8">
        <header className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Lab</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Prototypes from our automation lab.</h1>
          <p className="mt-4 text-slate-300">We build opinionated tools to accelerate delivery and de-risk programs.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {experiments.map((experiment) => (
            <div key={experiment.title} className="rounded-3xl border border-white/5 bg-slate-900/60 p-6">
              <h2 className="text-2xl font-semibold text-white">{experiment.title}</h2>
              <p className="mt-2 text-slate-300">{experiment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
