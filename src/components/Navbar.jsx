export default function Navbar({
  activePage = 'Home',
  onHomeClick,
  onNpcsClick,
  onSessionsClick,
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
    console.log("CLICCATO:", link)

    if (link === 'Home') {
      onHomeClick?.()
      return
    }

    if (link === 'Sessioni') {
      console.log('CLICCATO SESSIONI')
      onSessionsClick?.()
      return
    }

    if (link === 'PNG') {
      onNpcsClick?.()
      return
    }

    if (link === 'Personaggi') {
      onHomeClick?.()

      setTimeout(() => {
        document
          .querySelector('.characters-panel')
          ?.scrollIntoView({ behavior: 'smooth' })
      }, 50)

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