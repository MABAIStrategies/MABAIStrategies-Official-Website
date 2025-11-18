import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | MAB AI Strategies'
};

export default function PrivacyPage() {
  return (
    <div className="section-padding">
      <div className="container prose prose-invert">
        <h1>Privacy Policy</h1>
        <p>
          We collect contact information solely to respond to inbound requests and provide services. Data is stored securely in
          our CRM and automation tools with least-privilege access. We do not sell your data. Contact us if you would like your
          data removed.
        </p>
        <p>Updated: May 2024.</p>
      </div>
    </div>
  );
}
