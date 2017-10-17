import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './Layout';

import style from './style';

class App extends Component {
  render() {
    return (
        <div style={ style.commentBox }>
          <div>
            <h2>Welcome to React</h2>
          </div>
          <div>
            {this.props.children}
          </div>

        </div>
    );
  }
}

export default App;