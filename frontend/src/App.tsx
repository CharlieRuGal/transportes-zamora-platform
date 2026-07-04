import About from './components/home/About'
import Destinations from './components/home/Destinations'
import Fleet from './components/home/Fleet'
import Gallery from './components/home/Gallery'
import Hero from './components/home/Hero'
import FeaturedServices from './components/home/FeaturedServices'
import ImpactStats from './components/home/ImpactStats'
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
    </>
  )
}

export default App
