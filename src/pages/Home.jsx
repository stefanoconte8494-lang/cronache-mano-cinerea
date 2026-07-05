import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'
import CharacterCard from '../components/CharacterCard'
import SectionTitle from '../components/SectionTitle'
import Footer from '../components/Footer'
import { activeCharacters, inactiveCharacters } from '../data/charactersData'
import { latestSession } from '../data/sessionsData'
import { openQuests } from '../data/questsData'

export default function Home({ onCharacterClick, onHomeClick, onNpcsClick }) {
  return (
    <div className="site-shell">
      <Navbar activePage="Home" onHomeClick={onHomeClick} onNpcsClick={onNpcsClick} />
      <HeroBanner />

      <main className="home-grid">
        <section className="panel session-panel">
          <SectionTitle>Ultima sessione</SectionTitle>
          <div className="session-content">
            <div className="session-art">Taverna<br />del Faro</div>
            <div>
              <p className="kicker">Sessione {latestSession.number}</p>
              <h3>{latestSession.title}</h3>
              <p>{latestSession.summary}</p>
              <div className="tag-row">
                {latestSession.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <button className="primary-button" type="button">Apri sessione</button>
            </div>
          </div>
        </section>

        <section className="panel characters-panel">
          <SectionTitle>Personaggi attivi</SectionTitle>
          <div className="character-grid active-grid">
            {activeCharacters.map((character) => (
              <CharacterCard
                character={character}
                key={character.id}
                onClick={character.id === 'sszara' ? () => onCharacterClick('sszara') : undefined}
              />
            ))}
          </div>
        </section>

        <aside className="side-column">
          <section className="panel">
            <SectionTitle>Ex membri</SectionTitle>
            <div className="character-grid inactive-grid">
              {inactiveCharacters.map((character) => (
                <CharacterCard character={character} muted key={character.id} />
              ))}
            </div>
          </section>

          <section className="panel quest-panel">
            <SectionTitle>Quest aperte</SectionTitle>
            <div className="quest-list">
              {openQuests.map((quest) => (
                <article className="quest-item" key={quest.id}>
                  <span className="quest-icon">✧</span>
                  <div>
                    <h3>{quest.title}</h3>
                    <p className="quest-status">{quest.status}</p>
                    <p>{quest.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </aside>
      </main>

      <Footer />
    </div>
  )
}
