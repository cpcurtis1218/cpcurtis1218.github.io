import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => (
  <Navbar className="sticky-top bg-dark m-0 header">
    <h3>Charles Curtis</h3>
    <Nav className="ml-auto text-center">
      <NavLink exact to='/projects' activeClassName="selected" className="mx-1">Projects</NavLink>
      <NavLink exact to='/about' activeClassName="selected" className="mx-1">About</NavLink>
      <NavLink exact to='/resume' activeClassName="selected" className="mx-1">Resume</NavLink>
      <NavLink exact to='/contact' activeClassName="selected" className="mx-1">Contact</NavLink>
    </Nav>
  </Navbar>
)

export default Header
