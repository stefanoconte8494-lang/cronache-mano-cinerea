import { useState } from 'react'

export default function CharacterForms({ forms = [], characterName = 'personaggio' }) {
  const [activeFormId, setActiveFormId] = useState(forms[0]?.id)
  const activeForm = forms.find((form) => form.id === activeFormId) || forms[0]

  if (!forms.length || !activeForm) return null

  const sectionTitle = forms.length > 1
    ? `Le forme di ${characterName}`
    : `Aspetto di ${characterName}`

  return (
    <section className={`character-forms character-forms-${activeForm.theme || 'default'}`}>
      <div className="character-section-heading">
        <p>Manifestazioni</p>
        <h2>{sectionTitle}</h2>
      </div>

      <div className="forms-layout">
        <div className="forms-image-frame">
          <img src={activeForm.image} alt={activeForm.name} />
        </div>

        <div className="forms-content">
          <div className="forms-tabs">
            {forms.map((form) => (
              <button
                key={form.id}
                type="button"
                className={form.id === activeForm.id ? 'form-tab active' : 'form-tab'}
                onClick={() => setActiveFormId(form.id)}
              >
                {form.name}
              </button>
            ))}
          </div>

          <article className="form-description-card">
            <p className="form-subtitle">{activeForm.subtitle}</p>
            <h3>{activeForm.name}</h3>
            <p>{activeForm.description}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
