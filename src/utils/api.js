import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';//配置请求头

let config = {
  baseURL: process.env.baseURL || process.env.apiUrl || "http://admin.plus2.com/admin",
  timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
  crossDomain:true
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
)

export function _login(data) {
  return _axios.post('/dologin',data)
}

export function _register(data) {
  return _axios.post('/doregister',data)
}
