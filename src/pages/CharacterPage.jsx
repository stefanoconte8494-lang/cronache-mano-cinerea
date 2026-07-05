import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function DataBlock({ title, children }) {
  return (
    <section className="character-section">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default function CharacterPage({ character, onBack }) {
  return (
    <div className="site-shell">
      <Navbar onHomeClick={onBack} />

      <main className="character-page">
        <button className="back-button" type="button" onClick={onBack}>
          ← Torna alla Home
        </button>

        <section className="character-hero-panel">
          <div className="character-image-frame">
            <img src={character.image} alt={character.name} />
          </div>

          <div className="character-identity">
            <p className="kicker">Scheda personaggio</p>
            <h1>{character.name}</h1>
            <p className="character-epithet">{character.epithet}</p>

            <div className="identity-tags">
              <span>{character.race}</span>
              <span>{character.classSummary}</span>
              <span>{character.subclassSummary}</span>
              <span>{character.alignment}</span>
            </div>

            <blockquote>{character.quote}</blockquote>
            <p className="character-bio">{character.biography}</p>
          </div>
        </section>

        <section className="stat-grid">
          {character.stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </article>
          ))}
        </section>

        <div className="character-layout">
          <div className="character-main-column">
            <DataBlock title="Privilegi e capacità speciali">
              <div className="feature-list">
                {character.features.map((feature) => (
                  <article className="feature-card" key={feature.name}>
                    <p>{feature.type}</p>
                    <h3>{feature.name}</h3>
                    <span>{feature.description}</span>
                  </article>
                ))}
              </div>
            </DataBlock>

            <DataBlock title="Incantesimi">
              <div className="spell-grid">
                {character.spells.map((spellGroup) => (
                  <article className="spell-block" key={spellGroup.level}>
                    <h3>{spellGroup.level}</h3>
                    <ul>
                      {spellGroup.list.map((spell) => (
                        <li key={spell}>{spell}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </DataBlock>
          </div>

          <aside className="character-side-column">
            <DataBlock title="Caratteristiche">
              <div className="ability-grid">
                {character.abilityScores.map((score) => (
                  <article className="ability-card" key={score.label}>
                    <span>{score.label}</span>
                    <strong>{score.value}</strong>
                    <em>{score.modifier}</em>
                  </article>
                ))}
              </div>
            </DataBlock>

            <DataBlock title="Abilità">
              <div className="skill-list">
                {character.skills.map((skill) => (
                  <p key={skill.name}>
                    <span>{skill.name}</span>
                    <strong>{skill.value}</strong>
                  </p>
                ))}
              </div>
            </DataBlock>

            <DataBlock title="Equipaggiamento notevole">
              <ul className="equipment-list">
                {character.equipment.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </DataBlock>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}
