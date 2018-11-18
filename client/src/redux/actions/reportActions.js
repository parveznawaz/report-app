import axios from "axios";
import { GET_SERVICE_REQUEST_SCHEDULE_REPORT_GROUP_BY_COMPANY } from "./types";
import { UrlScheduleReportGroupByCompany } from "../../config/Urls";

// get getScheduleReportGroupByCompany report by week id
export const getScheduleReportGroupByCompany = id => dispatch => {
  axios
    .get(UrlScheduleReportGroupByCompany + "/" + id)
    .then(res =>
      dispatch({
        type: GET_SERVICE_REQUEST_SCHEDULE_REPORT_GROUP_BY_COMPANY,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: GET_SERVICE_REQUEST_SCHEDULE_REPORT_GROUP_BY_COMPANY,
        payload: []
      });
    });
};
