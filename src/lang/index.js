import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhCNLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import enLocale from './en'
import zhCNLocale from './zh_cn'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh_cn: {
    ...zhCNLocale,
    ...elementZhCNLocale
  }
}
export function getLanguage() {
  const chooseLanguage = Cookies.get('X-Language')
  if (chooseLanguage) return chooseLanguage

  // if has not choose language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'zh_cn'
}
const i18n = new VueI18n({
  // set locale
  // options: en | zh_cn | es
  locale: getLanguage(),
  // set locale messages
  messages
})

export default i18n
