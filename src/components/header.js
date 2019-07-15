import React, {Component} from 'react'
// import './header.css'
import {Menu, Icon,Dropdown} from 'antd'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from "prop-types";


const {SubMenu} = Menu

const styles = {//不使用theme
    headerNav: {
        display: "inner-block"
    },
    floatLeft:{float:"left"},
    floatRight:{float:"right"},
    dropMenu:{
        lineHeight:"48px",
        padding:"0 20px"
    }
}


class Header extends Component {

    // constructor(props){
    //     super(props)
    // }
    static propTypes = {
        classes: PropTypes.object.isRequired
    }

    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    // handleExit(){}

    render() {

        const {classes} = this.props


        const menu = (
          <Menu>
              <Menu.Item key="0">
                  <a href="#">个人信息管理</a>
              </Menu.Item>
              <Menu.Item key="1">
                  <a href="#" onClick={this.props.handleExit}>退出</a>
              </Menu.Item>

          </Menu>
        )



        return (
          <div style={{backgroundColor:"white"}}>
              <Menu onClick={this.handleClick} className={classes.floatLeft} selectedKeys={[this.state.current]} mode="horizontal">
                  <Menu.Item key="mail">
                      <Icon type="mail"/>
                      Navigation One
                  </Menu.Item>
                  <Menu.Item key="app" disabled>
                      <Icon type="appstore"/>
                      Navigation Two
                  </Menu.Item>
                  <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
              <Icon type="setting"/>
              Navigation Three - Submenu
            </span>
                    }
                  >
                      <Menu.ItemGroup title="Item 1">
                          <Menu.Item key="setting:1">Option 1</Menu.Item>
                          <Menu.Item key="setting:2">Option 2</Menu.Item>
                      </Menu.ItemGroup>
                      <Menu.ItemGroup title="Item 2">
                          <Menu.Item key="setting:3">Option 3</Menu.Item>
                          <Menu.Item key="setting:4">Option 4</Menu.Item>
                      </Menu.ItemGroup>
                  </SubMenu>
                  <Menu.Item key="alipay">
                      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                          Navigation Four - Link
                      </a>
                  </Menu.Item>
              </Menu>
              <Dropdown overlay={menu} trigger={['click']} className={`${classes.floatRight} ${classes.dropMenu}`}>
                  <a href="#" className="ant-dropdown-link">
                     Admin <Icon type="down" />
                  </a>
              </Dropdown>
          </div>
        )
    }


}

export default withStyles(styles)(Header)

//路由
