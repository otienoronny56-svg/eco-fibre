import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Zap, Users, Info } from 'lucide-react';

export default function AcceptableUsePolicy() {
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
          <h1 className="text-4xl font-bold font-display text-slate-900 mb-6">Acceptable Use Policy</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Last Updated: March 31, 2026
          </p>
        </motion.div>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary-blue mb-4">
              <ShieldAlert size={28} />
              <h2 className="text-2xl font-bold text-slate-900 m-0">1. Purpose</h2>
            </div>
            <p>
              This Acceptable Use Policy ("AUP") outlines the rules and guidelines for using Eco-Fibre Network Solutions' internet services. It is designed to ensure a safe, reliable, and high-quality experience for all our customers.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary-blue mb-4">
              <Zap size={28} />
              <h2 className="text-2xl font-bold text-slate-900 m-0">2. Prohibited Activities</h2>
            </div>
            <p>You may not use our network for activities including, but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Illegal Acts:</strong> Any activity that violates local, national, or international laws (e.g., child pornography, fraud, or piracy).</li>
              <li><strong>Network Abuse:</strong> Intentional interference with our network or other users' connections (e.g., DDoS attacks, spreading malware).</li>
              <li><strong>Spamming:</strong> Sending unsolicited bulk emails or communications.</li>
              <li><strong>Unauthorized Access:</strong> Attempting to gain unauthorized access to any computer system or network.</li>
              <li><strong>Reselling:</strong> Reselling or sharing the service with unauthorized third parties outside your household or business premises.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary-blue mb-4">
              <Users size={28} />
              <h2 className="text-2xl font-bold text-slate-900 m-0">3. Fair Usage Policy (FUP)</h2>
            </div>
            <p>
              To maintain optimal performance for all users, we implement a Fair Usage Policy. While our "Unlimited" packages provide continuous connectivity, we reserve the right to manage bandwidth for users whose usage patterns significantly impact the network's quality of service for others.
            </p>
            <p>
              This may include temporary speed throttling during peak hours for extremely high-volume data users.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">4. Security</h2>
            <p>
              Customers are responsible for securing their own devices and local networks. We recommend using up-to-date antivirus software and strong Wi-Fi passwords. Any security breach originating from your connection is your responsibility.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">5. Monitoring</h2>
            <p>
              We do not monitor the content of your communications. However, we may monitor network traffic patterns to ensure compliance with this AUP and to optimize network performance. We will cooperate with legal authorities when required by law.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary-blue mb-4">
              <Info size={28} />
              <h2 className="text-2xl font-bold text-slate-900 m-0">6. Enforcement</h2>
            </div>
            <p>
              Violation of this AUP may result in a warning, temporary suspension, or permanent termination of your service without refund. We reserve the right to take legal action where necessary.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">7. Reporting Violations</h2>
            <p>
              If you become aware of any violation of this AUP, please report it to:
              <br />
              <strong>Email:</strong> abuse@ecofibre.co.ke
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
