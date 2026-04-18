import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import heroThumb1 from '../assets/gethyped/hero-thumb-1.avif'
import heroThumb2 from '../assets/gethyped/hero-thumb-2.avif'

const HERO_VIDEO_ONE = 'https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4'
const HERO_VIDEO_TWO = 'https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4'

function HeroSection() {
  const containerRef = useRef(null)
  const cardOneRef = useRef(null)
  const cardTwoRef = useRef(null)
  const cardThreeRef = useRef(null)
  const cardFourRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const cards = [cardOneRef.current, cardTwoRef.current, cardThreeRef.current, cardFourRef.current].filter(Boolean)

    if (!container || cards.length === 0) {
      return undefined
    }

    let containerW = container.clientWidth
    let currentPortion = 0

    const randomCardState = () => ({
      xPercent: (Math.random() - 0.5) * 10,
      yPercent: (Math.random() - 0.5) * 10,
      rotation: (Math.random() - 0.5) * 20,
    })

    cards.forEach((card) => {
      gsap.set(card, randomCardState())
    })

    const resetPortion = (index) => {
      if (index < 0 || index >= cards.length) {
        return
      }

      gsap.to(cards[index], {
        ...randomCardState(),
        scale: 1,
        duration: 0.8,
        ease: 'elastic.out(1, 0.75)',
      })
    }

    const newPortion = (index) => {
      if (index < 0 || index >= cards.length) {
        return
      }

      gsap.to(cards[index], {
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        duration: 0.8,
        scale: 1.1,
        ease: 'elastic.out(1, 0.75)',
      })

      cards.forEach((card, cardIndex) => {
        if (cardIndex !== index) {
          gsap.to(card, {
            xPercent: 24 / (cardIndex - index),
            ease: 'elastic.out(1, 0.75)',
            duration: 0.8,
          })
        } else {
          gsap.to(card, {
            xPercent: 0,
            ease: 'elastic.out(1, 0.75)',
            duration: 0.8,
          })
        }
      })
    }

    const handleMouseMove = (event) => {
      const mouseX = event.clientX - container.getBoundingClientRect().left
      const percentage = mouseX / containerW
      const activePortion = Math.ceil(percentage * cards.length)

      if (currentPortion !== activePortion && activePortion > 0 && activePortion <= cards.length) {
        if (currentPortion !== 0) {
          resetPortion(currentPortion - 1)
        }

        currentPortion = activePortion
        newPortion(currentPortion - 1)
      }
    }

    const handleMouseLeave = () => {
      resetPortion(currentPortion - 1)
      currentPortion = 0

      gsap.to(cards, {
        xPercent: 0,
        ease: 'elastic.out(1, 0.75)',
        duration: 0.8,
      })
    }

    const handleResize = () => {
      containerW = container.clientWidth
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section id="top" className="hero-section">
      <div className="page-shell">
        <div className="hero-copy">
          <h1>
            <span className="hero-heading-line hero-heading-line--1">Get Hyped. Get</span>
            <br className="hero-heading-break" />
            <span className="hero-heading-line hero-heading-line--2">Noticed. Get&nbsp;Results.</span>
          </h1>
          <p>
            Klaar met gokken op content
            <br />
            die niets oplevert?
          </p>
        </div>

        <div ref={containerRef} className="hero-cards" aria-label="Results">
          <article ref={cardOneRef} className="hero-card hero-card--blue">
            <h2>10M+</h2>
            <div className="hero-card__meta">
              <h3>Organische views</h3>
              <p>Groei door slimme content</p>
            </div>
          </article>

          <article ref={cardTwoRef} className="hero-card hero-card--media">
            <img className="hero-card__image" src={heroThumb1} alt="Video still of campaign work" />
            <video className="hero-card__video" autoPlay loop muted playsInline preload="auto" src={HERO_VIDEO_ONE} />
          </article>

          <article ref={cardThreeRef} className="hero-card hero-card--green">
            <h2>30+</h2>
            <div className="hero-card__meta">
              <h3>Merken geholpen</h3>
              <p>Van start-up tot multinational</p>
            </div>
          </article>

          <article ref={cardFourRef} className="hero-card hero-card--media hero-card--trailing">
            <img className="hero-card__image" src={heroThumb2} alt="Campaign video still of sports car" />
            <video className="hero-card__video" autoPlay loop muted playsInline preload="auto" src={HERO_VIDEO_TWO} />
          </article>
        </div>
      </div>
      <div className="hero-divider" />
    </section>
  )
}

export default HeroSection
