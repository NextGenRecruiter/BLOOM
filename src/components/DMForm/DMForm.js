import React, { Component } from 'react';
import { connect } from 'react-redux'
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});



class DMForm extends Component{

  state={
    open:false,
  }

  componentDidMount = () =>{
    this.props.dispatch({ type: 'FETCH_QUESTION', payload: this.props.match.params.type});

} 

handleClick = () => {
  this.setState(state => ({ open: !state.open }));
};

  render(){
    const { classes } = this.props;

    return(
      <div>
      <p>{this.props.match.params.type}</p>
      {this.props.reduxState.questionReducer.map(question=>
      <div key={question.id}>
        <ListItem button onClick={this.handleClick}>
        <ListItemText inset primary="Motor" />
           {this.state.open ? <ExpandLess /> : <ExpandMore />}
         </ListItem>
         <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary={question.question} />
            </ListItem>
          </List>
        </Collapse>
         
      </div>)}
</div>
    )
}
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default withStyles(styles)(connect(mapReduxStateToProps)(DMForm));