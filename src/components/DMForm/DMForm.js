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




const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});



class DMForm extends Component{


 
  componentDidMount = () =>{
    this.props.dispatch({ type: 'FETCH_QUESTION', payload: this.props.match.params.type});


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
                <ListItem key={question}>
                <ListItemText primary={question.question + 1 }/>
            <Checkbox/>
              	</ListItem>
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
                <ListItem key={question}>
                <ListItemText primary={question.question + 1 }/>
            <Checkbox/>
              	</ListItem>
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
                <ListItem key={question}>
                <ListItemText primary={question.question + 1 }/>
            <Checkbox/>
              	</ListItem>
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
                <ListItem key={question}>
                <ListItemText primary={question.question + 1 }/>
            <Checkbox/>
              	</ListItem>
              </div>
               ):(null)
              )}
        </ExpansionPanelDetails>
      </ExpansionPanel>

     {/* ////////////////////////////////////////////////// */}

     <TextField
          id="outlined-multiline-static"
          label="Note"
          multiline
          rows="4"
          margin="normal"
          variant="outlined"
        />
<br/>
<Button variant="contained" color="primary">
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