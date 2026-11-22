import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/themes'
import { GlobalStyles } from '@/styles/global'
import { AppProps } from 'next/app'
import i18n from '@/i18n'
import { AppLanguage, I18N_CONFIG } from '@/i18n/constants'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(I18N_CONFIG.STORAGE_KEY)
      if (saved === AppLanguage.EnUS || saved === AppLanguage.PtBR) {
        void i18n.changeLanguage(saved)
      }
    } catch {
      // ignore storage errors
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
