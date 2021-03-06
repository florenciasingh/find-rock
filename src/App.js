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
            <ArtistCard
              img="https://junglove.net/wp-content/uploads/2017/09/p05905ln.jpg"
              title="Lana Del Rey"
            />
            <ArtistCard
              img="https://s.err.ee/photo/crop/2019/06/13/649080h72fat4.jpg"
              title="Vampire Weekend"
            />

            <ArtistCard
              img="https://b.thumbs.redditmedia.com/uuCDtJZsPFiWRlnm62lubiABn4iAJXzEinodqP5L4DE.png"
              title="St Vincent"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
