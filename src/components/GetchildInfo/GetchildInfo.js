import React, { Component } from 'react';
import { connect } from 'react-redux'

class GetChildInfo extends Component{

  componentDidMount = () =>{
    this.props.dispatch({ type: 'FETCH_CHILD' });

} 

  render(){
    return(
      <div>
      {/* {JSON.stringify(this.props.reduxState.newchildReducer)} */}

      {this.props.reduxState.newchildReducer.map(Child=>
      <div key={Child.id}>
        {Child.type}
      </div>)}
      
      </div>
    );

}
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(GetChildInfo);