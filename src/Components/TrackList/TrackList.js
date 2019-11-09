import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';




//TrackList Component
export default class TrackList extends React.Component {
    render() {
      //Inside the TrackList return you need to use a map method to render Track component
      return (
        <div className="TrackList">
          {this.props.tracks.map(track => {
            console.log(track);
            return <Track 
                     isRemoval={this.props.isRemoval}
                     onAdd={this.props.onAdd}
                     key={track.id} 
                     track={track} />;
          })}
        </div>
      );
    }
  }
  