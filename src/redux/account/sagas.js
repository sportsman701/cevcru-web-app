import { takeLatest } from 'redux-saga/effects'
import { types } from './actions'
import api from '../api/sagas'


const signIn = api({
  type: types.SIGN_IN,
  method: 'post',
  url: '/auth/account/login'
})

const signInGoogle = api({
  type: types.SIGN_IN_GOOGLE,
  method: 'post',
  path: () => '/auth/account/external'
})

export default function* rootSaga () {
  yield takeLatest(types.SIGN_IN, signIn)
  yield takeLatest(types.SIGN_IN_GOOGLE, signInGoogle)
}
