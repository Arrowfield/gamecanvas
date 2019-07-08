//依赖
import React, {Component} from 'react';

//样式
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

//组件
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

//逻辑
import {_login} from '../utils/api.js'
import Alert from '../components/alert'

// function MadeWithLove() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">arrow field</Typography>
//   )
// }


const styles = (theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

//类组件
class Login extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      uname: "",
      upwd: "",
      alert: {type: "success", open: false, message: ""}
    }
    //console.log(this)
  }

  handleChange(event) {
    var target = event.target
    const name = target.name
    this.setState({[name]: target.value})
  }

  render() {
    const {classes} = this.props

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">后台管理系统</Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="用户名"
              name="uname"
              autoComplete="email"
              autoFocus
              value={this.state.uname}
              onChange={this.handleChange.bind(this)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="upwd"
              label="密码"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.upwd}
              onChange={this.handleChange.bind(this)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary"/>}
              label="记住密码"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleClick.bind(this)}
            >
              登录
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  忘记密码?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">注册</Link>
              </Grid>
            </Grid>
          </form>
        </div>
        {/*增加提示框*/}
        <Alert childEvent={this.childEvent} variant={this.state.alert.type}
               message={this.state.alert.message}/>

      </Container>
    )
  }

  async handleClick() {
    const data = await _login({phone: this.state.uname, password: this.state.upwd}).catch((err) => {if(err) return})

    if (data && data.data.code && data.data.code === 200) {
      //this.setState({alert: {type: "success", message: "登录成功"}})
    } else {
      this.setState({alert: {type: "error", message: "登录失败,账号或密码错误"}})
      this.$child.handleClick()
    }

  }
  //获取子元素实例
  childEvent = (childDate) => {
    this.$child = childDate
  }

  //接受子对象（转发）
}

export default withStyles(styles)(Login)



