import callApi from '../../util/apiCaller'
import AuthConstants from '../types/AuthConstants'

const request = ({ type }) => {
  return {
    type,
  }
}

const success = ({ type, payload }) => {
  return {
    type,
    payload,
  }
}

const failure = ({ type, error }) => {
  return {
    type,
    error,
  }
}

const getUser =
  ({ type, user }) =>
  dispatch => {
    dispatch(success({ type, payload: user }))
  }

const signIn =
  ({ email, password }) =>
  dispatch => {
    dispatch(request({ type: AuthConstants.SIGN_IN_REQUEST }))
    return callApi('signin', 'post', { email, password }).then(
      data => {
        dispatch(
          success({ type: AuthConstants.SIGN_IN_SUCCESS, payload: data })
        )
        dispatch(getUser({ type: AuthConstants.GET_USER, user: data }))
      },
      error => dispatch(failure({ type: AuthConstants.SIGN_IN_FAILURE, error }))
    )
  }

const signUp =
  ({ email, password }) =>
  dispatch => {
    dispatch(request({ type: AuthConstants.SIGN_UP_REQUEST }))
    return callApi('signup', 'post', { email, password }).then(
      data => {
        dispatch(
          success({ type: AuthConstants.SIGN_UP_SUCCESS, payload: data })
        )
        dispatch(getUser({ type: AuthConstants.GET_USER, user: data }))
      },
      error => dispatch(failure({ type: AuthConstants.SIGN_UP_FAILURE, error }))
    )
  }

const signOut = () => dispatch => {
  dispatch(request({ type: AuthConstants.SIGN_OUT_REQUEST }))
  return callApi('logout', 'post').then(
    data =>
      dispatch(success({ type: AuthConstants.SIGN_OUT_SUCCESS, user: data })),
    error => dispatch(failure({ type: AuthConstants.SIGN_OUT_FAILURE, error }))
  )
}

const AuthActions = {
  signIn,
  signUp,
  signOut,
}

export default AuthActions
