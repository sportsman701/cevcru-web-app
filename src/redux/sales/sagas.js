import { takeLatest, call, put } from 'redux-saga/effects'
import { types } from './actions'
import api from '../api/sagas'


const getInvoice = api({
  type: types.GET_INVOICE,
  url: '/invoice/GetInvoice'
})

const getAllPayment = api({
  type: types.GET_ALL_PAYMENT,
  url: '/invoice/GetAllPayment'
})


export default function* rootSaga () {
  yield takeLatest(types.GET_INVOICE, getInvoice)
  yield takeLatest(types.GET_ALL_PAYMENT, getAllPayment)
}
