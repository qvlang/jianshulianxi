import { fromJS } from 'immutable';
import * as constants from './constants'

//引入immutable控制state不可被修改
const storeDefault = fromJS({
  topicList: [],
  articleList: [],
  hotList: [],
  recommendList: [],
  articlePage: 1,
  showScorllTop: false,
  swiperList:[]
});
//调整代码结构
const  changeHomeData = (state,action) => {
    return state.merge({
      topicList: fromJS(action.topicList),
      articleList: fromJS(action.articleList),
      hotList: fromJS(action.hotList),
      recommendList: fromJS(action.recommendList),
      swiperList: fromJS(action.swiperImg)
    });
  }
const loadMoreArticle = (state,action) => {
    return state.merge({
      articleList: state.get("articleList").concat(fromJS(action.articleList)),
      articlePage: fromJS(action.page)
    });
  }

export default (state = storeDefault,action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state,action);
    case constants.LOAD_MORE_ARTICLE:
      return loadMoreArticle(state,action)
    case constants.SCROLL_TOP:
      return state.set("showScorllTop", action.show);
    default:
      return state;
  }
}