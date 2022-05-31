import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand >Dummy Project</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink exact="true" className="nav-link" to="/">
                            Home
                        </NavLink>

                        {localStorage.getItem('storeuser') == null ? <NavLink exact="true" className="nav-link" to="/login">
                            LogIn
                        </NavLink> : <NavLink exact="true" className="nav-link" to="/showuser">
                            User
                        </NavLink>}

                        {/* <NavLink exact className="nav-link" to="/contact">
                            Contact
                        </NavLink> */}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar