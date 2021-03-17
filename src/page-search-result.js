import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/search-bar.js";
import SearchResult from "./components/search-result.js";

class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };
  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar onChange={this.changeHandle} />
        <SearchResult />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
