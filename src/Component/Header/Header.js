import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import logo from './../../assets/eye-dropper.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import '../../../src/App.css'



 const Header = () => {
     const {AllContexts}=useAuth();
     const {user,logOut}=AllContexts;
     const {displayName, photoURL}= user;
    return (
        <div>
        <Navbar bg="info" expand="lg">
            <Container>
                <Navbar.Brand className="text-white fs-2" to="/home"> 
                   
                        <Badge pill bg="light">
                        <img src={logo} alt="logo" />
                        </Badge>{' '}
                         Retina
                 </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto align-items-center">
                    <Nav.Link as={NavLink} className="text-white text-uppercase fw-bold" to="/home">Home</Nav.Link>
                    <Nav.Link as={NavLink}  className="text-white text-uppercase fw-bold" to="/service">Service</Nav.Link>
                    <Nav.Link as={NavLink}  className="text-white text-uppercase fw-bold" to="/about">About</Nav.Link>
                    <Nav.Link as={NavLink}  className="text-white text-uppercase fw-bold" to="/contact">Contact</Nav.Link>

                    { !user.displayName ?
                       (<>
                        <Nav.Link as={NavLink}  className="text-white text-uppercase fw-bold" to="/login">Log-in</Nav.Link>

                        <Nav.Link  as={NavLink} className="text-white text-uppercase fw-bold" to="/signup">Sign-up</Nav.Link>
                       </>):(
                           
                               <div className="text-center ">
                                   
                               <span className="img__wrap"><img className="img__img" src={photoURL} alt="profile-img" style={{width: "45px",borderRadius: "50%",marginRight:'5px'}}/>
                               <h6 className="img__description">{displayName}</h6></span>
                                    <button onClick={logOut} className="btn btn-outline-secondary fs-6 " alart='sign-out'>
                                      <FontAwesomeIcon icon={faSignOutAlt}  /> sign-out
                                    </button>
                                </div>

                           
                       )
                    }

                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default Header;