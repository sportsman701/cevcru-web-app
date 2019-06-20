import { createAction } from 'redux-actions'

const SIGN_IN = 'SIGN_IN'
const SIGN_UP = 'SIGN_UP'
const WITH_GOOGLE = 'WITH_GOOGLE'
const INITIATE_PASSWORD_CHANGE = 'INITIATE_PASSWORD_CHANGE'

export const types = {
  SIGN_IN,
  SIGN_UP,
  WITH_GOOGLE,
  INITIATE_PASSWORD_CHANGE
}

export const signIn = createAction(SIGN_IN)
export const signUp = createAction(SIGN_UP)
export const withGoogle = createAction(WITH_GOOGLE)
export const initiatePasswordChange = createAction(INITIATE_PASSWORD_CHANGE)
