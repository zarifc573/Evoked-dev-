import { DarkModeProvider } from '@/utils/DarkModeContext'
import React from 'react'
import EvokedBrand from '../evokedBrand'
import Carousel from '../carousel'
import Review from '../Review'
import ProductDiscover from './discoverProduct'
import OtherBrands from '../OtherBrands'
import FooterOfCollection from '../CollectionList/FooterOfCollection'
import StartQuiz from './StartQuiz'
import Frame from './TryFirst'
import DynamicProduct from './DynamicProduct'
import { GlobalProvider } from '@/utils/GlobalContext'
import NavbarProduct from './ProductNavbar'

const ProductWrapper = () => {
  return (
    <DarkModeProvider>
        <NavbarProduct/>
      <GlobalProvider>
        <DynamicProduct/>
        </GlobalProvider>
  <Carousel />
  <EvokedBrand />
  <Frame/>
  <ProductDiscover/>
  <OtherBrands />
  <Review/>
    <StartQuiz/>
    <FooterOfCollection/>
</DarkModeProvider>
  )
}

export default ProductWrapper