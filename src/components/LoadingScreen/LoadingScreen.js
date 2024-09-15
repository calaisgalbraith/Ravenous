import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({business}) => {
    return (
        <>
            <div className='loadingContainer'>
                <div className="loader"></div>
            </div>
        </>
    )
}

export default LoadingScreen