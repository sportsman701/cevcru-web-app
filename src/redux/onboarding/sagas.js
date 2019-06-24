import { takeLatest } from 'redux-saga/effects'
import { types } from './actions'
import api from '../api/sagas'


const getCurrency = api({
  type: types.GET_CURRENCY,
  url: '/onboarding/getCurrency'
})

const getOtherIndustry = api({
  type: types.GET_OTHER_INDUSTRY,
  url: '/onboarding/getOtherIndustry'
})

const addOnboardingSetupBusiness = api({
  method: 'post',
  type: types.ADD_ONBOARDING_SETUP_BUSINESS,
  url: '/onboarding/addOnboarding'
})

export default function* rootSaga () {
  yield takeLatest(types.GET_CURRENCY, getCurrency)
  yield takeLatest(types.GET_OTHER_INDUSTRY, getOtherIndustry)
  yield takeLatest(types.ADD_ONBOARDING_SETUP_BUSINESS, addOnboardingSetupBusiness)
}
