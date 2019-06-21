import { handleActions } from 'redux-actions'
import { requestSuccess } from '../api/request'
import { types as session } from '../session' 
import { types  } from './actions'

export default handleActions({
  [session.RESTORE_SESSION]:
    (state, { payload }) => payload.account,

  [requestSuccess(types.USER_INFO)]:
    (state, { payload }) => {
      localStorage.setItem('account', JSON.stringify(payload))
      return payload
    },

  [requestSuccess(types.CONFIRM_EMAIL)]:
    (state, { payload }) => {
      const newState = {...state, ...payload}
      localStorage.setItem('account', JSON.stringify(newState))
      return newState
    }
}, {})
