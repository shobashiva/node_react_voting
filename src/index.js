// import React from 'react';
// import ReactDOM from 'react-dom';
// // import { BrowserRouter } from 'react-router-dom'
// import CommentBox from './CommentBox';

// ReactDOM.render(
//  <CommentBox 
//  url='http://localhost:3001/api/comments'
//  pollInterval={2000}/>,
//  document.getElementById('app')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import App from './components/App';
import CommentBox from './components/CommentBox';
import Layout from './components/Layout';
import AthleteIndex from './components/AthleteIndex';
import athletes from './data/athletes';

const renderIndex = () => <AthleteIndex data={athletes}/>;

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
         <Route path='/comment' component={CommentBox}/>
         <Route path='/vote' render={renderIndex}/>
      </div>
  </Router>,
  document.getElementById('root')
);