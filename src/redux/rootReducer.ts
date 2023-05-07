import { usersReducer } from './userStore/reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  usersReducer,
})

export default rootReducer
