import AuthConstants from '../types/AuthConstants'

let initialState = {
  user: null,
  auth: false,
  loginPending: true,
  error: null,
  loadingResult: false,
  token: null,
}

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthConstants.SIGN_UP_REQUEST:
      return {
        ...state,
        loginPending: true,
        auth: false,
        loadingResult: true,
        error: null,
      }
    case AuthConstants.SIGN_UP_SUCCESS:
      return {
        ...state,
        auth: false,
        loginPending: true,
        loadingResult: false,
        error: null,
      }
    case AuthConstants.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.error,
        auth: false,
        loginPending: true,
        loadingResult: false,
      }
    case AuthConstants.SIGN_IN_REQUEST:
      return {
        ...state,
        loginPending: true,
        auth: false,
        loadingResult: true,
        error: null,
      }
    case AuthConstants.SIGN_IN_SUCCESS:
      return {
        ...state,
        auth: true,
        user: action.payload.user,
        loginPending: false,
        loadingResult: false,
        token: action.payload.token,
        error: null,
      }
    case AuthConstants.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.error,
        auth: false,
        loginPending: true,
        loadingResult: false,
      }
    case AuthConstants.SIGN_OUT_REQUEST:
      return {
        ...state,
        loginPending: true,
        loadingResult: true,
        error: null,
      }
    case AuthConstants.SIGN_OUT_SUCCESS:
      return {
        ...state,
        auth: false,
        user: null,
        token: null,
        loginPending: true,
        loadingResult: false,
      }
    case AuthConstants.SIGN_OUT_FAILURE:
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
