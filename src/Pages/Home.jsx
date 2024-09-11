import React from 'react'

import OfferBanner from '../Components/HeroSection/OfferBanner'
import Catagory from '../Components/Catagory'
import Card from '../Components/Card/Card'

const Home = () => {
  return (
   <>
   {/*  */}

   <section className='w-full h-full flex ' >
    <Catagory/>
    <OfferBanner/>
   </section>
   <section> <Card/></section>
   
   </>
  )
}

export default Home