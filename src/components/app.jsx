import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx'
import GifList from './gif_list.jsx';

class App extends Component {
  render () {
    const gifs = [
      { id: "xT9IgDEI1iZyb2wqo8" },
      { id: "3ohzdIrmkBVi08uouC" }
    ];
   return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selescted-gif">
          <Gif id="xT9IgDEI1iZyb2wqo8" />
        </div>
      </div>
      <div className="right-scene"> </div>
        <Giflist gifs={gifs}/>
    </div>
   );
  }
}

export default App;
