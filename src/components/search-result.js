import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ArtistCard from "./artist-card.js";

class SearchResult extends Component {
  state =  {
    artist:[]
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {this.state.artist.map(
              (artista, i)=> {
                return <ArtistCard img={artista.image} title={artista.name} key={i}/>
              }
            )}







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

export default SearchResult;
