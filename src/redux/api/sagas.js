import { put, call } from 'redux-saga/effects'
import axios from 'axios'
import { requestPending, requestSuccess, requestFail} from './request'


const defaultHeaders = () => {
  const token = localStorage.getItem('vencru')

  axios.defaults.baseURL = process.env.REACT_APP_SERVER

  const headers = {
    'Accept':       'application/json',
    'Content-Type': 'application/json'
  }

  if (token) {
    headers['Authorization'] = token
  }

  return headers
}

export default ({
  type,
  method,
  url,
  header,
  success,
  fail,
  payloadSuccess,
  payloadFail
}) => function* ({ payload }) {
  const {
    body,
    params,
    onSuccess,
    onFail
  } = payload;

  try {
    yield put({
      type: requestPending(type)
    });
    
    const res = yield call(axios.request, {
      url:      typeof(url) === 'function' ? url(payload) : url,
      method:   method || 'get',
      headers:  Object.assign({}, defaultHeaders(), header),
      data:     body,
      params
    })

    const { status, data } = res

    yield put({
      type: requestSuccess(type),
      payload: payloadSuccess ? payloadSuccess(status, data) : data
    })

    success && success(status, data)
    onSuccess && onSuccess(status, data)

  } catch (err) {

    const { response, request } = err

    if (response) {

      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx

      const { status, data } = response

      fail && fail(status,data)
      onFail && onFail(status, data)

      yield put({
        type: requestFail(type),
        payload: {
          errCode: status,
          data: payloadFail ? payloadFail(status, data) : data
        }
      })

    } else if (request) {

      // The request was made but no response was received

      yield put({
        type: requestFail(type),
        payload: { errCode: 'no response'}
      })

    } else {
      
      // Something happened in setting up the request that triggered an Error

    }
  }
}
