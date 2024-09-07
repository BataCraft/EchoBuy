import React from 'react'
import MainNav from '../Components/Header/MainNav'
import OfferBanner from '../Components/HeroSection/OfferBanner'

const Home = () => {
  return (
   <>
   <nav className='z-[999]'>
      <MainNav/>
   </nav>

   <section  >
    <OfferBanner/>
   </section>
   
   </>
  )
}

export default Home