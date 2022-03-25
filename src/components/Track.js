import React from 'react'
import data from '../dataAlbum/single-sample.js';

const Track = () => {
  return (
          <div className="App">
            <div className="playlist-form">
            <img src = {data.album.images[1].url}></img>
            <h1>{data.name}</h1>
            <h3>{data.artists[0].name} - {data.album.name}</h3>
            <button className="btn btn-primary">PLAY</button>
            </div>
          </div>
        );
}

export default Track