import axios from 'axios'
// import { Message } from 'element-ui'
import token from '../../static/configuration.json'
const instance = axios.create({
  baseURL: 'https://gitee.com',
  timeout: 2000,
  headers: {'Authorization': 'token ' + token.access_token}
})
export default instance
