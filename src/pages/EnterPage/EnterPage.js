import React from 'react';
import './EnterPage.css';
import Dana1 from '../../pages/Dana/Dana1/Dana1';
import Carson1 from '../../pages/Carson/Carson1/Carson1';
import Derksen1 from '../../pages/Derksen/Derksen1/Derksen1';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const EnterPage = () => {
  return (
    <div className="EnterPage">
      <br></br><br></br><br></br>
      <div className="border">
        <h2>follow a line</h2>
        <div id="pdiv">
          <Link id="p1" className="link-to-next-line" to="/dana1">The heat out there this evening</Link>

          <Link id="p2" to="/carson1">I can hear little clicks inside my dream.</Link>
          
          <Link id="p3" to="/derksen1">There goes the</Link>
          
          <Router>
          <Route exact path="/dana1" component={Dana1} />
          <Route exact path="/carson1" component={Carson1} />
          <Route exact path="/derksen1" component={Derksen1} />
          </Router>
        </div>
      </div>
    </div>
  );
}
export default EnterPage;