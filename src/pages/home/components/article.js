import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ArticleItem, ArticleInfo, LoadMore } from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class Article extends PureComponent {
  render () {
    const { list, page, getMoreArticle } = this.props;
    return (
      <div>
        {
          list.map((item)=> {
            return (
              <ArticleItem key={item.get("id")} className="clearfix" >
                <ArticleInfo>
                  <Link to= {"/detail/" + item.get("id") } >
                    <h3 className="title">{item.get("title")}</h3>
                  </Link>
                  <p className="desc">{item.get("desc")}</p>
                  <div className="comment">
                    <span className="nickName">{item.get("author")}</span>
                    <i className="iconfont">&#xe60c;</i>
                    <i className="iconfont">&#xe65c;</i>
                  </div>
                </ArticleInfo>
                <img className="pic" alt="饭团" src={item.get("imgUrl")} />
              </ArticleItem>
             );
          })
        }
        <LoadMore onClick={()=>getMoreArticle(page)}>加载更多</LoadMore>
      </div>
    )
  }
}
const mapState = (state) =>({
  list: state.getIn(["home","articleList"]),
  page: state.getIn(["home","articlePage"])
});
const mapDispatch = (dispatch) =>({
  getMoreArticle (page) {
    dispatch(actionCreators.loadMore(page));
  }
});

export default connect(mapState,mapDispatch)(Article);