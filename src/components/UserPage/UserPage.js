import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

// import LogOutButton from '../LogOutButton/LogOutButton';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <h1 id="welcome">
      Welcome, { props.user.username }!
    </h1>
    {/* <p>Your ID is: {props.user.id}</p>
    <LogOutButton className="log-in" /> */}
    <p>
    Lorem Ipsum is simply dummy text of 
    the printing and typesetting industry. Lorem 
    Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a
     type specimen book. It has survived not only five centuries, but also the
      leap into electronic typesetting, remaining essentially unchanged. It was 
      popularised in the 1960s with the release of Letraset sheets containing Lorem 
      Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
       including versions of Lorem Ipsum.
    </p>

    <Button variant="outlined" fullWidth={true} color="primary">Chat with Watson and get your answers quicker</Button>

  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
