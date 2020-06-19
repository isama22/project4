import React from 'react';
import './Dana1.css';

import { Link } from 'react-router-dom';
const Dana1 = () => {

  return (
    <div id="main">
      <div className="text">
        <p>The heat out there this evening</p>
        <Link className="link-to-next-line" to="/dana2">is contained heat like things keep applicable boxes</Link>
      </div>
    </div>
  );
}

export default Dana1;