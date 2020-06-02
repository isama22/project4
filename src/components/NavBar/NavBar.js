import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
    const nav = props.user ?
        <div className="nav">
            <Link to="/" className="home">Home</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='' onClick={props.handleLogout}>Log out</Link>
            {/* <Link to="/endpage1">endpage1</Link> */}
            <span>logged in as: {props.user.name}</span>
        </div>
        :
        <div className="nav">
            <Link to='/login'>Log in</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/signup'>Sign up</Link>
        </div>
    return (
        <div className='NavBar'>
            {nav}
        </div>
    )}
export default NavBar;