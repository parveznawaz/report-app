import { combineReducers } from "redux";
import serviceRequestReducer from "./serviceRequestReducer";
import scheduleReportGroupByCompanyReducer from "./scheduleReportGroupByCompanyReducer";

export default combineReducers({
  serviceRequest: serviceRequestReducer,
  scheduleReportGroupByCompany: scheduleReportGroupByCompanyReducer
});
