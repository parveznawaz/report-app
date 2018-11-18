import {
  GET_SERVICE_REQUEST_DEFAULT_WEEK,
  SET_SERVICE_REQUEST_SELECTED_WEEK
} from "../actions/types";

const initialState = {
  isloading: false,
  data: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SERVICE_REQUEST_DEFAULT_WEEK:
      return {
        ...action.payload
      };
    case SET_SERVICE_REQUEST_SELECTED_WEEK:
      return {
        ...action.payload
      };
    default:
      return state;
  }
}
