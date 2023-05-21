import React from 'react'
import Banner from '../Banner'
import Gallery from '../Gallery'
import About from '../About'
import TabFilter from '../TabFilter'

function Home() {
  return (
    <div>
    <Banner></Banner>
    <About></About>
    <Gallery></Gallery>
    <TabFilter></TabFilter>
    </div>
  )
}

export default Home