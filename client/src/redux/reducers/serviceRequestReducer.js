import {
  GET_SERVICE_REQUEST_WEEKS,
  GET_SERVICE_REQUEST_DEFAULT_WEEK,
  SET_SERVICE_REQUEST_SELECTED_WEEK,
  //GET_SERVICE_REQUEST_SCHEDULE_REPORT_GROUP_BY_COMPANY
} from "../actions/types";

const initialState = {
  weeks: [],
  selectedweekid: 0,
  //scheduleReportGroupByCompany: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SERVICE_REQUEST_WEEKS:
      return {
        ...state,
        weeks: action.payload
      };
    case GET_SERVICE_REQUEST_DEFAULT_WEEK:
      return {
        ...state,
        selectedweekid: action.payload
      };
    case SET_SERVICE_REQUEST_SELECTED_WEEK:
      return {
        ...state,
        selectedweekid: action.payload
      };
    default:
      return state;
  }
}
