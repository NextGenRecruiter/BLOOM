import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';


class AnswerForm extends Component{

  
  state= {
      showContent_MilesstoneNewBorn: false,
      showContent_MilesstoneOneMonth: false,
      showContent_MilesstoneTwoMonth: false,
      showContent_MilesstoneThreeMonths: false,
      showContent_MilesstoneFourMonths: false,
      showContent_MilesstoneSixMonths: false,
      showContent_MilesstoneNineMonths: false,
      showContent_MilesstoneTwelveMonths: false,
      showContent_MilesstoneEighteenMonths: false,
      showContent_MilesstoneTwoYears: false,
      showContent_MilesstoneThreeYears: false,
      showContent_MilesstoneFourYears: false,
      showContent_MilesstoneFiveYears: false,
  }

  componentDidMount = () =>{
    this.props.dispatch({ type: 'FETCH_ANSWER', payload:'milestone'});
} 

componentDidUpdate(prevProps) {

  if (this.props.reduxState.answerReducer !== prevProps.reduxState.answerReducer) {    
    for(let i= 0; i < this.props.reduxState.answerReducer.length ; i++){
            if(this.props.reduxState.answerReducer[i].milestone == 'newborn'){
        this.setState({showContent_MilesstoneNewBorn:true})        
      }else if(this.props.reduxState.answerReducer[i].milestone == 'one-month'){
        this.setState({showContent_MilesstoneOneMonth:true})        
      }else if(this.props.reduxState.answerReducer[i].milestone == 'two-months'){
        this.setState({showContent_MilesstoneTwoMonth:true})        
      }else if(this.props.reduxState.answerReducer[i].milestone == 'three-months'){
        this.setState({showContent_MilesstoneThreeMonths:true})        
      }else if(this.props.reduxState.answerReducer[i].milestone == 'four-months'){
        this.setState({showContent_MilesstoneThreeMonths:true})
      }else if(this.props.reduxState.answerReducer[i].milestone == 'six-months'){
        this.setState({showContent_MilesstoneSixMonths:true})
      }else if(this.props.reduxState.answerReducer[i].milestone == 'nine-months'){
        this.setState({showContent_MilesstoneNineMonths:true})
    }else if(this.props.reduxState.answerReducer[i].milestone == 'twelve-months'){
      this.setState({showContent_MilesstoneTwelveMonths:true})
    }else if(this.props.reduxState.answerReducer[i].milestone == 'eighteen-months'){
      this.setState({showContent_MilesstoneEighteenMonths:true})
    }else if(this.props.reduxState.answerReducer[i].milestone == 'two-years'){
      this.setState({showContent_MilesstoneTwoYears:true})
    }else if(this.props.reduxState.answerReducer[i].milestone == 'three-years'){
      this.setState({showContent_MilesstoneThreeYears:true})
    }else if(this.props.reduxState.answerReducer[i].milestone == 'four-years'){
      this.setState({showContent_MilesstoneFourYears:true})
    }else if(this.props.reduxState.answerReducer[i].milestone == 'five-years'){
      this.setState({showContent_MilesstoneFiveYears:true})
    }
}
  }
}

handleClick = (milestone) =>{
    this.props.history.push(`/answer/${milestone}` );
}

  render(){
    const  showContent  = this.state;
    return(
        <div>
           {showContent.showContent_MilesstoneNewBorn === true ? ( 
        <Button variant="outlined" fullWidth={true} size="large" color="primary" onClick={()=>this.handleClick('newborn')}>Newborn</Button>
          ) : (null)}                 
           {showContent.showContent_MilesstoneOneMonth === true ? ( 
        <Button variant="outlined" fullWidth={true} size="large" color="primary" onClick={()=>this.handleClick('one-month')}>1 Month</Button>
          ) : (null)} 
         {showContent.showContent_MilesstoneTwoMonth === true ? (
        <Button variant="outlined" fullWidth={true} size="large" color="primary" onClick={()=>this.handleClick('two-months')}>2 Months</Button>
        ): (null)}  
         {showContent.showContent_MilesstoneThreeMonths === true ? ( 
        <Button variant="outlined" fullWidth={true} size="large" color="primary" onClick={()=>this.handleClick('three-months')}>3 Months</Button>
          ) : (null)}  
           {showContent.showContent_MilesstoneFourMonths === true ? ( 
        <Button variant="outlined" fullWidth={true} size="large" color="primary" onClick={()=>this.handleClick('four-months')}>4 Months</Button>
          ) : (null)} 
           {showContent.showContent_MilesstoneSixMonths === true ? ( 
        <Button variant="outlined" fullWidth={true} size="large" color="primary" onClick={()=>this.handleClick('six-months')}>6 Months</Button>
          ) : (null)} 
           {showContent.showContent_MilesstoneNineMonths === true ? ( 
        <Button variant="outlined" fullWidth={true} size="large" color="primary" onClick={()=>this.handleClick('nine-months')}>9 Months</Button>
          ) : (null)}
           {showContent.showContent_MilesstoneTwelveMonths === true ? ( 
        <Button variant="outlined" fullWidth={true} size="large" color="primary" onClick={()=>this.handleClick('twelve-months')}>12 Months</Button>
          ) : (null)}
           {showContent.showContent_MilesstoneEighteenMonths === true ? ( 
        <Button variant="outlined" fullWidth={true} size="large" color="primary" onClick={()=>this.handleClick('eighteen-months')}>18 Months</Button>
          ) : (null)}
           {showContent.showContent_MilesstoneTwoYears === true ? ( 
        <Button variant="outlined" fullWidth={true} size="large" color="primary" onClick={()=>this.handleClick('two-years')}>2 Years</Button>
          ) : (null)}
           {showContent.showContent_MilesstoneThreeYears === true ? ( 
        <Button variant="outlined" fullWidth={true} size="large" color="primary" onClick={()=>this.handleClick('three-years')}>3 Years</Button>
          ) : (null)} 
           {showContent.showContent_MilesstoneFourYears === true ? ( 
        <Button variant="outlined" fullWidth={true} size="large" color="primary" onClick={()=>this.handleClick('four-years')}>4 Years</Button>
          ) : (null)}
           {showContent.showContent_MilesstoneFiveYears === true ? ( 
        <Button variant="outlined" fullWidth={true} size="large" color="primary" onClick={()=>this.handleClick('five-years')}>5 Years</Button>
          ) : (null)}      
        </div>
    )
}
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default withRouter( connect(mapReduxStateToProps)(AnswerForm));