import { useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NpcCard from '../components/NpcCard'
import { npcsByFirstAppearance } from '../data/npcsData'
import '../styles/npcs.css'

const statusOptions = [
  'Tutti',
  'Vivo',
  'Viva',
  'Morto',
  'Morta',
  'Non morto',
  'Non morta',
  'Scomparso',
  'Scomparsa',
  'Attivo',
  'Nemico',
  'Nemica',
  'Apparizione',
  'Sconosciuto',
]

export default function NpcsPage({
  onHomeClick,
  onCharactersClick,
  onNpcsClick,
  onSessionsClick,
  onQuestsClick,
  onCodexClick,
}) {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('Tutti')

  const filteredNpcs = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return npcsByFirstAppearance.filter((npc) => {
      const searchableText = [
        npc.name,
        npc.faction,
        npc.role,
        npc.status,
        npc.notes,
        npc.firstAppearance,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      const matchesSearch =
        normalizedSearch.length === 0 || searchableText.includes(normalizedSearch)

      const matchesStatus =
        statusFilter === 'Tutti' ||
        (npc.status || '').toLowerCase().includes(statusFilter.toLowerCase()) ||
        (npc.role || '').toLowerCase().includes(statusFilter.toLowerCase())

      return matchesSearch && matchesStatus
    })
  }, [search, statusFilter])

  return (
    <div className="site-shell npc-page-shell">
      <Navbar
        activePage="PNG"
        onHomeClick={onHomeClick}
        onCharactersClick={onCharactersClick}
        onNpcsClick={onNpcsClick}
        onSessionsClick={onSessionsClick}
        onQuestsClick={onQuestsClick}
        onCodexClick={onCodexClick}
      />

      <main className="npc-archive-page">
        <section className="npc-archive-hero panel">
          <p className="kicker">Registro PNG</p>
          <h1>Personaggi non giocanti</h1>
          <p>
            Archivio cronologico delle persone, creature e presenze incontrate
            dalla Mano Cinerea durante la campagna.
          </p>

          <div className="npc-archive-count">
            <strong>{npcsByFirstAppearance.length}</strong>
            <span>personaggi censiti</span>
          </div>
        </section>

        <section className="npc-tools panel">
          <label>
            <span>Cerca nel registro</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Nome, fazione, luogo, ruolo..."
            />
          </label>

          <label>
            <span>Filtra per stato o ruolo</span>
            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </section>

        <section className="npc-registry panel">
          <div className="npc-list-header">
            <div>
              <p className="kicker">Archivio cronologico</p>
              <h2>{filteredNpcs.length} voci trovate</h2>
            </div>

            <p>Ordinamento: prima apparizione nelle Cronache.</p>
          </div>

          <div className="npc-grid">
            {filteredNpcs.map((npc) => (
              <NpcCard npc={npc} key={npc.id} />
            ))}
          </div>

          {filteredNpcs.length === 0 && (
            <div className="npc-empty-state">
              Nessun PNG trovato con questi filtri.
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}
