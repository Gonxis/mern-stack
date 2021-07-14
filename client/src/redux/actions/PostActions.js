import callApi from '../../util/apiCaller'
import PostConstants from '../types/PostConstants'

export function addPost(post) {
  return {
    type: PostConstants.ADD_POST,
    post,
  }
}

export function addPostRequest(post) {
  return (dispatch, getState) => {
    const state = getState()
    return callApi(`api/posts?secret_token=${state.auth.token}`, 'post', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
      },
    }).then(res => dispatch(addPost(res.post)))
  }
}

export function addPosts(posts) {
  return {
    type: PostConstants.ADD_POSTS,
    posts,
  }
}

export function fetchPosts() {
  return (dispatch, getState) => {
    const state = getState()
    return callApi(`api/posts?secret_token=${state.auth.token}`).then(res => {
      dispatch(addPosts(res.posts))
    })
  }
}

export function fetchPost(cuid) {
  return (dispatch, getState) => {
    const state = getState()
    return callApi(`api/posts/${cuid}?secret_token=${state.auth.token}`).then(
      res => dispatch(addPost(res.post))
    )
  }
}

export function deletePost(cuid) {
  return {
    type: PostConstants.DELETE_POST,
    cuid,
  }
}

export function deletePostRequest(cuid) {
  return (dispatch, getState) => {
    const state = getState()
    return callApi(
      `api/posts/${cuid}?secret_token=${state.auth.token}`,
      'delete'
    ).then(() => dispatch(deletePost(cuid)))
  }
}
