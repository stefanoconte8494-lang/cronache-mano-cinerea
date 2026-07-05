import heroBanner from '../assets/hero-banner.png'

export default function HeroBanner() {
  return (
    <header className="hero-banner-wrap">
      <img src={heroBanner} alt="Le Cronache della Mano Cinerea" className="hero-banner" />
    </header>
  )
}
