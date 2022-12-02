import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render( ) {
    return (
      <input type="text" className="form-control formsearch"
        onChange={this.handleUpdate}/>
    );
  }
}

export default SearchBar;
