import PageHeader from '../components/PageHeader'

const sections = [
  {
    h: '1. Agreement to these terms',
    p: 'By accessing the Furniture Store website and placing an order, you agree to be bound by these Terms of Use and all applicable laws. If you do not agree, please do not use this site.',
  },
  {
    h: '2. Products & pricing',
    p: 'All product descriptions, colours and prices are subject to change without notice. We make every effort to display products accurately, but screen colours may vary. We reserve the right to refuse or cancel any order at our discretion.',
  },
  {
    h: '3. Orders & payment',
    p: 'Orders are confirmed once payment is authorised. Payment methods are displayed at checkout. In the event of a pricing error, we will contact you before processing the order.',
  },
  {
    h: '4. Delivery',
    p: 'Delivery windows are estimates, not guarantees. Risk of loss passes to you upon successful delivery and signature. Please inspect your pieces at delivery and note any damage before accepting.',
  },
  {
    h: '5. Returns & warranties',
    p: 'Returns are governed by our Return Policy, available on the Customer Care page. Structural warranties are provided on each product as described at purchase.',
  },
  {
    h: '6. Liability',
    p: 'To the fullest extent permitted by law, Furniture Store shall not be liable for indirect, incidental or consequential damages arising from the use of this website or our products.',
  },
  {
    h: '7. Changes to these terms',
    p: 'We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the revised terms.',
  },
]

export default function Terms() {
  return (
    <div className="page">
      <PageHeader
        overline="Legal"
        title="Terms of Use"
        intro="Last updated: August 2026. Please read these terms carefully before shopping with us."
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
