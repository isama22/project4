import React from 'react';
import '../App/App.css';
import Home from '../../pages/Home.js';
import { Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
    <div className="App">
      <Route path="/" render={(props) => (
        <Home {...props}/>
      )} />
    </div>
  );
  }
  
}

export default App;
