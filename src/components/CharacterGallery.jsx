import { useState } from 'react'

export default function CharacterGallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(null)
  if (!images.length) return null

  return (
    <section className="character-gallery-section">
      <div className="character-section-heading">
        <p>Archivio visuale</p>
        <h2>Galleria</h2>
      </div>

      <div className="character-gallery-grid">
        {images.map((image) => (
          <button className="gallery-card" key={image.id || image.title} type="button" onClick={() => setSelectedImage(image)}>
            <img src={image.image} alt={image.title} />
            <span>{image.title}</span>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true">
          <button className="gallery-lightbox-backdrop" type="button" aria-label="Chiudi galleria" onClick={() => setSelectedImage(null)} />
          <article className="gallery-lightbox-panel">
            <button className="gallery-close-button" type="button" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </article>
        </div>
      )}
    </section>
  )
}
