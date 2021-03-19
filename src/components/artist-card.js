// eslint-disable-next-line
import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";

import "./artist-card.css";

class ArtistCard extends React.Component {
  render() {
    return (
      <div className="col-3">
        <Link to={"/artista?" + this.props.titulo}>
          <div className="item">
            <img src={this.props.img} className="pic" alt="infoartist" />

            <p className="titulo">{this.props.titulo}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default ArtistCard;
