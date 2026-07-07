export default function CharacterRelics({ relics = [], ultimate }) {
  if (!relics.length && !ultimate) return null

  return (
    <section className="character-relics-section">
      <div className="character-section-heading">
        <p>Reliquie e doni</p>
        <h2>Oggetti, poteri e rischi</h2>
      </div>

      <div className="relics-grid">
        {relics.map((relic) => (
          <article
            className={relic.disease ? 'relic-card relic-card-danger' : 'relic-card'}
            key={relic.name}
          >
            <p className="relic-category">{relic.category}</p>
            <h3>{relic.name}</h3>

            {relic.attunement && <p><strong>Sintonia:</strong> {relic.attunement}</p>}
            {relic.origin && <p><strong>Origine:</strong> {relic.origin}</p>}
            {relic.previousOwner && <p><strong>Precedente proprietario:</strong> {relic.previousOwner}</p>}

            {relic.effects && (
              <ul>
                {relic.effects.map((effect) => <li key={effect}>{effect}</li>)}
              </ul>
            )}

            {relic.longText && <p className="relic-long-text">{relic.longText}</p>}

            {relic.disease && (
              <div className="meteor-disease">
                <h4>Morbo Meteoritico</h4>
                {relic.disease.map((stage) => (
                  <div key={stage.stage}>
                    <strong>{stage.stage}</strong>
                    <p>{stage.text}</p>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      {ultimate && (
        <article className="ultimate-card">
          <p>{ultimate.subtitle}</p>
          <h3>{ultimate.name}</h3>
          <span>{ultimate.text}</span>

          <div className="ultimate-effects">
            {ultimate.effects.map((effect) => (
              <strong key={effect}>✦ {effect}</strong>
            ))}
          </div>
        </article>
      )}
    </section>
  )
}
