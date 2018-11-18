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
  constructor() {
    super();
    this.state = { selectedweek: null, isloading: true };
  }

  componentDidMount() {
    this.props.getServiceRequestWeekly();
    this.props.getServiceRequestDefaultWeek();
  }

  componentWillReceiveProps({ serviceRequest }) {
    let selectedweek = _.find(
      serviceRequest.weeks,
      {'Schedid' : serviceRequest.selectedweekid}
    );
    if(selectedweek!=null){
      this.setState(prevState => ({
        ...this.state,
        selectedweek: selectedweek
      }));
    }
    
    if(serviceRequest.weeks.length>0){
      this.setState(prevState => ({ isloading: false }));
    }
  }

  onChange = e => {
    this.props.setServiceRequestSelectedWeek(e.target.value.Schedid);
  };

  render() {
    return (
      <div className="form-group">
        <p>Please select week</p>
        <DropDownList
          data={this.props.serviceRequest.weeks}
          textField="Label"
          dataItemKey="Schedid"
          value={this.state.selectedweek}
          onChange={this.onChange}
          style={{ width: "250px" }}
        />
        {<LoadingPanel isloading={this.state.isloading}/>}
      </div>
    );
  }
}

ScheduleWeeks.propTypes = {
  serviceRequest: PropTypes.object.isRequired,
  getServiceRequestWeekly: PropTypes.func.isRequired,
  getServiceRequestDefaultWeek: PropTypes.func.isRequired,
  setServiceRequestSelectedWeek: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  serviceRequest: state.serviceRequest
});

export default connect(
  mapStateToProps,
  {
    getServiceRequestWeekly,
    getServiceRequestDefaultWeek,
    setServiceRequestSelectedWeek
  }
)(ScheduleWeeks);
