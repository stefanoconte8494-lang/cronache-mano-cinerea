export default function Navbar({
  activePage = 'Home',
  onHomeClick,
  onCharactersClick,
  onNpcsClick,
  onSessionsClick,
  onQuestsClick,
}) {
  const links = [
    'Home',
    'Personaggi',
    'Sessioni',
    'Quest',
    'Luoghi',
    'PNG',
    'Oggetti',
    'Timeline',
  ]

  const handleNavClick = (link) => {
    if (link === 'Home') {
      onHomeClick?.()
      return
    }

    if (link === 'Personaggi') {
      onCharactersClick?.()
      return
    }

    if (link === 'Sessioni') {
      onSessionsClick?.()
      return
    }

    if (link === 'Quest') {
      onQuestsClick?.()
      return
    }

    if (link === 'PNG') {
      onNpcsClick?.()
      return
    }
  }

  return (
    <nav className="navbar">
      <button className="navbar-brand" onClick={onHomeClick} type="button">
        <span className="brand-mark">✋</span>
        <span>Mano Cinerea</span>
      </button>

      <div className="navbar-links">
        {links.map((link) => (
          <button
            key={link}
            type="button"
            className={link === activePage ? 'nav-link active' : 'nav-link'}
            onClick={() => handleNavClick(link)}
          >
            {link}
          </button>
        ))}
      </div>

      <button className="search-button" aria-label="Cerca" type="button">
        ⌕
      </button>
    </nav>
  )
}
