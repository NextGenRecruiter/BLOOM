import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';


class Milestone extends Component{


  componentDidMount = () =>{
    this.props.dispatch({ type: 'FETCH_QUESTION', payload: 'milestone'});
} 

handleClick = (milestone) =>{
    this.props.history.push(`/form/${milestone}` );
}

  render(){

    return(
        <div>
        <Button variant="contained" size="large" color="primary" onClick={()=>this.handleClick('newborn')}>Newborn</Button>
        <Button variant="contained" size="large" color="primary" onClick={()=>this.handleClick('one-month')}>One Month</Button>
        <Button variant="contained" size="large" color="primary" onClick={()=>this.handleClick('two-months')}>Two Months</Button>
        </div>
    )
}
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default withRouter( connect(mapReduxStateToProps)(Milestone));