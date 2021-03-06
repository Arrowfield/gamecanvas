import axios from 'axios'
import {message} from 'antd'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';//配置请求头
let config = {
  baseURL: process.env.baseURL || process.env.apiUrl || "http://api.kqsns.qiliaoapp.cn/api",
  timeout: 2 * 1000, // Timeout
  withCredentials: false, // Check cross-site Access-Control
  crossDomain: false//通常适用于jsonp
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
)

_axios.interceptors.response.use(
  function (response) {
    // Do something with response data

    // console.log(response.data.message)
    message.success(response.data.message)
    return response
  },
  function (error) {
    // Do something with response error
    //此处渲染提示将Alert显示出来，然后将错误信息返回
    //Vue已经实现（通过封装Axios）
    //Angular也已经实现（通过封装Service）
    //React还没有实现？？？？？？急！！！（解决全局的）
    // console.log(error.response.data.message)
    message.error(error.response.data.message)
    return Promise.reject(error)
  }
)

export default _axios
