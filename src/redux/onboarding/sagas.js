import { takeLatest } from 'redux-saga/effects'
import { types } from './actions'
import api from '../api/sagas'


const getCurrency = api({
  type: types.GET_CURRENCY,
  url: '/onboarding/getCurrency'
})

export default function* rootSaga () {
  yield takeLatest(types.GET_CURRENCY, getCurrency)
}
