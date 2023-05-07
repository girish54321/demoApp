import {
  LOAD_USERS,
  USERS_ERROR,
  LOAD_USERS_LOADING,
  SELECT_USER
} from './actionTypes'

export interface UsersReducerType {
  isLoading: boolean,
  error: any,
  users: Array<any>,
}

const initialState: UsersReducerType = {
  isLoading: false,
  error: null,
  users: [],
}

export const usersReducer = (state: UsersReducerType = initialState, action: any) => {
  switch (action.type) {
    case LOAD_USERS:
      let data = action.payload
      return {
        ...state,
        users: [...state.users, ...data],
        isLoading: false,
        error: null,
      }
    case USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }

    case LOAD_USERS_LOADING:
      return {
        ...state,
        isLoading: true
      }

    case SELECT_USER:
      return {
        ...state,
        selectedUser: action.payload,
        isLoading: false,
        error: null,
      }
    default:
      return state
  }
}
