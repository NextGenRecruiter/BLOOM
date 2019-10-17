import {takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* newChild(action) {
    console.log(action);
    
  try {
    // passes child first name, last name, age, and relationship from the payload to the server
    yield axios.post('/api/child', action.payload);
    yield console.log(action.payload);
  } catch (error) {
      console.log('Error with adding child saga:', error);
  }
}

function* newChildSaga() {
  yield takeLatest('ADD_CHILD', newChild);
}

export default newChildSaga;
