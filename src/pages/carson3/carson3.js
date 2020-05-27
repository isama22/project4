import React from 'react';
import './carson3.css';
import Endpage2 from '../../components/Endpage2/Endpage2';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const carson3 = () => {

  return (
    <div>
      
        <Link to="/endpage2">At 4 A.M. I wake. Thinking</Link>
        <Router>
        <Route exact path="/endpage2" render={(props) => (
            <Endpage2 {...props} />
          )} />
        </Router>
     
    </div>
  );
}

export default carson3;