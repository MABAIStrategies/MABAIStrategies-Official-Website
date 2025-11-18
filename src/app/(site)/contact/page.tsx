import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/contact-form';

export const metadata: Metadata = {
  title: 'Contact | MAB AI Strategies',
  description: 'Book a systems strategy call or request an automation audit.'
};

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Contact</p>
          <h1 className="text-4xl font-semibold text-white">Tell us what you want to automate.</h1>
          <p className="text-lg text-slate-300">
            We typically reply within one business day with next steps or a request for deeper discovery.
          </p>
          <div className="rounded-3xl border border-white/5 bg-slate-900/60 p-6 text-sm text-slate-300">
            <p className="font-semibold text-white">Prefer email?</p>
            <p>
              Email us at{' '}
              <a href="mailto:hello@mabaistrategies.com" className="text-teal-200">
                hello@mabaistrategies.com
              </a>
              .
            </p>
          </div>
        </div>
        <div className="rounded-3xl border border-white/5 bg-slate-900/60 p-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
