import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ChatBot from '../IBMWatson/IBMWatson'

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
    Children develop in certain predictable ways, referred to as developmental milestones. 
    Milestones cover four areas of a child's development -- cognitive, communication and language, 
    social and emotional, and motor. Milestones help you understand how your child learns and grows. 
    Please select a child's age or a specific area of development to learn more about milestones at certain 
    ages.
    </p>
    <ChatBot />
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
