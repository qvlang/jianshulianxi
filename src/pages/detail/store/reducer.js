import { fromJS } from 'immutable';
import * as constants from './constants'

//引入immutable控制state不可被修改
const storeDefault = fromJS({
  title: "",
  content: ""
});

export default (state = storeDefault,action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: fromJS(action.title),
        content: fromJS(action.content)
      })
    default:
      return state;
  }
}