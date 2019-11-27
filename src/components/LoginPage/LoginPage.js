import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import Person from '@material-ui/icons/Person';
import Lock from '@material-ui/icons/Lock';
import { connect } from 'react-redux';
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    useNextVariants: true,
  },
});
class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login
''
  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <MuiThemeProvider theme={theme}>
        <form className='loginForm' onSubmit={this.login}>
                <div>
                  <TextField
                    id="filled-username-input"
                    label="User Name"
                    type="text"
                    name="username"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ startAdornment: <InputAdornment position="start"><Person /></InputAdornment> }}
                    value={this.state.username}
                    onChange={this.handleInputChangeFor('username')}
                  />
                  <br />
                  <TextField
                    id="filled-username-input"
                    label="Password"
                    type="password"
                    name="password"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ startAdornment: <InputAdornment position="start"><Lock /></InputAdornment> }}
                    value={this.state.password}
                    onChange={this.handleInputChangeFor('password')}
                  />
                </div>
                <br />
                <div>
                  <Button size='large' variant="contained" color="primary" onClick={this.login}>Login</Button>

                  <br />
                  <br />
                  <button
                    type="button"
                    className="link-button"
                    onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
                  >
                    New? Create an Account
          </button>
                </div>
              </form>
              </MuiThemeProvider>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
