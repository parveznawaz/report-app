import { combineReducers } from "redux";
import selectedWeekReducer from "./selectedWeekReducer";
import scheduleReportGroupByCompanyReducer from "./scheduleReportGroupByCompanyReducer";
import weeksReducer from "./weeksReducer";

export default combineReducers({
  selectedWeek: selectedWeekReducer,
  weeks : weeksReducer,
  scheduleReportGroupByCompany: scheduleReportGroupByCompanyReducer
});
