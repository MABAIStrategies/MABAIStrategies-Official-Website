import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';
import { Button } from '@/components/ui/button';

export function CaseStudiesPreview() {
  return (
    <section className="section-padding border-t border-white/5" id="case-studies">
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Case studies</p>
          <h2 className="text-3xl font-semibold text-white">Proof in critical industries.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.slice(0, 3).map((study) => (
            <Link
              key={study.id}
              href={`/case-studies/${study.slug}`}
              className="rounded-3xl border border-white/5 bg-slate-900/60 p-6 transition hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-teal-200">{study.industry}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{study.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{study.problem}</p>
              <p className="mt-4 text-sm text-slate-400">{study.results}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/case-studies" variant="secondary">
            View all case studies
          </Button>
        </div>
      </div>
    </section>
  );
}
