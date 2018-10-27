import style from "styled-components";

export const HomeWrapper = style.div`
  width: 960px;
  padding-top: 30px;
  margin: 0 auto;
`;
export const HomeLeft = style.div`
  width: 640px;
  margin-left: 15px;
  float: left;
`;
export const HomeRight = style.div`
  width: 280px;
  margin-left: 25px;
  float: right;
`;
export const TopicWrapper = style.div`
  padding: 20px 0 10px 0;
  box-sizing: border-box;
  margin-bottom: 20px;
  margin-left: -28px;
  border-bottom: 1px solid #f0f0f0;
  overflow: hidden;
`;
export const TopicItem = style.div`
  float: left;
  height: 32px;
  line-height: 32px;
  background: #f7f7f7;
  padding-right: 10px;
  margin-left: 28px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #000;
  border-radius:4px;
  border: 1px solid #dcdcdc;
  .topic-pic {
    width: 32px;
    height:32px;
    float: left;
    margin-right: 10px;
  }
`;
export const ArticleItem = style.div`
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #f0f0f0;
  .pic{
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
`;
export const ArticleInfo =style.div`
  width: 500px;
  float: left;
  .desc{
  line-height: 24px;
  font-size: 13px;
  color: #999;
  float:left;
  margin-bottom: 8px;
  }
  .title{
    line-height: 27px;
    font-size: 18px;
    font-weight:bold;
    color: #333;
    margin-bottom: 4px;
  }
  .comment{
    width: 100%;
    height: 20px;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    .nackName{
      display: inline-block;
      margin-right: 10px;
      color: #b4b4b4;
    }
    .iconfont{
      color: #999;
      margin-left: 10px;
    }
  }
`;
export const LoadMore = style.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  margin: 30px 0;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
`;
export const HotList = style.div`
  width: 100%;
  min-height: 50px;
  margin-top: -8px;
  padding-top: 4px;
  margin-bottom: 6px;
  border-radius: 4px;
`;
export const DownloadWrapper = style.div`
  width: 100%;
  margin-bottom: 30px;
  padding: 10px 22px;
  box-sizing: border-box;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
`;
export const RecommendWrapper = style.div`
  
`;
export const RecommendAuthor = style.div`
  overflow: hidden;
  font-size: 13px;
  color: #333;
  .switch{
    float: right;
    .iconfont{
      display: block;
      float: left;
      margin-right: 4px;
    }
  }
`;
export const RecommendList = style.div`
  overflow: hidden;
  width: 100%;
  margin-top:15px;
  .pic{
    width:48px;
    height:48px;
    float:left;
    border-radius: 24px;
    margin-right: 12px;
  }
  .authorinfo{
    width: 220px;
    float:right;
    font-size: 16px;
    color:#333;
    .concern{
      color:#42c02e;
      font-size: 13px;
      float:right;
    }
    .fontnumber{
      margin-top:10px;
      color:#969696;
      font-size: 12px;
    }
  }
`;
export const BackTop = style.div`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  color: #333;
  background: #fff;
  cursor: pointer;
  line-height: 50px;
  text-align: center;
  border: 1px solid #333;
`;
export const SwiperWrap = style.div`
  width: 625px;
  height: 270px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  .container{
    position: absolute;
    top:0;
    left:0;
    img{
      display: inline-block;
      width: 625px;
      height: 270px;
    }
  }
`;
export const RightArrow = style.div`
  height: 50px;
  width: 40px;
  color: #fff;
  background-image: none;
  border-radius: 6px 0 0 6px;
  background-color: rgba(0,0,0,.4);
  line-height: 50px;
  text-align: center;
  position: absolute;
  right: 0;
  top: 40%;
  z-index: 22;
  cursor: pointer;
`;
export const LeftArrow = style.div`
  height: 50px;
  width: 40px;
  color: #fff;
  background-image: none;
  border-radius: 0 6px 6px 0;
  background-color: rgba(0,0,0,.4);
  line-height: 50px;
  text-align: center;
  position: absolute;
  left: 0;
  top: 40%;
  z-index: 22;
  cursor: pointer;
`;
export const SpanWrap = style.div`
  width: 100%;
  height: 24px;
  line-height: 24px;
  text-align: center;
  position: absolute;
  bottom: 15px;
  z-index: 22;
  span{
    display: inline-block
    width: 25px;
    height:2px;
    background: #fff;
    margin-right: 8px;
    cursor: pointer;
  }
`