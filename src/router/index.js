import React, {Component} from 'react'
import {HashRouter as Router, Redirect, Switch, Route} from "react-router-dom"
import Error from '../views/error'
import Login from '../views/login'
import Home from '../views/home'

import {Alert} from 'antd';

interface routerConfigModel {
  path: string,
  components?: any,
  auth?: boolean
}

// interface propsModel {
//   config: any[]
// }

const routerConfig: routerConfigModel[] = [
  {path: "/", component: Home, auth: true},
  {path: '/home', component: Home, auth: true},
  {path: "/login", component: Login},
  {path: '/error', component: Error}
]

//前端权限《定义代理式高阶组件》
class FrontendAuth extends Component<any, routerConfig> {
  render() {
    const {location, config} = this.props
    const {pathname} = location
    const isLogin = sessionStorage.getItem('token')

    // console.log(location)

    //目标路由
    const targetRouterConfig = config.find((v: any) => (v.path === pathname))//返回找到的对象

    if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
      const {component} = targetRouterConfig
      return <Route exact path={pathname} component={component}/>
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
        return <Redirect to='/error'/>
      }
    }
  }
}

export default class IndexRouter extends Component {
  constructor(props){
    super(props)
    this.state = {
      message:"",
      type:""
    }
  }
  render() {
    return (
      <Router>
        {this.alert()}
        <Switch>
          <FrontendAuth config={routerConfig} />
        </Switch>
      </Router>
    )
  }
  alert(){
    return this.state.message && <Alert message={this.state.message} type={this.state.type} closable showIcon/>
  }

}


