import React from 'react';
import { motion } from 'motion/react';
import { Scale, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <section className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-primary-orange font-bold uppercase tracking-[0.2em] text-sm mb-3">Legal</h2>
          <h1 className="text-4xl font-bold font-display text-slate-900 mb-6">Terms and Conditions</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Last Updated: March 31, 2026
          </p>
        </motion.div>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary-blue mb-4">
              <Scale size={28} />
              <h2 className="text-2xl font-bold text-slate-900 m-0">1. Agreement to Terms</h2>
            </div>
            <p>
              By accessing or using Eco-Fibre Network Solutions' services, you agree to be bound by these Terms and Conditions. These terms apply to all users, customers, and others who access or use our services.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary-blue mb-4">
              <CheckCircle size={28} />
              <h2 className="text-2xl font-bold text-slate-900 m-0">2. Service Provision</h2>
            </div>
            <p>
              We provide high-speed fiber internet services subject to network availability and technical feasibility. While we strive for 99.9% uptime, we do not guarantee uninterrupted service. Maintenance and upgrades may cause temporary outages.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Installation:</strong> Installation fees are non-refundable once the service is activated.</li>
              <li><strong>Equipment:</strong> Any equipment provided by us (e.g., ONTs/Routers) remains our property unless otherwise stated in writing.</li>
              <li><strong>Support:</strong> Technical support is available 24/7 via our customer care lines.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary-blue mb-4">
              <AlertCircle size={28} />
              <h2 className="text-2xl font-bold text-slate-900 m-0">3. Billing and Payment</h2>
            </div>
            <p>
              Our services are provided on a pre-paid or post-paid basis as per the selected package.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Payments:</strong> Payments must be made via our official M-Pesa Till Number (4056724) or other approved channels.</li>
              <li><strong>Suspension:</strong> Failure to pay by the due date will result in automatic service suspension.</li>
              <li><strong>Reconnection:</strong> Reconnection is automatic upon successful payment of outstanding balances.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">4. Customer Responsibilities</h2>
            <p>
              Customers are responsible for maintaining the security of their local network and passwords. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Resell our services to third parties without a formal wholesale agreement.</li>
              <li>Use the service for illegal activities as defined by Kenyan law.</li>
              <li>Tamper with our network infrastructure or equipment.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">5. Limitation of Liability</h2>
            <p>
              Eco-Fibre shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, including but not limited to loss of data, profits, or business interruption.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">6. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your service immediately, without prior notice or liability, for any reason, including breach of these Terms and Conditions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">7. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the Republic of Kenya, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary-blue mb-4">
              <HelpCircle size={28} />
              <h2 className="text-2xl font-bold text-slate-900 m-0">8. Changes to Terms</h2>
            </div>
            <p>
              We reserve the right to modify or replace these Terms at any time. We will notify customers of significant changes via email or SMS.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
