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
    /*axios.post("/api/login.json",{
      username,
      pwd
    },{
      headers: {
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
      }*/
    axios({
      method: "GET",
      //headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
      url: "/api/login.json",
      params: {
        username,
        pwd
      }
    }).then(res=> {
      if(res.data.data) {
        const action = changeLogin();
        dispatch(action);
      }else{
        console.log("没有数据");
      }
    }).catch(err=>{
      console.log("err happen"+ err.message);
    });
  }
}
