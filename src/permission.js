import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
// import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

// const authList = ['/xxx', '/yyy'] // 需要权限验证

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  next()

  // if (authList.indexOf(to.path) !== -1) {
  //   // determine whether the user has logged in
  //   const hasToken = getToken()
  //
  //   if (hasToken) {
  //     next()
  //   } else {
  //     next(process.env.VUE_APP_CONSOLE_URL + `/login?redirect=${process.env.VUE_APP_FRONT_URL + '/' + to.path}`)
  //     NProgress.done()
  //   }
  // } else {
  //   // next()
  // }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
