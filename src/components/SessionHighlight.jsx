export default function SessionHighlight({ quote, author, title = 'Momento memorabile' }) {
  if (!quote) return null

  return (
    <section className="session-highlight">
      <p className="session-block-kicker">✦ {title}</p>
      <blockquote>“{quote}”</blockquote>
      {author && <p className="session-highlight-author">— {author}</p>}
    </section>
  )
}
