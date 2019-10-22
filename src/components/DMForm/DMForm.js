import React, { Component } from 'react';
import { connect } from 'react-redux'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Swal from 'sweetalert2';
import Questioncheckbox from '../CheckboxComponent/Checkbox'




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
    question: !this.props.reduxState.questionReducer.id,
  }

 
  componentDidMount = () =>{
    this.props.dispatch({ type: 'FETCH_QUESTION', payload: this.props.match.params.type});
  }

  handleChange = (event) =>{
    console.log(event);
    
    this.setState({
      question:!this.state.question,
    })

  }

  handleSubmit = () =>{
    console.log('hello from handleSubmit', this.state.question);
    this.props.dispatch({type:'ADD_ANSWER', payload:this.state.question});

    Swal.fire(
      'Good job!',
      'New milestone has been added!',
      'success'
    )
    
  }

  render(){
    return(
      <div>


       <p>{this.props.match.params.type}</p>  

        <ExpansionPanel>
         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
           <Typography >Motor</Typography>
         </ExpansionPanelSummary>
         <ExpansionPanelDetails>
         {this.props.reduxState.questionReducer.map(question => question.type === "motor" ? (
               <div key={question.id}>
                <Questioncheckbox question={question.question}/>
               </div>
         
                ):(null)
               )}

         </ExpansionPanelDetails>
     </ExpansionPanel>   
     
    {/* ////////////////////////////////////////////////// */}
 
        <ExpansionPanel>
         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
           <Typography >Communication and Language</Typography>
         </ExpansionPanelSummary>
         <ExpansionPanelDetails>
         {this.props.reduxState.questionReducer.map(question => question.type === "Talking" ? (
               <div key={question.id}>
                <Questioncheckbox question={question.question}/>
               </div>
                ):(null)
               )}
         </ExpansionPanelDetails>
     </ExpansionPanel>      


    {/* ////////////////////////////////////////////////// */}

 
     <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography >Social and Emotional</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        {this.props.reduxState.questionReducer.map(question => question.type === "Interacting" ? (
              <div key={question.id}>
              <Questioncheckbox question={question.question}/>
              </div>
               ):(null)
              )}
        </ExpansionPanelDetails>
      </ExpansionPanel>  

     {/* ////////////////////////////////////////////////// */}

 
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography >Cognitive</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        {this.props.reduxState.questionReducer.map(question => question.type === "Thinking" ? (
              <div key={question.id}>
              <Questioncheckbox question={question.question}/>
              </div>
               ):(null)
              )}
        </ExpansionPanelDetails>
      </ExpansionPanel> 

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