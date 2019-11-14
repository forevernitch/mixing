import React from 'react';
import './SearchBar.css';

//SearchBar Component
export default class SearchBar extends React.Component {
  //Check this component since it does not work
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  handleTermChange(e) {
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
          onChange={this.handleTermChange}
        />
        <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
}
