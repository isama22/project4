import React from 'react';
import './dana2.css';
import dana3 from '../../pages/dana3/dana3';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const dana2 = () => {

  return (
    <div id="main2">
      {/* <p id="line3">
      at the ready then subsume their diverging constituent parts
      </p> */}
      <Link id="line3" to="/dana3">at the ready then subsume their diverging constituent parts</Link>
      <Router>
        <Route exact path="/dana3" component={dana3} />
      </Router>
      </div>
  );
}

export default dana2;