import React from 'react';
import './EnterPage.css';
import dana1 from '../../pages/dana1/dana1';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const EnterPage = () => {
  return (
    <div className="EnterPage">
      <br></br><br></br><br></br>
      <div className="border">
        <h2>follow a line</h2>
        {/* <p>put in three sentences as links, need to import those pages, have the Link and Route components</p> */}
        <div id="pdiv">
          <Link id="p1" to="/dana1">The heat out there this evening</Link>

          <p id="p2">I can hear little clicks inside my dream.</p>
          

          <p id="p3">There goes the</p>
          <Router>
          <Route exact path="/dana1" component={dana1} />
          </Router>
        </div>
      </div>
    </div>
  );
}
export default EnterPage;