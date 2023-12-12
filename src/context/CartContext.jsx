import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
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

        toast(`Se ha agregado el item "${item.name}" al carrito`, {
            duration: 2000,
            position: "top-right",

            // Styling
            style: {},
            className: '',

            // Custom Icon
            icon: '👏',

            // Change colors of success/error/loading icon
            iconTheme: {
                primary: '#000',
                secondary: '#fff',
            },

            // Aria
            ariaProps: {
                role: 'status',
                'aria-live': 'polite',
            },
        });
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