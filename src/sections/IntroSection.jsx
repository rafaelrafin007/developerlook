import ActionButton from '../components/ActionButton'
import introImage from '../assets/gethyped/intro-annie.webp'

const INTRO_MOBILE_VIDEO = '' // paste the live mobile intro video URL here

function IntroSection() {
  return (
    <section id="about" className="intro-section">
      <div className="page-shell">
        <h2 className="intro-title">
          Wij maken content die opvalt. Die{' '}
          <br className="intro-title-break" />
          blijft hangen. Die jouw doelgroep{' '}
          <br className="intro-title-break" />
          raakt en jouw merk in beweging{' '}
          <br className="intro-title-break" />
          brengt. Snel, krachtig en energiek.
        </h2>

        <div className="intro-grid">
          <div className="intro-image-wrap">
            <img
              src={introImage}
              alt="Team member in orange outfit"
              className="intro-image intro-image--desktop"
            />

            {INTRO_MOBILE_VIDEO ? (
              <video
                className="intro-image intro-image--mobile"
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                poster={introImage}
                style={{ display: 'none' }}
              >
                <source src={INTRO_MOBILE_VIDEO} type="video/mp4" />
              </video>
            ) : (
              <img
                src={introImage}
                alt="Team member in orange outfit"
                className="intro-image intro-image--mobile"
                style={{ display: 'none' }}
              />
            )}
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