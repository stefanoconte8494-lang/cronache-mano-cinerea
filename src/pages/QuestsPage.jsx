import { useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import QuestCard from '../components/QuestCard'
import { quests } from '../data/questsData'
import '../styles/quests.css'

const filters = [
  'Tutte',
  'Principali',
  'Personali',
  'Secondarie',
  'Attive',
  'Completate',
  'Segrete',
]

function QuestsPage({
  onNavigate,
  onHomeClick,
  onCharactersClick,
  onNpcsClick,
  onSessionsClick,
  onQuestsClick,
  onCodexClick,
}) {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('Tutte')

  const goHome = () => {
    if (onNavigate) {
      onNavigate('home')
      return
    }

    onHomeClick?.()
  }

  const filteredQuests = useMemo(() => {
    const query = search.trim().toLowerCase()

    return quests.filter((quest) => {
      const status = (quest.status || '').toLowerCase()
      const type = (quest.type || '').toLowerCase()

      const matchesFilter =
        activeFilter === 'Tutte' ||
        (activeFilter === 'Principali' && type.includes('principale')) ||
        (activeFilter === 'Personali' && type.includes('personale')) ||
        (activeFilter === 'Secondarie' &&
          !type.includes('principale') &&
          !type.includes('personale') &&
          !type.includes('segreta')) ||
        (activeFilter === 'Attive' &&
          (status.includes('attiva') || status.includes('corso'))) ||
        (activeFilter === 'Completate' && status.includes('completata')) ||
        (activeFilter === 'Segrete' &&
          (status.includes('segreta') || type.includes('segreta')))

      if (!matchesFilter) return false
      if (!query) return true

      return [
        quest.title,
        quest.status,
        quest.type,
        quest.description,
        quest.place,
        quest.sessions,
        ...(quest.keyNpcs || []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
        .includes(query)
    })
  }, [search, activeFilter])

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

      <main className="quest-archive-page">
        <button className="back-button" onClick={goHome} type="button">
          ← Torna alla Home
        </button>

        <section className="quest-archive-hero panel">
          <p className="kicker">Cronache della Mano Cinerea</p>
          <h1>Registro Quest</h1>
          <p>
            Missioni principali, contratti, misteri irrisolti e trame personali
            che hanno segnato il cammino della compagnia.
          </p>

          <div className="quest-archive-count">
            <strong>{quests.length}</strong>
            <span>quest registrate</span>
          </div>
        </section>

        <section className="quest-tools panel">
          <label>
            <span>Cerca nel registro</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Titolo, PNG, luogo, sessione..."
            />
          </label>

          <div className="quest-filter-group" aria-label="Filtri quest">
            <span>Filtra le quest</span>
            <div className="quest-filter-row">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={filter === activeFilter ? 'quest-filter active' : 'quest-filter'}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="quest-registry panel">
          <div className="quest-list-header">
            <div>
              <p className="kicker">Archivio delle missioni</p>
              <h2>{filteredQuests.length} voci trovate</h2>
            </div>

            <p>Le immagini delle quest potranno essere aggiunte senza cambiare il layout.</p>
          </div>

          <div className="quest-grid">
            {filteredQuests.map((quest) => (
              <QuestCard quest={quest} key={quest.id} />
            ))}
          </div>

          {filteredQuests.length === 0 && (
            <div className="quest-empty-state">
              Nessuna quest trovata con questi filtri.
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default QuestsPage
