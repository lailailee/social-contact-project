import axios from '@/util/request'
/**
 * 获取验证码
 * @param {*} sid
 */
const getCode = (sid) => {
  return axios.get(`/public/getCaptcha?sid=${sid}`)
}

/**
 * 找回密码接口
 * @param {*} option 用户信息
 */
const forget = option => {
  return axios.post('/public/forget', {
    ...option
  })
}

/**
 * 登录借口
 * @param {*} loginInfo 登录信息
 */
const login = loginInfo => {
  return axios.post('/login/login', {
    ...loginInfo
  })
}

/**
 * 注册借口
 * @param {*} regInfo 注册信息
 */
const reg = regInfo => {
  return axios.post('/login/reg', {
    ...regInfo
  })
}
export { getCode, forget, login, reg }
