import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import Form from '../Form/Form'
import styles from '../Form/styles'

const SignUp = ({ loading, error, handleSigningIn, signUp }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleChange = event => {
    const input = event.target.value
    const field = event.target.name
    field === 'email'
      ? setEmail(input)
      : field === 'password'
      ? setPassword(input)
      : setConfirmPassword(input)
  }

  const content = (
    <>
      <TextField
        variant='standard'
        label='Email'
        name='email'
        value={email}
        onChange={e => handleChange(e)}
        style={{ marginBottom: 15 }}
      />
      <TextField
        variant='standard'
        label='Password'
        name='password'
        type='password'
        value={password}
        onChange={e => handleChange(e)}
        style={{ marginBottom: 15 }}
      />
      <TextField
        variant='standard'
        label='Confirm password'
        name='confirmPassword'
        type='password'
        value={confirmPassword}
        onChange={e => handleChange(e)}
      />
    </>
  )

  const footer = (
    <p>
      Do you have an account?{' '}
      <span style={styles.footer} onClick={() => handleSigningIn()}>
        Sign in
      </span>
    </p>
  )

  const handleButtonClick = () => signUp({ email, password, confirmPassword })

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error</p>
  }

  return (
    <Form
      subheader='Create your account for free'
      title='Sign Up'
      content={content}
      disable={!email || !password || confirmPassword !== password}
      footer={footer}
      onClickButton={handleButtonClick}
    />
  )
}

SignUp.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
}

SignUp.defaultProps = {
  error: null,
}

export default SignUp
