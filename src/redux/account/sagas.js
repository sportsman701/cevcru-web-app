import { takeLatest } from 'redux-saga/effects'
import { types } from './actions'
import api from '../api/sagas'


const signIn = api({
  type: types.SIGN_IN,
  method: 'post',
  url: '/account/login'
})

const signUp = api({
  type: types.SIGN_UP,
  method: 'post',
  header: { Emailurl: 'isMobile' },
  url: '/account/register'
})

const withGoogle = api({
  type: types.SIGN_IN_GOOGLE,
  method: 'post',
  path: () => '/account/external'
})

export default function* rootSaga () {
  yield takeLatest(types.SIGN_IN, signIn)
  yield takeLatest(types.SIGN_UP, signUp)
  yield takeLatest(types.WITH_GOOGLE, withGoogle)
}
