import _axios from './http'

export const  _login = (data) => _axios.post('/auth/login', data)
export const  _register = (data) => _axios.post('/auth/register', data)


//如果不支持async和await,就使用Promise
//React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源。<Dan Abramov>
//AngularJS 是比较新的技术，版本 1.0 是在 2012 年发布的。< Miško Hevery>
//AngularJS 是由 Google 的员工 Miško Hevery 从 2009 年开始着手开发。
//这是一个非常好的构想，该项目目前已由 Google 正式支持，有一个全职的开发团队继续开发和维护这个库。
//Vue 的研发及其生态建设出自一个国际化的团队，这里会展示其中部分团队成员的信息 2014年2月尤雨溪 。<尤雨溪>
