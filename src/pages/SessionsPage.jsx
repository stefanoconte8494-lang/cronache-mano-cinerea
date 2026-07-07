import { useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SessionHighlight from '../components/SessionHighlight'
import { sessions } from '../data/sessionsData'
import '../styles/sessions.css'

function getSessionDate(session) {
  return session.date || session.playedAt || session.sessionDate || ''
}

function getSessionEvents(session) {
  if (session.events?.length) return session.events
  if (session.keyEvents?.length) return session.keyEvents
  if (session.moments?.length) return session.moments
  return []
}

function getSessionPeople(session) {
  return session.players || session.people || session.characters || []
}

function getSessionNpcs(session) {
  return session.npcs || session.npc || session.encounteredNpcs || []
}

function getSessionPlaces(session) {
  return session.places || session.locations || []
}

function getSessionTags(session) {
  return session.tags || []
}

function SessionsPage({
  onNavigate,
  onHomeClick,
  onCharactersClick,
  onNpcsClick,
  onSessionsClick,
  onQuestsClick,
}) {
  const [search, setSearch] = useState('')

  const filteredSessions = useMemo(() => {
    const query = search.trim().toLowerCase()

    return sessions
      .slice()
      .sort((a, b) => b.number - a.number)
      .filter((session) => {
        if (!query) return true

        const searchable = [
          session.number,
          session.title,
          session.arc,
          session.summary,
          session.introduction,
          session.quote,
          getSessionDate(session),
          ...getSessionPeople(session),
          ...getSessionNpcs(session),
          ...getSessionPlaces(session),
          ...getSessionTags(session),
          ...getSessionEvents(session),
        ]
          .join(' ')
          .toLowerCase()

        return searchable.includes(query)
      })
  }, [search])

  const goHome = () => {
    if (onNavigate) {
      onNavigate('home')
      return
    }

    onHomeClick?.()
  }

  return (
    <div className="site-shell sessions-shell">
      <Navbar
        activePage="Sessioni"
        onHomeClick={goHome}
        onCharactersClick={onCharactersClick}
        onNpcsClick={onNpcsClick}
        onSessionsClick={onSessionsClick}
        onQuestsClick={onQuestsClick}
      />

      <main className="sessions-page">
        <button className="back-button" onClick={goHome} type="button">
          ← Torna alla Home
        </button>

        <section className="sessions-hero">
          <p className="section-kicker">Archivio narrativo</p>
          <h1>Le Cronache</h1>
          <p>
            Ogni sessione è registrata come una pagina del Codex della Mano Cinerea:
            eventi principali, luoghi, presenze, conseguenze e momenti memorabili.
          </p>
        </section>

        <section className="sessions-toolbar">
          <input
            type="text"
            placeholder="Cerca per titolo, PNG, luogo, evento, citazione..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <span>{filteredSessions.length} sessioni</span>
        </section>

        <section className="sessions-chronicle">
          {filteredSessions.map((session, index) => {
            const people = getSessionPeople(session)
            const npcs = getSessionNpcs(session)
            const places = getSessionPlaces(session)
            const events = getSessionEvents(session)
            const tags = getSessionTags(session)
            const sessionDate = getSessionDate(session)

            return (
              <article className="chronicle-card" key={session.id || session.number}>
                <div className="chronicle-spine">
                  <span className={index === 0 ? 'chronicle-node latest' : 'chronicle-node'} />
                  <span className="chronicle-line" />
                </div>

                <div className="chronicle-content">
                  <header className="chronicle-header">
                    <div>
                      <p className="session-block-kicker">
                        Sessione {session.number}
                        {sessionDate ? ` · ${sessionDate}` : ''}
                      </p>
                      <h2>{session.title}</h2>
                      {session.arc && <p className="chronicle-arc">{session.arc}</p>}
                    </div>

                    {index === 0 && <span className="latest-badge">Ultima cronaca</span>}
                  </header>

                  <section className="chronicle-summary">
                    <h3>📖 Introduzione</h3>
                    <p>{session.introduction || session.summary}</p>
                  </section>

                  {events.length > 0 && (
                    <section className="chronicle-block">
                      <h3>⚔ Eventi principali</h3>
                      <ol className="event-list">
                        {events.map((event) => (
                          <li key={event}>{event}</li>
                        ))}
                      </ol>
                    </section>
                  )}

                  <div className="chronicle-meta-grid">
                    {people.length > 0 && (
                      <section className="chronicle-block compact">
                        <h3>👥 Personaggi presenti</h3>
                        <div className="session-chip-row">
                          {people.map((person) => <span key={person}>{person}</span>)}
                        </div>
                      </section>
                    )}

                    {places.length > 0 && (
                      <section className="chronicle-block compact">
                        <h3>🏰 Luoghi</h3>
                        <div className="session-chip-row">
                          {places.map((place) => <span key={place}>{place}</span>)}
                        </div>
                      </section>
                    )}

                    {npcs.length > 0 && (
                      <section className="chronicle-block compact">
                        <h3>🎭 PNG e presenze</h3>
                        <div className="session-chip-row">
                          {npcs.map((npc) => <span key={npc}>{npc}</span>)}
                        </div>
                      </section>
                    )}

                    {session.nextSession && (
                      <section className="chronicle-block compact">
                        <h3>⏳ Prossima sessione</h3>
                        <p>{session.nextSession}</p>
                      </section>
                    )}
                  </div>

                  <SessionHighlight
                    quote={session.quote}
                    author={session.quoteAuthor}
                    title={session.quoteTitle}
                  />

                  {tags.length > 0 && (
                    <footer className="chronicle-tags">
                      {tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </footer>
                  )}
                </div>
              </article>
            )
          })}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default SessionsPage
