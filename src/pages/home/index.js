import React, { PureComponent } from 'react';
import Swiper from './components/swiper';
import Topic from './components/topic';
import Article from './components/article';
import Hot from './components/hot';
import Download from './components/download';
import Recommend from './components/recommend';
import { actionCreators } from './store'
import { connect } from 'react-redux'; 
import { HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
 } from './style';

//使用PrueComponent 可以避免因其他组件数据改变而导致本组件做无谓渲染，
//内部实现原理：基于shouldcomponent 做了数据改变渲染判断


class Home extends PureComponent {
  render () {
    return (

      <HomeWrapper className="clearfix">
        <HomeLeft>
          <Swiper/>
          <Topic/>
          <Article/>
        </HomeLeft>
        <HomeRight>
         <Hot/>
         <Download/>
         <Recommend/>
        </HomeRight>
        { this.props.showScorllTop ? <BackTop onClick={this.backTop}>返回</BackTop> : null }
      </HomeWrapper>
    )
  }
//回到顶部方法
  backTop () {
    //window.scrollTo(0,0);
    let timer = null;
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
      let oTop = document.body.scrollTop || document.documentElement.scrollTop;
      if (oTop > 0) {
        document.body.scrollTop = document.documentElement.scrollTop = oTop -30;
        timer = requestAnimationFrame(fn);
      }else{
        cancelAnimationFrame(timer);
      }
    });
  }

  componentDidMount () {
    this.props.changeHomeData();
    this.bindEvents();
  }
//由于事件是绑定在window下必须在页面卸载时销毁不然会影响其他页面
  componentWillUnmount () {
    window.removeEventListener("scroll",this.props.changeScrollTop);
  }
  bindEvents () {
    window.addEventListener("scroll",this.props.changeScrollTop);
  }
}
const mapDispatchToProps = (dispatch)=> ({
  changeHomeData () {
    dispatch(actionCreators.changeHome());
  },
  changeScrollTop () {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.changeScroll(true));
    }else {
      dispatch(actionCreators.changeScroll(false));
    }
  }
});
const mapState = (state)=> ({
  showScorllTop: state.getIn(["home","showScorllTop"])
})
export default connect(mapState,mapDispatchToProps)(Home);