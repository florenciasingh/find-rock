import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/search-bar.js";
import SearchResult from "./components/search-result.js";

class PageSearchResult extends Component {
  constructor(props) {
    super(props);
    // No llamar this.setState() aca!
    this.state = { busqueda: "" };
    ///console.log("Constructor - Antes del render");
  }
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

  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
        />
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
