import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const MyNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    const closeNavbar = () => setExpanded(false);

    return (
        <Navbar expanded={expanded} expand="lg">
            <Navbar.Brand style={{ marginLeft: '10px' }} as={Link} to="/">Mi Tienda</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {/* <Nav.Link as={Link} to="/" onClick={closeNavbar}>
                        Inicio
                    </Nav.Link> */}

                    <Nav.Link as={Link} to="/products" onClick={closeNavbar}>
                        Productos
                    </Nav.Link>
                    <Nav.Link as={Link} to="/products/Almacen" onClick={closeNavbar}>
                        Almacen
                    </Nav.Link>
                    <Nav.Link as={Link} to="/products/Bebidas" onClick={closeNavbar}>
                        Bebidas
                    </Nav.Link>

                    <Nav.Link as={Link} to="/about" onClick={closeNavbar}>
                        Nosotros
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contact" onClick={closeNavbar}>
                        Contacto
                    </Nav.Link>

                    <CartWidget onClick={closeNavbar} />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
