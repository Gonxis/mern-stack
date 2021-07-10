import AuthConstants from '../types/AuthConstants'

let initialState = {
  user: null,
  auth: false,
  loginPending: true,
  error: null,
  loadingResult: false,
}

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthConstants.LOGIN_REQUEST:
      return {
        ...state,
        loginPending: true,
        auth: false,
        loadingResult: true,
        error: null,
      }
    case AuthConstants.LOGIN_SUCCESS:
      return {
        ...state,
        auth: true,
        user: action.data,
        loginPending: false,
        loadingResult: false,
        error: null,
      }
    case AuthConstants.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
        auth: false,
        loginPending: false,
        loadingResult: false,
      }
    case AuthConstants.LOGOUT_REQUEST:
      return {
        ...state,
        loginPending: true,
        loadingResult: true,
        error: null,
      }
    case AuthConstants.LOGOUT_SUCCESS:
      return {
        ...state,
        auth: false,
        user: null,
        loginPending: false,
        loadingResult: false,
      }
    case AuthConstants.LOGOUT_FAILURE:
      return {
        ...state,
        error: action.error,
        loginPending: false,
        loadingResult: false,
      }
    default:
      return state
  }
}

export default AuthReducer
