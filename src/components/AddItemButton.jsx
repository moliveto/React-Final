import React from 'react'

const AddItemButton = ({ cantidad, handleAgregar }) => {
    return (
        <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar al carrito</button>
    )
}

export default AddItemButton