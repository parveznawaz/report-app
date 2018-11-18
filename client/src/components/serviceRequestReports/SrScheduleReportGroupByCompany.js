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
import { getScheduleReportGroupByCompany, clearScheduleReportGroupByCompany } from "../../redux/actions/reportActions";
import _ from "lodash";
import LoadingPanel from "../common/LoadingPanel";

class SrScheduleReportGroupByCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: [{ field: "Company", dir: "asc" }]
    };
  }

  componentDidUpdate({ selectedWeek }, prevState) {
    if (
      !_.isEmpty(this.props.selectedWeek) &&
      !_.isEqual(this.props.selectedWeek, selectedWeek) &&
      !_.isNull(this.props.selectedWeek.data)
    ) {
      this.props.getScheduleReportGroupByCompany(this.props.selectedWeek.data);
    }
  }

  shouldComponentUpdate({ selectedWeek, scheduleReportGroupByCompany }) {
    return (
      !_.isEqual(selectedWeek, this.props.selectedWeek) ||
      !_.isEqual(
        scheduleReportGroupByCompany,
        this.props.scheduleReportGroupByCompany.data
      )
    );
  }

  componentWillUnmount(){
   this.props.clearScheduleReportGroupByCompany();
  }

  _export;
  export = () => {
    this._export.save(this.props.scheduleReportGroupByCompany.data);
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
            data={orderBy(
              this.props.scheduleReportGroupByCompany.data,
              this.state.sort
            )}
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
          <LoadingPanel
            isloading={this.props.scheduleReportGroupByCompany.isloading}
          />
        </div>
      </div>
    );
  }
}

SrScheduleReportGroupByCompany.propTypes = {
  selectedWeek: PropTypes.object.isRequired,
  scheduleReportGroupByCompany: PropTypes.object.isRequired,
  getScheduleReportGroupByCompany: PropTypes.func.isRequired,
  clearScheduleReportGroupByCompany: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  selectedWeek: state.selectedWeek,
  scheduleReportGroupByCompany: state.scheduleReportGroupByCompany
});

export default connect(
  mapStateToProps,
  {
    getScheduleReportGroupByCompany,
    clearScheduleReportGroupByCompany
  }
)(SrScheduleReportGroupByCompany);
