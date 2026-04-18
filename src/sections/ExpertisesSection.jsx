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
    text: 'We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die echt impact maken.',
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
    text: 'De juiste content verdient het om gezien te worden. We verspreiden die content waar jouw doelgroep is.',
    button: 'Meer over activatie',
    theme: 'green',
    image: heroThumb2,
    imageAlt: 'Activation visual',
  },
  {
    number: '04',
    title: 'Data',
    subtitle: 'Inzichten die impact maken.',
    text: 'We duiken in de cijfers om te snappen wat echt werkt. En sturen jouw content scherp bij.',
    button: 'Meer over data',
    theme: 'blue',
    image: workBullit,
    imageAlt: 'Data visual',
  },
]

function ExpertisesSection() {
  return (
    <section id="expertises" className="expertises-section">
      <div className="page-shell">
        <div className="expertises-list">
          {EXPERTISES.map((item) => (
            <article key={item.number} className={`expertise-card expertise-card--${item.theme}`}>
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
