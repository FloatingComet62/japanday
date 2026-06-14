import type { I18nConfig } from 'next-i18next/proxy'

const i18nConfig: I18nConfig = {
  supportedLngs: ['en', 'ja'],
  fallbackLng: 'en',
  defaultNS: 'common',
  ns: ['common'],
  hideDefaultLocale: true,
  resourceLoader: (language, namespace) =>
    import(`./app/i18n/locales/${language}/${namespace}.json`),
}

export default i18nConfig
