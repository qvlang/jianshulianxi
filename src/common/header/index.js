import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators }  from './store';
//引入login组件中actionCreators方法改变登录状态
import  { actionCreators as  loginActionCreators} from '../../pages/login/store';
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchSwitch,
  SearchList,
  SearchItem
} from './style';


class Header extends PureComponent {
  render() {
    const { isFocus, list, isLogin, handleFocus, handleBlur, logout } = this.props; 
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo></Logo>
        </Link>
        <Nav>
          <NavItem className="active left">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
          {
            isLogin ? <NavItem className="right" onClick={logout}>退出</NavItem> : 
            <Link to="/login"><NavItem className="right">登录</NavItem> </Link>
          }
          <SearchWrapper>
            <CSSTransition
              in={isFocus}
              timeout={500}
              classNames="slide"
            >
              <NavSearch className={isFocus? "active" : ""}
               onFocus={()=>{handleFocus(list)}} onBlur={handleBlur}
              >
              </NavSearch>
            </CSSTransition>
            {this.showSearchInfo()}
            <i className={isFocus? "active iconfont zoom" : "iconfont zoom"}>&#xe637;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writting">
              <i className="iconfont">&#xe624;</i>
              写文章
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="reg">注册</Button>
          </Link>
        </Addition>
      </HeaderWrapper>
    );
  }
  showSearchInfo = () => {
    const {isFocus, list, moustIn, page, totalPage, handleMouseIn, handleMouseOut, handleChangePage } = this.props;
    const listPage = [];
    const listJs = list.toJS();

    if (listJs.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (i < listJs.length) {
          listPage.push(
            <SearchItem key={ listJs[i] }>{ listJs[i] }</SearchItem>
          )
        }
      }
    }

    if (isFocus || moustIn) {
      return (
        <SearchInfo onMouseEnter = { handleMouseIn } onMouseLeave = { handleMouseOut }>
          <SearchInfoTitle>
            热门搜索
            <SearchSwitch onClick = {()=> handleChangePage(totalPage,page, this.spin)}>
            <i ref={(icon)=> this.spin = icon} className="iconfont spin">&#xe851;</i>
            换一批</SearchSwitch>
          </SearchInfoTitle>
          <SearchList>
          { listPage }
          </SearchList>
        </SearchInfo>
      )
    }
    else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    //第一种写法
    isFocus: state.getIn(["header","isFocus"]),
    list: state.getIn(["header", "list"]),
    moustIn: state.getIn(["header", "mouseIn"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    isLogin:state.getIn(["login","isLogin"])
    //第二种写法
    //isFocus: state.get("header").get("isFocus")
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    handleFocus (list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleBlur () {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseIn () {
      dispatch(actionCreators.mouseIn());
    },
    handleMouseOut () {
      dispatch(actionCreators.mouseOut());
    },
    logout () {
      dispatch (loginActionCreators.logout());
    },
    handleChangePage (totalPage,page,spin) {
      //先取得原始角度的数值
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,"");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      }else{
        originAngle = 0;
      }
      spin.style.transform = "rotate("+(originAngle + 360)+"deg)";
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      }else {
        dispatch(actionCreators.changePage(1));
      }   
    }
  }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);
