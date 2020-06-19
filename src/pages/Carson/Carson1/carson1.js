import React from 'react';
import './carson1.css';
import { Link } from 'react-router-dom';

const carson1 = () => {
  return (
    <div id="carson-1-main-div">
      <div id="carson-1-text-div">
      <p>I can hear little clicks inside my dream.</p>
        <Link className="carson-link" to="/carson2">Night drips its silver tap</Link>
      </div>
    </div>
  );
}

export default carson1;