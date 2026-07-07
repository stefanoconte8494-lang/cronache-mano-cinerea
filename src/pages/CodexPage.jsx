import { useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { codexCategories, codexEntries } from '../data/codexData'
import '../styles/codex.css'

export default function CodexPage({
  onHomeClick,
  onCharactersClick,
  onNpcsClick,
  onSessionsClick,
  onQuestsClick,
  onCodexClick,
}) {
  const [activeCategory, setActiveCategory] = useState('tutte')
  const [search, setSearch] = useState('')

  const filteredEntries = useMemo(() => {
    const query = search.trim().toLowerCase()

    return codexEntries.filter((entry) => {
      const matchesCategory =
        activeCategory === 'tutte' || entry.category === activeCategory

      if (!matchesCategory) return false

      if (!query) return true

      return [
        entry.title,
        entry.type,
        entry.status,
        entry.description,
        ...(entry.links || []),
      ]
        .join(' ')
        .toLowerCase()
        .includes(query)
    })
  }, [activeCategory, search])

  const currentCategory =
    activeCategory === 'tutte'
      ? null
      : codexCategories.find((category) => category.id === activeCategory)

  return (
    <div className="site-shell codex-shell">
      <Navbar
        activePage="Codex"
        onHomeClick={onHomeClick}
        onCharactersClick={onCharactersClick}
        onNpcsClick={onNpcsClick}
        onSessionsClick={onSessionsClick}
        onQuestsClick={onQuestsClick}
        onCodexClick={onCodexClick}
      />

      <main className="codex-page">
        <section className="codex-cover">
          <p className="codex-kicker">Archivio superiore</p>
          <h1>Codex della Mano Cinerea</h1>
          <p>
            Tra queste pagine sono custodite le cronache della compagnia, le reliquie
            recuperate, i luoghi visitati e i nomi di coloro che hanno cambiato il destino
            della Mano Cinerea. Nulla viene dimenticato.
          </p>
        </section>

        <section className="codex-overview">
          <aside className="codex-counter">
            <p className="codex-kicker">Voci registrate</p>
            <h2>{codexEntries.length}</h2>
            <div className="codex-counter-list">
              {codexCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={activeCategory === category.id ? 'counter-row active' : 'counter-row'}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span>{category.title}</span>
                  <strong>{category.count}</strong>
                </button>
              ))}
            </div>
          </aside>

          <div className="codex-category-grid">
            <button
              type="button"
              className={activeCategory === 'tutte' ? 'codex-category-card active' : 'codex-category-card'}
              onClick={() => setActiveCategory('tutte')}
            >
              <span className="codex-category-icon">✦</span>
              <h3>Tutte le voci</h3>
              <p>Consulta l’intero archivio senza filtri.</p>
            </button>

            {codexCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={activeCategory === category.id ? 'codex-category-card active' : 'codex-category-card'}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="codex-category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="codex-toolbar">
          <div>
            <p className="codex-kicker">
              {currentCategory ? currentCategory.title : 'Archivio completo'}
            </p>
            <h2>{filteredEntries.length} voci trovate</h2>
          </div>

          <input
            type="text"
            placeholder="Cerca nel Codex..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </section>

        <section className="codex-entry-grid">
          {filteredEntries.map((entry) => (
            <article className={`codex-entry-card codex-entry-${entry.category}`} key={entry.id}>
              <p className="codex-entry-type">{entry.type}</p>
              <h3>{entry.title}</h3>
              <span>{entry.status}</span>
              <p>{entry.description}</p>

              {entry.links?.length > 0 && (
                <div className="codex-entry-links">
                  {entry.links.map((link) => (
                    <small key={link}>{link}</small>
                  ))}
                </div>
              )}
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}
