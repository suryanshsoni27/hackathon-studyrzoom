import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
}  from "react-bootstrap";

function Header() {
  return (
    <div className="header">
     <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" ><h1>StudyRoomie</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
</Navbar>
      

      
      
    </div>
  )
}

export default Header
