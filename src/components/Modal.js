import React, { Component, Fragment } from "react";
import "../App.css";

export default class Modal extends Component {
  render() {
    return (
      <Fragment>
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={this.props.onClickOne}>
              &times;
            </span>
            <div className="modal-header">
              <button
                className="consBtn btn btn-outline-secondary"
                onClick={this.props.onClickThree}
              >
                Previous
              </button>
              <button
                className="consBtn btn btn-outline-secondary"
                onClick={this.props.onClickTwo}
              >
                Next
              </button>
            </div>
            <img src={this.props.book.detail} alt="img" />
          </div>
        </div>
      </Fragment>
    );
  }
}
