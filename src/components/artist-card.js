// eslint-disable-next-line
import { render } from "@testing-library/react";
import React from "react";
import "./artist card styles/artist-card.css";

class ArtistCard extends React.Component {
  render() {
    return (
      <div className="col-3">
        <div className="item">
          <img src={this.props.img} className="pic" alt="infoartist" />

          <p className="title">{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default ArtistCard;
