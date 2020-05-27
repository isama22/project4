import React from 'react';
import './EndPage3.css';
import NavBar from '../../components/NavBar/NavBar';

const Endpage3 = (props) => {
  return (
    <div className="behindmain4">
       <NavBar user={props.user} handleLogout={props.handleLogout}/>
      <br></br>
      <div className="main-div4">   
       
      <div className="p4">
      <p id="headerp4">
        <strong>In Memory of My Heavy Metal Years</strong>
        <br></br><br></br>
        <em>Jeff Derksen</em>
      <p id="body4">
        <br></br><br></br>
        There goes the
        aluminum, the antimony, the arsenic
        the barium, the cadmium, 
        the cesium, the gadolinium
        the lead
        the mercury
        the nickel, the thalium, and 
        the tin. 
        <br></br><br></br>
        There goes that job spraying lawns
        with chemicals, driving the Merc
        three-quarter ton 
        with a tank on the back
        and no brakes
        through West Vancouver, bouncing
        the wheels against the curb
        to stop
        and on the steep
        majesterial streets
        that afford such views
        <a href="https://www.poetryfoundation.org/poems/146552/in-memory-of-my-heavy-metal-years" target="_blank" rel="noopener noreferrer" id="link">...</a>
        </p>
      </p>
      <form>
        <input value="add your own line"/>
        <button>submit</button>
      </form>
      </div>
      </div>
      </div>
  );
}
export default Endpage3;