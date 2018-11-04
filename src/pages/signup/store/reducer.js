import { fromJS } from 'immutable';
import * as constants from './constants'

//引入immutable控制state不可被修改
const storeDefault = fromJS({
  isLogin: false
});

export default (state = storeDefault,action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set("isLogin",true);
    case constants.CHANGE_LOGOUT:
      return state.set("isLogin",false);
    default:
      return state;
  }
}