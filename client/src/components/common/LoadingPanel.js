import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types'

class LoadingPanel extends Component {
  render() {
    const loadingPanel = (
      <div className="k-loading-mask">
        <span className="k-loading-text">Loading</span>
        <div className="k-loading-image" />
        <div className="k-loading-color" />
      </div>
    );

    const content = document && document.querySelector(".App");
    const empty = (<div></div>);
    return this.props.isloading ? (content
      ? ReactDOM.createPortal(loadingPanel, content)
      : loadingPanel) : empty;
  }  
}

LoadingPanel.propTypes = {
  isloading: PropTypes.bool.isRequired
};

export default LoadingPanel;
