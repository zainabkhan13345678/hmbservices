import { LegalPage } from '@/components/legal-page'

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p className="text-xs text-neutral-500">Last updated: October 30, 2026</p>
      <p>HM Business Services LLC (“we”, “us”, or “our”) respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you use our website.</p>
      <section><h2 className="text-base font-semibold text-[#111111]">1. Information We Collect</h2><p className="mt-3">We may collect the following information when you contact us through the website:</p><ul className="mt-3 list-disc space-y-1 pl-5"><li>Name</li><li>Email address</li><li>Phone number (if provided)</li><li>Message content</li><li>Any other information you choose to include in your inquiry</li></ul><p className="mt-3">We do not collect payment information or sensitive personal data through this website.</p></section>
      <section><h2 className="text-base font-semibold text-[#111111]">2. How We Use Your Information</h2><p className="mt-3">We use the information you provide solely to:</p><ul className="mt-3 list-disc space-y-1 pl-5"><li>Respond to your inquiries</li><li>Communicate with you about our services</li><li>Operate and improve our website and business</li></ul></section>
      <section><h2 className="text-base font-semibold text-[#111111]">3. Sharing of Information</h2><p className="mt-3">We do not sell, rent, or trade your personal information. We may share information only with service providers who help us operate the website or respond to inquiries (for example, email or hosting providers), and only to the extent necessary.</p></section>
      <section><h2 className="text-base font-semibold text-[#111111]">4. Data Retention</h2><p className="mt-3">We retain personal information only for as long as reasonably necessary to respond to your inquiry or as required by applicable law.</p></section>
      <section><h2 className="text-base font-semibold text-[#111111]">5. Your Rights</h2><p className="mt-3">Depending on your location, you may have rights to access, correct, or request deletion of your personal information. To exercise these rights, please contact us at the email below.</p></section>
      <section><h2 className="text-base font-semibold text-[#111111]">6. Contact Us</h2><p className="mt-3">If you have any questions about this Privacy Policy, please contact us at:<br />info@hmbservices.cc</p><p className="mt-3">HM Business Services LLC<br />Wyoming Limited Liability Company</p></section>
    </LegalPage>
  )
}
