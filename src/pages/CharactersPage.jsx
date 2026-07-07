import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { characters } from "../data/charactersData";
import "../styles/characters.css";

function getImage(character) {
  return character.image || character.portrait || character.avatar || character.img || "";
}

function getSubtitle(character) {
  return character.subtitle || character.role || character.className || character.class || character.title || character.epithet || "Membro della Mano Cinerea";
}

function getQuote(character) {
  return character.quote || character.motto || character.description || character.summary || "La sua storia è ancora custodita negli archivi della Mano Cinerea.";
}

function getOrder(character, index) {
  return character.appearanceOrder ?? character.order ?? character.sessionIntroduced ?? character.firstSession ?? index + 1;
}

function CharactersPage({
  onNavigate,
  onHomeClick,
  onCharactersClick,
  onNpcsClick,
  onSessionsClick,
  onQuestsClick,
  onCodexClick,
  onCharacterClick,
}) {
  const goHome = () => {
    if (onNavigate) {
      onNavigate("home");
      return;
    }

    onHomeClick?.();
  };

  const orderedCharacters = characters
    .slice()
    .sort((a, b) => getOrder(a, 0) - getOrder(b, 0));

  return (
    <div className="site-shell characters-page-shell">
      <Navbar
        activePage="Personaggi"
        onHomeClick={goHome}
        onCharactersClick={onCharactersClick}
        onNpcsClick={onNpcsClick}
        onSessionsClick={onSessionsClick}
        onQuestsClick={onQuestsClick}
        onCodexClick={onCodexClick}
      />

      <main className="characters-page">
        <button className="back-button" onClick={goHome} type="button">
          ← Torna alla Home
        </button>

        <section className="characters-hero">
          <p className="section-kicker">Archivio della compagnia</p>
          <h1>Personaggi</h1>
          <p>
            I membri della Mano Cinerea, ordinati secondo la loro apparizione nella
            cronaca. Ogni scheda è una porta verso il racconto completo del personaggio.
          </p>
        </section>

        <section className="characters-list">
          {orderedCharacters.map((character, index) => {
            const image = getImage(character);
            const subtitle = getSubtitle(character);
            const quote = getQuote(character);

            return (
              <article className="character-preview-card" key={character.id || character.name}>
                <button
                  className="character-preview-button"
                  type="button"
                  onClick={() => character.id && onCharacterClick?.(character.id)}
                >
                  <div className="character-preview-image-wrap">
                    {image ? (
                      <img src={image} alt={character.name} className="character-preview-image" />
                    ) : (
                      <div className="character-preview-placeholder">
                        {character.name?.charAt(0) || "?"}
                      </div>
                    )}
                  </div>

                  <div className="character-preview-content">
                    <p className="character-order">Comparsa {getOrder(character, index)}</p>
                    <h2>{character.name}</h2>
                    <p className="character-subtitle">{subtitle}</p>

                    <div className="character-quote-box">
                      <p>{quote}</p>
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default CharactersPage;
