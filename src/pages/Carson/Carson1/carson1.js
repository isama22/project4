import React from 'react';
import './Carson1.css';
import { Link } from 'react-router-dom';

const Carson1 = () => {
  return (
    <div id="carson-1-main-div">
      <div id="carson-1-text-div">
      <p>I can hear little clicks inside my dream.</p>
        <Link className="carson-link" to="/carson2">Night drips its silver tap</Link>
      </div>
    </div>
  );
}

export default Carson1;