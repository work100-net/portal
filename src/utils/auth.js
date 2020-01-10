import Cookies from 'js-cookie'
import md5 from 'js-md5'

const KEY_X_PARTNER_CODE = 'X-Partner-Code'
const KEY_X_TOKEN = 'X-Token'
const KEY_X_TOKEN_ERROR = 'X-Token-Error'
const KEY_X_CLIENT_ID = 'X-Client-ID'

// ************* X-Partner-Code *************
export function getPartnerCode() {
  return Cookies.get(KEY_X_PARTNER_CODE)
}

export function setPartnerCode(partnerCode) {
  return Cookies.set(KEY_X_PARTNER_CODE, partnerCode)
}

export function removePartnerCode() {
  return Cookies.remove(KEY_X_PARTNER_CODE)
}

// ************* X-Token *************
export function getToken() {
  return Cookies.get(KEY_X_TOKEN)
}

export function setToken(token) {
  return Cookies.set(KEY_X_TOKEN, token)
}

export function removeToken() {
  return Cookies.remove(KEY_X_TOKEN)
}

// ************* X-Token-Error *************
export function getTokenError() {
  const num = Cookies.get(KEY_X_TOKEN_ERROR)
  return parseInt(num)
}

export function countTokenError() {
  const num = getTokenError()
  return Cookies.set(KEY_X_TOKEN_ERROR, num + 1)
}

export function clearTokenError() {
  return Cookies.set(KEY_X_TOKEN_ERROR, 0)
}

// ************* X-ClientId *************
export function getClientId() {
  return Cookies.get(KEY_X_CLIENT_ID)
}

export function setClientId(clientId) {
  return Cookies.set(KEY_X_CLIENT_ID, clientId)
}

export function removeClientId() {
  return Cookies.remove(KEY_X_CLIENT_ID)
}

// ************* X-Signature *************
export function getSignature(config, timestamp) {
  const map = new Map()
  // convert params to map
  if (config.params !== undefined) {
    const signParams = Object.assign(config.params)
    Object.keys(signParams).forEach(function(key) {
      map.set(key, signParams[key])
    })
  }
  // convert data to map
  if (config.data !== undefined) {
    config.data.split('&').forEach(function(item) {
      const kv = item.split('=')
      map.set(kv[0], kv[1])
    })
  }
  // sort as asc
  const mapAsc = new Map([...map.entries()].sort())

  // build signature
  let sourceSignature = ''
  mapAsc.forEach(function(value, key) {
    sourceSignature += key + '=' + value + '#'
    // console.log(key + '=' + value)
  })
  const appKey = process.env.VUE_APP_APP_KEY
  sourceSignature = appKey + '#' + sourceSignature + timestamp + '#' + process.env.VUE_APP_APP_SECRET
  sourceSignature = encodeURIComponent(sourceSignature.toLowerCase())
  const signature = md5(sourceSignature)
  return signature
}
