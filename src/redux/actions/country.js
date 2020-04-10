import { API_BASE_URL } from 'config/config';
import Api_url from 'config/api-url';
import { axiosAuth, axiosNoAuth } from 'config/axios-instances';

import {
    REDUX_FIRST_CALL_CHECK
} from 'redux/types';

export function checkReduxSetOrNot(data, successCallback, errorCallback) {
  return async function(dispatch) {
    try {
    
      await dispatch({
        type:REDUX_FIRST_CALL_CHECK,
        payload: true
      });

      successCallback && successCallback();
    } catch (e) {
      console.error(e);
      errorCallback && errorCallback(e.response);
    }
  };
}
