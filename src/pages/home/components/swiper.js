import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { SwiperWrap, LeftArrow, RightArrow, SpanWrap } from '../style';

class Swiper extends PureComponent {
  constructor (props) {
    super(props);
    //绑定函数中this指向
      this.autoSlide = this.autoSlide.bind(this);
      this.handlePre = this.handlePre.bind(this);
      this.handleNext = this.handleNext.bind(this);
      this.handleLeave = this.handleLeave.bind(this);
  }
    //将timer绑在window下 其他函数也可访问 但必须在页面卸载是清空

  autoSlide (div) {
    if (div) {
      div.style.left = -625+ "px";
      window.timer = setInterval(()=>{
          this.animate(div,-625);
        },5000);
    }
  };
  animate(div, offset) {
    let speed = offset / 25;
    let newLeft = parseInt(div.style.left) + offset;
    function go() {
      if ((speed >0 && parseInt(div.style.left) < newLeft) || (speed < 0 && parseInt(div.style.left) > newLeft)) {
        div.style.left = parseInt(div.style.left) + speed + "px";
        setTimeout(go,10);
      }else{
         div.style.left = newLeft + "px";
        if (newLeft > -625) {
          div.style.left = -3125 + "px";
        }
        if (newLeft < -3125) {
          div.style.left = -625 + "px";
        }
      }
    }
    go();
  };
  //箭头函数内的this绑定成当前class
  handleEnter = () =>{
    clearInterval(window.timer);
  };
  handleLeave (div) {
    window.timer = setInterval(()=>{
          this.animate(div,-625);
        },5000);
  };
  handlePre (div) {
    this.animate(div, 625);
  };
  handleNext (div) {
    this.animate(div, -625);
  };
  //当组件要被卸载的时候去掉timer
  componentWillUnmount () {
    window.timer = null;
  };
  render () {
    const { list } = this.props;
    return (
        <SwiperWrap className="clearfix">
        <div className="container" ref={(div)=> this.div = div} 
          onMouseEnter={this.handleEnter} onMouseLeave={()=>this.handleLeave(this.div)}
        >
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
          <LeftArrow onClick={()=>this.handlePre(this.div)}><i className="iconfont">&#xe629;</i></LeftArrow>
          <RightArrow onClick={()=>this.handleNext(this.div)}><i className="iconfont">&#xe604;</i></RightArrow>
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