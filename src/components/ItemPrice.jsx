import React from 'react'
import "./ItemPrice.css";

const PriceTag = ({ price, currency }) => (
    <span className="price">
        <i></i>{currency}{price}
    </span>
);

const OfferTag = ({ offer, currency }) => (
    <span className="offer">
        <i className={"bi-sale"}></i>{currency}{offer}
    </span>
);


const ItemPrice = ({ producto }) => {

    let price = producto.price;
    let offer = producto.price - producto.discount;

    return (
        <div>
            {offer < price ? (
                <OfferTag offer={offer} currency="$" />
            ) : (
                <PriceTag price={price} currency="$" />
            )}
        </div>
    )
}

export default ItemPrice