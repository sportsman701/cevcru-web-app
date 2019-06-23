import { handleActions } from 'redux-actions'
import { requestSuccess } from '../api/request'
import { saveSession, types as session } from '../session' 
import { types  } from './actions'

export default handleActions({
  [session.RESTORE_SESSION]:
    (state, { payload }) => payload.onboarding,

  [requestSuccess(types.GET_CURRENCY)]:
    (state, { payload }) => saveSession('onboarding', {
      ...state,
      currency: payload
    })
}, {})
