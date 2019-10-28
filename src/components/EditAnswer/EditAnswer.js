import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';


class EditAnswer extends Component{
  state={ 
    EdittedAnswer:[], 
}
 
  componentDidMount = () =>{
    this.props.dispatch({ type: 'FETCH_ANSWER', payload: this.props.match.params.type});
  }


componentDidUpdate(prevProps) {

  if (this.props.reduxState.answerReducer !== prevProps.reduxState.answerReducer) {
    let array = [];
    this.props.reduxState.answerReducer.map(answer =>{
     array.push({id:answer.id, child_id:answer.child_id, milestone:answer.milestone, question_type:answer.question_type, question:answer.question, answer:answer.answer});
    })
    console.log(array);
    
    this.setState({
        EdittedAnswer:array,
    })
  }
}

  handleChange = id => (event) => {
    let newAnswers = this.state.answers.map(question =>{
      if(question.question_id == id){
        return ({...question, answer:!question.answer})
      }else {
        return question;
      }
    })
    this.setState({
        EdittedAnswer: newAnswers,
    })
}

  handleSubmit = () =>{
    // this.props.dispatch({type:'ADD_ANSWER', payload:this.state});
    
    
  }

  handleDelete = () => {
    this.props.dispatch({type:'DELETE_ANSWER', payload:this.state});
    Swal.fire(
      'DELETE',
      'Form has be deleted',
      'success'
    )
  }



  render(){    
    return(
      <div>
       <p>{this.props.match.params.type}</p> 
       <hr/> 
         {this.state.EdittedAnswer.map(answer => answer.question_type === "motor" ? (
               <div key={answer.id}>
                  <label>
                  <p>{answer.question}</p>

                  {
                      answer.answer == true ? 
                      <p>TRUE</p> 
                      :
                      <p>FALSE</p> 
                    }
                  
                   </label>
               </div>
                ):(null)
               )}
        <hr/>
            
        {this.state.EdittedAnswer.map(answer => answer.question_type === "Talking" ? (
               <div key={answer.id}>
                  <label>
                  <p>{answer.question}</p>
                  {
                      answer.answer == true ? 
                      <p>TRUE</p> 
                      :
                      <p>FALSE</p> 
                    }
                   </label>
               </div>
                ):(null)
               )}


<hr/>
{this.state.EdittedAnswer.map(answer => answer.question_type === "Interacting" ? (
                  <div key={answer.id}>
                     <label>
                     <p>{answer.question}</p>
                     {
                      answer.answer == true ? 
                      <p>TRUE</p> 
                      :
                      <p>FALSE</p> 
                    }
                      </label>
                  </div>
                   ):(null)
                  )}

<hr/>
{this.state.EdittedAnswer.map(answer => answer.question_type === "Interacting" ? (
                  <div key={answer.id}>
                     <label>
                     <p>{answer.question}</p>
                     {
                      answer.answer == true ? 
                      <p>TRUE</p> 
                      :
                      <p>FALSE</p> 
                    }
                      </label>
                  </div>
                   ):(null)
                  )}
                  <Button variant="contained" color="primary">Edit</Button>
                  <br/>
                  <Button color="secondary" variant="contained" onClick={this.handleDelete}>Delete</Button>

     {/* ////////////////////////////////////////////////// */}
 
       {/* <TextField
          id="outlined-multiline-static"
          label="Note"
          multiline
          rows="4"
          margin="normal"
          onChange={(event) => this.handleChange(event, "note")}
          variant="outlined"
        /> 
<br/> 
<Button variant="contained" color="primary" onClick={this.handleSubmit}>
            Add Milestone
            </Button> 
  */}

</div>
    )
}
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
}); 

export default connect(mapReduxStateToProps)(EditAnswer);