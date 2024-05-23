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
          <GlobalProvider>
          <NavbarCollection/>
          <Collections/>
          <TryEntireRange/>
            <FooterOfCollection/>
          </GlobalProvider>
        </DarkModeProvider>
    </div>
  )
}

export default PerfumeListWrapper