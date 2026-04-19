import ActionButton from '../components/ActionButton'
import workBullit from '../assets/gethyped/work-bullit.avif'
import workRoasta from '../assets/gethyped/work-roasta.avif'
import workLoco from '../assets/gethyped/work-loco.avif'

const WORK_ITEMS = [
  {
    title: 'Van nul naar vol, binnen 3 weken',
    brand: 'Bullit',
    image: workBullit,
    color: 'red',
  },
  {
    title: 'Zacht in smaak, sterk in beeld',
    brand: 'Roasta',
    image: workRoasta,
    color: 'blue',
  },
  {
    title: 'Content die écht smaakt (en raakt)',
    brand: 'Loco',
    image: workLoco,
    color: 'green',
  },
]

function WorkSection() {
  return (
    <section id="work" className="work-section">
      <div className="page-shell">
        <div className="work-intro">
          <h2>
            Content
            <br />
            dat scoort.
          </h2>
          <p>
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt
            en het verschil maakt.
          </p>
          <ActionButton label="Bekijk al ons werk" variant="outline" />
        </div>

        <div className="work-grid">
          {WORK_ITEMS.map((item) => (
            <article key={item.brand} className={`work-card work-card--${item.color}`}>
              <img src={item.image} alt={`${item.brand} case visual`} />
              <div className="work-card__overlay">
                <h3>{item.title}</h3>
                <span>{item.brand}</span>
                <div className="work-card__arrow">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSection
