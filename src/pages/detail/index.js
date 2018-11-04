import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { actionCreators } from './store';
import { connect } from 'react-redux';

class Detail extends PureComponent {
  render () {
    const { title, content } = this.props;
    return (
      <DetailWrapper className="clearfix">
        <Header>{ title }</Header>
        <Content dangerouslySetInnerHTML={{__html: content }}
        />
      </DetailWrapper>
      )
  }
  componentDidMount () {
    this.props.getDetail(this.props.match.params.id);
  }
}
//调色
const mapState = (state)=> ({
  title: state.getIn(["detail","title"]),
  content: state.getIn(["detail","content"])
});

const mapDispatch = (dispatch)=> ({
  getDetail (id) {
    dispatch(actionCreators.getDetail(id))
  }
});

export default connect(mapState, mapDispatch)(Detail);
