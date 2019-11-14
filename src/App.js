import React from 'react';
import SearchResults from './Components/SearchResults/SearchResults';
import SearchBar from './Components/SearchBar/SearchBar';
import Playlist from './Components/Playlist/Playlist';
import './App.css';
import Spotify from './util/Spotify.js'

export default //App Component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "name1", artist: "artist1", album: "album1", id: 1 },
        { name: "name2", artist: "artist2", album: "album2", id: 2 },
        { name: "name3", artist: "artist3", album: "album3", id: 3 },
        { name: "name4", artist: "artist4", album: "album4", id: 4 }
      ],
      playlistName: "Playlist Name",
      playlistTracks: [
        { name: "song1", artist: "artist1", album: "album1", id: 1 },
        { name: "song2", artist: "artist2", album: "album2", id: 2 },
        { name: "song3", artist: "artist3", album: "album3", id: 3 }
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updateName = this.updateName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  updateName(name) {
    this.setState({ playlistName: name });
  }

  //This method should return a filtered array of the objects that did not match that id
  removeTrack(track) {
    const removed = this.state.playlistTracks.filter(current => {
      return current.id !== track.id;
    });
    this.setState({ playlistTracks: removed });
  }

  //Will check a condition if met then it will concatinate the array with new object
  addTrack(track) {
    const found = this.state.playlistTracks.some(
      current => current.id === track.id
    );
    if (!found) {
      this.setState({
        playlistTracks: [...this.state.playlistTracks, track]
      });
    }
  }

  savePlaylist() {
    const trackURIs = [];
  }

  search(value) {
    console.log(value);
  }

  render() {
    return (
      <div>
        <h1>
          mi<span className="highlight">x</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist" />
          <SearchResults
            onAdd={this.addTrack}
            searchResults={this.state.searchResults}
          />
          <Playlist
            changeName={this.updateName}
            playname={this.state.playlistName}
            playlist={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onSave={this.savePlaylist}
          />
        </div>
      </div>
    );
  }
}

//console.log(Spotify.getAccessToken)