import {
  LOAD_USERS,
  USERS_ERROR,
  LOAD_USERS_LOADING,
  SELECT_USER
} from './actionTypes'
import { AppConst } from '../../constants/constants'
import axios from 'axios'
export default () => async (dispatch: any,) => {
  try {
    const response = await axios.get(AppConst.URL + AppConst.USER);
    dispatch({
      type: LOAD_USERS_LOADING,
      payload: true
    });
    if (response.status == 200) {
      let data = response.data
      dispatch({
        type: LOAD_USERS,
        payload: data
      });
    }
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: `${error}`
    });

  }
};

export const setHomeError = (payload: any) => ({
  type: USERS_ERROR,
  payload
})

export const setHomeLoading = (payload: any) => ({
  type: LOAD_USERS_LOADING,
  payload
})

export const selectUserAction = (payload: any) => ({
  type: SELECT_USER,
  payload
})

export const getSelectedUserInfo = (id: string) => async (dispatch: any, getState: any) => {
  try {
    const response = await axios.get(`${AppConst.URL}${AppConst.USER}/${id}`);
    if (response.status == 200) {
      let data = {
        ...response.data
      };
      dispatch({
        type: SELECT_USER,
        payload: data
      });
    }
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: `${error}`
    });
  }
}



