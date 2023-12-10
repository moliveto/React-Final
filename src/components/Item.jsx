import React from 'react'
import { Link } from 'react-router-dom'
import { toCapital } from '../helpers/toCapital'
import ItemRating from './ItemRating'
import ItemPrice from './ItemPrice'
import "./Item.css";

const Item = ({ producto }) => {

    return (
        <div className="col">
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
                            {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                        </div>
                    </div>
                    <div className="card-footer p-1 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                            <Link className="btn btn-secondary mt-auto ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;