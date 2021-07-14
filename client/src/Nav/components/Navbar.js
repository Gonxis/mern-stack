import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { auth } = useSelector(state => state.auth)
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography variant='h6' style={{ marginRight: 15 }}>
          <Link href='/login' className='text-white'>
            {auth ? 'Logout' : 'Login'}
          </Link>
        </Typography>
        <Typography variant='h6'>
          <Link href='/' className='text-white'>
            Home
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
