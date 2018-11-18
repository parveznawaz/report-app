import React, { Component } from "react";
import ScheduleWeeks from "../serviceRequestReports/ScheduleWeeks";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Grid,
  GridColumn as Column,
  GridToolbar
} from "@progress/kendo-react-grid";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { orderBy } from "@progress/kendo-data-query";
// import { getScheduleReportGroupByCompany } from "../../redux/actions/serviceRequestActions";
import { getScheduleReportGroupByCompany} from "../../redux/actions/reportActions";
import _ from "lodash";
import LoadingPanel from "../common/LoadingPanel";

class SrScheduleReportGroupByCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridData: [],
      selectedweekid: null,
      isloading: true,
      sort: [{ field: "Company", dir: "asc" }]
    };
  }
  componentDidMount() {
    // if (_.isNumber(this.state.selectedweekid)) {
    //   this.props.getScheduleReportGroupByCompany(this.state.selectedweekid);
    // }
  }
 
  componentWillReceiveProps({ serviceRequest,scheduleReportGroupByCompany }) {
    if (!_.isEmpty(serviceRequest)) {
      if (_.isNumber(serviceRequest.selectedweekid)) {
        this.setState(prevState => ({
          selectedweekid: serviceRequest.selectedweekid
        }));
      }
      //console.log(nextprop);
      this.setState(prevState => ({
        isloading: false,
        gridData: scheduleReportGroupByCompany
      }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      _.isNumber(this.state.selectedweekid) &&
      prevState.selectedweekid !== this.state.selectedweekid
    ) {
      this.setState(prevState => ({ isloading: true }));
      this.props.getScheduleReportGroupByCompany(this.state.selectedweekid);
    }
  }

  _export;
  export = () => {
    this._export.save(this.state.gridData);
  };
  render() {
    let gridContent = (
      <div>
        <ExcelExport
          ref={exporter => {
            this._export = exporter;
          }}
        >
          <Grid
            data={orderBy(this.state.gridData, this.state.sort)}
            sortable
            sort={this.state.sort}
            onSortChange={e => {
              this.setState({
                sort: e.sort
              });
            }}
          >
            <GridToolbar>
              <button
                title="Export Excel"
                className="k-button k-primary"
                onClick={this.export}
              >
                Export to Excel
              </button>
            </GridToolbar>
            <Column field="Company" title="Company" />
            <Column
              field="TotalPreReg"
              filter="numeric"
              title="Total Pre Reg"
            />
            <Column field="TotalReg" filter="numeric" title="Total Reg" />
            <Column field="TotalSRs" filter="numeric" title="Total SRs" />
            <Column
              field="totalIncident"
              filter="numeric"
              title="Total Incident"
            />
          </Grid>
        </ExcelExport>
      </div>
    );

    return (
      <div className="container report">
        <h4>Schedule Report Group by Company</h4>
        <div className="form-group">
          <ScheduleWeeks />
          {gridContent}
          <LoadingPanel isloading={this.state.isloading} />
        </div>
      </div>
    );
  }
}

SrScheduleReportGroupByCompany.propTypes = {
  serviceRequest: PropTypes.object.isRequired,
  scheduleReportGroupByCompany: PropTypes.array.isRequired,
  getScheduleReportGroupByCompany: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  serviceRequest: state.serviceRequest,
  scheduleReportGroupByCompany: state.scheduleReportGroupByCompany
});

export default connect(
  mapStateToProps,
  {
    getScheduleReportGroupByCompany
  }
)(SrScheduleReportGroupByCompany);
