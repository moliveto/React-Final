import React from 'react'

const Rating = ({ rating }) => {
    const stars = [];

    for (let i = 0; i < rating; i++) {
        stars.push(<div key={i} className="bi-star-fill"></div>);
    }

    return (
        <>
            {stars}
        </>
    );
};

export default Rating