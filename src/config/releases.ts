/**
 * Configuração global de releases e downloads do MetisArch.
 * Altere apenas a constante VERSION para atualizar todos os links de download e tags.
 */
export const APP_RELEASE_CONFIG = {
  version: '0.1.2',
  repo: 'MetisArch/metisarch-releases',
  get tag(): string {
    return this.version
  },
  get baseUrl(): string {
    return `https://github.com/${this.repo}/releases/download/${this.tag}`
  },
  get releasesPageUrl(): string {
    return `https://github.com/${this.repo}/releases`
  },
  get files() {
    return {
      windows: {
        filename: `metis-arch-${this.version}-setup.exe`,
        get url(): string {
          return `${APP_RELEASE_CONFIG.baseUrl}/${this.filename}`
        },
      },
      linuxDeb: {
        filename: `metis-arch-${this.version}.deb`,
        get url(): string {
          return `${APP_RELEASE_CONFIG.baseUrl}/${this.filename}`
        },
      },
      linuxAppImage: {
        filename: `metis-arch-${this.version}.AppImage`,
        get url(): string {
          return `${APP_RELEASE_CONFIG.baseUrl}/${this.filename}`
        },
      },
      mac: {
        filename: `metis-arch-${this.version}.dmg`,
        get url(): string {
          return `${APP_RELEASE_CONFIG.baseUrl}/${this.filename}`
        },
      },
    }
  },
} as const
