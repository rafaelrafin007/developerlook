import ActionButton from '../components/ActionButton'
import introImage from '../assets/gethyped/intro-annie.webp'

function IntroSection() {
  return (
    <section id="about" className="intro-section">
      <div className="page-shell">
        <h2 className="intro-title">
          <span>Wij maken content die opvalt. Die</span>
          <br className="intro-title-break" />
          <span>blijft hangen. Die jouw doelgroep</span>
          <br className="intro-title-break" />
          <span>raakt en jouw merk in beweging</span>
          <br className="intro-title-break" />
          <span>brengt. Snel, krachtig en energiek.</span>
        </h2>

        <div className="intro-grid">
          <div className="intro-image-wrap">
            <img src={introImage} alt="Team member in orange outfit" className="intro-image" />
          </div>

          <div className="intro-content">
            <p>
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt
              en wat niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
            </p>
            <ActionButton label="Leer ons kennen" variant="outline" />
          </div>

          <a href="#expertises" className="intro-scroll-btn" aria-label="Scroll to expertises">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m12 4 7 8h-5v8H10v-8H5z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default IntroSection