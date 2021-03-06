import React, { PureComponent } from 'react';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button, LoginTitle, LoginSign } from './style';

class Login extends PureComponent {

  render () {
    const { isLogin, login } = this.props;
    if (!isLogin) {
      // let whichPage = document.hidden ? true : false;
       return (
        <LoginWrapper>
          <LoginBox>
            <LoginTitle>
              <LoginSign className="on">登录</LoginSign>
              <LoginSign>·</LoginSign>
              <LoginSign>注册</LoginSign>
            </LoginTitle>
            <Input placeholder="用户名" innerRef={ (input)=> this.userName = input}></Input>
            <Input placeholder="密码" innerRef={ (input)=> this.pwd = input}></Input>
            <Button onClick= {()=>{ login(this.userName,this.pwd)} } >登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else{
      return (
        <Redirect to="/" />
      )
    }
  }
}
//调色
const mapState = (state)=> ({
  isLogin: state.getIn(["login","isLogin"])
});

const mapDispatch = (dispatch)=> ({
  login (userName, pwd) {
    dispatch(actionCreators.login(userName.value, pwd.value))
  }
});

export default connect(mapState, mapDispatch)(Login);
