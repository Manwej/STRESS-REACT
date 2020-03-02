import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Bookstore
        </a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="search-field"
            onKeyUp={this.props.onKeyUp}
            onClick={this.props.onClick}
          />
        </form>
      </nav>
    );
  }
}
