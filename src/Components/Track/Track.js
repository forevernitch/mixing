import React from 'react';
import './Track.css';



export default class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  //Will pass the current track as a parameter to get removed
  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  //Will use the passed method from App to pass the track as a parameter
  addTrack() {
    this.props.onAdd(this.props.track);
  }

  //Will check the isRemoval attribute to render "-" or "+"
  renderAction() {
    if (this.props.isRemoval === false)
      return (
        <button className="Track-action" onClick={this.addTrack}>
          +
        </button>
      );
    else
      return (
        <button className="Track-action" onClick={this.removeTrack}>
          -
        </button>
      );
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album} |
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}