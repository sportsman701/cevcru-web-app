import { all, call } from 'redux-saga/effects';
import account from './account/sagas';


export default function* rootSaga() {
  yield all([
    call(account)
  ])
}
