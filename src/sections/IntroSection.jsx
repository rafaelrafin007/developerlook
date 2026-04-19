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
      </div>

      <div className="intro-grid-shell">
        <div className="intro-grid">
          <div className="intro-image-wrap">
            <img src={introImage} alt="Team member in orange outfit" className="intro-image" />
          </div>

          <div className="intro-content">
            <p>
              We stoppen niet bij mooie plaatjes en
              <br />
              vette beelden. We maken het meetbaar.
              <br />
              Zo weet je precies wat werkt en wat niet.
              <br />
              Nooit meer content zonder strategie.
              <br />
              Nooit meer content zonder resultaat.
            </p>
            <ActionButton label="Leer ons kennen" variant="outline" />
          </div>

          <a href="#expertises" className="intro-scroll-btn" aria-label="Scroll to expertises">
            <span className="intro-scroll-btn__icons" aria-hidden="true">
              <svg className="intro-scroll-btn__icon is-current" viewBox="0 0 24 24">
                <path d="m12 20-7-8h5V4h4v8h5z" />
              </svg>
              <svg className="intro-scroll-btn__icon is-next" viewBox="0 0 24 24">
                <path d="m12 20-7-8h5V4h4v8h5z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
