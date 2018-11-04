import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class Write extends PureComponent {
  render () {
    const { isLogin } = this.props;
    if (isLogin) {
       return (
       <div>写文章</div>
      )
    }else{
      return (
        <Redirect to="/login" />
      )
    }
  }
}
//调色
const mapState = (state)=> ({
  isLogin: state.getIn(["login","isLogin"])
});

const mapDispatch = (dispatch)=> ({
});

export default connect(mapState, mapDispatch)(Write);
