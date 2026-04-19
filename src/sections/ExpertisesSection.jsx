import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ActionButton from '../components/ActionButton'
import heroThumb1 from '../assets/gethyped/hero-thumb-1.avif'
import heroThumb2 from '../assets/gethyped/hero-thumb-2.avif'
import workRoasta from '../assets/gethyped/work-roasta.avif'
import workBullit from '../assets/gethyped/work-bullit.avif'

const EXPERTISES = [
  {
    number: '01',
    title: 'Social strategy',
    subtitle: 'Slimme strategie. Sterke start.',
    text: 'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.',
    button: 'Meer over social strategie',
    theme: 'white',
    image: workRoasta,
    imageAlt: 'Social strategy visual',
  },
  {
    number: '02',
    title: 'Content creation',
    subtitle: 'Content die opvalt en raakt.',
    text: 'We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.',
    button: 'Meer over content creatie',
    theme: 'pink',
    image: heroThumb1,
    imageAlt: 'Content creation visual',
  },
  {
    number: '03',
    title: 'Activation',
    subtitle: 'Zichtbaar waar en wanneer het telt.',
    text: 'De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.',
    button: 'Meer over activatie',
    theme: 'green',
    image: heroThumb2,
    imageAlt: 'Activation visual',
  },
  {
    number: '04',
    title: 'Data',
    subtitle: 'Inzichten die impact maken.',
    text: 'We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.',
    button: 'Meer over data',
    theme: 'blue',
    image: workBullit,
    imageAlt: 'Data visual',
  },
]

function ExpertisesSection() {
  const sectionRef = useRef(null)
  const listRef = useRef(null)
  const cardRefs = useRef([])

  useLayoutEffect(() => {
    const section = sectionRef.current
    const list = listRef.current
    const cards = cardRefs.current.filter(Boolean)

    if (!section || !list || cards.length === 0) {
      return undefined
    }

    gsap.registerPlugin(ScrollTrigger)

    const media = gsap.matchMedia()

    media.add('(min-width: 992px) and (prefers-reduced-motion: no-preference)', () => {
      section.classList.add('is-scroll-stack')

      const context = gsap.context(() => {
        const cardCount = cards.length
        const enterOffset = 108
        const baseRotations = [0, -1.2, 1.05, -0.7]
        const baseX = [0, 0.7, -0.6, 0.45]

        gsap.set(cards, {
          yPercent: (index) => (index === 0 ? 0 : enterOffset),
          xPercent: (index) => baseX[index] ?? 0,
          rotate: (index) => baseRotations[index] ?? 0,
          scale: 1,
          opacity: 1,
          zIndex: (index) => index + 1,
          transformOrigin: '50% 12%',
        })

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top+=88',
            end: () => `+=${Math.max((cardCount - 1) * window.innerHeight * 0.82, 1200)}`,
            scrub: 0.45,
            pin: list,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        cards.slice(1).forEach((card, index) => {
          const previousCard = cards[index]

          timeline
            .to(
              card,
              {
                yPercent: 0,
                duration: 1,
                ease: 'none',
              },
              '+=0.24',
            )
            .to(
              previousCard,
              {
                scale: 0.968,
                yPercent: -2.5,
                opacity: 0.96,
                duration: 1,
                ease: 'none',
              },
              '<',
            )
        })
      }, section)

      return () => {
        context.revert()
        section.classList.remove('is-scroll-stack')
      }
    })

    return () => {
      media.revert()
      section.classList.remove('is-scroll-stack')
    }
  }, [])

  return (
    <section id="expertises" className="expertises-section" ref={sectionRef}>
      <div className="page-shell">
        <div className="expertises-list" ref={listRef}>
          {EXPERTISES.map((item, index) => (
            <article
              key={item.number}
              className={`expertise-card expertise-card--${item.theme}`}
              ref={(node) => {
                cardRefs.current[index] = node
              }}
            >
              <header className="expertise-card__top">
                <span className="expertise-label">Expertise</span>
                <h2>{item.title}</h2>
                <span className="expertise-number">{item.number}</span>
              </header>

              <div className="expertise-card__content">
                <div className="expertise-card__copy">
                  <h3>{item.subtitle}</h3>
                  <p>{item.text}</p>
                  <ActionButton label={item.button} />
                </div>
                <div className="expertise-card__media">
                  <img src={item.image} alt={item.imageAlt} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpertisesSection
