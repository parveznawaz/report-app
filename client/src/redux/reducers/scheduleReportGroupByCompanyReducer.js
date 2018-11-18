import {
 GET_SERVICE_REQUEST_SCHEDULE_REPORT_GROUP_BY_COMPANY,
 CLEAR_SERVICE_REQUEST_SCHEDULE_REPORT_GROUP_BY_COMPANY
} from "../actions/types";

const initialState = {
  isloading: false,
  data:[]
};

export default function(state = initialState, action) {
  switch (action.type) {    
    case GET_SERVICE_REQUEST_SCHEDULE_REPORT_GROUP_BY_COMPANY:
      return {...action.payload};
    case CLEAR_SERVICE_REQUEST_SCHEDULE_REPORT_GROUP_BY_COMPANY:
      return {...action.payload};
    default:
      return state;
  }
}
