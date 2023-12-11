import React from 'react'
import ItemRating from './ItemRating'
import ItemPrice from './ItemPrice'
import ItemMore from './ItemMore'
import "./Item.css";

const Item = ({ producto }) => {

    return (
        <div className="col producto">
            <div className="card border-secondary shadow-sm mb-3 my-1 mx-1">
                <div className="row g-3">
                    <div className="col-md-12">
                        <img className="card-img-top img-fluid article-img" src={producto.image} alt={producto.name} />
                    </div>
                    <div className="col-md-12 text-center">
                        <div className="card-body">
                            <h5 className="card-title">{producto.name}</h5>
                            <h6>{producto.brand}</h6>
                            <div className="justify-content-center small text-warning mb-2"><ItemRating rating={producto.rating} /></div>
                            <h6>{producto.category}</h6>
                            <ItemPrice producto={producto} />
                            <small className="text-body-secondary">Stock {producto.stock}</small>
                        </div>
                    </div>
                    <ItemMore producto={producto} />
                </div>
            </div>
        </div>
    )
}

export default Item;