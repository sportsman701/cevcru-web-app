import { takeLatest } from 'redux-saga/effects'
import { types } from './actions'
import api from '../api/sagas'


const signIn = api({
  type: types.SIGN_IN,
  method: 'post',
  url: '/account/login',
  success: ({ access_token }) => localStorage.setItem('auth', access_token)
})

const signUp = api({
  type: types.SIGN_UP,
  method: 'post',
  header: { emailUrl: 'isMobile' },
  url: '/account/register'
})

const withGoogle = api({
  type: types.SIGN_IN_GOOGLE,
  method: 'post',
  url: '/account/external'
})

const initiatePasswordChange = api({
  type: types.INITIATE_PASSWORD_CHANGE,
  method: 'post',
  header: { emailUrl: 'isMobile' },
  url: '/account/initiatePasswordChange'
})

export default function* rootSaga () {
  yield takeLatest(types.SIGN_IN, signIn)
  yield takeLatest(types.SIGN_UP, signUp)
  yield takeLatest(types.WITH_GOOGLE, withGoogle)
  yield takeLatest(types.INITIATE_PASSWORD_CHANGE, initiatePasswordChange)
}
