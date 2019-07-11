import React,{Component} from 'react'
import { Layout, Menu, Icon } from 'antd';
import './App.css'
import Home from './views/home/main'


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

/*定义高阶组件进行对应的路由渲染*/
interface routerConfigModel {
  path:string,
  component?:any,
  auth?:boolean
}

const routerConfig:routerConfigModel[] = [
  {path:"/home/main",component:Home}
]

class SwitchRouter extends Component<any,routerConfig>{

}

class App extends Component {
  state = {
    collapsed: false,
    title:"控制台"
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    let title = this.state.title ? '' : '控制台'
    this.setState({ collapsed,title});
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" >{this.state.title}</div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>控制台</span>
            </Menu.Item>

            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>常规管理</span>
                </span>
              }
            >
              <Menu.Item key="3">系统配置</Menu.Item>
              <Menu.Item key="4">附件配置</Menu.Item>
              <Menu.Item key="5">个人配置</Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />

          <Content style={{ margin: '0 16px 0' }}>
            <Home/>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;

//而动态路由不是作为一个项目运行的配置文件存储在外部，它在项目render的时候才开始定义，router的作者认为route应当和其它普通组件一样，它的作用不是提供路由配置，而是一个普通的UI组件。而这也符合react的开发思想——一切皆组件。
