import callApi from '../../util/apiCaller'
import AuthConstants from '../types/AuthConstants'
import { setCookie, removeCookie } from '../../util/cookie'

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
    return callApi('login', 'post', { email, password }).then(
      data => dispatch(getUser({ type: AuthConstants.GET_USER, user: data })),
      error => dispatch(failure({ type: AuthConstants.SIGN_IN_FAILURE, error }))
    )
  }

const signUp =
  ({ email, password }) =>
  dispatch => {
    dispatch(request({ type: AuthConstants.SIGN_UP_REQUEST }))
    return callApi('signup', 'post', { email, password }).then(
      data => dispatch(getUser({ type: AuthConstants.GET_USER, user: data })),
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

export default AuthActions = {
  signIn,
  signUp,
  signOut,
}
