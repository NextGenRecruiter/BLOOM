import React, { Component } from 'react';
import { connect } from 'react-redux'
import Swal from 'sweetalert2';
// import Button from '@material-ui/core/Button';
import UploadPicture from '../UploadImage/UploadImage'


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class AddChild extends Component{
  state = {
    newChild:{
      firstName:'',
      lastName:'',
      Age:0,
      gender:'',
      Relationship:'',
      picture:''
    }
  }

  handleChange = (event, addChild) =>{
    console.log("in handleChange for add new child", event.target.value)
    this.setState({
      newChild:{
        ...this.state.newChild,
      [addChild]:event.target.value
      }
      
    })
  }
  handleSubmit = (event) =>{
    event.preventDefault();
    this.props.dispatch({type:'ADD_CHILD', payload:this.state.newChild});

    this.setState({
      newChild:{
        firstName:'',
        lastName:'',
        Age:0,
        gender:'',
        Relationship:'',
        picture:''
      }
    })
    Swal.fire(
      'Good job!',
      'New child has been added!',
      'success'
    )
    this.props.history.push('/about');
  }

  handleImage = (imageUrl) =>{
    this.setState({
      newChild:{
        ...this.state.newChild,
        picture: imageUrl
      }
    })
  }

 

  resetForm = () =>{
    console.log('hello from reset');
    
  }

  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
       <label>
         First Name
         <input type="text" onChange={(event) => this.handleChange(event, "firstName")}  />
       </label>
       <label>
       Last Name
         <input type="text" onChange={(event)=>this.handleChange(event,"lastName")}/>
       </label>
       <label>
         Gender
         <input type="text" onChange={(event => {this.handleChange(event,"gender")})}/>
       </label>
      <UploadPicture  setPic={this.handleImage}/>
       <label>
       Age
         <input type="number" onChange={(event)=>this.handleChange(event, "Age")}/>
       </label>
       <label>
       Relationship
         <input type="text" onChange={(event)=>this.handleChange(event, "Relationship")}/>
       </label>
       <input className="log-in" type="submit" value="Submit" />
       <input className="log-in" type="button" value="Cancel" onClick={this.resetForm}/>
     </form>
    </div>
    )
  }



}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(AddChild);
