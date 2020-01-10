export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  if (fmt.indexOf('N') !== -1) {
    return ''
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

export function newDate(value) {
  if (value === undefined) {
    return new Date()
  }
  // 解决invalid date
  value = value.replace(new RegExp(/-/gm), '/')
  return new Date(value)
}

export function addDate(date, days) {
  if (days === undefined || days === '') {
    days = 1
  }
  const tempDate = new Date(date)
  tempDate.setDate(tempDate.getDate() + days)
  return formatDate(tempDate, 'yyyy-MM-dd')
}

export function addMonth(date, months) {
  if (months === undefined || months === '') {
    months = 1
  }
  const tempDate = new Date(date)
  tempDate.setMonth(tempDate.getMonth() + months)
  return formatDate(tempDate, 'yyyy-MM')
}

export function addYear(date, years) {
  if (years === undefined || years === '') {
    years = 1
  }
  const tempDate = new Date(date)
  tempDate.setFullYear(tempDate.getFullYear() + years)
  return formatDate(tempDate, 'yyyy')
}
