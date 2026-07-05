import { useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { npcsByFirstAppearance } from '../data/npcsData'

const statusOptions = ['Tutti', 'Vivo', 'Viva', 'Morto', 'Non morta', 'Scomparsa', 'Attivo', 'Nemica']

export default function NpcsPage({ onHomeClick, onCharacterClick, onNpcsClick }) {
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
        .join(' ')
        .toLowerCase()

      const matchesSearch =
        normalizedSearch.length === 0 || searchableText.includes(normalizedSearch)

      const matchesStatus =
        statusFilter === 'Tutti' ||
        npc.status.toLowerCase().includes(statusFilter.toLowerCase()) ||
        npc.role.toLowerCase().includes(statusFilter.toLowerCase())

      return matchesSearch && matchesStatus
    })
  }, [search, statusFilter])

  return (
    <div className="site-shell">
      <Navbar
        activePage="PNG"
        onHomeClick={onHomeClick}
        onNpcsClick={onNpcsClick}
        onCharacterClick={onCharacterClick}
      />

      <main className="archive-page">
        <section className="archive-hero panel">
          <p className="kicker">Archivio narrativo</p>
          <h1>Personaggi non giocanti</h1>
          <p>
            Alleati, nemici, presenze ambigue e figure ricorrenti della campagna.
            L’elenco è ordinato per prima apparizione, ma pensato per essere consultato
            soprattutto tramite ricerca per nome, luogo, ruolo o fazione.
          </p>
        </section>

        <section className="npc-tools panel">
          <label>
            Cerca PNG
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Gertrude, Alistair, Ishar, Locuste, morto..."
            />
          </label>

          <label>
            Filtra per stato/ruolo
            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </section>

        <section className="npc-list-panel panel">
          <div className="npc-list-header">
            <div>
              <p className="kicker">Registro PNG</p>
              <h2>{filteredNpcs.length} voci trovate</h2>
            </div>

            <p>
              Ordinamento: prima apparizione nelle Cronache.
            </p>
          </div>

          <div className="npc-grid npc-grid-single-list">
            {filteredNpcs.map((npc) => (
              <article className="npc-card" key={npc.id}>
                <div className="npc-card-header">
                  <span className="npc-rune">✦</span>
                  <div>
                    <h3>{npc.name}</h3>
                    <p>{npc.role}</p>
                  </div>
                </div>

                <dl className="npc-details">
                  <div>
                    <dt>Fazione/Luogo</dt>
                    <dd>{npc.faction}</dd>
                  </div>
                  <div>
                    <dt>Stato</dt>
                    <dd className={npc.status.toLowerCase().includes('morto') ? 'status-dead' : 'status-alive'}>
                      {npc.status}
                    </dd>
                  </div>
                  <div>
                    <dt>Prima apparizione</dt>
                    <dd>{npc.firstAppearance}</dd>
                  </div>
                </dl>

                <p className="npc-notes">{npc.notes}</p>
              </article>
            ))}
          </div>

          {filteredNpcs.length === 0 && (
            <div className="empty-state">
              Nessun PNG trovato con questi filtri.
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}
