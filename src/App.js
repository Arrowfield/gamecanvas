import React, {Component, Fragment} from 'react'
import {Switch, Route,Redirect} from 'react-router-dom'


import './App.css'

//const {Content} = Layout;

import Login from './views/login'
import Home from './views/home'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Home}/>
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
