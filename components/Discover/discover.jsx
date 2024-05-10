import { DarkModeProvider } from '@/utils/DarkModeContext'
import React from 'react'
import Navbar from '../navbar'
import EvokedBrand from '../evokedBrand'
import NavbarDiscover from './Navbar'
import ReviewSlider from './ReviewSlide'
import OtherBrands from '../OtherBrands'
import Review from '../Review'
import Story from '../Story'
import FooterDiscovery from './FooterDiscovery'
import KitSlider from './KitSlider'
import Set from './Set'

const Discover = () => {
  return (
    <div>
         <DarkModeProvider>
          <NavbarDiscover/>
          <Set/>
          <KitSlider/>
          <EvokedBrand/>
          <ReviewSlider/>
          <OtherBrands/>
          <Review/>
          <Story/>
          <FooterDiscovery/>
      </DarkModeProvider>
    </div>
  )
}

export default Discover