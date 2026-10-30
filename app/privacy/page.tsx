import { LegalPage } from '@/components/legal-page'

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <section>
        <h2 className="text-base font-semibold text-[#111111]">Overview</h2>
        <p className="mt-3">HM Business Services LLC respects your privacy. This policy explains how information submitted through this website may be used.</p>
      </section>
      <section>
        <h2 className="text-base font-semibold text-[#111111]">Information we receive</h2>
        <p className="mt-3">If you contact us, we may receive your name, email address, phone number, and the contents of your message. We use this information only to respond to your inquiry and operate our business.</p>
      </section>
      <section>
        <h2 className="text-base font-semibold text-[#111111]">Sharing and retention</h2>
        <p className="mt-3">We do not sell personal information. We may share information with service providers who help us operate the website or respond to inquiries. We retain information only as long as reasonably necessary for those purposes or as required by law.</p>
      </section>
      <section>
        <h2 className="text-base font-semibold text-[#111111]">Contact</h2>
        <p className="mt-3">Questions about this policy may be sent to contact@hmbusinessservices.com.</p>
      </section>
    </LegalPage>
  )
}
