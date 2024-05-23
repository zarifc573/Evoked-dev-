import React from 'react'
import { DarkModeProvider } from '@/utils/DarkModeContext'
import MainPreSelling from './MainPreSelling'

const PreSellingWrap = () => {
  return (
    
    <DarkModeProvider>
        <MainPreSelling/>
    </DarkModeProvider>
  )
}

export default PreSellingWrap