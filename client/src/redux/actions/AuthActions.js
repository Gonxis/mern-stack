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
    return callApi('signin', 'post', { email, password }).then(response => {
      if (response.status === 'failed') {
        dispatch(
          failure({
            type: AuthConstants.SIGN_IN_FAILURE,
            error: response.error,
          })
        )
        alert(response.error)
      } else {
        dispatch(
          success({
            type: AuthConstants.SIGN_IN_SUCCESS,
            payload: { token: response.token, user: response.user },
          })
        )
      }
    })
  }

const signUp =
  ({ email, password }) =>
  dispatch => {
    dispatch(request({ type: AuthConstants.SIGN_UP_REQUEST }))
    return callApi('signup', 'post', { email, password }).then(response => {
      const { user } = response
      if (response.status === 'failed') {
        dispatch(
          failure({
            type: AuthConstants.SIGN_UP_FAILURE,
            error: response.error,
          })
        )
        alert(response.error)
      } else {
        dispatch(
          success({
            type: AuthConstants.SIGN_UP_SUCCESS,
            payload: user,
          })
        )
        dispatch(signIn({ email, password }))
      }
    })
  }

const signOut = () => dispatch => {
  dispatch(request({ type: AuthConstants.SIGN_OUT_REQUEST }))
  return callApi('logout', 'post').then(response => {
    if (response.status === 'failed') {
      dispatch(
        failure({ type: AuthConstants.SIGN_OUT_FAILURE, error: response.error })
      )
      alert(response.error)
    } else {
      dispatch(
        success({ type: AuthConstants.SIGN_OUT_SUCCESS, user: response.data })
      )
    }
  })
}

const AuthActions = {
  signIn,
  signUp,
  signOut,
}

export default AuthActions
