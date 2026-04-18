import bullitDigitalLogo from '../assets/gethyped/logo-bullit-digital.svg'
import morssinkhofLogo from '../assets/gethyped/logo-morssinkhof.svg'
import salontopperLogo from '../assets/gethyped/logo-salontopper.svg'
import seesingFlexLogo from '../assets/gethyped/logo-seesing-flex.svg'
import graafschapCollegeLogo from '../assets/gethyped/logo-graafschap-college.svg'
import fidesLogo from '../assets/gethyped/logo-fides.svg'
import srhkLogo from '../assets/gethyped/logo-srhk.svg'

const BRANDS = [
  { name: 'Bullit Digital', logo: bullitDigitalLogo },
  { name: 'Morssinkhof', logo: morssinkhofLogo },
  { name: 'Salontopper', logo: salontopperLogo },
  { name: 'Seesing Flex', logo: seesingFlexLogo },
  { name: 'Graafschap College', logo: graafschapCollegeLogo },
  { name: 'Fides', logo: fidesLogo },
  { name: 'SRHK', logo: srhkLogo },
]

function BrandsSection() {
  return (
    <section className="brands-section">
      <div className="page-shell">
        <h2>These brands got hyped.</h2>
        <div className="brands-row" role="list" aria-label="Client logos">
          {BRANDS.map((brand) => (
            <article key={brand.name} className="brand-tile" role="listitem" aria-label={brand.name}>
              <img src={brand.logo} alt={brand.name} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandsSection
