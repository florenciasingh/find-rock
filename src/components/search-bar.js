import React from "react";
import "./search-bar/search-bar.css";
import logo from "./logo-rock.svg";
import { Link } from "react-router-dom";
class SearchBar extends React.Component {
  state = {
    busqueda: "",
  };
  handleChange = (e) => {
    this.setState({ busqueda: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name);
  };

  render() {
    return (
      <React.Fragment>
        <div className="row-header">
          <div className="col-md-2">
            <Link to="/">
              <img className="logoRock" src={logo} alt="" />
            </Link>
          </div>
          <div className="col-md-6">
            <form
              name="InputForm"
              className="d-flex"
              onSubmit={this.handleSubmit}
            >
              <div className="busqueda">
                <input
                  id="search"
                  name="Input"
                  type="search"
                  //value={this.state.busqueda}
                  placeholder="Search a band"
                  onChange={this.props.onChange}
                />
              </div>
            </form>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default SearchBar;
