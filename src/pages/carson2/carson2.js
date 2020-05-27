import React from 'react';
import './carson2.css';
import carson3 from '../../pages/carson3/carson3';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const carson2 = () => {

  return (
    <div id="main-carson1">
      <div>
        <Link to="/carson3">down the back.</Link>
        <Router>
          <Route exact path="/carson3" component={carson3} />
        </Router>
      </div>
    </div>
  );
}

export default carson2;