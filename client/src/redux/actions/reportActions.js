import axios from "axios";
import { GET_SERVICE_REQUEST_SCHEDULE_REPORT_GROUP_BY_COMPANY ,CLEAR_SERVICE_REQUEST_SCHEDULE_REPORT_GROUP_BY_COMPANY} from "./types";
import { UrlScheduleReportGroupByCompany } from "../../config/Urls";

// get getScheduleReportGroupByCompany report by week id
export const getScheduleReportGroupByCompany = id => dispatch => {
  dispatch({
    type: GET_SERVICE_REQUEST_SCHEDULE_REPORT_GROUP_BY_COMPANY,
    payload: {isloading: true, data: []}
  });
  axios
    .get(UrlScheduleReportGroupByCompany + "/" + id)
    .then(res =>
      dispatch({
        type: GET_SERVICE_REQUEST_SCHEDULE_REPORT_GROUP_BY_COMPANY,
        payload: {isloading: false, data: res.data}
      })
    )
    .catch(err => {
      dispatch({
        type: GET_SERVICE_REQUEST_SCHEDULE_REPORT_GROUP_BY_COMPANY,
        payload: {isloading: false, data: []}
      });
    });
};

//clear data
export const clearScheduleReportGroupByCompany = () => dispatch =>{
  dispatch({
    type: CLEAR_SERVICE_REQUEST_SCHEDULE_REPORT_GROUP_BY_COMPANY,
    payload: {isloading: false, data: []}
  })
}
