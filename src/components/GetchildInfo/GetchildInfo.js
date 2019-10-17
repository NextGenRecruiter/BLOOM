import React, { Component } from 'react';
import { connect } from 'react-redux'

class GetChildInfo extends Component{
  
  componentDidMount = () =>{
  
  }

  render(){
    return(
      <>
      Hello there!.
      </>
    
    );

}
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(GetChildInfo);