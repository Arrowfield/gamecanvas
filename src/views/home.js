import React, {Component, Fragment} from 'react'
import {NavLink, Switch, Route, Redirect} from 'react-router-dom'
import Config from './system/config'
import Role from './system/role'
import {Layout} from 'antd'
import Aside from '../components/aside'
import Header from '../components/header'
import Content from '../components/content'

export default class Home extends Component {
    constructor(props){
        super(props)
        let isLogin = sessionStorage.getItem('token') && false
        if(isLogin){
            console.log("welcome to home page")
        }else{
            window.history.go(-1)
        }
    }
    render() {
        return (
          <Layout style={{minHeight: '100vh'}}>
              <Aside/>
              <Layout>
                  <Header/>
                  <div style={{margin: 10, padding: 10, backgroundColor: "#fff"}}>
                      <Content/>
                  </div>
              </Layout>
          </Layout>
        )
    }

    componentDidMount(): void {

    }
}
/*
*  <Fragment>
        <ul>
          <li><NavLink to="/home/config">配置</NavLink></li>
          <li><NavLink to="/home/role">角色</NavLink></li>
        </ul>
        <Switch>
          <Route path="/home/config" component={Config}/>
          <Route path="/home/role" component={Role}/>
          <Redirect to="/home/config"/>
        </Switch>
      </Fragment>
* */
