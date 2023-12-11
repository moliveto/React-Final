import Item from "./Item";
// import { useContext, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import AddItemButton from "./AddItemButton";
// import ItemQuantitySelector from "./ItemQuantitySelector"


const ItemDetail = ({ item }) => {

    // const { cart, addToCart } = useContext(CartContext);
    // const [cantidad, setCantidad] = useState(1);

    // const handleRestar = () => {
    //     cantidad > 1 && setCantidad(cantidad - 1)
    // }
    // const handleSumar = () => {
    //     cantidad < item.stock && setCantidad(cantidad + 1)
    // }

    return (
        <div className="container row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Item producto={item} key={item.id} />
            {/* <div className="flex space-x-4 mb-6 text-sm font-medium">
                <ItemQuantitySelector cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} />
                <AddItemButton cantidad={cantidad} handleAgregar={() => { addToCart(item, cantidad) }} />
            </div> */}
        </div>
    )
}

export default ItemDetail