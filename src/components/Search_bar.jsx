import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    console.log(event.target.value);
  }

  render( ) {
    return (
      <input type="text" className="form-control formsearch"
        onChange={this.handleUpdate}/>
    );
  }
}

export default SearchBar;
