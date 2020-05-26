import React from 'react';
import './Home.css';
import EnterPage from '../../pages/EnterPage/EnterPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="Home">
          <br></br><br></br><br></br>
      <div className="home-img">
        <div className="home-div">
          {/* <p className="enter"><em>enter</em></p> */}
          <Link to="/enter" className="enter"><em>enter</em></Link>
          <Router>
          <Route exact path="/enter" render={(props) => (
            <EnterPage {...props} />
          )} />
          </Router>
        </div>
      </div>
    </div>
  );
}
export default Home;