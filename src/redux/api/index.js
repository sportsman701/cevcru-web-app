import { handleActions } from 'redux-actions'
import {
  requestPending,
  requestSuccess,
  requestFail
} from './request'

import { types as account } from '../account/actions'

const filter = (state, request) => state.filter(type => type !== request)

export default handleActions({
  [requestPending(account.SIGN_IN)]:
    (state, { payload }) => filter(state, account.SIGN_IN).concat(account.SIGN_IN),

  [requestSuccess(account.SIGN_IN)]:
    (state, { payload }) => filter(state, account.SIGN_IN),

  [requestFail(account.SIGN_IN)]:
    (state, { payload }) => filter(state, account.SIGN_IN)
}, [])
