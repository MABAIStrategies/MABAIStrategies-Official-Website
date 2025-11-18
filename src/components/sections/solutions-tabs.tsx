'use client';

import { useState } from 'react';
import { solutionCategories } from '@/data/solutions';

export function SolutionsTabs() {
  const [active, setActive] = useState(solutionCategories[0].id);
  const current = solutionCategories.find((category) => category.id === active) ?? solutionCategories[0];

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {solutionCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActive(category.id)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active === category.id
                ? 'border-teal-200 bg-teal-200/20 text-white'
                : 'border-white/10 bg-transparent text-slate-300 hover:border-white/40'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <p className="mt-6 text-slate-300">{current.description}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {current.solutions.map((solution) => (
          <div key={solution.title} className="rounded-3xl border border-white/5 bg-slate-900/60 p-6">
            <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
            <p className="mt-2 text-slate-300">{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
