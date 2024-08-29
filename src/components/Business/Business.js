import React from 'react';

const Business = ({business}) => {
    return (
        <div>
            <img src={business.image}/>
            <h1>{business.name}</h1>
            <div>
                <p>{business.address}</p>
                <p>{business.city}, {business.state} {business.zipcode}</p>
            </div>
            <div>
                <p>{business.category}</p>
                <p>{business.rating} Stars ({business.reviewCount} Reviews)</p>
            </div>
        </div>
    )
}

export default Business