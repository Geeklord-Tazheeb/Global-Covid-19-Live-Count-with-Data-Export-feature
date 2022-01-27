import React from 'react';
import {Navbar} from 'react-bootstrap';

const NavbarScreen = () => {
    return (
        <Navbar bg="danger" variant="dark">
            <Navbar.Brand href="#home">
                COVID-19 : Live Count
            </Navbar.Brand>
        </Navbar>
    );
}

export default NavbarScreen;