import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

import * as serviceWorker from './serviceWorker';

// import './setupProxy'


//配置react-router
import {HashRouter as Router, Route,Switch,Redirect} from 'react-router-dom'
//import Role from './views/system/role'
import Error from './views/error'
import Login from './views/login'

// require('./setupProxy')

// proxy()


const  MyRouter = ()=> (
    <Router>
      <Switch>
        {/*<Route exact path="/" component={App}/>*/}
        <Route exact path="/login" component={Login}/>
        <Redirect exact from="/"  to='/login'/>{/*精确匹配*/}
        <Route component={Error}/>
      </Switch>
    </Router>
    )


//配置redux

ReactDOM.render(MyRouter(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
