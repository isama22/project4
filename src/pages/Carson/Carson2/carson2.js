import React from 'react';
import './Carson2.css';
import Carson3 from '../Carson3/Carson3';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Carson2 = () => {

  return (
    <div id="main2-c">
      <div id="text2-c">
      <p>I can hear little clicks inside my dream.</p>
        <p>Night drips its silver tap</p>
        <Link id="line3-c" to="/carson3">down the back.</Link>
        <Router>
          <Route exact path="/carson3" component={Carson3} />
        </Router>
      </div>
    </div>
  );
}

export default Carson2;