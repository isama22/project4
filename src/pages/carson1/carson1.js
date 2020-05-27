import React from 'react';
import './carson1.css';
import carson2 from '../../pages/carson2/carson2';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const carson1 = () => {

  return (
    <div>
      <div>
        <Link to="/carson2">Night drips its silver tap</Link>
        <Router>
          <Route exact path="/carson2" component={carson2} />
        </Router>
      </div>
    </div>
  );
}

export default carson1;