import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import Form from '../Form/Form'

const SignUp = ({ loading, error }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const signin = () => {
    console.log('I am entering here')
  }

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
      Do you have an account? <span onClick={() => signin()}>Sign in</span>
    </p>
  )

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
