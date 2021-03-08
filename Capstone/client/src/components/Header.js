import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavDropdown } from 'react-bootstrap'


function Header() {
    return(
        <div className="header">
           
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"><div className="title">React Phonebook</div></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Link to ="/" id="link">Home</Link>
    </Nav>
    <Nav>
      <NavDropdown title="Menu" id="collasible-nav-dropdown">
        <NavDropdown.Item><Link to="/main" id="link">Contact List</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/search" id="link">Search</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </div>

        
    )
}

export default Header