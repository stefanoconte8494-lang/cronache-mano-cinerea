function getStatusClass(status = '') {
  const value = status.toLowerCase()

  if (value.includes('complet')) return 'completed'
  if (value.includes('fallit')) return 'failed'
  if (value.includes('interrott')) return 'interrupted'
  if (value.includes('segret')) return 'secret'
  if (value.includes('corso') || value.includes('attiv')) return 'active'

  return 'unknown'
}

function getProgress(quest) {
  if (Number.isFinite(quest.progress)) {
    return Math.max(0, Math.min(100, quest.progress))
  }

  const status = (quest.status || '').toLowerCase()

  if (status.includes('complet')) return 100
  if (status.includes('fallit') || status.includes('interrott')) return 100
  if (status.includes('corso')) return 65
  if (status.includes('attiv')) return 40
  if (status.includes('segret')) return 25

  return 10
}

function getQuestImage(quest) {
  return quest.image || quest.cover || quest.illustration || ''
}

export default function QuestCard({ quest }) {
  const statusClass = getStatusClass(quest.status)
  const progress = getProgress(quest)
  const image = getQuestImage(quest)

  return (
    <article className="quest-archive-card">
      <div className="quest-card-main">
        <div className="quest-portrait-wrap">
          {image ? (
            <img
              className="quest-portrait"
              src={image}
              alt={`Immagine della quest ${quest.title}`}
            />
          ) : (
            <div className="quest-portrait quest-portrait-placeholder" aria-hidden="true">
              <span>✦</span>
            </div>
          )}
        </div>

        <div className="quest-card-content">
          <div className="quest-heading-row">
            <div>
              <p className="quest-type">{quest.type}</p>
              <h3>{quest.title}</h3>
            </div>

            <span className={`quest-status-badge quest-status-${statusClass}`}>
              {quest.status}
            </span>
          </div>

          <dl className="quest-details">
            <div>
              <dt>Luogo</dt>
              <dd>{quest.place || 'Da definire'}</dd>
            </div>

            <div>
              <dt>Sessioni</dt>
              <dd>{quest.sessions || 'Da definire'}</dd>
            </div>

            <div className="quest-detail-wide">
              <dt>PNG chiave</dt>
              <dd>{(quest.keyNpcs || []).join(' · ') || 'Nessuno registrato'}</dd>
            </div>
          </dl>
        </div>
      </div>

      <p className="quest-notes">{quest.description}</p>

      <div className="quest-progress-block" aria-label={`Avanzamento ${progress}%`}>
        <div className="quest-progress-label">
          <span>Avanzamento</span>
          <strong>{progress}%</strong>
        </div>
        <div className="quest-progress-track">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    </article>
  )
}
