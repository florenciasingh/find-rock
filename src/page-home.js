import { render } from "@testing-library/react";
import React from "react";
import "./page-home.css";
import logo from "./logo-rock.svg";

class PageHome extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} alt="" id="logo" />
            <form
              name="InputForm"
              className="form-inline"
              onSubmit={this.handleSubmit}
              name="form"
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
              <div className="actions">
                <button className="btng" type="submit">
                  Search Similar Artists
                </button>
                <button className="btng" onClick={this.handleClick}>
                  EscuelaDevRock
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default PageHome;
