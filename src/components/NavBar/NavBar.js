import React from 'react';
import { Link } from 'react-router-dom';


const NavBar  = (props) => {
        const nav = props.user ?
            <div>
                <Link to="/">Home</Link>
                {' '}
                <Link to=''>log out</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>logged in as: {props.user.name}</span>
            </div>
            :
            <div>
                <Link to='/login' className='NavBar-link'>LOG IN</Link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
            </div>

    
            return (
                <div className='NavBar'>
                    {nav}
                </div>
            ); 
}

export default NavBar;