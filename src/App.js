import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ArtistCard from "./components/artist-card.js";
import SearchBar from "./components/search-bar.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <div className="container">
          <div className="row">
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
