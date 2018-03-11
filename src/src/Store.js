import {combineReducers, createStore, applyMiddleware} from 'redux'
import NavReducer from './nav/NavReducer'
import UsersReducer from './users/UsersReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  nav: NavReducer,
  users: UsersReducer
})

let middleware = [thunk]
const store = createStore(reducers, applyMiddleware(...middleware))

export default store