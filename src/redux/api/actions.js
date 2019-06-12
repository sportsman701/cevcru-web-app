import { createAction } from 'redux-actions'

const THROW_REQUEST = 'THROW_REQUEST'
const FINISH_REQUEST = 'FINISH_REQUEST'

export const types = {
  THROW_REQUEST,
  FINISH_REQUEST
}

export const throwRequest = createAction(THROW_REQUEST)
export const finishRequest = createAction(FINISH_REQUEST)
