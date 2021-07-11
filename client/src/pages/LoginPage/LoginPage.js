import React from 'react'
import PropTypes from 'prop-types'
import SignUp from '../../components/SignUp/SignUp'
import SignIn from '../../components/SignIn/SignIn'

const LoginPage = ({ signingUp }) => {
  return signingUp ? <SignUp /> : <SignIn />
}

LoginPage.propTypes = {
  signingUp: PropTypes.bool.isRequired,
}

LoginPage.defaultProps = {
  signingUp: true,
}

export default LoginPage
