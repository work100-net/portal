import axios from 'axios'

import { getLanguage } from '@/lang/index'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import {
  setPartnerCode,
  removePartnerCode,
  getToken,
  setToken,
  removeToken,
  getTokenError,
  countTokenError,
  clearTokenError,
  getClientId,
  setClientId,
  removeClientId,
  getSignature
} from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 * 10 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // headers['X-App-Key']
    config.headers['X-App-Key'] = process.env.VUE_APP_APP_KEY

    // headers['X-Language']
    config.headers['X-Language'] = getLanguage()

    // headers['X-Token']
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }

    // headers['X-Client-ID']
    if (store.getters.clientId) {
      config.headers['X-Client-ID'] = getClientId()
    }

    // headers['X-Timestamp']
    const timestamp = new Date().getTime()
    config.headers['X-Timestamp'] = timestamp

    // headers['X-Signature']
    config.headers['X-Signature'] = getSignature(config, timestamp)
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 10301: Token is empty;
      // 10302: Account is not exists;
      if (res.code === 10301) {
        if (getTokenError() > 5) {
          // to re-login
          MessageBox.confirm('正在登出, 您可以「取消」停留在此页，或者「重新登录」', '登出确认', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            store.dispatch('user/resetToken').then(() => {
              removePartnerCode()
              removeToken()
              removeClientId()
              location.reload()
            })
          })
        } else {
          countTokenError()
        }
      }
      // return Promise.reject(new Error(res.message || 'Error'))
    } else {
      const { userToken } = res
      if (userToken) {
        setPartnerCode(userToken.partnerCode)
        setToken(userToken.token)
        clearTokenError()
        setClientId(userToken.clientId)
      }
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
