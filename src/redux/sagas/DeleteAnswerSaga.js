import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_QESTION" actions
function* deleteAnswer(action) {
  try {
    console.log('in delete saga',action.payload);
    yield axios.delete('/api/answer', action.payload);
    yield put({ type: 'GET_ANSWER'});
  } catch (error) {
    console.log('answer delete request failed', error);
  }
}

function* DeleteAnswerSaga() {
  yield takeLatest('DELETE_ANSWER', deleteAnswer);
}

export default DeleteAnswerSaga;