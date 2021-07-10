import React, { useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  FormControl,
  TextField,
  Typography,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import styles from './styles'
import Logo from '../../logo.svg'

const LoginPage = ({ loading, error }) => {
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

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error</p>
  }

  return (
    <Container style={styles.container}>
      <Card>
        <CardHeader
          title='Welcome to Alaya MERN dev Challenge!'
          subheader='Please sign in or sign up to continue'
        />
        <CardContent>
          <img src={Logo} alt='Alaya' style={{ height: '120px' }} />
          <Typography gutterBottom component='h3' variant='h3'>
            Sign In
          </Typography>
          <form>
            <FormControl variant='outlined' fullWidth>
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
              <br />
              <Button
                disabled={!email || !password || loading}
                fullWidth
                variant='contained'
                color='primary'
                type='submit'
              >
                Sign in
              </Button>
            </FormControl>
          </form>
        </CardContent>
        <p>
          Don't have an account yet?{' '}
          <span onClick={() => signup()}>Sign up</span> for free
        </p>
      </Card>
    </Container>
  )
}

LoginPage.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
}

LoginPage.defaultProps = {
  error: null,
}

export default LoginPage
