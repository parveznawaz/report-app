import { GET_SERVICE_REQUEST_WEEKS } from "../actions/types";

const initialState = 
  {
    isloading: false,
    data: []
  }
;

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SERVICE_REQUEST_WEEKS:
      return { ...action.payload };
    default:
      return state;
  }
}
