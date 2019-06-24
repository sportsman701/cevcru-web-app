import { handleActions } from 'redux-actions'
import { requestSuccess } from '../api/request'
import { saveSession, types as session } from '../session' 
import { types  } from './actions'
import { types as onboardingTypes } from '../onboarding/actions'

export default handleActions({
  [session.RESTORE_SESSION]:
    (state, { payload }) => payload.account,

  [requestSuccess(types.USER_INFO)]:
    (state, { payload }) => saveSession('account', payload),

  [requestSuccess(types.CONFIRM_EMAIL)]:
    (state, { payload }) => saveSession('account', {...state, ...payload}),

  [requestSuccess(onboardingTypes.ADD_ONBOARDING_SETUP_BUSINESS)]:
    (state, { payload }) => saveSession('onboarding', {
      ...state, currentbusinessid: payload.id, business: [payload]
    })
}, {})
