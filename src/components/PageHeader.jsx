export default function PageHeader({ overline, title, intro }) {
  return (
    <header className="page-header fade-in">
      <span className="overline">{overline}</span>
      <h1>{title}</h1>
      {intro && <p className="page-intro">{intro}</p>}
    </header>
  )
}
