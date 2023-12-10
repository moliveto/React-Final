import React from 'react'
import { Link } from 'react-router-dom'
import { toCapital } from '../helpers/toCapital'
import Rating from './Rating'
import Discount from './Discount'

const Item = ({ producto }) => {

    return (
        <div id={producto.id} className="card h-100 my-1 mx-1">
            <div className="badge bg-dark text-white position-absolute">{producto.discount > 0 ? 'Oferta' : ''}</div>
            <img className="card-img-top img-fluid article-img" src={producto.image} alt={producto.name} />
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{producto.name}</h5>
                    <h6 className="">{producto.category}</h6>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                        <Rating rating={producto.rating} />
                    </div>
                    <Discount producto={producto} />
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    <Link className="btn btn-secondary mt-auto ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
                </div>
            </div>
        </div>

        // <div className="flex font-sans rounded-xl bg-[var(--card-background-color)] bg-clip-border shadow-md max-[400px]:text-xs mb-2">
        //     <div className="flex-none w-48 relative">
        //         <img src={producto.image} alt={producto.name}
        //             // className="absolute max-w-full h-auto object-cover inset-1 rounded-md"
        //             className="w-full rounded-xl object-cover hover:cursor-pointer"
        //             loading="lazy" />
        //     </div>
        //     <form className="flex-auto p-2">
        //         <div className="flex flex-wrap">
        //             <h1 className="flex-auto text-lg font-semibold text-slate-900">
        //                 {producto.name}
        //             </h1>
        //             <div className="text-lg font-semibold text-slate-500">
        //                 ${producto.price}
        //             </div>
        //             <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
        //                 {toCapital(producto.category)}
        //             </div>
        //         </div>
        //         <div className="flex space-x-4 mb-2 text-sm font-medium">
        //             <div className="flex-auto flex space-x-4">
        //                 <Link className="h-10 px-6 font-semibold rounded-md bg-black text-white" to={`/item/${producto.id}`}>Ver más</Link>
        //             </div>
        //         </div>
        //     </form>
        // </div>
    )
}

export default Item