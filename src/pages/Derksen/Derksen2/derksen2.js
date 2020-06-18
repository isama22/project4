import React from 'react';
import './derksen2.css';
import derksen3 from '../../../pages/Derksen/Derksen3/derksen3';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const derksen2 = () => {

  return (
    <div>
      <div >
        <Link to="/derksen3">the barium, the cadmium,</Link>
        <Router>
          <Route exact path="/derksen3" component={derksen3} />
        </Router>
      </div>
    </div>
  );
}

export default derksen2;