import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SignUp from '../../components/SignUp/SignUp'
import SignIn from '../../components/SignIn/SignIn'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import AuthActions from '../../redux/actions/AuthActions'

const LoginPage = ({}) => {
  const dispatch = useDispatch()
  const { auth } = useSelector(state => state.auth)
  const [signingUp, setSigningUp] = useState(false)

  if (auth) {
    return <Redirect to='/' />
  }

  const handleSubmitSignInForm = ({ email, password }) => {
    dispatch(AuthActions.signIn({ email, password }))
  }

  const handleSubmitSignUpForm = ({ email, password, confirmPassword }) => {
    dispatch(AuthActions.signUp({ email, password, confirmPassword }))
  }

  return signingUp ? (
    <SignUp
      handleSigningIn={() => setSigningUp(false)}
      signUp={handleSubmitSignUpForm}
    />
  ) : (
    <SignIn
      handleSigningUp={() => setSigningUp(true)}
      signIn={handleSubmitSignInForm}
    />
  )
}

LoginPage.propTypes = {
  signingUp: PropTypes.bool.isRequired,
}

export default LoginPage
