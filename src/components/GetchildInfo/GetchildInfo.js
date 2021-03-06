import React, { Component } from 'react';
import { connect } from 'react-redux'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AnswerForm from '../AnswerForm/AnswerForm'

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

      {this.props.reduxState.newchildReducer.map(Child=>
      <div key={Child.id}>
        <img className="img" src={Child.picture} alt="amina looking at the camera"/>
        <br/>
        First Name: {Child.firstname}
        <br/>
        Last Name: {Child.lastname}
        <br/>
        Age: {Child.age}
        <br/>
        Gender: {Child.gender}
      </div>)}
      <p>Click the blue plus button to fill a new milestone form</p>
      <Fab color="primary" aria-label="Add" onClick={this.handleClick}>
        <AddIcon />
      </Fab>

      <hr/>
     <AnswerForm />
      </div>
    
    );

}
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(GetChildInfo);