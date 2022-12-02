import React, { Component } from 'react';
import giphy from 'ghiphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx'
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super (props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    }

    this.search("homer thinking");
  }

  search() = (query) => {
    giphy('1KMPHCBIOe3hOjJwCJQX49sRc6cMOoiM').search({
      q: query,
      rating: 'g'
      limit: 10
    }, function (error, result) => {
      this.setState({
        gifs: result.data
      })
    })
  }

  render () {
    const gifs = [
      { id: "xT9IgDEI1iZyb2wqo8" },
      { id: "3ohzdIrmkBVi08uouC" }
    ];
   return (
    <div>
      <div className="left-scene">
        <SearchBar searchFunction={this.search}/>
        <div className="selescted-gif">
          <Gif id="xT9IgDEI1iZyb2wqo8" />
        </div>
      </div>
      <div className="right-scene"> </div>
        <Giflist gifs={this.state.gifs}/>
    </div>
   );
  }
}

export default App;
