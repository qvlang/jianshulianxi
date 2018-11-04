import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { HotWrapper, HotList } from '../style';

class Hot extends PureComponent {
  render () {
    const { list } =this.props;
    return (
      <HotWrapper>
       {
        list.map((item)=> {
          return (
            <HotList key={item.get("id")}>
              <img width="100%" alt={item.get("desc")} src={item.get("imgUrl")} />
            </HotList>
          )
        })
       }
      </HotWrapper>
    )
  }
}
const mapState = (state)=> ({
  list: state.getIn(["home","hotList"])
})
export default connect(mapState,null)(Hot);

