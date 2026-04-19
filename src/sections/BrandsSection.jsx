const BRANDS = [
  {
    name: 'Bullit Digital',
    logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69241146b4df63c4ca966552_Bullit%20Digital.svg',
  },
  {
    name: 'Morssinkhof',
    logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c194e6d1b186563459b107_morssinkhof.svg',
  },
  {
    name: 'Salontopper',
    logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d88f755388cc2c74ecff_salontopper.svg',
  },
  {
    name: 'Seesing Flex',
    logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d880bed5996600cbc586_seesing-flex.svg',
  },
  {
    name: 'Graafschap College',
    logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d86cd6ba384af3c14e58_graafschap-college.svg',
  },
  {
    name: 'Fides',
    logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d85341bf0d7476e56a8c_fides.svg',
  },
  {
    name: 'SRHK',
    logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d838fc5735f090bd9843_SRHK.svg',
  },
  {
    name: 'KNLTB',
    logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d81e72e08110e3fd1a17_knltb.svg',
  },
  {
    name: 'THO',
    logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684b062ebc242028ca4b3ea1_tho.svg',
  },
  {
    name: 'De Talententuin',
    logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684c05642bf8f5cea7384403_de-talententuin.svg',
  },
  {
    name: 'ZCLV',
    logo: 'https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c1952f22281ee50d3620b5_zclv.svg',
  },
]

function BrandsSection() {
  return (
    <section className="brands-section">
      <div className="page-shell">
        <h2>
          This brands
          <br />
          got hyped!!
        </h2>

        <div className="brands-marquee" aria-label="Client logos">
          <div className="brands-track">
            <div className="brands-row" role="list">
              {BRANDS.map((brand) => (
                <article key={brand.name} className="brand-tile" role="listitem" aria-label={brand.name}>
                  <img src={brand.logo} alt={brand.name} loading="lazy" />
                </article>
              ))}
            </div>

            <div className="brands-row brands-row--clone" aria-hidden="true">
              {BRANDS.map((brand, index) => (
                <article key={`${brand.name}-${index}`} className="brand-tile">
                  <img src={brand.logo} alt="" loading="lazy" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandsSection
