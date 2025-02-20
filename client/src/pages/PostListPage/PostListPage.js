import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
// Import Components
import PostList from '../../components/PostList/PostList'
import PostCreateWidget from '../../components/PostWidget/PostCreateWidget'
// Import Actions
import {
  addPostRequest,
  deletePostRequest,
  fetchPosts,
} from '../../redux/actions/PostActions'
import Logo from '../../logo.svg'

const PostListPage = ({ showAddPost }) => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.data)
  const { auth, user } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  const handleDeletePost = post => {
    if (window.confirm('Do you want to delete this post')) {
      dispatch(deletePostRequest(post))
    }
  }

  const handleAddPost = post => {
    dispatch(addPostRequest(post))
  }

  if (!auth) {
    return <Redirect to='/login' />
  }

  if (posts === undefined) {
    return <p>Loading...</p>
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 d-flex align-items-center'>
          <img
            className='mx-3'
            src={Logo}
            alt='Logo'
            style={{ height: '72px' }}
          />
          <h1 className='mt-4'>Alaya Blog</h1>
        </div>
      </div>
      <hr />
      <div className='row'>
        <div className='col-6'>
          <PostCreateWidget addPost={handleAddPost} showAddPost={showAddPost} />
        </div>
        <div className='col-6'>
          <PostList
            handleDeletePost={handleDeletePost}
            posts={posts}
            userId={user._id}
          />
        </div>
      </div>
    </div>
  )
}

PostListPage.propTypes = {
  showAddPost: PropTypes.bool.isRequired,
}

export default PostListPage
