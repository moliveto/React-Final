import React from 'react'

const ItemQuantitySelector = ({ cantidad, handleRestar, handleSumar }) => {
    return (
        <div>
            <div className="item-count">
                <button onClick={handleRestar}>-</button>
                <p>{cantidad}</p>
                <button onClick={handleSumar}>+</button>
            </div>
        </div>
    )
}

export default ItemQuantitySelector