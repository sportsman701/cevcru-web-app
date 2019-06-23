import { createAction } from 'redux-actions';

const RESTORE_SESSION = 'RESTORE_SESSION'

export const types = {
  RESTORE_SESSION
}

export const saveSession = (name, state) => {
  localStorage.setItem(name, JSON.stringify(state));
  return state;
}

export const restoreSession = createAction(RESTORE_SESSION)
