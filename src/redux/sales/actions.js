import { createAction } from 'redux-actions'

const GET_INVOICE     = 'GET_INVOICE'
const GET_ALL_PAYMENT = 'GET_ALL_PAYMENT'

export const types = {
  GET_INVOICE,
  GET_ALL_PAYMENT
}

export const getInvoice     = createAction(GET_INVOICE)
export const getAllPayment  = createAction(GET_ALL_PAYMENT)
