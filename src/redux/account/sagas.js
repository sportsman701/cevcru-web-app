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

const validatePasswordResetToken = api({
  type: types.VALIDATE_PASSWORD_RESET_TOKEN,
  method: 'post',
  header: { emailUrl: 'isMobile' },
  url: '/account/validatePasswordResetToken'
})

const resetPassword = api({
  type: types.RESET_PASSWORD,
  method: 'post',
  header: { emailUrl: 'isMobile' },
  url: '/account/resetPassword'
})

const confirmEmail = api({
  type: types.CONFIRM_EMAIL,
  method: 'post',
  header: { emailUrl: 'isMobile' },
  url: '/account/confirmEmail',
  payloadSuccess: ({ isconfirmed }) => ({ emailconfirmed: isconfirmed })
})

const resendActivationEmail = api({
  type: types.RESEND_ACTIVATION_EMAIL,
  method: 'post',
  header: { emailUrl: 'isMobile' },
  url: '/account/resendActivationEmail'
})

export default function* rootSaga () {
  yield takeLatest(types.SIGN_IN, signIn)
  yield takeLatest(types.SIGN_UP, signUp)
  yield takeLatest(types.WITH_GOOGLE, withGoogle)

  yield takeLatest(types.INITIATE_PASSWORD_CHANGE, initiatePasswordChange)
  yield takeLatest(types.VALIDATE_PASSWORD_RESET_TOKEN, validatePasswordResetToken)
  yield takeLatest(types.RESET_PASSWORD, resetPassword)

  yield takeLatest(types.CONFIRM_EMAIL, confirmEmail)
  yield takeLatest(types.RESEND_ACTIVATION_EMAIL, resendActivationEmail)
}
