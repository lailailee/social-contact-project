import axios from 'axios'
import errorHandle from './errorHandle'
const CancelToken = axios.CancelToken

class HttpRequest {
  constructor (baseURL) {
    this.baseURL = baseURL
    this.pending = {}
  }
  // 获取axios配置
  getInstanceConfig () {
    const config = {
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      timeout: 10000
    }
    return config
  }
  removePending (key, isRequest = false) {
    if (this.pending[key] && isRequest) {
      this.pending[key]('取消重复请求')
    }
    delete this.pending[key]
  }
  // 设置拦截器
  interceptors (instance) {
    // 请求拦截器
    instance.interceptors.request.use((config) => {
      let key = config.url + '&' + config.method
      this.removePending(key, true)
      config.cancelToken = new CancelToken((c) => {
        this.pending[key] = c
      })
      return config
    }, (err) => {
      errorHandle(err)
      return Promise.reject(err)
    })
    // 请求的拦截器
    instance.interceptors.response.use((res) => {
      let key = res.config.url + '&' + res.config.method
      this.removePending(key)
      if (res.status === 200) {
        console.log('res', res)
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res)
      }
    }, (err) => {
      errorHandle(err)
      return Promise.reject(err)
    })
  }
  // 创建实例
  request (options) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInstanceConfig(), options)
    this.interceptors(instance)
    return instance.request(newOptions)
  }
  get (url, config) {
    const options = Object.assign({
      method: 'get',
      url: url
    }, config)
    return this.request(options)
  }
  post (url, data) {
    const options = Object.assign({
      method: 'post',
      url: url,
      data: data
    })
    return this.request(options)
  }
}

export default HttpRequest
