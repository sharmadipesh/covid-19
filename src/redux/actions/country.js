import { API_BASE_URL } from 'config/config';
import Api_url from 'config/api-url';
import { axiosAuth, axiosNoAuth } from 'config/axios-instances';

import {
    REDUX_FIRST_CALL_CHECK,
    GLOBAL_LATEST_COUNT
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


export function getGlobalCountData(successCallback, errorCallback) {
  return async function(dispatch) {
    try {
        let response = await axiosNoAuth.get(API_BASE_URL + Api_url.Latest_Global_Count);

        await dispatch({
          type:GLOBAL_LATEST_COUNT,
          payload: response.data
        });

      successCallback && successCallback();
    } catch (e) {
      console.error(e);
      errorCallback && errorCallback(e.response);
    }
  };
}
