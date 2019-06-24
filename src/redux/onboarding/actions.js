import { createAction } from 'redux-actions'

const GET_CURRENCY = 'GET_CURRENCY'
const GET_OTHER_INDUSTRY = 'GET_OTHER_INDUSTRY'
const ADD_ONBOARDING_SETUP_BUSINESS = 'ADD_ONBOARDING_SETUP_BUSINESS'

export const types = {
  GET_CURRENCY,
  GET_OTHER_INDUSTRY,
  ADD_ONBOARDING_SETUP_BUSINESS
}

export const getCurrency = createAction(GET_CURRENCY)
export const getOtherIndustry = createAction(GET_OTHER_INDUSTRY)
export const addOnboardingSetupBusiness = createAction(ADD_ONBOARDING_SETUP_BUSINESS)
