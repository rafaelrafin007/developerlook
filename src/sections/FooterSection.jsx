import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ActionButton from '../components/ActionButton'
import HypedLogo from '../components/HypedLogo'

const TRAIL_STICKERS = [
  'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg',
  'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415233f03ab6c1143fa_gh-logo-pink.svg',
  'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415e192971624995445_gh-logo-green.svg',
  'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg',
]

function FooterSection() {
  const trailAreaRef = useRef(null)
  const trailLayerRef = useRef(null)

  useEffect(() => {
    const trailArea = trailAreaRef.current
    const trailLayer = trailLayerRef.current

    if (!trailArea || !trailLayer) {
      return undefined
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    let accumulatedDistance = 0
    let previousX = 0
    let previousY = 0
    let hasPreviousPosition = false
    let imageIndex = 0
    let threshold = Math.max(window.innerWidth / 3, 220)
    const activeTimelines = new Set()

    const updateThreshold = () => {
      threshold = Math.max(window.innerWidth / 3, 220)
    }

    const spawnSticker = (x, y, deltaX, deltaY) => {
      const image = document.createElement('img')
      image.src = TRAIL_STICKERS[imageIndex]
      image.alt = ''
      image.className = 'site-footer__trail-sticker'
      trailLayer.appendChild(image)

      const timeline = gsap.timeline({
        onComplete: () => {
          activeTimelines.delete(timeline)
          image.remove()
          timeline.kill()
        },
      })

      activeTimelines.add(timeline)

      timeline.fromTo(
        image,
        {
          x,
          y,
          xPercent: -50 + (Math.random() - 0.5) * 80,
          yPercent: -50 + (Math.random() - 0.5) * 10,
          scaleX: 1.3,
          scaleY: 1.3,
        },
        {
          scaleX: 1,
          scaleY: 1,
          ease: 'elastic.out(2, 0.6)',
          duration: 0.6,
        },
      )

      timeline.to(
        image,
        {
          x: `+=${deltaX * 4}`,
          y: `+=${deltaY * 4}`,
          rotation: (Math.random() - 0.5) * 20,
          ease: 'power4.out',
          duration: 1.5,
        },
        '<',
      )

      timeline.to(image, {
        duration: 0.3,
        scale: 0.5,
        opacity: 0,
        delay: 0.1,
        ease: 'back.in(1.5)',
      })

      imageIndex = (imageIndex + 1) % TRAIL_STICKERS.length
    }

    const handleMouseMove = (event) => {
      const rect = trailArea.getBoundingClientRect()
      const currentX = event.clientX - rect.left
      const currentY = event.clientY - rect.top

      if (currentX < 0 || currentY < 0 || currentX > rect.width || currentY > rect.height) {
        hasPreviousPosition = false
        accumulatedDistance = 0
        return
      }

      if (!hasPreviousPosition) {
        previousX = currentX
        previousY = currentY
        hasPreviousPosition = true
        return
      }

      const deltaX = currentX - previousX
      const deltaY = currentY - previousY

      accumulatedDistance += Math.abs(deltaX) + Math.abs(deltaY)

      if (accumulatedDistance > threshold) {
        accumulatedDistance = 0
        spawnSticker(currentX, currentY, deltaX, deltaY)
      }

      previousX = currentX
      previousY = currentY
    }

    const handleMouseLeave = () => {
      hasPreviousPosition = false
      accumulatedDistance = 0
    }

    trailArea.addEventListener('mousemove', handleMouseMove)
    trailArea.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', updateThreshold)

    return () => {
      trailArea.removeEventListener('mousemove', handleMouseMove)
      trailArea.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', updateThreshold)
      activeTimelines.forEach((timeline) => timeline.kill())
      trailLayer.innerHTML = ''
    }
  }, [])

  return (
    <footer id="contact" className="site-footer">
      <div className="page-shell">
        <div className="site-footer__divider" />

        <div className="site-footer__cta" ref={trailAreaRef}>
          <div className="site-footer__trail-layer" ref={trailLayerRef} aria-hidden="true" />
          <h2>Let&apos;s Get Hyped!</h2>
          <div className="site-footer__cta-buttons">
            <ActionButton
              href="mailto:info@gethyped.nl"
              label="Mail ons direct"
              icon="mail"
              variant="outline"
              className="footer-mail-btn"
            />
            <ActionButton href="#contact" label="Get Results" icon="spark" className="footer-results-btn" />
          </div>
        </div>

        <div className="site-footer__panel">
          <div className="site-footer__mobile-top">
            <HypedLogo className="site-footer__mobile-logo" />
            <ActionButton
              href="#contact"
              label="Get Hyped! Neem contact op"
              icon="spark"
              className="site-footer__mobile-panel-cta"
            />
          </div>

          <div className="site-footer__sticker" aria-hidden="true">
            <svg className="site-footer__sticker-ring" viewBox="0 0 100 100" role="presentation" aria-hidden="true">
              <defs>
                <path
                  id="footer-sticker-ring"
                  d="M 50,50 m -33,0 a 33,33 0 1,1 66,0 a 33,33 0 1,1 -66,0"
                />
              </defs>
              <text>
                <textPath href="#footer-sticker-ring" startOffset="0%">
                  GET HYPED • GET NOTICED • GET RESULTS •
                </textPath>
              </text>
            </svg>
            <span className="site-footer__sticker-core">GH</span>
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
              <a href="https://www.linkedin.com/company/gethypednl/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                in
              </a>
              <a href="https://www.tiktok.com/@gethyped.nl" target="_blank" rel="noreferrer" aria-label="TikTok">
                t
              </a>
              <a href="https://www.instagram.com/gethyped.nl/" target="_blank" rel="noreferrer" aria-label="Instagram">
                ig
              </a>
              <a href="https://www.youtube.com/@gethypednl" target="_blank" rel="noreferrer" aria-label="YouTube">
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

            <a href="#contact">Privacyvoorwaarden</a>
          </div>

          <div className="site-footer__credits">
            <span>&copy; 2025 Get Hyped</span>
            <span>&copy; Design by Dylan</span>
          </div>

          <HypedLogo className="site-footer__logo" />
        </div>
      </div>
    </footer>
  )
}

export default FooterSection