import React from 'react'

const ItemRating = ({ rating }) => {
    const stars = [];

    for (let i = 0; i < rating; i++) {
        stars.push(<i className="bi-star-fill"></i>);
    }

    return (
        <>
            {stars}
        </>
    );
};

export default ItemRating