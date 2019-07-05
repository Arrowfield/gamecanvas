import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';//配置请求头

let config = {
  baseURL: process.env.baseURL || process.env.apiUrl || "http://kqapi.kuaiqia.net/api",
  timeout: 60 * 1000, // Timeout
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
    return response
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

export function _login(data) {
  //return new Promise((resolve,reject)=>{
  return _axios.post('/auth/login', data)
  //if(res.code && res.code === 200){resolve(res)}
  //else{reject(res)}
  //})
}

export function _register(data) {
  return _axios.post('/doregister', data)
}

//如果不支持async和await,就使用Promise
