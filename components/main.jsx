import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import { DarkModeProvider } from '@/utils/DarkModeContext'
import Carousel from './carousel'
import EvokedBrand from './evokedBrand'
import OtherBrands from './OtherBrands'
import Accordion from './Accordion'
import Story from './Story'
import Pricing from './Pricing'
import Review from './Review'
import ThreeMore from './ThreeMore'
import Footer from './Footer'
import { PricingProvider } from '@/utils/PricingContext'
// import BodyComponent from '@/utils/BodyComponent'

const Main = () => {
  return (
    <div>
      <DarkModeProvider>
        {/* <BodyComponent/> */}
          <Navbar />
        <Hero />
        <Carousel />
        <EvokedBrand />
        <ThreeMore/>
        <OtherBrands />
        <PricingProvider>
        <Pricing/>
        </PricingProvider>
        <Review/>
        <Story/>
          <Accordion />
          <Footer/>
      </DarkModeProvider>
    </div>
  )
}

export default Main