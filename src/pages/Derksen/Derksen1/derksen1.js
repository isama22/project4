import React from 'react';
import './derksen1.css';
import { Link } from 'react-router-dom';

const derksen1 = () => {
  return (
    <div id="derksen-1-main-div">
      <div id="derksen-1-text-div">
        <p>There goes the</p>
        <Link className="derksen-link" to="/derksen2">aluminum, the antimony, the arsenic</Link>
      </div>
    </div>
  );
}

export default derksen1;