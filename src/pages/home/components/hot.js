import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { HotList } from '../style';

class Hot extends PureComponent {
  render () {
    const { list } =this.props;
    return (
      <div>
       {
        list.map((item)=> {
          return (
            <HotList key={item.get("id")}>
              <img width="100%" alt={item.get("desc")} src={item.get("imgUrl")} />
            </HotList>
          )
        })
       }
      </div>
    )
  }
}
const mapState = (state)=> ({
  list: state.getIn(["home","hotList"])
})
export default connect(mapState,null)(Hot);

