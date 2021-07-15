import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { CloudinaryContext, Image } from 'cloudinary-react'
import { fetchPhotos, openUploadWidget } from '../../util/CloudinaryService'
// Import Style

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const PostCreateWidget = ({ addPost }) => {
  const [state, setState] = useState({})
  const [image, setImage] = useState('')
  const classes = useStyles()

  const beginUpload = tag => {
    const uploadOptions = {
      cloudName: 'gonxis0',
      tags: [tag, 'anImage'],
      uploadPreset: 'upload',
    }

    openUploadWidget(uploadOptions, (error, photo) => {
      if (!error) {
        console.log(photo)
        if (photo.event === 'success') {
          setImage(photo.info.public_id)
        }
      } else {
        console.log(error)
      }
    })
  }

  useEffect(() => {
    fetchPhotos('image', setImage)
  }, [])

  const submit = () => {
    if (state.name && state.title && state.content) {
      addPost({ ...state, image })
    }
  }

  const handleChange = evt => {
    const value = evt.target.value
    setState({
      ...state,
      [evt.target.name]: value,
    })
  }

  return (
    <div className={`${classes.root} d-flex flex-column my-4 w-100`}>
      <h3>Create new post</h3>
      <TextField
        variant='filled'
        label='Author name'
        name='name'
        onChange={handleChange}
      />
      <TextField
        variant='filled'
        label='Post title'
        name='title'
        onChange={handleChange}
      />
      <TextField
        variant='filled'
        multiline
        rows='4'
        label='Post content'
        name='content'
        onChange={handleChange}
      />
      <CloudinaryContext cloudName='gonxis0'>
        <section>
          <Image
            key={image}
            publicId={image}
            fetch-format='auto'
            quality='auto'
          />
        </section>
      </CloudinaryContext>
      <button onClick={() => beginUpload()}>Upload Image</button>
      <Button
        className='mt-4'
        variant='contained'
        color='primary'
        onClick={() => submit()}
        disabled={!state.name || !state.title || !state.content}
      >
        Submit
      </Button>
    </div>
  )
}

PostCreateWidget.propTypes = {
  addPost: PropTypes.func.isRequired,
}

export default PostCreateWidget
