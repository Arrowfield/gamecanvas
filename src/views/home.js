import React, {Component} from 'react'

import {Layout} from 'antd'
import Aside from '../components/aside'
import Header from '../components/header'
import Content from '../components/content'
import {Redirect} from "react-router";

export default class Home extends Component {

    render() {
        let token = sessionStorage.getItem("token")

        if (!token) return <Redirect to="/login"/>

        return (
          <Layout style={{minHeight: '100vh'}}>
              <Aside/>
              <Layout>
                  <Header handleExit={this.handleExit.bind(this)}/>
                  <div style={{margin: 10, padding: 10, backgroundColor: "#fff"}}>
                      <Content/>
                  </div>
              </Layout>
          </Layout>
        )
    }

    handleExit() {
        sessionStorage.removeItem('token')
        this.props.history.push('/login')
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
