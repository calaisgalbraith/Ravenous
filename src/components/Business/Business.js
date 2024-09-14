import React from 'react';
import './Business.css';

const Business = ({business}) => {
    return (
        <div className='businessContainer'>
            <div className='businessImage'>
                <img src={business.img} alt='businessPic'/>
            </div>
            <p className='businessName'>{business.name}</p>
            <div className='businessInfo'>
                <div>
                    <p>{business.address}</p>
                </div>
                <div>
                    <p className='businessRating'>{business.category}</p>
                    <p className='businessRating'>{business.rating} Stars</p>
                    <p>{business.reviews} Reviews</p>
                </div>
            </div>
        </div>
    )
}

export default Business