import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_CHILD" actions
function* fetchChild() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/child', config);

    // now that the session has given us a child object
    yield put({ type: 'GET_CHILD', payload: response.data });
  } catch (error) {
    console.log('Child get request failed', error);
  }
}

function* FetchChildSaga() {
  yield takeLatest('FETCH_CHILD', fetchChild);
}

export default FetchChildSaga;