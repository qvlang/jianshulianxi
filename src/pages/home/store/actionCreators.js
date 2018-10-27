import axios from "axios";
import * as constants from './constants'

const homeData = (data)=> ({
  type: constants.CHANGE_HOME_DATA,
  topicList: data.topicList,
  articleList: data.articleList,
  hotList: data.hotList,
  recommendList: data.recommendList,
  swiperImg: data.swiperImg
});

const moreArticle = (data,page)=> ({
  type: constants.LOAD_MORE_ARTICLE,
  articleList: data.articleList,
  page: page
})

export const changeHome = ()=> {
  return (dispatch)=> {
    axios.get("/api/home.json").then((res)=>{
      const data = res.data.data;
      const action = homeData(data);
      dispatch(action);
    })
  }
};

export const loadMore = (page)=> {
  return (dispatch)=>{
    axios.get("/api/moreArticle.json?page=" + page).then((res)=>{
      const action = moreArticle(res.data.data, page + 1);
      dispatch(action);
    })
  }
};
export const changeScroll = (show)=> ({
  type: constants.SCROLL_TOP,
  show: show
})
