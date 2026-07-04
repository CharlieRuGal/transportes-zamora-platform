import About from './components/home/About'
import Contact from './components/home/Contact'
import Destinations from './components/home/Destinations'
import FAQ from './components/home/FAQ'
import Fleet from './components/home/Fleet'
import Gallery from './components/home/Gallery'
import Hero from './components/home/Hero'
import FeaturedServices from './components/home/FeaturedServices'
import ImpactStats from './components/home/ImpactStats'
import Testimonials from './components/home/Testimonials'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedServices />
      <ImpactStats />
      <About />
      <Fleet />
      <Destinations />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}

export default App
