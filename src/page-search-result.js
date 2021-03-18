import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/search-bar.js";
import SearchResult from "./components/search-result.js";

class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };
  componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");

    this.setState({
      busqueda: search,
    });
  }
  componentWillMount() {}
  componentWillUnmount() {}

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
