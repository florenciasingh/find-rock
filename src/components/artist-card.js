// eslint-disable-next-line
import { render } from "@testing-library/react";
import React from "react";
import "./artist card styles/artist-card.css";

class ArtistCard extends React.Component {
  render() {
    return (
      <div className="col-3">
        <div className="item">
          <img
            src="https://junglove.net/wp-content/uploads/2017/09/p05905ln.jpg"
            alt="lana"
            className="pic"
          />
          <p className="title">Lana del Rey</p>
        </div>
      </div>
    );
  }
}

export default ArtistCard;
