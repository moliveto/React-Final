import React from 'react'
import { Link } from 'react-router-dom'
import { toCapital } from '../helpers/toCapital'

const Item = ({ producto }) => {
    return (
        // <div className="producto">
        //     <img src={producto.image} alt={producto.name} />
        //     <div>
        //         <h4>{producto.name}</h4>
        //         <p>Precio: ${producto.price}</p>
        //         <p>Categoría: {toCapital(producto.category)}</p>
        //         <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
        //     </div>
        // </div>

        <div className="flex font-sans rounded-xl bg-[var(--card-background-color)] bg-clip-border shadow-md max-[400px]:text-xs mb-2">
            <div className="flex-none w-48 relative">
                <img src={producto.image} alt={producto.name}
                    // className="absolute max-w-full h-auto object-cover inset-1 rounded-md"
                    className="w-full rounded-xl object-cover hover:cursor-pointer"
                    loading="lazy" />
            </div>
            <form className="flex-auto p-2">
                <div className="flex flex-wrap">
                    <h1 className="flex-auto text-lg font-semibold text-slate-900">
                        {producto.name}
                    </h1>
                    <div className="text-lg font-semibold text-slate-500">
                        ${producto.price}
                    </div>
                    <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                        {toCapital(producto.category)}
                    </div>
                </div>
                <div className="flex space-x-4 mb-2 text-sm font-medium">
                    <div className="flex-auto flex space-x-4">
                        <Link className="h-10 px-6 font-semibold rounded-md bg-black text-white" to={`/item/${producto.id}`}>Ver más</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Item