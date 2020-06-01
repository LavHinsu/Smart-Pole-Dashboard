import React from 'react';
import { Navbar, Nav,} from 'react-bootstrap'


const NavbarComponent = (props) => {

    return (
        <div>
            <div >

                <div >
                    <Navbar bg="light" expand="lg" style={{ color: "blue" }} navbar-default="true" sticky="top">
                        <Navbar.Brand style={{ fontSize: "x-large", fontFamily: 'lato' }} href="/">Smart Pole Management System</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            </Nav>
                            <style>
                                @import url('https://fonts.googleapis.com/css2?family=Lato:ital@1&display=swap');
                            </style>
                            <Nav>
                                <Nav.Link style={{ color: "black", fontSize: "large", fontFamily: 'Lato' }} href="/">Dashboard</Nav.Link>
                                <Nav.Link style={{ color: "black", fontSize: "large", fontFamily: 'Lato' }} href="/Analytics"  >Analytics</Nav.Link>
                                <Nav.Link style={{ color: "black", fontSize: "large", fontFamily: 'Lato' }} href="/Report"  >Report</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

            </div>
        </div>
    )


}
export default NavbarComponent