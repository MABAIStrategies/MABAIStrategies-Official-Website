import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

const insightsDirectory = path.join(process.cwd(), 'src/content/insights');

export async function getAllInsightMetadata() {
  const files = fs.readdirSync(insightsDirectory).filter((file) => file.endsWith('.mdx'));
  return files
    .map((filename) => {
      const filePath = path.join(insightsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      return {
        slug: filename.replace(/\.mdx$/, ''),
        title: data.title as string,
        publishedAt: data.publishedAt as string,
        tags: (data.tags ?? []) as string[],
        excerpt: data.excerpt as string
      };
    })
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export async function getInsightBySlug(slug: string) {
  const filePath = path.join(insightsDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);

  const { content: mdxContent } = await compileMDX<{ [key: string]: unknown }>({
    source: content,
    options: {
      parseFrontmatter: false
    }
  });

  return {
    frontmatter: {
      title: data.title as string,
      publishedAt: data.publishedAt as string,
      tags: (data.tags ?? []) as string[],
      excerpt: data.excerpt as string
    },
    content: mdxContent
  };
}
