import React, {Component, Fragment} from 'react';
import Nav from './components/nav.js'
import HeaderNav from './components/header'
import SystemRouter from './router/system'

//import logo from './logo.svg';
import {Layout} from 'antd'//按需加载
import './App.css';


const {Header, Sider, Content} = Layout;

class App extends Component {

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Fragment>
        <Layout className='container'>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" style={{fontSize:14,color:'#1890ff'}}>后台管理系统</div>
            <Nav/>
          </Sider>
          <Layout>
            <Header className={'headerNav'}
                    style={{background: '#fff', paddingLeft: 0, height: 50, lineHeight: 'normal'}}>
              {/*<Icon*/}
              {/*className="trigger"*/}
              {/*type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}*/}
              {/*onClick={this.toggle}*/}
              {/*/>*/}

              <HeaderNav/>
            </Header>

            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >
              {/*<Role/>*/}
              <SystemRouter/>
            </Content>

          </Layout>
        </Layout>
      </Fragment>
    )
  }

  componentDidMount() {
    //axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
      //.then((res)=>{console.log('axios 获取数据成功:'+JSON.stringify(res))  })
      //.catch((error)=>{console.log('axios 获取数据失败'+error)})
  }
}


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js 123</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;

//而动态路由不是作为一个项目运行的配置文件存储在外部，它在项目render的时候才开始定义，router的作者认为route应当和其它普通组件一样，它的作用不是提供路由配置，而是一个普通的UI组件。而这也符合react的开发思想——一切皆组件。
