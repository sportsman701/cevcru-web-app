import { takeLatest, call, put } from 'redux-saga/effects'
import { types, userInfo as actionUserInfo } from './actions'
import api from '../api/sagas'


const signIn = api({
  type: types.SIGN_IN,
  method: 'post',
  url: '/account/login',
  success: function* ({ access_token, userId }) {
    yield call([localStorage, 'setItem'], 'auth', access_token)
    yield put(actionUserInfo({
      params: { userId }
    }))
  }
})

const signUp = api({
  type: types.SIGN_UP,
  method: 'post',
  header: { emailUrl: 'isMobile' },
  url: '/account/register',
  success: function* ({ access_token, userId }) {
    yield call([localStorage, 'setItem'], 'auth', access_token)
    yield put(actionUserInfo({ 
      params: { userId }
    }))
  }
})

const withGoogle = api({
  type: types.SIGN_IN_GOOGLE,
  method: 'post',
  url: '/account/external',
  success: function* ({ access_token, userId }) {
    yield call([localStorage, 'setItem'], 'auth', access_token)
    yield put(actionUserInfo({ 
      params: { userId }
    }))
  }
})

const userInfo = api({
  type: types.USER_INFO,
  url: '/account/UserInfo'
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
  yield takeLatest(types.USER_INFO, userInfo)
}
