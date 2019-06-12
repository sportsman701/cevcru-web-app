import { handleActions } from 'redux-actions'
import { types } from './actions'


export default handleActions({
  [types.THROW_REQUEST]:
    state => true,

  [types.FINISH_REQUEST]:
    state => false
}, false)
