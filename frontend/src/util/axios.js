import axios from 'axios'
import errorHandle from './errorHandle'

const instance = axios.create()
// 请求拦截器
instance.interceptors.request.use((config) => {
  console.log('config', config)
  return config
}, (err) => {
  errorHandle(err)
  return Promise.reject(err)
})

// 请求的拦截器
instance.interceptors.response.use((res) => {
  if (res.status === 200) {
    console.log('res', res)
    return Promise.resolve(res.data)
  } else {
    return Promise.reject(res)
  }
}, (err) => {
  debugger
  errorHandle(err)
  return Promise.reject(err)
})
