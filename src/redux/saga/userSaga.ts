import { call, CallEffect, put, PutEffect, takeEvery} from 'redux-saga/effects'
import * as workspaceActionCreators from '../actions/users';
import * as type from '../types';

const apiUrl = `https://jsonplaceholder.typicode.com/users`;

function getApi() {
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  }).then(response => response.json())
    .catch((error) => {throw error})
}

export function* fetchUsers(): Generator<
| CallEffect
| PutEffect<workspaceActionCreators.GetWorkspacesSuccess>
| PutEffect<workspaceActionCreators.GetWorkspacesFailure>,
void,
unknown> {
   try {
   const response = yield call(getApi);
   yield put(workspaceActionCreators.GetWorkspacesSuccess(response));
 } catch (e) {
   yield put(workspaceActionCreators.GetWorkspacesFailure(e as Error));
 }
}

export function* userSaga() {
   yield takeEvery(type.GET_WORKSPACES, fetchUsers);
}

 ;
