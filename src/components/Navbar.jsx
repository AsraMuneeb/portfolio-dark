
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NavBar = ({activeSection}) => {
  const [navColor, setNavColor] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 68) {
        setNavColor('dark');
      } else {
        setNavColor('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrolling = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <Navbar expand="lg" className={`navbar-custom ${navColor  ? 'dark': ''}`} fixed="top">
      <Navbar.Brand>Asra's Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto links">
          <Nav.Link
            onClick={() => scrolling('home')}
            className={activeSection === 'home' ? 'active-link' : ''}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => scrolling('about')}
            className={activeSection === 'about' ? 'active-link' : ''}
          >
            About Me
          </Nav.Link>
          <Nav.Link
            onClick={() => scrolling('tools')}
            className={activeSection === 'tools' ? 'active-link' : ''}
          >
            Skills
          </Nav.Link>
          <Nav.Link
            onClick={() => scrolling('projects')}
            className={activeSection === 'projects' ? 'active-link' : ''}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            onClick={() => scrolling('contact')}
            className={activeSection === 'contact' ? 'active-link' : ''}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;


// import React from 'react'
// import { Navbar, Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Navbar.css'
// import {useState} from 'react'
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';


// const NavBar = () => {
//   const [navColor, setNavColor] = useState('');

//   useEffect(() => {
//     const handleScroll = () => {
//         console.log("window.scrollY", window.scrollY)
//         if (window.scrollY >= 68) {
//           setNavColor( 'dark')
//         } else {
//           setNavColor('')
//         }
      
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []); 

//   const scrolling = (id) => {
//     const section = document.getElementById(id);
//     section.scrollIntoView({ behavior: 'smooth' });
//   };

// return(

//     <Navbar expand="lg" className={`navbar-custom ${navColor  ? 'dark': ''}`} fixed="top" >
//       <Navbar.Brand >Asra's Portfolio</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggler'/>
//       <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
//         <Nav  className="ml-auto links">
//         <Nav.Link onClick={()=>scrolling('home')} >Home</Nav.Link>
//           <Nav.Link onClick={()=>scrolling('about')}  >About Me</Nav.Link>
//           <Nav.Link onClick={()=>scrolling('tools')} >Skills</Nav.Link>
//           <Nav.Link onClick={()=>scrolling('projects')}  >Projects</Nav.Link>
//           <Nav.Link onClick={()=>scrolling('contact')} >Contact</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
// )
// }

// export default NavBar
