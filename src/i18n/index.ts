import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { AppLanguage, I18N_CONFIG } from './constants'
import { ptBR } from './locales/pt-BR'
import { enUS } from './locales/en-US'

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources: {
      [AppLanguage.PtBR]: { [I18N_CONFIG.DEFAULT_NAMESPACE]: ptBR },
      [AppLanguage.EnUS]: { [I18N_CONFIG.DEFAULT_NAMESPACE]: enUS },
    },
    lng: I18N_CONFIG.DEFAULT_LANGUAGE,
    fallbackLng: I18N_CONFIG.DEFAULT_LANGUAGE,
    defaultNS: I18N_CONFIG.DEFAULT_NAMESPACE,
    interpolation: { escapeValue: false },
  })
}

export function changeAppLanguage(language: AppLanguage) {
  try {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(I18N_CONFIG.STORAGE_KEY, language)
    }
  } catch {
    // ignore storage errors
  }
  return i18n.changeLanguage(language)
}

export default i18n
