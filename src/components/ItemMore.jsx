import React from 'react'
import { Link } from 'react-router-dom'

const ItemMore = ({ producto }) => {
    return (
        <div className="card-footer p-1 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
                <Link className="btn btn-secondary mt-auto ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
            </div>
        </div>
    )
}

export default ItemMore