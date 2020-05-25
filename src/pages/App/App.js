import React from 'react';
import '../App/App.css';
import Home from '../../pages/Home/Home.js';
import Page1 from '../../pages/Page1/Page1';
import Endpage1 from '../../pages/Endpage1/Endpage1';
import Endpage2 from '../../pages/Endpage2/Endpage2';
import Endpage3 from '../../pages/Endpage3/Endpage3';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <body className="App">
        <nav >
          <Link to="/">Home</Link>
          {' '}
          <Link to="/page1">Page1</Link>
          {' '}
          <Link to="/endpage1">Endpage1</Link>
          {' '}
          <Link to="/endpage2">Endpage2</Link>
          {' '}
          <Link to="/endpage3">Endpage3</Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/login">login</Link>
          {' '}
          <Link to="/signup">sign up</Link>
        </nav>
        <Router>

          <Route exact path="/" component={Home} />
          <Route exact path="/" render={(props) => (
            <Home {...props} />
          )} />

          <Route exact path="/page1" render={(props) => (
            <Page1 {...props} />
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

        </Router>
      </body>
    );
  }
}
export default App;
