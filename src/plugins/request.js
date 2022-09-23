import Axios from 'axios'

const http = Axios.create({
  baseURL:"",
  timeout:5000
})

http.interceptors.request.use(
  config =>{
    // 设置token
    if (localStorage && localStorage.getItem('token')) {
      const token = localStorage.getItem('token')
      token && (config.headers.Authorization = token)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
http.interceptors.response.use(
  response =>{
    return Promise.resolve(response)
  },
  error => {
    return Promise.reject(error)
  }
)

// @param url 接口地址
// @param data 携带参数
// @param file 上传文件对象
// @param auth 是否携带token

// get请求
export function get (url, data) {
  return http.get(url, data)
}
// post请求
export function post (url, data) {
  return http.post(url, data)
}
// put请求
export function put (url, data) {
  return http.put(url, data)
}
// delete 请求
export function del (url, data) {
  return http.delete(url, data)
}
// upload 请求
export function uploader (url, file) {
  let params = new FormData()
  params.append('file', file)
  return http.post(url, params)
}
