import { createAction } from 'redux-actions'

const SIGN_IN = 'SIGN_IN'
const SIGN_UP = 'SIGN_UP'
const WITH_GOOGLE = 'WITH_GOOGLE'

const INITIATE_PASSWORD_CHANGE = 'INITIATE_PASSWORD_CHANGE'
const VALIDATE_PASSWORD_RESET_TOKEN = 'VALIDATE_PASSWORD_RESET_TOKEN'
const RESET_PASSWORD = 'RESET_PASSWORD'

export const types = {
  SIGN_IN,
  SIGN_UP,
  WITH_GOOGLE,
  INITIATE_PASSWORD_CHANGE,
  VALIDATE_PASSWORD_RESET_TOKEN,
  RESET_PASSWORD
}

export const signIn = createAction(SIGN_IN)
export const signUp = createAction(SIGN_UP)
export const withGoogle = createAction(WITH_GOOGLE)

export const initiatePasswordChange = createAction(INITIATE_PASSWORD_CHANGE)
export const validatePasswordResetToken = createAction(VALIDATE_PASSWORD_RESET_TOKEN)
export const resetPassword = createAction(RESET_PASSWORD)
