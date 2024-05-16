import React from 'react'
import { DarkModeProvider } from '@/utils/DarkModeContext'
import FooterDiscovery from '../Discover/FooterDiscovery'
import NavbarCollection from './NavbarCollection'
import Collections from './Collections'
import { GlobalProvider } from '@/utils/GlobalContext'

const PerfumeListWrapper = () => {
  return (
    <div>
        <DarkModeProvider>
          <GlobalProvider>
          <NavbarCollection/>
          <Collections/>
            <FooterDiscovery/>
          </GlobalProvider>
        </DarkModeProvider>
    </div>
  )
}

export default PerfumeListWrapper