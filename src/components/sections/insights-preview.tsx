import Link from 'next/link';
import { getAllInsightMetadata } from '@/lib/content';
import { formatDate } from '@/lib/utils';

export async function InsightsPreview() {
  const posts = await getAllInsightMetadata();
  return (
    <section className="section-padding" id="insights">
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Insights</p>
          <h2 className="text-3xl font-semibold text-white">Playbooks from the field.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <Link key={post.slug} href={`/insights/${post.slug}`} className="rounded-3xl border border-white/5 bg-slate-900/60 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-teal-200">{formatDate(post.publishedAt)}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/insights" className="text-sm font-semibold text-teal-200">
            Read all insights →
          </Link>
        </div>
      </div>
    </section>
  );
}
