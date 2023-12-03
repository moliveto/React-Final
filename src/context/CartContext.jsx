import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInit = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(carritoInit)
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    const addToCart = (item, count) => {
        const newItem = { ...item, count };

        const newCart = [...cart];
        const isOnCart = newCart.find((p) => p.id === newItem.id);

        if (isOnCart) {
            isOnCart.count += count;
        } else {
            newCart.push(newItem);
        }
        setCart(newCart);
    }

    const countInCart = () => {
        return cart.reduce((acc, prod) => acc + prod.count, 0);
    }

    const priceTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.count, 0);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            countInCart,
            priceTotal,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext