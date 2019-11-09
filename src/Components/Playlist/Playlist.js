import React from 'react';
import TrackList from '../TrackList/TrackList.js'
import './Playlist.css';


//Playlist Component
export default class Playlist extends React.Component {
    render() {
      return (
        <div className="Playlist">
          <input defaultValue={"New Playlist"} />
          <TrackList tracks={this.props.playlist}/>
          <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
      );
    }
  }