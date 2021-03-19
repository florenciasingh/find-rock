import React from "react";
import "./page-home.css";
import logo from "./logo-rock.svg";

class PageHome extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      modal: true,
    });
  };
  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };
  state = {
    busqueda: "",
    modal: false,
  };

  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} alt="" id="logo" />
            <form
              name="Form"
              className="form-inline"
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
            >
              <div className="busqueda">
                <input
                  id="buscar"
                  name="busqueda"
                  type="text"
                  value={this.state.busqueda}
                  placeholder="Search a band"
                  onChange={this.handleChange}
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
