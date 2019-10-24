import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';


class AnswerForm extends Component{

  
  state= {
      showContent_MilesstoneNewBorn: false,
      showContent_MilesstoneOneMonth: false,
      showContent_MilesstoneTwoMonth: false,
  }

  componentDidMount = () =>{
    this.props.dispatch({ type: 'FETCH_ANSWER', payload:'answer'});
    
      // for(let i= 0; i < this.props.reduxState.answerReducer.length ; i++){
      //   if(this.props.reduxState.answerReducer.milestone[i] == 'newBorn'){
      //     this.setState({showContent_MilesstoneNewBorn:true})        
      //   }else if(this.props.reduxState.answerReducer.milestone[i] == 'one-month'){
      //     this.setState({showContent_MilesstoneOneMonth:true})        
      //   }else if(this.props.reduxState.answerReducer.milestone[i] == 'two-months'){
      //     this.setState({showContent_MilesstoneTwoMonth:true})        
      //   }
      // }
  


} 

componentDidUpdate(prevProps) {

  if ((this.props.reduxState.answerReducer !== prevProps.reduxState.answerReducer) && (this.props.reduxState.answerReducer.length > 0) ) {
    for(let i= 0; i < this.props.reduxState.answerReducer.length ; i++){
      if(this.props.reduxState.answerReducer[i].milestone == 'newborn'){
        this.setState({showContent_MilesstoneNewBorn:true})        
      }else if(this.props.reduxState.answerReducer[i].milestone == 'one-month'){
        this.setState({showContent_MilesstoneOneMonth:true})        
      }else if(this.props.reduxState.answerReducer[i].milestone == 'two-months'){
        this.setState({showContent_MilesstoneTwoMonth:true})        
      }
    }
}
}

handleClick = (answer) =>{
    this.props.history.push(`/form/${answer}` );
}

  render(){
    const  showContent  = this.state;
    return(
        <div>                
        {showContent.showContent_MilesstoneNewBorn === true ? (
        <Button variant="contained" size="large" color="primary" onClick={()=>this.handleClick('newborn')}>Newborn</Button>
        ) : (null)}
         {showContent.showContent_MilesstoneOneMonth === true ? (
        <Button variant="contained" size="large" color="primary" onClick={()=>this.handleClick('one-month')}>One Month</Button>
        ) : (null)}

          {showContent.showContent_MilesstoneTwoMonth === true ? (
        <Button variant="contained" size="large" color="primary" onClick={()=>this.handleClick('two-months')}>Two Months</Button>
        ): (null)}
        </div>
    )
}
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default withRouter( connect(mapReduxStateToProps)(AnswerForm));