import { useContext, useState } from "react";
import { toCapital } from "../helpers/toCapital"
import { CartContext } from "../context/CartContext";
import AddItemButton from "./AddItemButton";
import ItemQuantitySelector from "./ItemQuantitySelector"


const ItemDetail = ({ item }) => {

    const { cart, addToCart } = useContext(CartContext);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    return (
        <div className="container">
            <div className="flex font-sans rounded border-inherit">
                <div className="flex-none w-48 relative">
                    <img src={item.image} alt={item.name}
                        // className="max-w-full h-auto object-cover inset-0 rounded-md"
                        className="absolute inset-1 w-full h-full object-cover"
                        loading="lazy" />
                </div>
                <div className="flex-auto p-6">
                    <div className="flex flex-wrap">
                        <h1 className="flex-auto text-lg font-semibold text-slate-900">
                            {item.name}
                        </h1>
                        <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                            {toCapital(item.brand)}
                        </div>
                        <div className="text-lg font-bold text-slate-500">
                            ${item.price}
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-6 text-sm font-medium">
                        <ItemQuantitySelector cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} />
                        <AddItemButton cantidad={cantidad} handleAgregar={() => { addToCart(item, cantidad) }} />
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ItemDetail