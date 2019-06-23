import { createAction } from 'redux-actions'

const GET_CURRENCY = 'GET_CURRENCY'

export const types = {
  GET_CURRENCY
}

export const getCurrency = createAction(GET_CURRENCY)
