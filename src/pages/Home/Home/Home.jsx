import React from 'react'
import Banner from '../Banner'
import Gallery from '../Gallery'
import About from '../About'
import TabFilter from '../TabFilter'
import Dateils from '../Dateils'
import Collection from '../Collection'

function Home() {
  return (
    <div>
    <Banner></Banner>
    <About></About>
    <Gallery></Gallery>
    <TabFilter></TabFilter>
    <Collection></Collection>
    </div>
  )
}

export default Home