import { LegalPage } from '@/components/legal-page'

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <p className="text-xs text-neutral-500">Last updated: October 30, 2026</p>
      <p>Please read these Terms of Service carefully before using the website of HM Business Services LLC (“we”, “us”, or “our”).</p>
      <section><h2 className="text-base font-semibold text-[#111111]">1. Acceptance of Terms</h2><p className="mt-3">By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree, please do not use the website.</p></section>
      <section><h2 className="text-base font-semibold text-[#111111]">2. About the Website</h2><p className="mt-3">This website provides general information about HM Business Services LLC and its planned hotel management consulting services. All content is provided for informational purposes only and does not constitute legal, financial, operational, or professional advice.</p></section>
      <section><h2 className="text-base font-semibold text-[#111111]">3. No Client Relationship</h2><p className="mt-3">Submitting an inquiry or contacting us through this website does not create a client, advisory, or professional relationship. Any engagement for services will only be established through a separate written agreement signed by both parties.</p></section>
      <section><h2 className="text-base font-semibold text-[#111111]">4. Pre-Launch Status</h2><p className="mt-3">HM Business Services LLC is a newly formed entity and does not currently act as manager of record for any hotel properties. Information on this website reflects our intended services and should not be interpreted as a representation of current management contracts or portfolio.</p></section>
      <section><h2 className="text-base font-semibold text-[#111111]">5. Intellectual Property</h2><p className="mt-3">All content on this website, including text, design, and logos, is the property of HM Business Services LLC and may not be used without our prior written permission.</p></section>
      <section><h2 className="text-base font-semibold text-[#111111]">6. Limitation of Liability</h2><p className="mt-3">To the fullest extent permitted by law, HM Business Services LLC shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.</p></section>
      <section><h2 className="text-base font-semibold text-[#111111]">7. Changes to These Terms</h2><p className="mt-3">We may update these Terms of Service from time to time. The updated version will be posted on this page with a revised “Last updated” date.</p></section>
      <section><h2 className="text-base font-semibold text-[#111111]">8. Contact</h2><p className="mt-3">If you have any questions about these Terms, please contact us at:<br />contact@hmbusinessservices.com</p><p className="mt-3">HM Business Services LLC<br />Wyoming Limited Liability Company</p></section>
    </LegalPage>
  )
}
