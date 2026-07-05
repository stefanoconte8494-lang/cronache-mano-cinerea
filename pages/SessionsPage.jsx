import { useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { sessions } from '../data/sessionsData'
import '../styles/sessions.css'

export default function SessionsPage({ onHomeClick, onNpcsClick, onSessionsClick, onCharacterClick }) {
  const [search, setSearch] = useState('')

  const filteredSessions = useMemo(() => {
    const query = search.trim().toLowerCase()

    return sessions
      .slice()
      .sort((a, b) => a.number - b.number)
      .filter((session) => {
        if (!query) return true

        const searchable = [
          session.number,
          session.title,
          session.arc,
          session.summary,
          session.status,
          ...(session.people || []),
          ...(session.places || []),
          ...(session.tags || []),
        ]
          .join(' ')
          .toLowerCase()

        return searchable.includes(query)
      })
  }, [search])

  return (
    <div className="site-shell">
      <Navbar
        activePage="Sessioni"
        onHomeClick={onHomeClick}
        onNpcsClick={onNpcsClick}
        onSessionsClick={onSessionsClick}
        onCharacterClick={onCharacterClick}
      />

      <main className="sessions-page">
        <section className="sessions-hero panel">
          <p className="section-kicker">Archivio narrativo</p>
          <h1>Sessioni</h1>
          <p>
            La cronologia della Mano Cinerea, ordinata per sessione e arricchita con
            riassunti narrativi, luoghi, personaggi coinvolti e parole chiave.
          </p>
        </section>

        <section className="sessions-toolbar panel">
          <label>
            Cerca sessioni
            <input
              type="search"
              placeholder="Cerca per titolo, PNG, luogo, evento..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
          <span>{filteredSessions.length} sessioni trovate</span>
        </section>

        <section className="sessions-list">
          {filteredSessions.map((session) => (
            <article className="session-card" key={session.id}>
              <div className="session-number-box">
                <span>Sessione</span>
                <strong>{session.number}</strong>
              </div>

              <div className="session-content">
                <div className="session-heading">
                  <div>
                    <p className="session-arc">{session.arc}</p>
                    <h2>{session.title}</h2>
                  </div>
                  <span className="session-status">{session.status}</span>
                </div>

                <p className="session-summary">{session.summary}</p>

                <div className="session-meta-grid">
                  <div>
                    <h3>Personaggi e PNG</h3>
                    <p>{(session.people || []).join(', ')}</p>
                  </div>

                  <div>
                    <h3>Luoghi</h3>
                    <p>{(session.places || []).join(', ')}</p>
                  </div>
                </div>

                <div className="session-tags">
                  {(session.tags || []).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}
