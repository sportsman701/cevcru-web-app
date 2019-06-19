import { createAction } from 'redux-actions'

const SIGN_IN = 'SIGN_IN'
const SIGN_IN_GOOGLE = 'SIGNIN_GOOGLE'

export const types = {
  SIGN_IN,
  SIGN_IN_GOOGLE
}

export const signIn = createAction(SIGN_IN)
export const signInGoogle = createAction(SIGN_IN_GOOGLE)
