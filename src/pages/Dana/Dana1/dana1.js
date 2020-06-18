import React from 'react';
import './dana1.css';
import dana2 from '../../../pages/Dana/Dana2/dana2';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const dana1 = () => {

  return (
    <div id="main">
      <div id="text">
        <Link id="line2" to="/dana2">is contained heat like things keep applicable boxes</Link>
        <Router>
          <Route exact path="/dana2" component={dana2} />
        </Router>
      </div>
    </div>
  );
}

export default dana1;