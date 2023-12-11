import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, priceTotal, clearCart } = useContext(CartContext);

    const handleVaciar = () => {
        clearCart();
    }

    return (
        <div className="container">
            <h1 className="main-title">Carrito</h1>

            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <br />
                        <h3>{prod.name}</h3>
                        <p>Precio unit: ${prod.price}</p>
                        <p>Precio total: ${prod.price * prod.count}</p>
                        <p>Cant: {prod.count}</p>
                        <br />
                    </div>
                ))
            }

            {
                cart.length > 0 ?
                    <>
                        <h2>Precio total: ${priceTotal()}</h2>
                        <button onClick={handleVaciar}>Vaciar</button>
                        <Link to="/checkout">Finalizar compra</Link>
                    </> :
                    <h2>El carrito está vacío :(</h2>
            }

        </div>
    )
}

export default Cart