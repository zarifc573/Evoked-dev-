import { DarkModeProvider } from '@/utils/DarkModeContext'
import React from 'react'
import FooterDiscovery from '../Discover/FooterDiscovery'
import Accordion from '../Accordion'
import Review from '../Review'
import Story from '../Story'
import Carousel from '../carousel'
import Navbar from './Navbar'
import Hero from './Hero'
import Mission from './Mission'
import BestSeller from './BestSeller'
import { GlobalProvider } from '@/utils/globalContext'

const HomePage = () => {
  return (
    <div>
         <DarkModeProvider>
          <Navbar/>
          <Hero/>
          <GlobalProvider>
          <BestSeller/>
          </GlobalProvider>
          <Carousel/>
          <Mission/>
          <Story/>
          <Review/>
          <Accordion/>
          <FooterDiscovery/>
      </DarkModeProvider>
    </div>
  )
}

export default HomePage