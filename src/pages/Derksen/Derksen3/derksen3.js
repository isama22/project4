import React from 'react';
import './derksen3.css';
import Endpage3 from '../../../components/Endpage3/Endpage3';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const derksen3 = () => {

  return (
    <div>
      <div >
        <Link to="/endpage3">the cesium, the gadolinium</Link>
        <Router>
      <Route exact path="/endpage3" render={(props) => (
            <Endpage3 {...props} />
          )} />
      </Router>
      </div>
    </div>
  );
}

export default derksen3;