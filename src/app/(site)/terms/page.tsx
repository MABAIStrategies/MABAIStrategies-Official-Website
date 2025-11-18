import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | MAB AI Strategies'
};

export default function TermsPage() {
  return (
    <div className="section-padding">
      <div className="container prose prose-invert">
        <h1>Terms of Service</h1>
        <p>Use of this site does not create a client relationship. Engagements require a signed statement of work.</p>
        <p>
          All content is provided for informational purposes only. We are not responsible for outcomes resulting from
          unauthorized use of the material on this site.
        </p>
      </div>
    </div>
  );
}
