// 获取assets静态资源
export const getAssetsFile = (url) => {
  return new URL(`../static/icon/${url}`, import.meta.url).href
}