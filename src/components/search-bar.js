import React from "react";
import "./search-bar/search-bar.css";
import logo from "./logo-rock.svg";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  state = {
    busqueda: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    //console.log(e.target.name, e.target.value);
  };
  handleClick = (e) => {
    e.preventDefault();
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
              name="form"
              className="form-inline"
              onSubmit={this.handleSubmit}
            >
              <div className="busqueda">
                <input
                  id="buscar"
                  name="busqueda"
                  type="text"
                  value={this.props.busqueda}
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
