import {Menu} from "antd";
import {Link, NavLink} from "react-router-dom";
import {Layout, Icon} from "antd";
import React, {Component} from "react";
import Nav from "./nav";


const {SubMenu} = Menu;
const {Sider} = Layout
export default class Aside extends Component {
  // constructor(props){
  //   super(props)
  //   console.log(this)
  // }
  state = {
    collapsed: false,
    title: "控制台"
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    let title = this.state.title ? '' : '控制台'
    this.setState({collapsed, title});
  };

  render() {
    //console.log(this)
    return (

      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <div className="logo">{this.state.title}</div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Link to="/home/main" replace>
              <Icon type="pie-chart"/>
              <span>控制台</span>
            </Link>
          </Menu.Item>

          <SubMenu
            key="sub1"
            title={
              <span>
                  <Icon type="user"/>
                  <span>常规管理</span>
                </span>
            }
          >
            <Menu.Item key="4"><NavLink to="/home/system/config" replace>附件配置</NavLink></Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>

    )
  }
}


