import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="section-padding">
      <div className="container text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-teal-200">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">This page has not been automated yet.</h1>
        <p className="mt-4 text-slate-300">Return to the home page or reach out to plan your system.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="/" className="rounded-full border border-teal-200 px-6 py-3 text-teal-200">
            Go home
          </Link>
          <Link href="/contact" className="rounded-full border border-white/20 px-6 py-3 text-white">
            Book a call
          </Link>
        </div>
      </div>
    </div>
  );
}
