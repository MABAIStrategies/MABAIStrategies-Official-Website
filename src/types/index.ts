export type Service = {
  id: number;
  slug: string;
  name: string;
  description: string;
  category: string;
  deliverables: string[];
  outcomes: string[];
  idealCustomer: string;
  priority: number;
};

export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type CaseStudy = {
  id: number;
  slug: string;
  title: string;
  industry: string;
  companySize: string;
  problem: string;
  approach: string;
  systemDesign: string;
  results: string;
  metrics: CaseStudyMetric[];
  quote: string;
  testimonialName: string;
  testimonialRole: string;
};

export type InsightPost = {
  slug: string;
  title: string;
  publishedAt: string;
  tags: string[];
  excerpt: string;
  content: string;
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export type Lead = {
  id: number;
  createdAt: Date;
  name: string;
  email: string;
  company: string;
  role: string;
  companySize: string;
  message: string;
  source?: string;
};
