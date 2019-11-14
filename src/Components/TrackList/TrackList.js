import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';




//TrackList Component
export default class TrackList extends React.Component {
  //TrackList render will map out each of the objects within the state
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return (
            <Track
              onRemove={this.props.onRemove}
              isRemoval={this.props.isRemoval}
              onAdd={this.props.onAdd}
              key={track.id}
              track={track}
            />
          );
        })}
      </div>
    );
  }
}