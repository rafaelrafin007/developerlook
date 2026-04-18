import SiteHeader from './components/SiteHeader'
import HeroSection from './sections/HeroSection'
import IntroSection from './sections/IntroSection'
import ExpertisesSection from './sections/ExpertisesSection'
import WorkSection from './sections/WorkSection'
import BrandsSection from './sections/BrandsSection'
import FooterSection from './sections/FooterSection'
import './styles/homepage.css'

function App() {
  return (
    <div className="page">
      <SiteHeader />
      <main>
        <HeroSection />
        <IntroSection />
        <ExpertisesSection />
        <WorkSection />
        <BrandsSection />
      </main>
      <FooterSection />
    </div>
  )
}

export default App
