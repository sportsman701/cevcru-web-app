import { all, call } from 'redux-saga/effects';
import account from './account/sagas';
import onboarding from './onboarding/sagas';
import sales from './sales/sagas';


export default function* rootSaga() {
  yield all([
    call(account),
    call(onboarding),
    call(sales),
  ])
}
