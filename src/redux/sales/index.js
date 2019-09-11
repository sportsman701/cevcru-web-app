import { handleActions } from 'redux-actions'
import { requestSuccess } from '../api/request'
import { saveSession, types as session } from '../session' 
import { types } from './actions'

export default handleActions({
  // [session.RESTORE_SESSION]:
  //   (state, { payload }) => payload.account,

  // [requestSuccess(types.GET_INVOICE)]:
  //   (state, { payload }) => ({ ...state, invoice: payload })

}, {})
