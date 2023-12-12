import React from 'react'
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemRating from './ItemRating'
import ItemPrice from './ItemPrice'
import ItemMore from './ItemMore'
import AddItemButton from "./AddItemButton";
import ItemQuantitySelector from "./ItemQuantitySelector"
import "./Item.css";

const Item = ({ producto: item, seeMore }) => {

    const { cart, addToCart } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    return (
        <div className="col producto">
            <div className="card border-secondary shadow-sm mb-3 my-1 mx-1">
                <div className="row g-3">
                    <div className="col-md-12">
                        <img className="card-img-top img-fluid article-img" src={item.image} alt={item.name} />
                    </div>
                    <div className="col-md-12 text-center">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <h6>{item.brand}</h6>
                            <div className="justify-content-center small text-warning mb-2"><ItemRating rating={item.rating} /></div>
                            <h6>{item.category}</h6>
                            <ItemPrice producto={item} />
                            <small className="text-body-secondary">Stock {item.stock}</small>
                        </div>
                    </div>
                    {/* <div classNamestyle={{ display: 'flex', alignItems: 'center' }}> */}
                    <div className="col-md-12 text-center">
                        <ItemQuantitySelector cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} />
                        <AddItemButton cantidad={cantidad} handleAgregar={() => { addToCart(item, cantidad) }} />
                    </div>
                    {seeMore && <ItemMore producto={item} />}
                </div>
            </div>
        </div>
    )
}

export default Item;