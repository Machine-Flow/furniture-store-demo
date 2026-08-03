import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page">
      <div className="not-found fade-in">
        <span className="not-found-code">404</span>
        <span className="overline">Page not found</span>
        <h1>This room is under renovation</h1>
        <p>The page you are looking for has moved, or never existed.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </div>
  )
}
