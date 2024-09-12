import React from 'react';
import './Business.css';

const Business = ({business}) => {
    return (
        <div className='businessContainer'>
            <div className='businessImage'>
                <img src={business.image}/>
            </div>
            <h2>{business.name}</h2>
            <div className='businessInfo'>
                <div className='businessLocation'>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipcode}</p>
                </div>
                <div className='businessReviews'>
                    <h3>{business.category}</h3>
                    <p className='businessRating'>{business.rating} Stars</p>
                    <p>{business.reviewCount} Reviews</p>
                </div>
            </div>
        </div>
    )
}

export default Business