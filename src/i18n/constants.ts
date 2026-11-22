export const AppLanguage = {
  PtBR: 'pt-BR',
  EnUS: 'en-US',
} as const

export type AppLanguage = (typeof AppLanguage)[keyof typeof AppLanguage]

export const I18N_CONFIG = {
  DEFAULT_LANGUAGE: AppLanguage.PtBR,
  STORAGE_KEY: 'metisarch.language',
  DEFAULT_NAMESPACE: 'translation',
} as const
