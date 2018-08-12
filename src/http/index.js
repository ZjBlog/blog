import axios from 'axios'
// import { Message } from 'element-ui'
import token from '../../static/configuration.json'
const instance = axios.create({
  baseURL: 'https://gitee.com',
  timeout: 5000,
  headers: {'Authorization': 'token ' + token.access_token}
})
// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  console.info(error.code)
  // Do something with response error
  // Message({
  //   type: 'error',
  //   message: error.message,
  //   showClose: true,
  //   duration: 3000,
  //   center: true,
  //   onClose: function () {
  //     window.location.href = '/'
  //   }
  // })
  return Promise.reject(error)
})
export default instance
