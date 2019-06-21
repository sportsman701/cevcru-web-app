import { handleActions } from 'redux-actions'
import { requestSuccess } from '../api/request'

import { types  } from './actions'

export default handleActions({
  [requestSuccess(types.SIGN_IN)]:
    (state, { payload }) => payload,

  [requestSuccess(types.CONFIRM_EMAIL)]:
    (state, { payload }) => ({...state, ...payload})
}, {})
