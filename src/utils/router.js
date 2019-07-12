import React,{Component} from 'react'
import {Redirect,Route} from "react-router-dom"

//前端权限《定义代理式高阶组件》
export  default class FrontendAuth extends Component<any, routerConfig> {
  render() {
    const {location, config} = this.props
    const {pathname} = location
    const isLogin = sessionStorage.getItem('token')

    //console.log(config)

    //目标路由
    const targetRouterConfig = config.find((v: any) => (v.path === pathname))//返回找到的对象
    //console.log(targetRouterConfig)
    if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
      const {component} = targetRouterConfig
      return <Route   path={pathname} component={component}/>
    }

    if (isLogin) {//登录的状态
      if (pathname === '/login') {
        return <Redirect to='/'/>
      } else {
        if (targetRouterConfig) {
          return <Route path={pathname} component={targetRouterConfig.component}/>
        } else {
          return <Redirect to="error"/>
        }
      }
    } else {//未登录的状态
      if (targetRouterConfig && targetRouterConfig.auth) {
        return <Redirect to='/login'/>
      } else {
        return <Redirect to='/login'/>
      }
    }
  }
}
