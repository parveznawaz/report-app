import axios from "axios";
import {
  GET_SERVICE_REQUEST_WEEKS,
  GET_SERVICE_REQUEST_DEFAULT_WEEK,
  SET_SERVICE_REQUEST_SELECTED_WEEK
} from "./types";
import {
  UrlGetServiceRequestDefaultWeek,
  UrlGetServiceRequestWeekly
} from "../../config/Urls";
// Get weeks
export const getServiceRequestWeekly = () => dispatch => {
  dispatch({
    type: GET_SERVICE_REQUEST_WEEKS,
    payload: { isloading: true, data: [] }
  });

  axios
    .get(UrlGetServiceRequestWeekly)
    .then(res =>
      dispatch({
        type: GET_SERVICE_REQUEST_WEEKS,
        payload: {
          isloading: false,
          data: res.data.filter(x => x.Schedid != null)
        }
      })
    )
    .catch(err => {
      dispatch({
        type: GET_SERVICE_REQUEST_WEEKS,
        payload: { isloading: false, data: [] }
      });
    });
};

// Get current week
export const getServiceRequestDefaultWeek = () => dispatch => {
  dispatch({
    type: GET_SERVICE_REQUEST_DEFAULT_WEEK,
    payload: { isloading: true, data: null }
  });

  axios
    .get(UrlGetServiceRequestDefaultWeek)
    .then(res => {
      if (res.data.length > 0) {
        dispatch({
          type: GET_SERVICE_REQUEST_DEFAULT_WEEK,
          payload: {isloading: false, data: res.data[0].Schedid}
        });
      } else {
        dispatch({
          type: GET_SERVICE_REQUEST_DEFAULT_WEEK,
          payload: {isloading: false, data: null}
        });
      }
    })
    .catch(err => {
      dispatch({
        type: GET_SERVICE_REQUEST_DEFAULT_WEEK,
        payload: {isloading: false, data: null}
      });
    });
};

// Set selected week
export const setServiceRequestSelectedWeek = id => dispatch => {
  dispatch({
    type: SET_SERVICE_REQUEST_SELECTED_WEEK,
    payload: {isloading: false, data: id}
  });
};
