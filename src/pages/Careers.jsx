import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const roles = [
  {
    title: 'Senior Upholsterer',
    type: 'Full-time · Beirut workshop',
    blurb: 'Shape the sofas and armchairs that leave our workshop — 5+ years of upholstery experience.',
  },
  {
    title: 'Interior Design Consultant',
    type: 'Full-time · Beirut showroom',
    blurb: 'Help clients build rooms they love, from first sketch to final styling.',
  },
  {
    title: 'Delivery & Assembly Specialist',
    type: 'Full-time · Field',
    blurb: 'Deliver white-glove service across Greater Beirut, with a smile and a spirit level.',
  },
  {
    title: 'Junior Product Designer',
    type: 'Internship · Beirut',
    blurb: 'Work alongside our senior design team on the next Furniture Store collection.',
  },
]

export default function Careers() {
  return (
    <div className="page">
      <PageHeader
        overline="Join the team"
        title="Careers"
        intro="We are always looking for people who care about craft as much as we do."
      />

      <div className="content-section">
        <h2>Working at Furniture Store</h2>
        <p>
          From the workshop floor to the showroom, everyone here shares one goal — making homes
          better. We invest in training, tools and the kind of work you are proud to put your name on.
        </p>
      </div>

      <div className="career-grid">
        {roles.map((role) => (
          <article className="career-card fade-in" key={role.title}>
            <span className="overline">{role.type}</span>
            <h3>{role.title}</h3>
            <p>{role.blurb}</p>
            <Link to="/contact" className="career-apply">Apply now →</Link>
          </article>
        ))}
      </div>
    </div>
  )
}
