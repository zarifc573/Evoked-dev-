import { DarkModeProvider } from '@/utils/DarkModeContext'
import React from 'react'
import EvokedBrand from '../evokedBrand'
import ReviewSlider from './ReviewSlide'
import OtherBrands from '../OtherBrands'
import Review from '../Review'
import Story from '../Story'
import FooterDiscovery from './FooterDiscovery'
import KitSlider from './KitSlider'
import Set from './Set'
import Navbar from '../navbar'

const Discover = () => {
  return (
    <div>
         <DarkModeProvider>
          <Navbar name='BUILD YOUR SET' link='/landing-page'/>
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