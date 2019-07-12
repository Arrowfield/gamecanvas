import React, {Component} from 'react'
import {HashRouter as Router, Switch, Link, Route} from "react-router-dom"
import FrontendAuth from '../utils/router'

import Error from '../views/error'
import Login from '../views/login'
import Home from '../views/home'
import Config from '../views/system/config'

interface routerConfigModel {
  path: string,
  components?: any,
  auth?: boolean,
  children?: any
}

const routerConfig: routerConfigModel[] = [
  {path: '/', component: Home, auth: true},
  {path: '/home', component: Home, auth: true},
  {path: "/login", component: Login},
  {path: "/config", component: Config},
  {path: '/error', component: Error}
]

/*当路径改变时就会触发FrontendAuth高价代理组件*/


export default class IndexRouter extends Component {
  render() {
    return (
      <Router>

        {/*<Switch>*/}
        {/*<FrontendAuth config={routerConfig} />*/}
        {/*</Switch>*/}
        <ul>
          <li><Link to="/login">登录页面</Link></li>
          <li><Link to="/home">首页页面</Link></li>
          <li><Link to="/error">错误页面</Link></li>
        </ul>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/error" component={Error}/>
        </Switch>
      </Router>
    )
  }
}
