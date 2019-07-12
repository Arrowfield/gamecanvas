import React, {Component, Fragment} from 'react'
import {Layout} from 'antd';
import {Redirect, Switch, Route} from 'react-router-dom'
import Aside from './components/aside'
import Header from './components/header'

import './App.css'

import MainContent from './components/content'
import Config from './views/system/config'

//const {Content} = Layout;

import Login from './views/login'
import Home from './views/home'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home}/>
          <Redirect to="/login"/>
        </Switch>
      </Fragment>
    )
  }

  componentDidMount(): void {
    //window.location.reload()

  }
}

export default App;

//而动态路由不是作为一个项目运行的配置文件存储在外部，它在项目render的时候才开始定义，router的作者认为route应当和其它普通组件一样，它的作用不是提供路由配置，而是一个普通的UI组件。而这也符合react的开发思想——一切皆组件。
