import type { Metadata } from 'next';
import { caseStudies } from '@/data/caseStudies';
import { CaseStudyCard } from '@/components/cards/case-study-card';

export const metadata: Metadata = {
  title: 'Case Studies | MAB AI Strategies',
  description: 'Real outcomes from telecom, SaaS, and professional services organizations.'
};

export default function CaseStudiesPage() {
  return (
    <div className="section-padding">
      <div className="container space-y-10">
        <header className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Case studies</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Systems that hold up in the enterprise.</h1>
          <p className="mt-4 text-slate-300">Each engagement includes diagnostics, build, and enablement.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </div>
  );
}
