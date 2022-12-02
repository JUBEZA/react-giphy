import React, { Component } from 'react';

import Gif from './gif.jsx';

class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} />);
  }

  render () {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;

// class GifList extends Component {
//   render( ) {
//       return (
//         <div className="gif-list">
//           {this.props.gifs(gif => {
//             return <Gif id={gif.id} key={gif.id} />
//           })}
//         </div>
//     )
//   }
// }
