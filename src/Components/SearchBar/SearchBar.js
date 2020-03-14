import React from 'react';
import './SearchBar.css';

//SearchBar Component
export default class SearchBar extends React.Component {
  //Check this component since it does not work
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleInput.bind(this);
  }
  handleInput(e) {
    this.setState({ searchTerm: e.target.value });
  }

  search() {
    //Passes the state of the term
    this.props.onSearch(this.state);
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleInput}
        />
        <button 
          className="SearchButton"
          onClick={this.search}>SEARCH</button>
      </div>
    );
  }
}
