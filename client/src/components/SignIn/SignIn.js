import React, { useState } from 'react'
import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import Form from '../Form/Form'
import styles from '../Form/styles'

const SignIn = ({ loading, error }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signup = () => {
    console.log('I am entering here')
  }

  const handleChange = event => {
    const input = event.target.value
    const field = event.target.name
    field === 'email' ? setEmail(input) : setPassword(input)
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
      />
    </>
  )

  const footer = (
    <p>
      Don't have an account yet?{' '}
      <span style={styles.footer} onClick={() => signup()}>
        Sign up
      </span>{' '}
      for free
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
      subheader='Please sign in or sign up to continue'
      title='Sign In'
      content={content}
      disable={!email || !password}
      footer={footer}
    />
  )
}

SignIn.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
}

SignIn.defaultProps = {
  error: null,
}

export default SignIn
