import React from 'react'

const Discount = ({ producto }) => {
    if (producto.discount <= 0) {
        return `$${producto.price}`;
    }
    let offer = producto.price - producto.discount


    return (
        <>
            <span className="text-muted text-decoration-line-through">${producto.price}</span>
            <span className="p-2 pl-3">${offer}</span>
        </>
    )
}

export default Discount