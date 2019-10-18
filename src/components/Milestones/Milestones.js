import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';


class Milestone extends Component{


  componentDidMount = () =>{
    this.props.dispatch({ type: 'FETCH_QUESTION', payload: 'milestone'});
    // this.props.dispatch({ type: 'FETCH_QUESTION'});
} 

handleClick = (milestone) =>{
    this.props.history.push(`/form/${milestone}` );
}

  render(){

    return(
        <div>
        
        <Button variant="contained" size="large" color="primary" onClick={()=>this.handleClick('newborn')}>Newborn</Button>
        <Button variant="contained" size="large" color="primary" onClick={()=>this.handleClick('one-month')}>One Month</Button>

            {/* {this.props.reduxState.questionReducer.map(question=>{
                return(

                    <Button variant="contained" size="large" color="primary" onClick={()=>this.handleClick(question.milestone)}>Newborn</Button>

                )
            
            })} */}
        </div>
    )
}
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default withRouter( connect(mapReduxStateToProps)(Milestone));