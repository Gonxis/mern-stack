import React, { useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  FormControl,
  Typography,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import styles from './styles'
import Logo from '../../logo.svg'

const Form = ({
  content,
  disable,
  footer,
  subheader,
  title,
  loading,
  error,
  onClickButton,
}) => {
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
          subheader={subheader}
        />
        <CardContent>
          <img src={Logo} alt='Alaya' style={{ height: '120px' }} />
          <Typography gutterBottom component='h3' variant='h3'>
            {title}
          </Typography>
          <form>
            <FormControl variant='outlined' fullWidth>
              {content}
              <br />
              <Button
                disabled={disable}
                fullWidth
                variant='contained'
                color='primary'
                onClick={onClickButton}
              >
                {title}
              </Button>
            </FormControl>
          </form>
        </CardContent>
        {footer}
      </Card>
    </Container>
  )
}

Form.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
}

Form.defaultProps = {
  error: null,
}

export default Form
