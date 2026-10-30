import { LegalPage } from '@/components/legal-page'

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <section>
        <h2 className="text-base font-semibold text-[#111111]">Acceptance</h2>
        <p className="mt-3">By using this website, you agree to these terms. If you do not agree, please do not use the website.</p>
      </section>
      <section>
        <h2 className="text-base font-semibold text-[#111111]">Website information</h2>
        <p className="mt-3">This website provides general information about HM Business Services LLC and its planned hotel management consulting services. Content is provided for informational purposes and is not legal, financial, or operational advice.</p>
      </section>
      <section>
        <h2 className="text-base font-semibold text-[#111111]">No engagement</h2>
        <p className="mt-3">Submitting an inquiry does not create a client relationship or guarantee that HM Business Services LLC will provide services. Any engagement will be governed by a separate written agreement.</p>
      </section>
      <section>
        <h2 className="text-base font-semibold text-[#111111]">Contact</h2>
        <p className="mt-3">Questions about these terms may be sent to contact@hmbusinessservices.com.</p>
      </section>
    </LegalPage>
  )
}
