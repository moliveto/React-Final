import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { countInCart } = useContext(CartContext);

    return (
        <div>
            <Link className="menu-link" to="/cart">
                Carrito
                <span className="numerito">{countInCart()}</span>
            </Link>
        </div>
    )
}

export default CartWidget