import PageHeader from '../components/PageHeader'

const sections = [
  {
    h: '1. Information we collect',
    p: 'We collect the information you provide when creating an account or placing an order — your name, email, shipping address and payment details. We also collect basic analytics such as pages visited and device type.',
  },
  {
    h: '2. How we use your information',
    p: 'Your information is used to process orders, arrange delivery, provide customer support and, where you have opted in, to share new collections and offers.',
  },
  {
    h: '3. Sharing & disclosure',
    p: 'We never sell your personal data. Information is shared only with partners who help us deliver your order (carriers, payment processors) and only to the extent needed.',
  },
  {
    h: '4. Data security',
    p: 'We use industry-standard encryption and access controls to protect your data. Payment details are processed by our payment partners and are not stored on our servers.',
  },
  {
    h: '5. Cookies',
    p: 'Our site uses cookies to remember your cart and improve your experience. You can disable cookies in your browser, though some features may not work as intended.',
  },
  {
    h: '6. Your rights',
    p: 'You may request a copy, correction or deletion of your personal data at any time by contacting us via the Contact page.',
  },
  {
    h: '7. Contact',
    p: 'Questions about this policy? Reach out through our Contact page and we will be happy to help.',
  },
]

export default function Privacy() {
  return (
    <div className="page">
      <PageHeader
        overline="Legal"
        title="Privacy Policy"
        intro="Last updated: August 2026. Your privacy matters to us — here is what we collect and why."
      />

      <div className="content-section">
        {sections.map((s) => (
          <div className="content-block" key={s.h}>
            <h2>{s.h}</h2>
            <p>{s.p}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
