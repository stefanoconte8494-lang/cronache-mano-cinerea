import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { quests } from "../data/questsData";
import "../styles/quests.css";

const filters = ["Tutte", "Attive", "Completate", "Personali", "Segrete"];

function QuestsPage({
  onNavigate,
  onHomeClick,
  onCharactersClick,
  onNpcsClick,
  onSessionsClick,
  onQuestsClick,
  onCodexClick,
}) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Tutte");

  const goHome = () => {
    if (onNavigate) {
      onNavigate("home");
      return;
    }

    onHomeClick?.();
  };

  const filteredQuests = useMemo(() => {
    const query = search.trim().toLowerCase();

    return quests.filter((quest) => {
      const status = quest.status.toLowerCase();
      const type = quest.type.toLowerCase();

      const matchesFilter =
        activeFilter === "Tutte" ||
        (activeFilter === "Attive" && (status.includes("attiva") || status.includes("corso"))) ||
        (activeFilter === "Completate" && status.includes("completata")) ||
        (activeFilter === "Personali" && type.includes("personale")) ||
        (activeFilter === "Segrete" && (status.includes("segreta") || type.includes("segreta")));

      if (!matchesFilter) return false;

      if (!query) return true;

      const searchable = [
        quest.title,
        quest.status,
        quest.type,
        quest.description,
        quest.place,
        quest.sessions,
        ...(quest.keyNpcs || []),
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(query);
    });
  }, [search, activeFilter]);

  return (
    <div className="site-shell quests-shell">
      <Navbar
        activePage="Quest"
        onHomeClick={goHome}
        onCharactersClick={onCharactersClick}
        onNpcsClick={onNpcsClick}
        onSessionsClick={onSessionsClick}
        onQuestsClick={onQuestsClick}
        onCodexClick={onCodexClick}
      />

      <main className="quests-page">
        <button className="back-button" onClick={goHome} type="button">
          ← Torna alla Home
        </button>

        <section className="quests-hero">
          <p className="section-kicker">Registro degli incarichi</p>
          <h1>Quest</h1>
          <p>
            Missioni principali, contratti, misteri irrisolti e trame personali
            della Mano Cinerea.
          </p>
        </section>

        <section className="quests-toolbar">
          <input
            type="text"
            placeholder="Cerca per quest, PNG, luogo, sessione..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <span>{filteredQuests.length} quest</span>
        </section>

        <section className="quest-filters" aria-label="Filtri quest">
          {filters.map((filter) => (
            <button
              key={filter}
              className={filter === activeFilter ? "quest-filter active" : "quest-filter"}
              type="button"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </section>

        <section className="quests-list">
          {filteredQuests.map((quest) => (
            <article className="quest-card" key={quest.id}>
              <header className="quest-card-header">
                <div>
                  <p className="quest-type">{quest.type}</p>
                  <h2>{quest.title}</h2>
                </div>

                <span className={`quest-status ${quest.status.toLowerCase().replaceAll("/", "-").replaceAll(" ", "-")}`}>
                  {quest.status}
                </span>
              </header>

              <div className="quest-description">
                <p>{quest.description}</p>
              </div>

              <footer className="quest-footer">
                <div>
                  <h3>PNG chiave</h3>
                  <p>{(quest.keyNpcs || []).join(" · ")}</p>
                </div>

                <div>
                  <h3>Luogo</h3>
                  <p>{quest.place}</p>
                </div>

                <div>
                  <h3>Sessioni</h3>
                  <p>{quest.sessions}</p>
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

export default QuestsPage;
