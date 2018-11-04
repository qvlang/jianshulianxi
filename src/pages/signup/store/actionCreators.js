import axios from 'axios';
import * as constants from './constants';

const changeLogin = (data)=> ({
  type: constants.CHANGE_LOGIN
});

export const  logout = ()=> ({
  type: constants.CHANGE_LOGOUT
});
export const login = (username, pwd)=> {
  return (dispatch)=>{
    axios.get("/api/login.json?username=" + username + "&pwd=" + pwd).then(res=> {
      if(res.data.data) {
      const action = changeLogin();
      dispatch(action);
      }else{
        alert("登录失败")
      }
    })
  }
}
