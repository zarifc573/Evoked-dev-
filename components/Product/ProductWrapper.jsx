import { DarkModeProvider } from '@/utils/DarkModeContext'
import React from 'react'
import EvokedBrand from '../evokedBrand'
import Carousel from '../carousel'
import Accordion from '../Accordion'
import Review from '../Review'
import ProductDiscover from './discoverProduct'
import OtherBrands from '../OtherBrands'
import NavbarCollection from '../CollectionList/NavbarCollection'
import FooterOfCollection from '../CollectionList/FooterOfCollection'
import StartQuiz from './StartQuiz'
import Frame from './TryFirst'
import DynamicProduct from './DynamicProduct'
import { GlobalProvider } from '@/utils/GlobalContext'

const ProductWrapper = () => {
  return (
    <DarkModeProvider>
        <NavbarCollection/>
      <GlobalProvider>
        <DynamicProduct/>
        </GlobalProvider>
  <Carousel />
  <EvokedBrand />
  {/* <ThreeMore/> */}
  <Frame/>
  <ProductDiscover/>
  <OtherBrands />
  <Review/>
    {/* <Accordion /> */}
    <StartQuiz/>
    <FooterOfCollection/>
</DarkModeProvider>
  )
}

export default ProductWrapper