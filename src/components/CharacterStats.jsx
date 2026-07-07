export default function CharacterStats({ stats }) {
  if (!stats) return null

  const mainStats = [
    { label: 'CA', value: stats.armorClass },
    { label: 'PF', value: stats.hitPoints },
    { label: 'Livello', value: stats.level },
    { label: 'Competenza', value: stats.proficiencyBonus },
    { label: 'Saggezza', value: stats.wisdom },
    { label: 'Iniziativa', value: stats.initiative },
    { label: 'Velocità', value: stats.speed },
    { label: 'Percezione passiva', value: stats.passivePerception },
    { label: 'CD', value: stats.spellSaveDc },
  ].filter((item) => item.value !== undefined && item.value !== null && item.value !== '')

  return (
    <section className="character-tech-section">
      <div className="character-section-heading">
        <p>Scheda tecnica</p>
        <h2>Valori principali</h2>
      </div>

      <div className="tech-layout">
        <div className="tech-main-grid">
          {mainStats.map((stat) => (
            <article key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </article>
          ))}
        </div>

        <div className="tech-detail-grid">
          {stats.classes?.length > 0 && (
            <article>
              <h3>Classi</h3>
              {stats.classes.map((item) => (
                <p key={`${item.name}-${item.level}`}>
                  <strong>{item.name}</strong> — {item.detail} {item.level}
                </p>
              ))}
            </article>
          )}

          {stats.skills?.length > 0 && (
            <article>
              <h3>Competenze principali</h3>
              <div className="skill-pills">
                {stats.skills.map((skill) => (
                  <span key={skill.name}>{skill.name}{skill.value ? ` ${skill.value}` : ''}</span>
                ))}
              </div>
            </article>
          )}

          {stats.languages?.length > 0 && (
            <article>
              <h3>Lingue</h3>
              <div className="skill-pills">
                {stats.languages.map((language) => (
                  <span key={language}>{language}</span>
                ))}
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  )
}
