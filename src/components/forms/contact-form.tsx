'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const initialState = {
  name: '',
  email: '',
  company: '',
  role: '',
  companySize: '21-100',
  message: ''
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      setStatus('success');
      setForm(initialState);
    } else {
      const data = await res.json().catch(() => ({ message: 'Something went wrong' }));
      setError(data.message ?? 'Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          Name
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white focus:border-teal-200"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Work email
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white focus:border-teal-200"
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          Company
          <input
            required
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white focus:border-teal-200"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Role
          <input
            required
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white focus:border-teal-200"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm">
        Company size
        <select
          value={form.companySize}
          onChange={(e) => setForm({ ...form, companySize: e.target.value })}
          className="rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white focus:border-teal-200"
        >
          {['1-20', '21-100', '101-500', '501-2000', '2000+'].map((size) => (
            <option key={size} value={size} className="bg-slate-900 text-white">
              {size}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-2 text-sm">
        What do you want to automate?
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 text-white focus:border-teal-200"
        />
      </label>
      {status === 'success' && <p className="text-sm text-teal-200">Thanks! We will reply within one business day.</p>}
      {status === 'error' && <p className="text-sm text-rose-300">{error}</p>}
      <Button type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Submit'}
      </Button>
    </form>
  );
}
