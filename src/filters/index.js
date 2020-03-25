// 格式化时间格式
export function formatDate (date, fmt) {
  if (!date) {
    return '--'
  }
  // console.log(date)
  if (!isNaN(Number(date)) && String(date).length === 13) {
    date = new Date(date)
  }
  if (!isNaN(Number(date)) && String(date).length === 10) {
    date = new Date(date * 1000)
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}

// 格式化没有值的情况
export function formatNull (val) {
  if (val == null || val === '' || val === undefined) return '--'
  return val
}

// 格式化性别
export function formatSex (val) {
  switch (val) {
    case 0:
      return '女'
    case 1:
      return '男'
    default:
      return '未知'
  }
}

// 格式化状态
export function formatNetInFlag (val) {
  switch (val) {
    case 0:
      return '否'
    case 1:
      return '是'
    default:
      return val
  }
}

// 格式化审批状态的情况
export function formatValidstatus (val) {
  switch (val) {
    case 0:
      return '审核不通过'
    case 1:
      return '审核通过'
    case 2:
      return '待审核'
    case 3:
      return '已上架'
    case 4:
      return '已下架'
    default:
      return val
  }
}

// 格式化有效无效
export function formatStatus (val) {
  switch (val) {
    case 0:
      return '无效'
    case 1:
      return '有效'
    default:
      return val
  }
}

// 格式化系统状态
export function formatSystemstatus (val) {
  switch (val) {
    case '0':
      return '禁用'
    case '1':
      return '启用'
    default:
      return val
  }
}
