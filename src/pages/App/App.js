import React from 'react';
import './App.css';
import Home from '../../pages/Home/Home.js';
import EnterPage from '../../pages/EnterPage/EnterPage';
import dana1 from '../../pages/dana1/dana1';
import dana2 from '../../pages/dana2/dana2';
import dana3 from '../../pages/dana3/dana3';
import Endpage1 from '../../pages/Endpage1/Endpage1';
import Endpage2 from '../../pages/Endpage2/Endpage2';
import Endpage3 from '../../pages/Endpage3/Endpage3';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
// import userService from '../../utils/userService';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      // user: userService.getUser(),
    }
  }

  render() {
    return (
      <div className="App">
        <nav >
          <Link to="/">Home</Link>
          {/* {' '}
          <Link to="/enter">Enter Page</Link>
          {' '}
          <Link to="/endpage1">Endpage1</Link>
          {' '}
          <Link to="/endpage2">Endpage2</Link>
          {' '}
          <Link to="/endpage3">Endpage3</Link>
          &nbsp;&nbsp;&nbsp; */}
          <Link to="/login">login</Link>
          {' '}
          <Link to="/signup">sign up</Link>
        </nav>
        <Router>

          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" render={(props) => (
            <Home {...props} />
          )} />

          <Route exact path="/enter" render={(props) => (
            <EnterPage {...props} />
          )} />

          <Route exact path="/endpage1" render={(props) => (
            <Endpage1 {...props} />
          )} />

          <Route exact path="/endpage2" render={(props) => (
            <Endpage2 {...props} />
          )} />

          <Route exact path="/endpage3" render={(props) => (
            <Endpage3 {...props} />
          )} />

          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
            />
          } />

          <Route exact path='/login' render={() =>
            <LoginPage
            />
          } />
          
          <Route exact path="/dana1" component={dana1} />
          <Route exact path="/dana2" component={dana2} />
          <Route exact path="/dana3" component={dana3} />

        </Router>
      </div>
    );
  }
}
export default App;
