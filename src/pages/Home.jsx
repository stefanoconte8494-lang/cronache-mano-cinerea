import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'
import CharacterCard from '../components/CharacterCard'
import SectionTitle from '../components/SectionTitle'
import Footer from '../components/Footer'
import { activeCharacters, inactiveCharacters } from '../data/charactersData'
import { latestSession } from '../data/sessionsData'
import { openQuests } from '../data/questsData'
import sessione42BalloSilverhart from '../assets/sessions/sessione-42-ballo-silverhart.png'

export default function Home({
  onCharacterClick,
  onCharactersClick,
  onHomeClick,
  onNpcsClick,
  onSessionsClick,
  onQuestsClick,
  onCodexClick,
}) {
  return (
    <div className="site-shell">
      <Navbar
        activePage="Home"
        onHomeClick={onHomeClick}
        onCharactersClick={onCharactersClick}
        onNpcsClick={onNpcsClick}
        onSessionsClick={onSessionsClick}
        onQuestsClick={onQuestsClick}
        onCodexClick={onCodexClick}
      />

      <HeroBanner />

      <main className="home-grid">
        <section className="panel session-panel latest-session-panel">
          <SectionTitle>Ultima sessione</SectionTitle>

          <div className="latest-session-cover">
            <img
              src={sessione42BalloSilverhart}
              alt="Ballo in maschera alla magione Silverhart"
            />
            <div className="latest-session-overlay">
              <p>Ultima scena</p>
              <h3>Il Ballo dei Silverhart</h3>
            </div>
          </div>

          <div className="latest-session-body">
            <p className="kicker">Sessione 42 · Chiacchiera del Vicolo</p>
            <h3>Il Ballo dei Silverhart</h3>
            <p>
              La Mano Cinerea prende parte al sontuoso ballo in maschera dei Silverhart
              nel tentativo di raccogliere informazioni sul Tulipano, mentre il Visitatore
              sperimenta il mondo attraverso i sensi donati dagli avventurieri.
            </p>

            <blockquote>
              Dietro ogni maschera si cela un volto. Dietro ogni volto... un segreto.
            </blockquote>

            <div className="tag-row">
              <span>Ballo in maschera</span>
              <span>Silverhart</span>
              <span>Tulipano</span>
              <span>Il Visitatore</span>
            </div>

            <button className="primary-button" type="button" onClick={onSessionsClick}>
              Leggi la cronaca
            </button>
          </div>
        </section>

        <section className="panel characters-panel">
          <SectionTitle>Personaggi attivi</SectionTitle>
          <div className="character-grid active-grid">
            {activeCharacters.map((character) => (
              <CharacterCard
                character={character}
                key={character.id}
                onClick={character.id ? () => onCharacterClick?.(character.id) : undefined}
              />
            ))}
          </div>
        </section>

        <aside className="side-column">
          <section className="panel">
            <SectionTitle>Ex membri</SectionTitle>
            <div className="character-grid inactive-grid">
              {inactiveCharacters.map((character) => (
                <CharacterCard
                  character={character}
                  muted
                  key={character.id}
                  onClick={character.id ? () => onCharacterClick?.(character.id) : undefined}
                />
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
