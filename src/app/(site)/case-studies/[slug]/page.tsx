import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { caseStudies } from '@/data/caseStudies';

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) return { title: 'Case study not found' };
  return {
    title: `${study.title} | Case Study`,
    description: study.problem
  };
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) notFound();

  return (
    <div className="section-padding">
      <div className="container space-y-10">
        <header>
          <p className="text-sm uppercase tracking-[0.3em] text-teal-200">{study.industry}</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">{study.title}</h1>
          <p className="mt-2 text-slate-300">{study.companySize}</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-white">Problem</h2>
              <p className="mt-2 text-slate-300">{study.problem}</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">Approach</h2>
              <p className="mt-2 text-slate-300">{study.approach}</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">System Design</h2>
              <p className="mt-2 text-slate-300">{study.systemDesign}</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white">Results</h2>
              <p className="mt-2 text-slate-300">{study.results}</p>
            </section>
          </article>
          <aside className="space-y-6 rounded-3xl border border-white/5 bg-slate-900/60 p-6">
            <div>
              <h3 className="text-sm uppercase tracking-[0.3em] text-teal-200">Metrics</h3>
              <ul className="mt-4 space-y-3">
                {study.metrics.map((metric) => (
                  <li key={metric.label} className="flex justify-between text-sm text-slate-200">
                    <span>{metric.label}</span>
                    <span className="font-semibold text-white">{metric.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm text-slate-200">“{study.quote}”</p>
              <p className="mt-3 text-xs uppercase tracking-wide text-slate-400">
                {study.testimonialName} · {study.testimonialRole}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
