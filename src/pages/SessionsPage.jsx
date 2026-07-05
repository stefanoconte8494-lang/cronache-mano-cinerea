import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { sessions } from "../data/sessionsData";
import "../styles/sessions.css";

function SessionsPage({ onNavigate, onHomeClick, onNpcsClick, onSessionsClick }) {
  const [search, setSearch] = useState("");

  const filteredSessions = useMemo(() => {
    const query = search.trim().toLowerCase();

    return sessions
      .slice()
      .sort((a, b) => b.number - a.number)
      .filter((session) => {
        if (!query) return true;

        const searchable = [
          session.number,
          session.title,
          session.arc,
          session.summary,
          ...(session.people || []),
          ...(session.places || []),
        ]
          .join(" ")
          .toLowerCase();

        return searchable.includes(query);
      });
  }, [search]);

  const goHome = () => {
    if (onNavigate) {
      onNavigate("home");
      return;
    }

    onHomeClick?.();
  };

  return (
    <div className="site-shell sessions-shell">
      <Navbar
        activePage="Sessioni"
        onHomeClick={goHome}
        onNpcsClick={onNpcsClick}
        onSessionsClick={onSessionsClick}
      />

      <main className="sessions-page">
        <button className="back-button" onClick={goHome} type="button">
          ← Torna alla Home
        </button>

        <section className="sessions-hero">
          <p className="section-kicker">Archivio narrativo</p>
          <h1>Sessioni</h1>
          <p>
            La cronologia della Mano Cinerea, ordinata per sessione e raccontata
            come un registro di viaggio: numero, titolo, riassunto, PNG e luoghi.
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
              <header className="session-card-header">
                <div className="session-number-block">
                  <span>Sessione</span>
                  <strong>{session.number}</strong>
                </div>

                <div className="session-title-block">
                  <p className="session-arc">{session.arc}</p>
                  <h2>{session.title}</h2>
                </div>
              </header>

              <div className="session-summary-box">
                <p>{session.summary}</p>
              </div>

              <footer className="session-footer">
                <div>
                  <h3>PNG</h3>
                  <p>{(session.people || []).join(" · ")}</p>
                </div>

                <div>
                  <h3>Luoghi</h3>
                  <p>{(session.places || []).join(" · ")}</p>
                </div>
              </footer>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SessionsPage;
