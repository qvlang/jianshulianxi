import * as constants from './constants';
import { fromJS } from 'immutable';

//引入immutable控制state不可被修改
const storeDefault = fromJS({
  isFocus: false,
  list: [],
  totalPage: 1,
  page: 1,
  mouseIn: false
});

export default (state = storeDefault,action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set("isFocus", true);
    case constants.SEARCH_BLUR:
    //set方法会返回一个新的state 并不会修改原来的state
      return state.set("isFocus", false);
    case constants.SEARCH_LIST:
      //第一种写法
      //return state.set("list", action.data).set("totalPage", action.totalPage);
      //第二种写法
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      });
    case constants.MOUSE_IN:
      return state.set("mouseIn", true);
    case constants.MOUSE_OUT:
      return state.set("mouseIn", false);
    case constants.CHANGE_PAGE:
      return state.set("page", action.page);
    default:
      return state;
  }
}