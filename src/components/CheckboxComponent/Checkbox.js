import React, { Component } from 'react';
import { connect } from 'react-redux'

class Questioncheckbox extends Component{


  render(){
    return(
   
      <p>{this.props.question}</p>
   
    )
}
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });

export default connect(mapReduxStateToProps)(Questioncheckbox);