import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold font-display text-slate-900 mb-6">Privacy Policy</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Last Updated: March 31, 2026
          </p>
        </motion.div>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary-blue mb-4">
              <ShieldCheck size={28} />
              <h2 className="text-2xl font-bold text-slate-900 m-0">1. Introduction</h2>
            </div>
            <p>
              Eco-Fibre Network Solutions ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our fiber internet services, visit our website, or interact with us.
            </p>
            <p>
              By using our services, you consent to the data practices described in this policy in accordance with the Data Protection Act, 2019 of Kenya.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary-blue mb-4">
              <Eye size={28} />
              <h2 className="text-2xl font-bold text-slate-900 m-0">2. Information We Collect</h2>
            </div>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Identification:</strong> Name, ID/Passport number, KRA PIN, and physical address.</li>
              <li><strong>Contact Information:</strong> Phone number and email address.</li>
              <li><strong>Technical Data:</strong> IP addresses, MAC addresses, connection logs, and bandwidth usage statistics.</li>
              <li><strong>Billing Data:</strong> M-Pesa transaction details, payment history, and billing address.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary-blue mb-4">
              <Lock size={28} />
              <h2 className="text-2xl font-bold text-slate-900 m-0">3. How We Use Your Information</h2>
            </div>
            <p>We use the collected information for purposes including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing and maintaining our internet services.</li>
              <li>Processing payments and managing your account.</li>
              <li>Responding to customer support requests and technical issues.</li>
              <li>Complying with legal obligations and regulatory requirements from the Communications Authority of Kenya (CA).</li>
              <li>Improving our network performance and developing new products.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary-blue mb-4">
              <FileText size={28} />
              <h2 className="text-2xl font-bold text-slate-900 m-0">4. Data Security</h2>
            </div>
            <p>
              We implement robust technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">5. Disclosure of Information</h2>
            <p>
              We do not sell your personal data. We may disclose information only when required by law, to protect our rights, or to trusted third-party service providers who assist us in operating our business (e.g., billing platforms), provided they agree to keep this information confidential.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">6. Your Rights</h2>
            <p>
              Under the Data Protection Act, you have the right to access, correct, or request the deletion of your personal data. You may also object to the processing of your data for marketing purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact our Data Protection Officer at:
              <br />
              <strong>Email:</strong> privacy@ecofibre.co.ke
              <br />
              <strong>Phone:</strong> 0745806488
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
