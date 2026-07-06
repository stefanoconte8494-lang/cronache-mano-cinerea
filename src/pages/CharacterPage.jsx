import CharacterForms from '../components/CharacterForms'
import CharacterGallery from '../components/CharacterGallery'
import Footer from '../components/Footer'

export default function CharacterPage({ character, onBack }) {
  const isRichCharacter = Boolean(character.background || character.forms || character.gallery)

  if (!isRichCharacter) {
    return (
      <div className="character-page">
        <button className="back-button" type="button" onClick={onBack}>← Torna ai personaggi</button>
        <section className="character-profile">
          <div className="character-profile-image">
            {character.image ? <img src={character.image} alt={character.name} /> : <div className="character-profile-placeholder">{character.symbol || '✦'}</div>}
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
      <button className="back-button" type="button" onClick={onBack}>← Torna ai personaggi</button>

      <section className="character-hero-profile">
        <div className="character-hero-image"><img src={character.image} alt={character.name} /></div>
        <div className="character-hero-content">
          <p className="kicker">Scheda personaggio</p>
          <h1>{character.name}</h1>
          <h2>{character.subtitle}</h2>
          <div className="character-tags">
            <span>{character.race}</span><span>{character.classInfo}</span><span>{character.circle}</span><span>{character.alignment}</span>
          </div>
          <blockquote>{character.quote}</blockquote>
          <p className="character-main-description">{character.description}</p>
        </div>
      </section>

      <section className="character-identity-grid">
        {character.identity?.map((item) => <article className="identity-card" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></article>)}
      </section>

      <section className="character-lore-grid">
        <article className="character-lore-card character-background-card">
          <div className="character-section-heading"><p>Origini</p><h2>Background</h2></div>
          {character.background?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </article>
        <article className="character-lore-card">
          <div className="character-section-heading"><p>Indole</p><h2>Tratti narrativi</h2></div>
          <dl className="personality-list">
            <div><dt>Tratti</dt><dd>{character.personality?.traits}</dd></div>
            <div><dt>Ideale</dt><dd>{character.personality?.ideal}</dd></div>
            <div><dt>Legame</dt><dd>{character.personality?.bond}</dd></div>
            <div><dt>Difetto</dt><dd>{character.personality?.flaw}</dd></div>
          </dl>
        </article>
      </section>

      <CharacterForms forms={character.forms} />

      <section className="character-powers-section">
        <div className="character-section-heading"><p>Poteri narrativi</p><h2>Stelle, cura e veleno</h2></div>
        <div className="character-powers-grid">
          {character.powers?.map((power) => <article className="power-card" key={power.name}><h3>{power.name}</h3><p>{power.text}</p></article>)}
        </div>
      </section>

      <section className="character-timeline-section">
        <div className="character-section-heading"><p>Cronologia</p><h2>Eventi rilevanti</h2></div>
        <div className="character-timeline">
          {character.timeline?.map((event) => <article className="character-timeline-item" key={event.title}><span /><div><h3>{event.title}</h3><p>{event.text}</p></div></article>)}
        </div>
      </section>

      <section className="character-quotes-section">
        <div className="character-section-heading"><p>Citazioni</p><h2>Parole memorabili</h2></div>
        <div className="character-quotes-grid">{character.quotes?.map((quote) => <blockquote key={quote}>{quote}</blockquote>)}</div>
      </section>

      <CharacterGallery images={character.gallery} />
      <Footer />
    </div>
  )
}
