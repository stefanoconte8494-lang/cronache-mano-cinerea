export default function CharacterCard({ character, muted = false, onClick }) {
  const isClickable = Boolean(onClick)

  return (
    <article
      className={muted ? 'character-card muted' : 'character-card'}
      onClick={onClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={(event) => {
        if (!isClickable) return
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onClick()
        }
      }}
    >
      <div className="portrait-placeholder">
        <span>{character.symbol}</span>
      </div>
      <h3>{character.name}</h3>
      <p>{character.epithet}</p>
      {character.id === 'sszara' && <span className="open-hint">Apri scheda →</span>}
    </article>
  )
}
