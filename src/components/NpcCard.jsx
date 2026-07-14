function getStatusClass(status = '') {
  const value = status.toLowerCase()

  if (value.includes('morto') || value.includes('morta') || value.includes('distrutt')) {
    return 'dead'
  }

  if (value.includes('scompar') || value.includes('dispers')) {
    return 'missing'
  }

  if (value.includes('non morto') || value.includes('non morta')) {
    return 'undead'
  }

  if (value.includes('apparizione') || value.includes('sconosciuto')) {
    return 'unknown'
  }

  if (value.includes('nemic') || value.includes('attivo')) {
    return 'danger'
  }

  return 'alive'
}

export default function NpcCard({ npc }) {
  const portrait = npc.portrait || npc.image || npc.avatar || ''
  const statusClass = getStatusClass(npc.status)

  return (
    <article className="npc-card">
      <div className="npc-card-main">
        <div className="npc-portrait-wrap">
          {portrait ? (
            <img
              className="npc-portrait"
              src={portrait}
              alt={`Ritratto di ${npc.name}`}
            />
          ) : (
            <div className="npc-portrait npc-portrait-placeholder" aria-hidden="true">
              <span>?</span>
            </div>
          )}
        </div>

        <div className="npc-card-content">
          <div className="npc-heading-row">
            <div>
              <h3>{npc.name}</h3>
              <p className="npc-role">{npc.role}</p>
            </div>

            <span className={`npc-status-badge npc-status-${statusClass}`}>
              {npc.status}
            </span>
          </div>

          <dl className="npc-details">
            <div>
              <dt>Fazione / Luogo</dt>
              <dd>{npc.faction}</dd>
            </div>

            <div>
              <dt>Prima apparizione</dt>
              <dd>{npc.firstAppearance}</dd>
            </div>
          </dl>
        </div>
      </div>

      <p className="npc-notes">{npc.notes}</p>
    </article>
  )
}
