import React,{Component} from 'react'
import { Result} from 'antd'
import {Link} from 'react-router-dom'
export default class Main extends  Component{
  render() {
    return(
      <Result
        status="404"
        title="404"
        subTitle="'Sorry, the page you visited does not exist."
        extra={<Link type="primary" to='/login'>Back Login</Link>}
      />
    )
  }
}
