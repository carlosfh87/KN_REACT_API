import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import Followers from '../containers/followers';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <SearchBar />
        <Followers />
      </div>
    );
  }
}
