import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_QESTION" actions
function* fetchAnswers(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/answer', config);

    // now that the session has given us a child object
    yield put({ type: 'GET_ANSWER', payload: response.data });
  } catch (error) {
    console.log('answer get request failed', error);
  }
}

function* FetchAnswerSaga() {
  yield takeLatest('FETCH_ANSWER', fetchAnswers);
}

export default FetchAnswerSaga;