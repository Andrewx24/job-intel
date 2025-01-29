import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Job Intel',
  description: 'Terms and conditions for using Job Intel services',
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-8">
          Last updated: January 29, 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing or using Job Intel&apos;s services, you agree to be bound by these 
            Terms of Service and all applicable laws and regulations. If you disagree 
            with any part of these terms, you may not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p>
            We grant you a limited, non-exclusive, non-transferable, and revocable 
            license to use our platform for your business purposes, subject to these 
            Terms of Service and your subscription plan.
          </p>
          <p className="mt-4">
            You may not:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Modify or copy the materials outside of normal platform usage</li>
            <li>Use the materials for commercial resale</li>
            <li>Attempt to decompile or reverse engineer any software</li>
            <li>Remove any copyright or proprietary notations</li>
            <li>Transfer the materials to another person or entity</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
          <p>
            When using our services, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate account information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Use the service in compliance with applicable laws</li>
            <li>Not engage in unauthorized data collection or scraping</li>
            <li>Not interfere with service operation or security</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Subscription and Payments</h2>
          <p>
            Subscription fees are billed in advance on a recurring basis. You agree to 
            pay all fees associated with your subscription plan. Cancellations take 
            effect at the end of the current billing period.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Usage and Privacy</h2>
          <p>
            Our collection and use of your information is governed by our Privacy Policy, 
            which is incorporated into these Terms of Service by reference.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Disclaimers</h2>
          <p>
            Our services are provided &ldquo;as is&rdquo; without warranties of any kind, either 
            express or implied. We do not guarantee the accuracy, completeness, or 
            timeliness of any information provided through our platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p>
            In no event shall Job Intel be liable for any indirect, incidental, special, 
            consequential, or punitive damages arising out of or relating to your use 
            of our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify 
            users of any material changes via email or through the platform. Your 
            continued use of the service after such modifications constitutes acceptance 
            of the updated terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
          <p>
            Questions about these Terms of Service should be sent to:
            <br />
            Email: legal@jobintel.com
            <br />
            Address: [Your Company Address]
          </p>
        </section>
      </div>
    </div>
  );
}