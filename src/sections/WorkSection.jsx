import ActionButton from '../components/ActionButton'
import workBullit from '../assets/gethyped/work-bullit.avif'
import workRoasta from '../assets/gethyped/work-roasta.avif'
import workLoco from '../assets/gethyped/work-loco.avif'

const WORK_ITEMS = [
  {
    title: 'Van nul naar vol, binnen 3 weken',
    brand: 'Bullit',
    image: workBullit,
    video: 'https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4',
    color: 'red',
  },
  {
    title: 'Zacht in smaak, sterk in beeld',
    brand: 'Roasta',
    image: workRoasta,
    video: 'https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4',
    color: 'blue',
  },
  {
    title: 'Content die écht smaakt (en raakt)',
    brand: 'Loco',
    image: workLoco,
    video: 'https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4',
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
              <div className="work-card__media">
                <img className="work-card__image" src={item.image} alt={`${item.brand} case visual`} />
                <video
                  className="work-card__video"
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                  poster={item.image}
                >
                  <source src={item.video} type="video/mp4" />
                </video>
              </div>

              <div className="work-card__overlay">
                <h3>{item.title}</h3>
                <span>{item.brand}</span>
              </div>

              <div className="work-card__arrow">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSection

