import React from 'react';
import './dana3.css';
import Endpage1 from '../../components/Endpage1/Endpage1';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const dana3 = () => {

  return (
    <div id="main3">
      <div id="text3">
      {/* <p id="line4">
      long ambivalent talks into midnight, all those
      </p> */}
      <Link id="line4" to="/endpage1">long ambivalent talks into midnight, all those</Link>
      <Router>
      <Route exact path="/endpage1" render={(props) => (
            <Endpage1 {...props} />
          )} />
      </Router>
         </div>
      </div>
  );
}

export default dana3;