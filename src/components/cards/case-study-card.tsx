import Link from 'next/link';
import type { CaseStudy } from '@/types';

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="rounded-3xl border border-white/5 bg-slate-900/60 p-6 transition hover:-translate-y-1"
    >
      <p className="text-xs uppercase tracking-[0.3em] text-teal-200">{study.industry}</p>
      <h3 className="mt-3 text-xl font-semibold text-white">{study.title}</h3>
      <p className="mt-2 text-sm text-slate-300">{study.problem}</p>
      <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-400">
        {study.metrics.map((metric) => (
          <div key={metric.label}>
            <p className="font-semibold text-white">{metric.value}</p>
            <p>{metric.label}</p>
          </div>
        ))}
      </div>
    </Link>
  );
}
