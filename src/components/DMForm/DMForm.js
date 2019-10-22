import React, { Component } from 'react';
import { connect } from 'react-redux'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';




const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

class DMForm extends Component{
  state={
    child_id:this.props.reduxState.newchildReducer.id,
    answers: []
}
 
  componentDidMount = () =>{
    this.props.dispatch({ type: 'FETCH_QUESTION', payload: this.props.match.params.type});
    
  }

componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.reduxState.questionReducer !== prevProps.reduxState.questionReducer) {
    let array = [];
    this.props.reduxState.questionReducer.map(question =>{
     array.push({question_id:question.id, answer:false});
    })
    this.setState({
      answers:array,
    })
  }
}


  handleChange = (event) =>{
    this.setState({
        answer: event.target.checked,
    })
}

  handleSubmit = () =>{
    console.log('hello from handleSubmit', this.state.question);
    this.props.dispatch({type:'ADD_ANSWER', payload:this.state.state});

    Swal.fire(
      'Good job!',
      'New milestone has been added!',
      'success'
    )
    
  }



  render(){
    console.log(this.state);
    
    return(
      <div>

      <Checkbox question={this.state.answer}/>
       <p>{this.props.match.params.type}</p>  

        <ExpansionPanel>
         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
           <Typography >Motor</Typography>
         </ExpansionPanelSummary>
         <ExpansionPanelDetails>
         {this.props.reduxState.questionReducer.map(question => question.type === "motor" ? (
               <div key={question.id}>
                  <label>
                  <p>{question.question}</p>
                <Checkbox
                  // checked={this.state.answer}
                  onChange={this.handleChange}
                />
                  </label>
               </div>
                ):(null)
               )}

         </ExpansionPanelDetails>
     </ExpansionPanel>   
     
    {/* ////////////////////////////////////////////////// */}
 
        {/* <ExpansionPanel>
         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
           <Typography >Communication and Language</Typography>
         </ExpansionPanelSummary>
         <ExpansionPanelDetails>
         {this.props.reduxState.questionReducer.map(question => question.type === "Talking" ? (
               <div key={question.id}>
                <input onChange={this.handleChange} id={this.id} type="checkbox" checked={this.state.answer} />
                <label htmlFor={this.id}>{question.question}</label>
               </div>
                ):(null)
               )}
         </ExpansionPanelDetails>
     </ExpansionPanel>       */}


    {/* ////////////////////////////////////////////////// */}

 
     {/* <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography >Social and Emotional</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        {this.props.reduxState.questionReducer.map(question => question.type === "Interacting" ? (
              <div key={question.id}>
               <input onChange={this.handleChange} id={this.id} type="checkbox" checked={this.state.answer} />
                <label htmlFor={this.id}>{question.question}</label>
              </div>
               ):(null)
              )}
        </ExpansionPanelDetails>
      </ExpansionPanel>   */}

     {/* ////////////////////////////////////////////////// */}

 
      {/* <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography >Cognitive</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        {this.props.reduxState.questionReducer.map(question => question.type === "Thinking" ? (
              <div key={question.id}>
                 <input onChange={this.handleChange} id={this.id} type="checkbox" checked={this.state.answer} />
                <label htmlFor={this.id}>{question.question}</label>
              </div>
               ):(null)
              )}
        </ExpansionPanelDetails>
      </ExpansionPanel>  */}

     {/* ////////////////////////////////////////////////// */}
{/*  
       <TextField
          id="outlined-multiline-static"
          label="Note"
          multiline
          rows="4"
          margin="normal"
          onChange={(event) => this.handleChange(event, "note")}
          variant="outlined"
        /> */}
<br/> 
<Button variant="contained" color="primary" onClick={this.handleSubmit}>
            Add Milestone
            </Button> 
 

</div>
    )
}
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
}); 

export default withStyles(styles)(connect(mapReduxStateToProps)(DMForm));