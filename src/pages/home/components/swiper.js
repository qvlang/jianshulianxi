import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { SwiperWrap, LeftArrow, RightArrow, SpanWrap } from '../style';

class Swiper extends PureComponent {
  constructor (props) {
    super(props);
    this.autoSlide = this.autoSlide.bind(this);
  }
  autoSlide (div) {
    if (div) {
      div.style.left = 0 + "px";
      setInterval(()=>{
        const left = div.style.left.replace(/[^0-9]/ig,"");
        const distance = parseInt(left, 10);
        if(Math.abs(distance) >= 625 * 4){
          div.style.left = 0;
        }else {
          div.style.left =  (-(distance + 625)) + "px"; 
        }
      },2000)
    }
  };
  render () {
    const { list } = this.props;
    return (
        <SwiperWrap className="clearfix">
        <div className="container" ref={(div)=> this.div = div}>
          {
            this.autoSlide(this.div)
          }
          {    
            list.map((item)=> {
              return (
                  <img key={item.get("id")} alt="轮播图片" src={item.get("imgUrl")} />
              )
             })
           }
          </div>
          <LeftArrow><i className="iconfont">&#xe629;</i></LeftArrow>
          <RightArrow><i className="iconfont">&#xe604;</i></RightArrow>
          <SpanWrap>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </SpanWrap>
        </SwiperWrap>
      )
  }
}
const mapState = (state)=> ({
  list: state.getIn(["home","swiperList"])
});

export default connect(mapState,null)(Swiper);