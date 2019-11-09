import React from 'react';
import SearchResults from './Components/SearchResults/SearchResults';
import SearchBar from './Components/SearchBar/SearchBar';
import Playlist from './Components/Playlist/Playlist';
import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: "name1", artist: "artist1",album: "album1", id: "1" },
        { name: "name2", artist: "artist2", album: "album2", id: "2" },
        { name: "name3", artist: "artist3", album: "album3", id: "3" },
        { name: "name4", artist: "artist4", album: "album4", id: "4" }
      ],
      playlistName: "Playlist Name",
      playlistTracks:[
        {name: "song1", artist: "artist1",album: "album1", id: "1" },
        { name: "song2", artist: "artist2", album: "album2", id: "2" },
        { name: "song3", artist: "artist3", album: "album3", id: "3" }
      ]
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track){
    const checker = this.state.playlistTracks.some(current=> current.id === track.id);
    if(!checker) this.state.playlistTracks.push(track);
  }
  
  
  render() {
    return (
      <div>
        <h1>
          mi<span className="highlight">x</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist" />
          <SearchResults 
            onAdd = {this.addTrack}
            searchResults={this.state.searchResults} />
          <Playlist 
            playname={this.state.playlistName} 
            playlist={this.state.playlistTracks}/>
        </div>
      </div>
    );
  }
}