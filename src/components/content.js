import React, {Component} from 'react'

//import FrontendAuth from '../utils/router'
import {Switch, Route, Redirect} from "react-router-dom";


//import Config from '../views/system/config'

// interface routerConfigModel {
//   path: string,
//   components?: any,
//   auth?: boolean,
// }

//const routerConfig: routerConfigModel[] = [
//  {path: '/config', component: Config, auth: true},
//]

import HomeMain from '../views/home/main'
import SystemRole from '../views/system/role'

export default class Content extends Component {
    render() {
        //this.props.history.push()
        return (
          <Switch>
              <Route path="/home" component={HomeMain}/>
              <Route path="/system/config" component={SystemRole}/>
              <Redirect to="/home"/>
          </Switch>
        )
    }
}

/**
 //  *      {/*<Fragment>*/
// {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
// {/*<Breadcrumb.Item>User</Breadcrumb.Item>*/}
// {/*<Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
// {/*</Breadcrumb>*/}
// {/*<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a content page.</div>*/}
// {/*</Fragment>*/}


