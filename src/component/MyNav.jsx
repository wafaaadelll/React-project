import React from 'react'
import {Navbar , Container , Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import {useSelector} from 'react-redux'

export default function MyNav() {
  const state = useSelector((item)=>item.handleCart)
  return (
    <div className='nn'>
      <div style={{ height: "40px" }} className="text-white bg-warning text-center pt-2">
            <Container>
                <p>Call Free Support : +02112424242</p>
            </Container>
        </div>
        <div>
        <Navbar expand="lg" bg='dark'>
        <Container>
            <Navbar.Brand href="#home" className='text-light'><img src="https://icon-library.com/images/shop-icon-png/shop-icon-png-6.jpg" width={'30px'} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavLink className='text-light a' to="/home">Home</NavLink>
                <NavLink className='text-light a' to="/about">About</NavLink>
                <NavLink className='text-light a' to="/myitems">Products</NavLink>
                <NavLink className='text-light a' to="/register">register</NavLink>
            </Nav>
            </Navbar.Collapse>
            
            <NavLink to='/cart' className="btn text-warning">
            <FaCartPlus className='text-warning fs-3' />
            cart({state.length})
            </NavLink>
        </Container>
        </Navbar>
        </div>
    </div>
  )
}
