import { useState } from 'react'
import Home from './pages/Home'
import CharacterPage from './pages/CharacterPage'
import NpcsPage from './pages/NpcsPage'
import SessionsPage from './pages/SessionsPage'
import QuestsPage from './pages/QuestsPage'
import { characters } from './data/charactersData'
import './styles/global.css'
import './styles/layout.css'
import './styles/cards.css'
import './styles/character.css'
import './styles/npcs.css'
import './styles/sessions.css'
import './styles/quests.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedCharacterId, setSelectedCharacterId] = useState(null)

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openHome = () => {
    setCurrentPage('home')
    setSelectedCharacterId(null)
    scrollTop()
  }

  const openNpcs = () => {
    setCurrentPage('npcs')
    setSelectedCharacterId(null)
    scrollTop()
  }

  const openSessions = () => {
    setCurrentPage('sessions')
    setSelectedCharacterId(null)
    scrollTop()
  }

  const openQuests = () => {
    setCurrentPage('quests')
    setSelectedCharacterId(null)
    scrollTop()
  }

  const openCharacter = (characterId) => {
    setSelectedCharacterId(characterId)
    setCurrentPage('character')
    scrollTop()
  }

  const selectedCharacter = characters.find(
    (character) => character.id === selectedCharacterId,
  )

  if (currentPage === 'character' && selectedCharacter) {
    return <CharacterPage character={selectedCharacter} onBack={openHome} />
  }

  if (currentPage === 'npcs') {
    return (
      <NpcsPage
        onHomeClick={openHome}
        onNpcsClick={openNpcs}
        onSessionsClick={openSessions}
        onQuestsClick={openQuests}
        onCharacterClick={openCharacter}
      />
    )
  }

  if (currentPage === 'sessions') {
    return (
      <SessionsPage
        onNavigate={openHome}
        onHomeClick={openHome}
        onNpcsClick={openNpcs}
        onSessionsClick={openSessions}
        onQuestsClick={openQuests}
      />
    )
  }

  if (currentPage === 'quests') {
    return (
      <QuestsPage
        onNavigate={openHome}
        onHomeClick={openHome}
        onNpcsClick={openNpcs}
        onSessionsClick={openSessions}
        onQuestsClick={openQuests}
      />
    )
  }

  return (
    <Home
      onCharacterClick={openCharacter}
      onHomeClick={openHome}
      onNpcsClick={openNpcs}
      onSessionsClick={openSessions}
      onQuestsClick={openQuests}
    />
  )
}

export default App
