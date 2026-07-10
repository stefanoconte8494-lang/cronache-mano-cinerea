import CharacterAbilities from '../components/CharacterAbilities'
import CharacterForms from '../components/CharacterForms'
import CharacterGallery from '../components/CharacterGallery'
import CharacterRelics from '../components/CharacterRelics'
import CharacterStats from '../components/CharacterStats'
import CharacterTimeline from '../components/CharacterTimeline'
import Footer from '../components/Footer'

export default function CharacterPage({ character, onBack }) {
  const isRichCharacter = Boolean(character.stats || character.backgroundSections || character.forms || character.gallery)

  if (!isRichCharacter) {
    return (
      <div className="character-page">
        <button className="back-button" type="button" onClick={onBack}>
          ← Torna ai personaggi
        </button>

        <section className="character-profile">
          <div className="character-profile-image">
            {character.image ? (
              <img src={character.image} alt={character.name} />
            ) : (
              <div className="character-profile-placeholder">{character.symbol || '✦'}</div>
            )}
          </div>

          <div className="character-profile-content">
            <p className="kicker">Scheda personaggio</p>
            <h1>{character.name}</h1>
            <h2>{character.subtitle || character.title}</h2>
            <blockquote>{character.quote}</blockquote>
            <p>{character.description}</p>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  return (
    <div className={`character-page character-page-${character.id}`}>
      <button className="back-button" type="button" onClick={onBack}>
        ← Torna ai personaggi
      </button>

      <section className="character-hero-profile">
        <div className="character-hero-image">
          <img src={character.image} alt={character.name} />
        </div>

        <div className="character-hero-content">
          <p className="kicker">Scheda personaggio</p>
          <h1>{character.name}</h1>
          <h2>{character.subtitle}</h2>

          <div className="character-tags">
            <span>{character.race}</span>
            <span>{character.classInfo}</span>
            <span>{character.alignment}</span>
          </div>

          <blockquote>{character.quote}</blockquote>
          <p className="character-main-description">{character.description}</p>
        </div>
      </section>

      <section className="character-identity-grid">
        {character.identity?.map((item) => (
          <article className="identity-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>

      <CharacterStats stats={character.stats} />
      <CharacterAbilities abilities={character.abilities} />
      <CharacterRelics relics={character.relics} ultimate={character.ultimate} />

      <section className="character-background-section">
        <div className="character-section-heading">
          <p>Background</p>
          <h2>Origini e destino</h2>
        </div>

        <div className="background-chapters">
          {character.backgroundSections?.map((chapter) => (
            <article key={chapter.title}>
              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>
            </article>
          ))}
        </div>
      </section>

      <CharacterForms forms={character.forms} characterName={character.name} />
      <CharacterTimeline events={character.timeline} />

      <section className="character-quotes-section">
        <div className="character-section-heading">
          <p>Citazioni</p>
          <h2>Parole memorabili</h2>
        </div>

        <div className="character-quotes-grid">
          {character.quotes?.map((quote) => (
            <blockquote key={quote}>{quote}</blockquote>
          ))}
        </div>
      </section>

      <CharacterGallery images={character.gallery} />

      <Footer />
    </div>
  )
}
