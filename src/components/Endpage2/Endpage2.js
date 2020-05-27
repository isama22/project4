import React from 'react';
import './Endpage2.css';
import NavBar from '../../components/NavBar/NavBar';

const Endpage2 = (props) => {
  return (
    <div className="main-div2">
      <NavBar user={props.user} handleLogout={props.handleLogout}/>
      <br></br><br></br><br></br><br></br>
      <div className="p2">
        <p id="headerp2">
          <strong>The Glass Essay</strong><em>Anne Carson</em>
          </p>
          <p>
          I
          <br></br>
          <br></br>
          I can hear little clicks inside my dream.
          Night drips its silver tap
          down the back.
          At 4 A.M. I wake. Thinking
          <br></br>
          <br></br>
          of the man who
          left in September.
          His name was Law.
          <br></br>
          <br></br>
          My face in the bathroom mirror
          has white streaks down it.
          I rinse the face and return to bed.
          Tomorrow I am going to visit my mother.
          <br></br>
          <br></br>
          <br></br>
          SHE
          <br></br>
          <br></br>
          She lives on a moor in the north.
          She lives alone.
          Spring opens like a blade there.
        </p>
      </div>

    </div>
  );
}
export default Endpage2;