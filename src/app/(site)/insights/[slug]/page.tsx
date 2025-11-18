import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllInsightMetadata, getInsightBySlug } from '@/lib/content';
import { formatDate } from '@/lib/utils';

export async function generateStaticParams() {
  const posts = await getAllInsightMetadata();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const posts = await getAllInsightMetadata();
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) return { title: 'Insight not found' };
  return {
    title: `${post.title} | Insights`,
    description: post.excerpt
  };
}

export default async function InsightDetail({ params }: { params: { slug: string } }) {
  try {
    const { frontmatter, content } = await getInsightBySlug(params.slug);
    return (
      <div className="section-padding">
        <div className="container prose prose-invert max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-200">
            {formatDate(frontmatter.publishedAt)}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white">{frontmatter.title}</h1>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
            {frontmatter.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
          <article className="mt-10 space-y-6 text-slate-100">{content}</article>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
