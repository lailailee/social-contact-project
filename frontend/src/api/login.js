import axios from '@/util/request'
import { userInfo } from 'os'
/**
 * 获取验证码
 * @param {*} sid
 */
const getCode = (sid) => {
  return axios.get(`/getCaptcha?sid=${sid}`)
}

/**
 * 找回密码接口
 * @param {*} option 用户信息
 */
const forget = option => {
  return axios.post('/forget', {
    ...option
  })
}

/**
 * 登录借口
 * @param {*} loginInfo 登录信息
 */
const login = loginInfo => {
  return axios.post('/loginInfo', {
    ...loginInfo
  })
}
export { getCode, forget, login }
