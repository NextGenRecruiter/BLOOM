import {takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* postAnswer(action) {
    console.log(action);
    
  try {
    // passes child first name, last name, age, and relationship from the payload to the server
    yield axios.post('/api/answer', action.payload);
    yield console.log(action.payload);
  } catch (error) {
      console.log('Error with post answer saga:', error);
  }
}

function* postAnswerSaga() {
  yield takeLatest('ADD_ANSWER', postAnswer);
}

export default postAnswerSaga;