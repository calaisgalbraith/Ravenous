import React from 'react';
import './Business.css';

const Business = ({business}) => {
    return (
        <div className='businessContainer'>
            <div className='businessImage'>
                <img src={business.img} alt='businessPic'/>
            </div>
            <div className='buisnessNameContainer'>
                <a className='businessName' target="_blank" href={business.url}>{business.name}</a>
            </div>
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