import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// const Hello = (props) => {
//   return <div>Hello, {props.name} </div>;
// }

class Hello extends Component {
  constructor (props) {
    super (props);

    this.state = {
      clicked: false
    };
  }

  render () {
    // BUILD AND RETURN HTML
    return (
      <div className={this.state.clicked ? 'cliked' : null}>
        Hello {this.props.name}
      </div>
    )
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello />, root);
}
