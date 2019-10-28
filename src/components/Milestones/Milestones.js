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
          <h3>DEVELOPMENTAL MILESTONES</h3>
        <Button variant="outlined" fullWidth={true} color="primary" onClick={()=>this.handleClick('newborn')}>Newborn</Button>
        <Button variant="outlined" fullWidth={true} color="primary" onClick={()=>this.handleClick('one-month')}>1 Month</Button>
        <Button variant="outlined" fullWidth={true} color="primary" onClick={()=>this.handleClick('two-months')}>2 Months</Button>
        <Button variant="outlined" fullWidth={true} color="primary" onClick={()=>this.handleClick('three-months')}>3 Months</Button>
        <Button variant="outlined" fullWidth={true} color="primary" onClick={()=>this.handleClick('four-months')}>4 Months</Button>
        <Button variant="outlined" fullWidth={true} color="primary" onClick={()=>this.handleClick('six-months')}>6 Months</Button>
        <Button variant="outlined" fullWidth={true} color="primary" onClick={()=>this.handleClick('nine-months')}>9 Months</Button>
        <Button variant="outlined" fullWidth={true} color="primary" onClick={()=>this.handleClick('twelve-months')}>12 Months</Button>
        <Button variant="outlined" fullWidth={true} color="primary" onClick={()=>this.handleClick('eighteen-months')}>18 Months</Button>
        <Button variant="outlined" fullWidth={true} color="primary" onClick={()=>this.handleClick('two-years')}>2 Years</Button>
        <Button variant="outlined" fullWidth={true} color="primary" onClick={()=>this.handleClick('three-years')}>3 Years</Button>
        <Button variant="outlined" fullWidth={true} color="primary" onClick={()=>this.handleClick('four-years')}>4 Years</Button>
        <Button variant="outlined" fullWidth={true} color="primary" onClick={()=>this.handleClick('five-years')}>5 Years</Button>
        </div>
    )
}
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default withRouter(connect(mapReduxStateToProps)(Milestone));