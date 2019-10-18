import React, { Component } from 'react';
import { connect } from 'react-redux'
import Collapsible from 'react-collapsible';



class DMForm extends Component{

 
  componentDidMount = () =>{
    this.props.dispatch({ type: 'FETCH_QUESTION', payload: this.props.match.params.type});


  }
  render(){

    return(
      <div>
      <p>{this.props.match.params.type}</p>
      <Collapsible trigger="Motor">
       {this.props.reduxState.questionReducer.map(question => question.type === "motor" ? (
              <div key={question.id}>
              {question.question}
              </div>
               ):(null)
              )}
      </Collapsible>
      <Collapsible trigger="Communication and Language Development">
       {this.props.reduxState.questionReducer.map(question => question.type === "Talking" ? (
              <div key={question.id}>
              {question.question}
              </div>
               ):(null)
              )}
      </Collapsible>

      <Collapsible trigger="Social and Emotional Development">
       {this.props.reduxState.questionReducer.map(question => question.type === "Interacting" ? (
              <div key={question.id}>
              {question.question}
              </div>
               ):(null)
              )}
      </Collapsible>

      <Collapsible trigger="Cognitive Development">
       {this.props.reduxState.questionReducer.map(question => question.type === "Thinking" ? (
              <div key={question.id}>
              {question.question}
              </div>
               ):(null)
              )}
      </Collapsible>
  
</div>
    )
}
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(DMForm);