export function getColor(index) {
  const colors = [
    '#409EFF',
    '#67C23A',
    '#E6A23C',
    '#F56C6C',
    '#909399',
    '#303133',
    '#DCDFE6',
    '#606266',
    '#E4E7ED',
    '#909399',
    '#EBEEF5',
    '#C0C4CC',
    '#F2F6FC',
    '#000000'
  ]
  if (index < 0) {
    index = 0
  }
  if (index > colors.length) {
    index = colors.length - 1
  }
  return colors[index]
}
