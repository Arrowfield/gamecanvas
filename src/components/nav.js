import React,{Component} from 'react'
import {Menu,Icon} from 'antd'
import {Link,HashRouter as Router} from 'react-router-dom'
const { SubMenu } = Menu
class Nav extends Component{
  constructor(props){
    super(props)//Class 组件应该始终使用 props 参数来调用父类的构造函数。
    this.state = {
      openKeys: ['sub1'],
      selectedKeys:['2'],
    }
  }

  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  handleClick = ({ item, key, keyPath, domEvent })=>{
    //console.log(keyPath)//获取当前点击对象的父导航的key值以及自身的key值
    this.setState({selectedKeys:[key]})
  }


  render(){
    return(
      <Router>
        <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        selectedKeys={this.state.selectedKeys}
        onOpenChange={this.onOpenChange}
        theme="dark"
        style={{}}
        onClick={this.handleClick}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>系统管理</span>
            </span>
          }
        >
          <Menu.Item key="1"><Link to="/system/config">系统配置</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/system/role">角色管理</Link></Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>

        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        </SubMenu>

        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
      </Router>
    )
  }
}

export default Nav
