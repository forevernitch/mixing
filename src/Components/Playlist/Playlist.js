import React from 'react';
import TrackList from '../TrackList/TrackList.js'
import './Playlist.css';


//Playlist Component
export default class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.changeName = this.changeName.bind(this);
  }

  changeName(e) {
    this.props.changeName(e.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} />
        <TrackList
          onRemove={this.props.onRemove}
          isRemoval={true}
          tracks={this.props.playlist}
          onAdd={this.props.onAdd}
        />
        <button className="Playlist-save" onClick={this.props.onSave}>
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}