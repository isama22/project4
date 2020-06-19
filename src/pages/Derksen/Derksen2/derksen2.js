import React from 'react';
import './Derksen2.css';
import { Link } from 'react-router-dom';

const Derksen2 = () => {
  return (
    <div id="derksen-2-main-div">
      <div id="derksen-2-text-div">
      <p>There goes the</p>
        <p>aluminum, the antimony, the arsenic</p>
        <Link className="derksen-link" to="/derksen3">the barium, the cadmium,</Link>
      </div>
    </div>
  );
}

export default Derksen2;