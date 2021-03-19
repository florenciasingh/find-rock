import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ArtistCard from "./artist-card.js";
import Loading from "./loading.js";
import Error from "./error.js";

class SearchResult extends Component {
  state = {
    loading: false,
    error: null,
    data: {
      similarartists: {
        artist: [],
      },
    },
  };

  componentWillReceiveProps(e) {
    let termino = e.busqueda;

    const key = "eadd1c8c9db120db1efc177618996c35";
    this.fetchAPI(
      `http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${termino}&api_key=${key}&format=json`
    );
  }

  fetchAPI = async (url) => {
    this.setState({
      loading: true,
    });

    try {
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      if (data.error) {
        this.setState({
          loading: false,
          error: true,
          errorMensaje: data.message,
        });
      } else {
        this.setState({
          data: data,
          loading: false,
          error: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        {this.state.error && (
          <Error errorMensaje={this.state.errorMensaje}></Error>
        )}

        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((artist, i) => {
              return (
                <ArtistCard
                  img={artist.image[0]["#text"]}
                  titulo={artist.name}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
