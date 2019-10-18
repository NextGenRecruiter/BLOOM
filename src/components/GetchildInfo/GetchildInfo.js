import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';

class GetChildInfo extends Component{

  componentDidMount = () =>{
    this.props.dispatch({ type: 'FETCH_CHILD' });

} 

handleClick = () =>{
  console.log('hello from handle click');
  
  this.props.history.push('/milestone');
}

  render(){
    return(
      <div>
      {/* {JSON.stringify(this.props.reduxState.newchildReducer)} */}

      {this.props.reduxState.newchildReducer.map(Child=>
      <div key={Child.id}>
        <img className="img" src={Child.picture} />
        <br/>
        First Name: {Child.firstname}
        <br/>
        Last Name: {Child.lastname}
        <br/>
        Age: {Child.age}
        <br/>
        Gender: {Child.gender}
      </div>)}

      <Button variant="contained" size="large" color="primary" onClick={this.handleClick}>
          Add Milestone
        </Button>
      </div>
    
    );

}
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(GetChildInfo);