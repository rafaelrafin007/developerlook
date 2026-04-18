import ActionButton from '../components/ActionButton'
import HypedLogo from '../components/HypedLogo'

function FooterSection() {
  return (
    <footer id="contact" className="site-footer">
      <div className="page-shell">
        <div className="site-footer__divider" />
        <div className="site-footer__cta">
          <h2>Let&apos;s Get Hyped!</h2>
          <div className="site-footer__cta-buttons">
            <ActionButton label="Mail ons direct" icon="mail" variant="outline" className="footer-mail-btn" />
            <ActionButton label="Get Results" icon="spark" className="footer-results-btn" />
          </div>
        </div>

        <div className="site-footer__panel">
          <div className="site-footer__sticker" aria-hidden="true">
            <span>GH</span>
          </div>

          <div className="site-footer__panel-links">
            <a href="#expertises">Expertises</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="site-footer__socials">
            <span>Follow us</span>
            <div>
              <a href="#" aria-label="LinkedIn">
                in
              </a>
              <a href="#" aria-label="TikTok">
                t
              </a>
              <a href="#" aria-label="Instagram">
                ig
              </a>
              <a href="#" aria-label="YouTube">
                yt
              </a>
            </div>
          </div>

          <div className="site-footer__contact">
            <h3>Contact</h3>
            <a href="mailto:info@gethyped.nl">info@gethyped.nl</a>
            <a href="tel:+31615337496">+31 6 1533 7496</a>

            <h3>Adres</h3>
            <p>
              Beltrumsestraat 6,
              <br />
              7141 AL Groenlo
            </p>
            <a href="#">Privacyvoorwaarden</a>
          </div>

          <div className="site-footer__credits">
            <span>&copy; 2026 Get Hyped</span>
            <span>&copy; Design by Dylan</span>
          </div>

          <HypedLogo className="site-footer__logo" />
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
