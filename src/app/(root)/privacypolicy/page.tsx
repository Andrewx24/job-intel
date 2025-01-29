import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Job Intel',
  description: 'Our commitment to protecting your privacy and data',
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">
          Last updated: January 29, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            Job Intel (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard 
            your information when you use our company intelligence platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <h3 className="text-xl font-medium mb-3">Business Information</h3>
          <p>
            We collect publicly available business information, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Company names, addresses, and contact information</li>
            <li>Employee counts and business metrics</li>
            <li>Industry classifications and business registrations</li>
            <li>Public filings and corporate documents</li>
          </ul>

          <h3 className="text-xl font-medium mb-3">User Information</h3>
          <p>
            When you create an account, we collect:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and email address</li>
            <li>Account credentials</li>
            <li>Usage data and search history</li>
            <li>Payment information (processed securely through our payment providers)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and maintain our services</li>
            <li>Improve and personalize user experience</li>
            <li>Process transactions and send related information</li>
            <li>Send administrative information and updates</li>
            <li>Respond to customer service requests</li>
            <li>Send marketing communications (with your consent)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
          <p>
            We implement appropriate technical and organizational measures to protect 
            your information. However, no method of transmission over the internet is 
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
            <br />
            Email: hello@jobintel.com
            <br />
           
          </p>
        </section>
      </div>
    </div>
  );
}
