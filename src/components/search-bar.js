import React from "react";
import "./search-bar/search-bar.css";
import Logo from "./logo-rock.svg";
class SearchBar extends React.Component {
  handleChange = (e) => {
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
            <img className="logoRock" src={Logo} alt="" />
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
                  placeholder="Search a band"
                  onChange={this.handleChange}
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
