export default function CharacterTimeline({ events = [] }) {
  if (!events.length) return null

  return (
    <section className="character-timeline-section">
      <div className="character-section-heading">
        <p>Cronologia</p>
        <h2>Storia personale</h2>
      </div>

      <div className="character-timeline">
        {events.map((event) => (
          <article className="character-timeline-item" key={`${event.title}-${event.subtitle}`}>
            <span />
            <div>
              <h3>{event.title}</h3>
              <h4>{event.subtitle}</h4>
              <p>{event.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
