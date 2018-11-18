import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoadingPanel from "../common/LoadingPanel";
import _ from "lodash";
import {
  getServiceRequestWeekly,
  getServiceRequestDefaultWeek,
  setServiceRequestSelectedWeek
} from "../../redux/actions/scheduleWeeksActions";
import { DropDownList } from "@progress/kendo-react-dropdowns";

class ScheduleWeeks extends Component {

  componentDidMount() {
    if(this.props.weeks.data.length===0){
      this.props.getServiceRequestWeekly();
    }    
    this.props.getServiceRequestDefaultWeek();
  }


  onChange = e => {
    this.props.setServiceRequestSelectedWeek(e.target.value.Schedid);
  };

  render() {
    return (
      <div className="form-group">
        <p>Please select week</p>
        <DropDownList
          data={this.props.weeks.data}
          textField="Label"
          dataItemKey="Schedid"
          value={_.find(this.props.weeks.data, {Schedid: this.props.selectedWeek.data})}
          onChange={this.onChange}
          style={{ width: "250px" }}
        />
        {<LoadingPanel isloading={this.props.weeks.isloading || this.props.selectedWeek.isloading} />}
      </div>
    );
  }
}

ScheduleWeeks.propTypes = {
  selectedWeek: PropTypes.object.isRequired,
  weeks: PropTypes.object.isRequired,
  getServiceRequestWeekly: PropTypes.func.isRequired,
  getServiceRequestDefaultWeek: PropTypes.func.isRequired,
  setServiceRequestSelectedWeek: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  selectedWeek: state.selectedWeek,
  weeks: state.weeks
});

export default connect(
  mapStateToProps,
  {
    getServiceRequestWeekly,
    getServiceRequestDefaultWeek,
    setServiceRequestSelectedWeek
  }
)(ScheduleWeeks);
