import React,{Component} from "react";
import { HashRouter as Router, Route} from "react-router-dom";

import Role from  '../views/system/role'
import Config from '../views/system/config'
import Main from '../views/system/main'

export  default class IndexRouter extends Component {
  render(){
    return(
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/system/role" component={Role} />
        <Route exact path="/system/config" component={Config} />
      </Router>
    )
  }
}

