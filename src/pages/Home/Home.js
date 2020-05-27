import React from 'react';
import './Home.css';
import EnterPage from '../../pages/EnterPage/EnterPage';
// import NavBar from '../../components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="Home">
      {/* <NavBar user={props.user} handleLogout={props.handleLogout}/> */}
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