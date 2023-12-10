import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Mi Tienda
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">
                                Productos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products/Almacen">
                                Almacen
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products/Bebidas">
                                Bebidas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutus">
                                Nosotros
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contacto
                            </Link>
                        </li>
                    </ul>

                    <ul>
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav >

    )
}

export default Navbar