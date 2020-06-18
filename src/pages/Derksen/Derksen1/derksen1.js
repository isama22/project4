import React from 'react';
import './derksen1.css';
import derksen2 from '../../../pages/Derksen/Derksen2/derksen2';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const derksen1 = () => {

  return (
    <div>
      <div >
        <Link to="/derksen2">aluminum, the antimony, the arsenic</Link>
        <Router>
          <Route exact path="/derksen2" component={derksen2} />
        </Router>
      </div>
    </div>
  );
}

export default derksen1;