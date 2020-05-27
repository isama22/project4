// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = (props) => {
//     let nav = props.user ?
//         <div>
//             <Link to="/">Home</Link>
//             {' '}
//             <Link to="/enter">Enter Page</Link>
//             {' '}
//             <Link to="/endpage1">Endpage1</Link>
//             {' '}
//             <Link to="/endpage2">Endpage2</Link>
//             {' '}
//             <Link to="/endpage3">Endpage3</Link>
//             {' '}
//             <Link to=''>LOG OUT</Link>
//             &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
//       <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
//         </div>
//         :
//         <div>
//             <Link to='/login' className='NavBar-link'>LOG IN</Link>
//             &nbsp;&nbsp;|&nbsp;&nbsp;
//       <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
//         </div>;

//     return (
//         <div className='NavBar'>
//             {nav}
//         </div>
//     );
// };

// export default NavBar;