import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendAuthor, RecommendList} from '../style';
import { connect } from 'react-redux';

class Recommend extends PureComponent {
  render () {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        <RecommendAuthor>
          <span>推荐作者</span>
          <div className="switch">
            <i className="iconfont">&#xe851;</i>
            换一批
          </div>
        </RecommendAuthor>
        {
          list.map((item) =>{
            return (
              <RecommendList key={item.get("id")}>
                <img className="pic" alt="作者" src={item.get("imgUrl")} />
                <div className="authorinfo">
                  <div><span>{item.get("author")}</span><div className="concern"><i className="iconfont">&#xe62f;</i>
                  关注</div></div>
                  <p className="fontnumber">{item.get("fontount")}</p>
                </div>
              </RecommendList>           
            )
          })
        }
      </RecommendWrapper>
      )
  }
}
const mapStateToProps = state => ({
  list: state.getIn(["home","recommendList"])
});

export default connect(mapStateToProps,null)(Recommend);