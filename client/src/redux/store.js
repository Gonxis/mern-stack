import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../redux/reducers/index'

import middleware from './middleware'

const enhancers = [applyMiddleware(thunk)]

const store = createStore(rootReducer, compose(middleware, ...enhancers))

export default store
