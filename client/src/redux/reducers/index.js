import { combineReducers } from 'redux'

import AuthReducer from './AuthReducer'
import PostReducer from './PostReducer'

const appReducer = combineReducers({
  auth: AuthReducer,
  posts: PostReducer,
})

const reducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    state = undefined
  }

  return appReducer(state, action)
}

export default reducer
