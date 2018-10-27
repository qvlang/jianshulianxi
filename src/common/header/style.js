import style from 'styled-components';
import imgPic from '../../images/logo.png'

export const HeaderWrapper = style.div`
  height: 56px;
  border-bottom: 1px solid #eee;
  position: relative;
  padding-right: 70px;
  box-sizing: border-box;
`
export const Logo = style.div`
  width: 100px;
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  background: url(${imgPic});
  background-size: contain;
`
export const Nav = style.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`
export const NavItem = style.div`
  line-height: 56px;
  padding:  0 15px;
  box-sizing: border-box;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`
export const SearchWrapper = style.div`
  float: left;
  position: relative;
  .zoom{
    width: 30px;
    line-height: 30px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    border-radius: 15px;
    text-align: center;
    &.active{
      background: #999;
      color: #fff;
    }
  }
`
export const NavSearch = style.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.active {
    width: 240px;
  }
  &.slide-enter{
      transition: all 0.5s ease-out;
    }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit{
    transition: all 0.5s ease-out;
  }
  &.slide-exit-active{
    width: 160px;
  }
`
export const SearchInfo = style.div`
  background: #fff;
  position: absolute;
  z-index: 33;
  padding: 0 20px;
  left: 0;
  top: 56px;
  width: 240px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`
export const SearchInfoTitle = style.div`
  margin-top: 20px;
  margin-bottom: 15px;
  box-sizing: border-box;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const SearchSwitch = style.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 13px;
    margin-right: 3px;
    transition: all 0.3s ease-in;
    transform-origin: center center; 
  }
`
export const SearchList = style.div`
  overflow: hidden;
`
export const SearchItem = style.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin: 0 10px 10px 0;
  font-size: 12px;
  border-radius: 3px;
  border: 1px solid #ddd;
  color: #787878;
`
export const Addition = style.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
export const Button = style.div`
  float: right;
  margin: 9px 20px 0 0;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`