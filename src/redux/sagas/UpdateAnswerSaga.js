import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_QESTION" actions
function* updateAnswer(action) {
  try {
    console.log('in update saga',action.payload);
    yield axios.put(`/api/answer/${action.payload}`);
  } catch (error) {
    console.log('answer update request failed', error);
  }
}

function* UpdateAnswerSaga() {
  yield takeLatest('UPDATE_ANSWER', updateAnswer);
}

export default UpdateAnswerSaga;