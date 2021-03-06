import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom'


class AnswerPage extends Component {
  state = {
    answer: [],
    Edit: false,
  }

  componentDidMount = () => {
    this.props.dispatch({ type: 'FETCH_ANSWER', payload: this.props.match.params.type });
  }


  componentDidUpdate(prevProps) {

    if (this.props.reduxState.answerReducer !== prevProps.reduxState.answerReducer) {
      let array = [];
      this.props.reduxState.answerReducer.map(answer => {
        array.push({ id: answer.id, child_id: answer.child_id, milestone: answer.milestone, question_type: answer.question_type, question: answer.question, answer: answer.answer });
      })
      console.log(array);

      this.setState({
        answer: array,
      })
    }
  }

  handleChange = id => (event) => {
    let newAnswers = this.state.answer.map(question => {
      if (question.question_id == id) {
        return ({ ...question, answer: !question.answer })
      } else {
        return question;
      }
    })
    this.setState({
      answer: newAnswers,
    })
  }

  handleEdit = () => {
    this.setState({
      Edit: !this.state.Edit,
    })
    console.log('hello');


  }
  handleEditAnswer = id => (event) => {
    let updatedAnswers = this.state.answer.map(answer => {
      if (answer.id == id) {
        return ({ ...answer, answer: !answer.answer })
      } else {
        return answer;
      }
    })
    this.setState({
      answer: updatedAnswers,
    })
  }

  handleSave = () => {
    this.props.dispatch({ type: 'EDIT_ANSWER', payload: this.state.answer});
    // this.props.history.push('/about');
  }

  handleDelete = () => {
    this.props.dispatch({ type: 'DELETE_ANSWER', payload: this.state.answer[2].milestone });
    this.props.history.push('/about');
    Swal.fire(
      'DELETE',
      'Form has be deleted',
      'success'
    )
  }



  render() {
    return (
      <div>
        <p>{this.props.match.params.type}</p>
        <hr />
        {this.state.Edit === false ? <>
          {this.state.answer.map(answer => answer.question_type === "motor" ? (
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
          ) : (null)
          )}
          <hr />

          {this.state.answer.map(answer => answer.question_type === "Talking" ? (
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
          ) : (null)
          )}


          <hr />
          {this.state.answer.map(answer => answer.question_type === "Interacting" ? (
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
          ) : (null)
          )}

          <hr />
          {this.state.answer.map(answer => answer.question_type === "Thinking" ? (
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
          ) : (null)
          )}
          <Button variant="contained" color="primary" onClick={this.handleEdit}>Edit</Button>
          <br/>
        </> : <>{this.state.answer.map(answer => answer.question_type === "motor" ? (
          <div key={answer.id}>
            <label>
              <p>{answer.question}</p>
              <Button variant='outlined' onClick={this.handleEditAnswer(answer.id)}>
                    {
                      answer.answer == true ?
                        <>TRUE</>
                        :
                        <>FALSE</>
                    }
                  </Button>
            </label>
          </div>
        ) : (null)
        )}
            <hr />

            {this.state.answer.map(answer => answer.question_type === "Talking" ? (
              <div key={answer.id}>
                <label>
                  <p>{answer.question}</p>
                  <Button variant='outlined' onClick={this.handleEditAnswer(answer.id)}>
                    {
                      answer.answer == true ?
                        <>TRUE</>
                        :
                        <>FALSE</>
                    }
                  </Button>
                </label>
              </div>
            ) : (null)
            )}


            <hr />
            {this.state.answer.map(answer => answer.question_type === "Interacting" ? (
              <div key={answer.id}>
                <label>
                  <p>{answer.question}</p>
                  <Button variant='outlined' onClick={this.handleEditAnswer(answer.id)}>
                    {
                      answer.answer == true ?
                        <>TRUE</>
                        :
                        <>FALSE</>
                    }
                  </Button>
                </label>
              </div>
            ) : (null)
            )}

            <hr />
            {this.state.answer.map(answer => answer.question_type === "Thinking" ? (
              <div key={answer.id}>
                <label>
                  <p>{answer.question}</p>
                  <Button variant='outlined' onClick={this.handleEditAnswer(answer.id)}>
                    {
                      answer.answer == true ?
                        <>TRUE</>
                        :
                        <>FALSE</>
                    }
                  </Button>
                </label>
              </div>
            ) : (null)
            )}
            <Button variant="contained" color="primary" onClick={this.handleSave}>Save</Button>
            <br />
          </>
        }
        <Button color="secondary" variant="contained" onClick={this.handleDelete}>Delete</Button>
      </div>
    )
  }
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default withRouter(connect(mapReduxStateToProps)(AnswerPage));