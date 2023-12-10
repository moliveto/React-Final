import * as React from 'react';
import { Link } from 'react-router-dom'
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <header className="relative">
            <nav className="header sticky top-0 flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow shadow-md border-solid border-t-2">
                <h1 className="w-3/12">
                    <Link className="menu-link font-bold text-xl" to="/">
                        Tienda Mia
                    </Link>
                </h1>

                <ul className="flex items-center hidden md:flex space-x-4">
                    <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <Link className="menu-link" to="/products">
                            Productos
                        </Link>
                    </li>
                    <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <Link className="menu-link" to="/products/Almacen">
                            Almacen
                        </Link>
                    </li>
                    <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <Link className="menu-link" to="/products/Bebidas">
                            Bebidas
                        </Link>
                    </li>
                    <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <Link className="menu-link" to="/aboutus">
                            Nosotros
                        </Link>
                    </li>
                    <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
                        <Link className="menu-link" to="/contact">
                            Contacto
                        </Link>
                    </li>
                </ul>

                <div className="w-3/12 flex justify-end">
                    <CartWidget />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;