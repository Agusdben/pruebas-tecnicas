export const isItemInArrayByKeyComparison = (item: any, arr: any[], key: string): boolean => {
  return arr.some(arrItem => arrItem[key] === item[key])
}
