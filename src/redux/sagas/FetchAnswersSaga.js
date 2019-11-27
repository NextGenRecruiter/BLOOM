import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_QESTION" actions
function* fetchAnswers(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    console.log(action.payload);
    
    const response = yield axios.get(`/api/answer/${action.payload}`, config);

    // now that the session has given us a child object
    yield put({ type: 'GET_ANSWER', payload: response.data });
    console.log(response.data);
  } catch (error) {
    console.log('answer get request failed', error);
  }
}//end fetchAnswers function
function* editAnswer(action) {
  try {
    yield console.log(action.payload);
      yield axios.put(`/api/answer/edit`, action.payload );
      // yield fetchAnswers();
    } catch (error) {
      console.log('error in update answer saga', error);
  }
} // end editAnswer function
function* FetchAnswerSaga() {
  yield takeLatest('FETCH_ANSWER', fetchAnswers);
  yield takeLatest('EDIT_ANSWER', editAnswer);
}

export default FetchAnswerSaga;