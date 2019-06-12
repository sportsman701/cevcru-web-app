import { takeLatest, put, call, select } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from './actions'
import { tokenSelector } from '../auth/selectors'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
}

const request = (method, url, params, token) => {
  return axios.request({
    method: method || 'get',
    url: process.env.REACT_APP_SERVER + url,
    headers: { ...headers, token },
    params
  })
}

const throwRequest = function* ({ payload }) {
  const { method, url, params, onSuccess, onFailed } = payload
  const token = yield select(tokenSelector)

  try {
    const response = yield call(request, method, url, params, token)
    const { status, data } = response
    if (onSuccess) {
      yield call(onSuccess, data, status)
    }
  } catch (error) {
    if (onFailed) {
      const { response } = error
      if (response) {
        const data = response.data && response.data
        const status = response.status && response.status
        yield call(onFailed, data, status)
      }
    }
  }

  yield put(actions.finishRequest())
}

export default function* rootSaga() {
  yield takeLatest(actions.types.THROW_REQUEST, throwRequest)
}
