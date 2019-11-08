import React, { Component } from 'react';
import { connect } from 'react-redux'
import Swal from 'sweetalert2';
import TextField from '@material-ui/core/TextField';
import UploadPicture from '../UploadImage/UploadImage'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';




// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 200,
//   },
//   dense: {
//     marginTop: 19,
//   },
//   menu: {
//     width: 200,
//   },
// });
// const gender = [
//   {
//     value: 'female',
//     label: 'female',
//   },
//   {
//     value: 'male',
//     label: 'male',
//   },
// ]
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
    // const { classes } = this.props;
    return(
      <div>
       <form onSubmit={this.handleSubmit}>
       <label>
         First Name
         <br/>
         <input type="text" onChange={(event) => this.handleChange(event, "firstName")}  />
       </label>
       <br/>
       <label>
       Last Name
        <br/>
         <input type="text" onChange={(event)=>this.handleChange(event,"lastName")}/>
       </label>
       <br/>
       <label>
         Gender
         <br/>
         <input type="text" onChange={(event => {this.handleChange(event,"gender")})}/>
       </label>
      <UploadPicture  setPic={this.handleImage}/>
      <br/>
       <label>
       Age
       <br/>
         <input type="number" onChange={(event)=>this.handleChange(event, "Age")}/>
       </label>
       <br/>
       <label>
       Relationship
       <br/>
         <input type="text" onChange={(event)=>this.handleChange(event, "Relationship")}/>
       </label>
       <br/>
       <input className="log-in" type="submit" value="Submit" />
       <br/>
       <input className="log-in" type="button" value="Cancel" onClick={this.resetForm}/>
     </form> 

        {/* <TextField
          label="First Name"
          onChange={(event) => this.handleChange(event, "firstName")}
          margin="normal"
        />
        <br/>
        <TextField
          label="Last Name"
          onChange={(event) => this.handleChange(event, "lastName")}
          margin="normal"
        />
        <br/>
        <TextField
          id="standard-select-currency"
          select
          label="Gender"
          onChange={(event => {this.handleChange(event,"gender")})}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select the gender of the child"
          margin="normal"
        >
          {gender.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          <br/>
        <TextField
          label="Age"
          onChange={(event)=>this.handleChange(event, "Age")}
          margin="normal"
          type="number"
        />
        <br/>
         <TextField
          label="Relationship to Child"
          onChange={(event)=>this.handleChange(event, "Relationship")}
          margin="normal"
        /> */}






    </div>
    )
  }



}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(AddChild);
