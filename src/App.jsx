import { useState } from 'react'
import Home from './pages/Home'
import CharacterPage from './pages/CharacterPage'
import CharactersPage from './pages/CharactersPage'
import NpcsPage from './pages/NpcsPage'
import SessionsPage from './pages/SessionsPage'
import QuestsPage from './pages/QuestsPage'
import CodexPage from './pages/CodexPage'
import { characters } from './data/charactersData'
import './styles/global.css'
import './styles/layout.css'
import './styles/cards.css'
import './styles/character.css'
import './styles/characters.css'
import './styles/npcs.css'
import './styles/sessions.css'
import './styles/quests.css'
import './styles/codex.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedCharacterId, setSelectedCharacterId] = useState(null)

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateTo = (page) => {
    setCurrentPage(page)
    setSelectedCharacterId(null)
    scrollTop()
  }

  const openHome = () => navigateTo('home')
  const openCharacters = () => navigateTo('characters')
  const openNpcs = () => navigateTo('npcs')
  const openSessions = () => navigateTo('sessions')
  const openQuests = () => navigateTo('quests')
  const openCodex = () => navigateTo('codex')

  const openCharacter = (characterId) => {
    setSelectedCharacterId(characterId)
    setCurrentPage('character')
    scrollTop()
  }

  const navigationProps = {
    onHomeClick: openHome,
    onCharactersClick: openCharacters,
    onNpcsClick: openNpcs,
    onSessionsClick: openSessions,
    onQuestsClick: openQuests,
    onCodexClick: openCodex,
    onCharacterClick: openCharacter,
  }

  const selectedCharacter = characters.find(
    (character) => character.id === selectedCharacterId,
  )

  if (currentPage === 'character' && selectedCharacter) {
    return (
      <CharacterPage
        character={selectedCharacter}
        onBack={openCharacters}
        {...navigationProps}
      />
    )
  }

  if (currentPage === 'characters') {
    return <CharactersPage onNavigate={openHome} {...navigationProps} />
  }

  if (currentPage === 'npcs') {
    return <NpcsPage {...navigationProps} />
  }

  if (currentPage === 'sessions') {
    return <SessionsPage onNavigate={openHome} {...navigationProps} />
  }

  if (currentPage === 'quests') {
    return <QuestsPage onNavigate={openHome} {...navigationProps} />
  }

  if (currentPage === 'codex') {
    return <CodexPage {...navigationProps} />
  }

  return <Home {...navigationProps} />
}

export default App
