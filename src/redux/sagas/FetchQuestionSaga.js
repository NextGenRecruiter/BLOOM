import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_QESTION" actions
function* fetchQuestion(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get(`/api/question/${action.payload}`, config);

    // now that the session has given us a child object
    yield put({ type: 'GET_QUESTION', payload: response.data });
  } catch (error) {
    console.log('Question get request failed', error);
  }
}

function* FetchQuestionSaga() {
  yield takeLatest('FETCH_QUESTION', fetchQuestion);
}

export default FetchQuestionSaga;