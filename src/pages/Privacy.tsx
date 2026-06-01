export function Privacy() {
  return (
    <main className="pt-28 lg:pt-72">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="font-display text-4xl font-bold text-text mb-2">Privacy Policy</h1>
        <p className="text-text-subtle text-sm mb-10">Effective date: June 1, 2026 · The Morning Company Pvt Ltd.</p>

        <div className="prose prose-invert max-w-none space-y-8 text-text-muted text-sm leading-relaxed">

          <section>
            <h2 className="text-text font-semibold text-lg mb-3">1. Who we are</h2>
            <p>
              Vivido is a product of The Morning Company Pvt Ltd., a company incorporated in India.
              We operate the website at vividoapp.com and the Vivido desktop application for macOS.
              References to "we", "us", or "our" in this policy refer to The Morning Company Pvt Ltd.
            </p>
          </section>

          <section>
            <h2 className="text-text font-semibold text-lg mb-3">2. What data we collect</h2>
            <p className="mb-3">We collect the following categories of personal data:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-text">Email address</strong> — collected when you join the waitlist. Used to send you product updates and your early access invitation.</li>
              <li><strong className="text-text">YouTube channel URL</strong> — optionally provided at waitlist signup. Used to understand our creator audience and prioritise access.</li>
              <li><strong className="text-text">Referral activity</strong> — we track how many people you have referred via your unique referral link to determine queue position.</li>
              <li><strong className="text-text">Usage analytics</strong> — we collect anonymised, aggregated analytics about how the website and app are used. No personally identifiable information is included.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-text font-semibold text-lg mb-3">3. How we use your data</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To notify you when early access opens</li>
              <li>To send you product updates (you may unsubscribe at any time)</li>
              <li>To manage waitlist position via referral tracking</li>
              <li>To improve the product based on aggregated usage patterns</li>
            </ul>
            <p className="mt-3">We do not sell your personal data. We do not use your data for advertising targeting.</p>
          </section>

          <section>
            <h2 className="text-text font-semibold text-lg mb-3">4. Data stored locally by the Vivido app</h2>
            <p className="mb-3">
              The Vivido desktop application operates on a local-first model. Your video projects, media assets,
              transcripts, and Style Model data are stored on your own machine by default. We do not have access
              to your creative content unless you explicitly enable cloud sync (a future feature).
            </p>
            <p>
              Style Model data (your editing behaviour patterns) is stored locally at{' '}
              <code className="text-violet bg-violet/10 px-1.5 py-0.5 rounded text-xs">~/.vivido/style/</code>.
              You can delete or export this data at any time from within the app.
            </p>
          </section>

          <section>
            <h2 className="text-text font-semibold text-lg mb-3">5. Legal basis for processing (GDPR)</h2>
            <p>
              If you are located in the European Economic Area, we process your personal data under the following
              legal bases: <strong className="text-text">consent</strong> (waitlist signup),{' '}
              <strong className="text-text">legitimate interests</strong> (product improvement via anonymised analytics),
              and <strong className="text-text">contractual necessity</strong> (delivering access to the product you signed up for).
            </p>
          </section>

          <section>
            <h2 className="text-text font-semibold text-lg mb-3">6. Data retention</h2>
            <p>
              We retain your email and waitlist data until you request deletion or one year after the
              product launches publicly, whichever is earlier. Anonymised analytics data is retained indefinitely.
              Version history within the Vivido app is retained for 30 days per project.
            </p>
          </section>

          <section>
            <h2 className="text-text font-semibold text-lg mb-3">7. Third-party services</h2>
            <p className="mb-3">We use the following third-party services that may process your data:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-text">Supabase</strong> — database and authentication (future)</li>
              <li><strong className="text-text">Vercel</strong> — website hosting and analytics</li>
              <li><strong className="text-text">Cloudflare</strong> — CDN and DDoS protection</li>
            </ul>
            <p className="mt-3">Each of these services maintains their own privacy policies and data processing agreements.</p>
          </section>

          <section>
            <h2 className="text-text font-semibold text-lg mb-3">8. Your rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (right to be forgotten)</li>
              <li>Object to or restrict processing of your data</li>
              <li>Request a portable copy of your data in JSON format</li>
              <li>Withdraw consent at any time (for consent-based processing)</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email us at{' '}
              <a href="mailto:privacy@vividoapp.com" className="text-violet hover:text-violet-light transition-colors">
                privacy@vividoapp.com
              </a>. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-text font-semibold text-lg mb-3">9. Cookies</h2>
            <p>
              We use only essential cookies required for the website to function (session management, CSRF protection).
              We do not use advertising or tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="text-text font-semibold text-lg mb-3">10. AI features and data processing</h2>
            <p>
              Vivido uses AI features including Whisper (transcription), noise removal models, and Anthropic Claude
              (metadata suggestions). All AI features process your content locally on your machine where possible.
              Where cloud processing is required, it is disclosed in-app, requires your explicit consent, and no
              training data is derived from your content without separate, explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-text font-semibold text-lg mb-3">11. Children's privacy</h2>
            <p>
              Vivido is not directed at children under 13. We do not knowingly collect personal data from children.
              If you believe a child has provided us with personal data, contact us at privacy@vividoapp.com.
            </p>
          </section>

          <section>
            <h2 className="text-text font-semibold text-lg mb-3">12. Changes to this policy</h2>
            <p>
              We may update this policy as Vivido evolves. We will notify waitlist members of material changes
              by email. The effective date at the top of this page reflects when the policy was last updated.
            </p>
          </section>

          <section>
            <h2 className="text-text font-semibold text-lg mb-3">13. Contact</h2>
            <p>
              For privacy questions or requests: {' '}
              <a href="mailto:privacy@vividoapp.com" className="text-violet hover:text-violet-light transition-colors">
                privacy@vividoapp.com
              </a>
              <br />
              The Morning Company Pvt Ltd., Gurugram, Haryana, India.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
