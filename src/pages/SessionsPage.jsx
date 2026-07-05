import { useMemo, useState } from "react";
import { sessions } from "../data/sessionsData";
import "../styles/sessions.css";

function SessionsPage({ onNavigate }) {
  const [search, setSearch] = useState("");

  const filteredSessions = useMemo(() => {
    const query = search.trim().toLowerCase();

    return sessions
      .slice()
      .sort((a, b) => a.number - b.number)
      .filter((session) => {
        if (!query) return true;

        const searchable = [
          session.number,
          session.title,
          session.arc,
          session.summary,
          session.status,
          ...(session.people || []),
          ...(session.places || []),
          ...(session.tags || []),
        ].join(" ").toLowerCase();

        return searchable.includes(query);
      });
  }, [search]);

  return (
    <main className="sessions-page">
      <button className="back-button" onClick={() => onNavigate && onNavigate("home")}>
        ← Torna alla Home
      </button>

      <section className="sessions-hero">
        <p className="section-kicker">Archivio narrativo</p>
        <h1>Sessioni</h1>
        <p>
          La cronologia della Mano Cinerea, ordinata per sessione e arricchita con
          riassunti narrativi, luoghi, personaggi coinvolti e parole chiave.
        </p>
      </section>

      <section className="sessions-toolbar">
        <input
          type="text"
          placeholder="Cerca per titolo, PNG, luogo, evento..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <span>{filteredSessions.length} sessioni</span>
      </section>

      <section className="sessions-list">
        {filteredSessions.map((session) => (
          <article className="session-card" key={session.id}>
            <div className="session-number">
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
                  <p>{(session.people || []).join(", ")}</p>
                </div>

                <div>
                  <h3>Luoghi</h3>
                  <p>{(session.places || []).join(", ")}</p>
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
  );
}

export default SessionsPage;
