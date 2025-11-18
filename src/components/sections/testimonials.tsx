import { testimonials } from '@/data/testimonials';

export function TestimonialsSection() {
  return (
    <section className="section-padding" id="testimonials">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Testimonials</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Operators trust our systems.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-3xl border border-white/5 bg-slate-900/60 p-6">
              <p className="text-slate-200">“{testimonial.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-white">{testimonial.name}</p>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                {testimonial.role} · {testimonial.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
