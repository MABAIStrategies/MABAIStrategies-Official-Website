import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';

const milestones = [
  { year: '2015-2019', detail: 'Built GTM and RevOps automation teams inside high-growth SaaS orgs.' },
  { year: '2020-2022', detail: 'Led enterprise workflow programs across telecom and financial services.' },
  { year: '2023', detail: 'Founded MAB AI Strategies to focus on agentic systems and automation PMOs.' }
];

const values = [
  'Clarity beats hype—every workflow has an owner and a metric.',
  'AI augments operators; humans keep authorship of judgment calls.',
  'Governance and documentation are non-negotiable.',
  'We design for handoff so internal teams can own the system.'
];

export const metadata: Metadata = {
  title: 'About | MAB AI Strategies',
  description: 'Founder-led AI automation consultancy for B2B organizations.'
};

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container space-y-12">
        <header className="grid gap-6 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-teal-200">About</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Founder-led, operator-approved.</h1>
            <p className="mt-4 text-lg text-slate-300">
              After a decade building automation programs inside telecom, SaaS, and professional services, our founder created
              MAB AI Strategies to help leaders deploy AI with rigor and measurable ROI.
            </p>
            <Button href="/contact" className="mt-6">
              Start a conversation
            </Button>
          </div>
          <div className="rounded-3xl border border-white/5 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">Philosophy</h2>
            <p className="mt-3 text-slate-300">
              We believe systems should make sense to the people running them. AI is powerful when it respects business rules,
              elevates the signal in data, and leaves a clear audit trail.
            </p>
          </div>
        </header>
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/5 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">Timeline</h2>
            <ul className="mt-4 space-y-4 text-slate-300">
              {milestones.map((milestone) => (
                <li key={milestone.year}>
                  <p className="font-semibold text-white">{milestone.year}</p>
                  <p>{milestone.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/5 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">Values</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-300">
              {values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="rounded-3xl border border-white/5 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-white">How engagements run</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-300">
            <li>Systems interview + data pull to map the baseline.</li>
            <li>Design sprints with stakeholders to validate architecture.</li>
            <li>Deployment paired with enablement, observability, and handoff.</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
