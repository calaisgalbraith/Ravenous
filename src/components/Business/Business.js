import React from 'react';

const business = {
    image: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'Sugar & Spice Thai Restaurant', 
    address: '1933 Massachusetts Ave',  
    city: 'Cambridge',  
    state: 'MA',  
    zipcode: '02140',  
    category: 'Thai',  
    rating: 4.5,  
    reviewCount: 90
}

const Business = () => {
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