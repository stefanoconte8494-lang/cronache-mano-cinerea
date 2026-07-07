export default function CharacterStats({ stats }) {
  if (!stats) return null

  return (
    <section className="character-tech-section">
      <div className="character-section-heading">
        <p>Scheda tecnica</p>
        <h2>Valori principali</h2>
      </div>

      <div className="tech-layout">
        <div className="tech-main-grid">
          <article><span>CA</span><strong>{stats.armorClass}</strong></article>
          <article><span>PF</span><strong>{stats.hitPoints}</strong></article>
          <article><span>Saggezza</span><strong>{stats.wisdom}</strong></article>
          <article><span>Competenza</span><strong>{stats.proficiencyBonus}</strong></article>
        </div>

        <div className="tech-detail-grid">
          <article>
            <h3>Classi</h3>
            {stats.classes?.map((item) => (
              <p key={`${item.name}-${item.level}`}>
                <strong>{item.name}</strong> — {item.detail} {item.level}
              </p>
            ))}
          </article>

          <article>
            <h3>Competenze principali</h3>
            <div className="skill-pills">
              {stats.skills?.map((skill) => (
                <span key={skill.name}>{skill.name} {skill.value}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
