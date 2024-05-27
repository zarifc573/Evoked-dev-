import React from 'react'
import { DarkModeProvider } from '@/utils/DarkModeContext'
import NavbarCollection from './NavbarCollection'
import Collections from './Collections'
import { GlobalProvider } from '@/utils/GlobalContext'
import FooterOfCollection from './FooterOfCollection'
import TryEntireRange from './TryEntireRange'

const PerfumeListWrapper = () => {
  return (
    <div>
        <DarkModeProvider>
          <NavbarCollection/>
          <GlobalProvider>
          <Collections/>
          </GlobalProvider>
          <TryEntireRange/>
            <FooterOfCollection/>
        </DarkModeProvider>
    </div>
  )
}

export default PerfumeListWrapper