import React from 'react';
import './carson1.css';
import carson2 from '../Carson2/carson2';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const carson1 = () => {

  return (
    <div id="main-c">
      <div id="text-c">
      <p>I can hear little clicks inside my dream.</p>
        <Link id="line2-c" to="/carson2">Night drips its silver tap</Link>
        <Router>
          <Route exact path="/carson2" component={carson2} />
        </Router>
      </div>
    </div>
  );
}

export default carson1;