// import React, { Component } from 'react';
// import { connect } from 'react-redux'

// class EditAnswer extends Component{
//   state={ 
     
// }
 
//   componentDidMount = () =>{
//     this.props.dispatch({ type: 'FETCH_ANSWER', payload: this.props.match.params.type});
//   }


// componentDidUpdate(prevProps) {

//   if (this.props.reduxState.questionReducer !== prevProps.reduxState.questionReducer) {
//     let array = [];
//     this.props.reduxState.questionReducer.map(question =>{
//      array.push({question_id:question.id, milestone:question.milestone, type:question.type, question:question.question, answer:false});
//     })
//     this.setState({
//       answers:array,
//     })
//   }else if(this.props.reduxState.newchildReducer !== prevProps.reduxState.newchildReducer){
//       let idArray = [];
//       this.props.reduxState.newchildReducer.map(id =>{
//         idArray.push({id:id.id});
//        })
//        this.setState({
//         child_id:idArray,
//        })
//     }
// }


//   handleChange = id => (event) => {
//     let newAnswers = this.state.answers.map(question =>{
//       if(question.question_id == id){
//         return ({...question, answer:!question.answer})
//       }else {
//         return question;
//       }
//     })
//     this.setState({
//         answers: newAnswers,
//     })
// }

//   handleSubmit = () =>{
//     this.props.dispatch({type:'ADD_ANSWER', payload:this.state});
//     Swal.fire(
//       'Good job!',
//       'New milestone has been added!',
//       'success'
//     )
    
//   }



//   render(){    
//     return(
//       <div>

//        <p>{this.props.match.params.type}</p>  

//         <ExpansionPanel>
//          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//            <Typography >Motor</Typography>
//          </ExpansionPanelSummary>
//          <ExpansionPanelDetails>
//          {this.state.answers.map(question => question.type === "motor" ? (
//                <div key={question.question_id}>
//                   <label>
//                   <p>{question.question}</p>
//                 <Checkbox
//                   value={question.answer}
//                   onChange={this.handleChange(question.question_id)}
//                 />
//                   </label>
//                </div>
//                 ):(null)
//                )}

//          </ExpansionPanelDetails>
//      </ExpansionPanel>   
     
//     {/* ////////////////////////////////////////////////// */}
 
//          <ExpansionPanel>
//          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//            <Typography >Communication and Language</Typography>
//          </ExpansionPanelSummary>
//          <ExpansionPanelDetails>
//          {this.state.answers.map(question => question.type === "Talking" ? (
//               <div key={question.question_id}>
//                 <label>
//                 <p>{question.question}</p>
//                   <Checkbox
//                   value={question.answer}
//                   onChange={this.handleChange(question.question_id)}
//                     />
//                   </label>
//                   </div>
//                 ):(null)
//                )}
//          </ExpansionPanelDetails>
//      </ExpansionPanel>       


//     {/* ////////////////////////////////////////////////// */}

 
//       <ExpansionPanel>
//         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography >Social and Emotional</Typography>
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//         {this.state.answers.map(question => question.type === "Interacting" ? (
//               <div key={question.question_id}>
//                 <label>
//                 <p>{question.question}</p>
//                 <Checkbox
//                 value={question.answer}
//                 onChange={this.handleChange(question.question_id)}
//                   />
//                 </label>
//                   </div>
//                ):(null)
//               )}
//         </ExpansionPanelDetails>
//       </ExpansionPanel>   

//      {/* ////////////////////////////////////////////////// */}

 
//        <ExpansionPanel>
//         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography >Cognitive</Typography>
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//         {this.state.answers.map(question => question.type === "Thinking" ? (
//               <div key={question.question_id}>
//                 <label>
//                 <p>{question.question}</p>
//                   <Checkbox
//                   value={question.answer}
//                   onChange={this.handleChange(question.question_id)}
//                     />
//                   </label>
//                     </div>    
//                ):(null)
//               )}
//         </ExpansionPanelDetails>
//       </ExpansionPanel>  

//      {/* ////////////////////////////////////////////////// */}
// {/*  
//        <TextField
//           id="outlined-multiline-static"
//           label="Note"
//           multiline
//           rows="4"
//           margin="normal"
//           onChange={(event) => this.handleChange(event, "note")}
//           variant="outlined"
//         /> */}
// <br/> 
// <Button variant="contained" color="primary" onClick={this.handleSubmit}>
//             Add Milestone
//             </Button> 
 

// </div>
//     )
// }
// }
// const mapReduxStateToProps = (reduxState) => ({
//   reduxState
// }); 

// export default withStyles(styles)(connect(mapReduxStateToProps)(EditAnswer));