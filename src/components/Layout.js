import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class Layout extends Component {
  render() {
    return (
      <div className="app-container">
        <header>
        <Router>
          <Link to="/">
            <img className="logo" src="/img/logo-judo-heroes.png" alt="Judo Heroes logo" />
          </Link>
          </Router>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            This is a demo app to showcase <strong>universal Javascript</strong>
            with <strong>React</strong> and <strong>Express</strong>.
          </p>
        </footer>
      </div>
  );
}
}

export default Layout;