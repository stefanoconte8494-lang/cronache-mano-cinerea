export default function CharacterCard({ character, muted = false, onClick }) {
  const isClickable = Boolean(onClick)
  const portrait =
    character.portrait ||
    character.image ||
    character.avatar ||
    character.img ||
    ''

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
        {portrait ? (
          <img
            className="character-card-portrait"
            src={portrait}
            alt={`Ritratto di ${character.name}`}
          />
        ) : (
          <span>{character.symbol || '✦'}</span>
        )}
      </div>

      <h3>{character.name}</h3>
      <p>{character.epithet || character.subtitle || character.title || character.role}</p>

      {isClickable && (
        <span className="open-hint">
          Apri scheda <span aria-hidden="true">→</span>
        </span>
      )}
    </article>
  )
}
