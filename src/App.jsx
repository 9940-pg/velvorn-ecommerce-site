import React from 'react'
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import HotStyleSteals from './components/HotStyleSteals'
import CollectionBanner from './components/CollectionBanner'
import LatestDrops from './components/LatestDrop'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>

      <NavBar />
      <Hero />
      <HotStyleSteals />
      <CollectionBanner />
      <LatestDrops />
      <CTABanner />
      <Footer />
    </div>
  )
}

export default App