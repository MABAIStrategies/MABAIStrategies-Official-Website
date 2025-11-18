import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllInsightMetadata } from '@/lib/content';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Insights | MAB AI Strategies',
  description: 'Practical guidance on AI systems, automation, and multi-agent workflows.'
};

export default async function InsightsPage() {
  const posts = await getAllInsightMetadata();

  return (
    <div className="section-padding">
      <div className="container space-y-10">
        <header className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Insights</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Field notes from building AI systems.</h1>
          <p className="mt-4 text-slate-300">
            Articles, checklists, and frameworks for leaders who need clarity.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="rounded-3xl border border-white/5 bg-slate-900/60 p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-teal-200">{formatDate(post.publishedAt)}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{post.title}</h2>
              <p className="mt-2 text-slate-300">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
