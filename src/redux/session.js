import { createAction } from 'redux-actions';

const RESTORE_SESSION = 'RESTORE_SESSION'

export const types = {
  RESTORE_SESSION
}

export const restoreSession = createAction(RESTORE_SESSION)
