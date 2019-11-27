import React, { Component } from 'react';
import { connect } from 'react-redux'
import Swal from 'sweetalert2';
import UploadPicture from '../UploadImage/UploadImage'
import TextField from '@material-ui/core/TextField';
import blue from '@material-ui/core/colors/blue';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    useNextVariants: true,
  },
});

class AddChild extends Component {
  state = {
    newChild: {
      firstName: '',
      lastName: '',
      Age: 0,
      gender: '',
      Relationship: '',
      picture: ''
    }
  }

  handleChange = (event, addChild) => {
    console.log("in handleChange for add new child", event.target.value)
    this.setState({
      newChild: {
        ...this.state.newChild,
        [addChild]: event.target.value
      }

    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_CHILD', payload: this.state.newChild });

    this.setState({
      newChild: {
        firstName: '',
        lastName: '',
        Age: 0,
        gender: '',
        Relationship: '',
        picture: ''
      }
    })
    Swal.fire(
      'Good job!',
      'New child has been added!',
      'success'
    )
    this.props.history.push('/about');
  }

  handleImage = (imageUrl) => {
    this.setState({
      newChild: {
        ...this.state.newChild,
        picture: imageUrl
      }
    })
  }

  resetForm = () => {
    console.log('hello from reset');

  }

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <TextField
              label="First Name"
              variant="outlined"
              onChange={(event) => this.handleChange(event, "firstName")}
              margin="normal"
            />
            <br />
            <TextField
              label="Last Name"
              variant="outlined"
              onChange={(event) => this.handleChange(event, "firstName")}
              margin="normal"
            />
            <br />
            <FormControl>
              <InputLabel htmlFor="name">gender</InputLabel>
              <Select
                native
                // required
                value={this.state.gender}
                onChange={(event) => this.handleChange(event, "Relationship")}
                inputProps={{
                  name: 'gender',
                  id: 'gender'
                }}
              >
                <option value="" />
                <option value={"female"}>Female</option>
                <option value={"male"}>Male</option>
              </Select>
            </FormControl>
            <UploadPicture setPic={this.handleImage} />
            <br />
            <TextField
              id="outlined-number"
              label="Number"
              value={this.state.Age}
              onChange={(event) => this.handleChange(event, "Age")}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              variant="outlined"
            />
            <br />
            <TextField
              label="Relationship"
              variant="outlined"
              onChange={(event) => this.handleChange(event, "Relationship")}
              margin="normal"
            />
            <br />
            <input className="log-in" type="submit" value="Submit" />
            <br />
            <input className="log-in" type="button" value="Cancel" onClick={this.resetForm} />
          </form>
        </MuiThemeProvider>
      </div>
    )
  }



}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(AddChild);
