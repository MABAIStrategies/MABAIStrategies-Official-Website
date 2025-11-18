import type { Metadata } from 'next';
import { SolutionsTabs } from '@/components/sections/solutions-tabs';

export const metadata: Metadata = {
  title: 'Solutions | MAB AI Strategies',
  description: 'Cross-functional AI automation solutions segmented by business function.'
};

export default function SolutionsPage() {
  return (
    <div className="section-padding">
      <div className="container space-y-10">
        <header className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Solutions</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Automation tailored to every function.</h1>
          <p className="mt-4 text-slate-300">
            Switch between teams to explore example systems and automations.
          </p>
        </header>
        <SolutionsTabs />
      </div>
    </div>
  );
}
