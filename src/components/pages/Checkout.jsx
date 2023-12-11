import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("");

    const { cart, priceTotal, clearCart } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: priceTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                clearCart();
            })

    }

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div className="container">
            <h1 className="main-title">Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>

                <input type="text" required className="form-input px-4 py-3 rounded-full" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input type="email" required className="form-input px-4 py-3 rounded-full" placeholder="Ingresá tu e-mail" {...register("email")} />
                <input type="phone" required className="form-input px-4 py-3 rounded-full" placeholder="Ingresá tu teléfono" {...register("telefono")} />

                <button className="enviar" type="submit">Comprar</button>

            </form>
        </div>
    )
}

export default Checkout