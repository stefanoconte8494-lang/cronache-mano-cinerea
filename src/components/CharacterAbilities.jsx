export default function CharacterAbilities({ abilities = [] }) {
  if (!abilities.length) return null

  return (
    <section className="character-abilities-section">
      <div className="character-section-heading">
        <p>Capacità</p>
        <h2>Risorse fondamentali</h2>
      </div>

      <div className="abilities-grid">
        {abilities.map((ability) => (
          <article className="ability-card" key={ability.name}>
            <span>{ability.value}</span>
            <h3>{ability.name}</h3>
            <p>{ability.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
