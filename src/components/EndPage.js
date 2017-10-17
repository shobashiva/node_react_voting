import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './Layout';

import style from './style';

class EndPage extends Component {
  render() {
    return (
        <div style={ style.commentBox }>
          <div>
            <h2>Thanks for voting!</h2>
          </div>

        </div>
    );
  }
}

export default EndPage;