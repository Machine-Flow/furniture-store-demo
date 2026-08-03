import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const faqs = [
  {
    q: 'How long does delivery take?',
    a: 'Delivery across Greater Beirut takes 5–7 business days. Orders over $500 ship free; smaller orders include a flat $49 delivery fee.',
  },
  {
    q: 'What is your return policy?',
    a: 'You have 14 days from delivery to change your mind on any unused, undamaged item. We will arrange a free collection from your home.',
  },
  {
    q: 'Do you offer a warranty?',
    a: 'Every piece carries a 2-year structural warranty covering frames, springs and mechanisms. Our foam cushions are warranted for 1 year.',
  },
  {
    q: 'Can I customise colours or fabrics?',
    a: 'Most sofas and beds can be ordered in alternative fabrics. Visit the showroom or contact us with the product page and your preferred finish.',
  },
  {
    q: 'How do I care for my furniture?',
    a: 'Vacuum fabrics weekly and blot spills immediately. Leather should be wiped with a soft dry cloth and conditioned twice a year. Full care guides ship with every order.',
  },
]

export default function CustomerCare() {
  return (
    <div className="page">
      <PageHeader
        overline="We are here to help"
        title="Customer Care"
        intro="Everything you need to know about delivery, returns and caring for your new pieces."
      />

      <div className="content-section">
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <details className="faq-item" key={i}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="content-section care-footer">
        <h2>Still need a hand?</h2>
        <p>
          Our team replies within one business day. Reach out any time — we are happy to help.
        </p>
        <Link to="/contact" className="btn btn-primary">Contact Support</Link>
      </div>
    </div>
  )
}
