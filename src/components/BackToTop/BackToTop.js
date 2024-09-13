import React, { useEffect, useState } from 'react';
import './BackToTop.css'


function BackToTop() {
    const handleClick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    const [buttonDisplay, setButtonDisplay] = useState('d-flex justify-content-center btn btn-primary hideButton');
    function isScrolling() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            console.log('block scroll')
            setButtonDisplay('d-flex justify-content-center btn btn-primary');
        } else {
            console.log('none scoll')
            setButtonDisplay('d-flex justify-content-center btn btn-primary hideButton');
        }
    }

    useEffect(() => {
        function watchScroll() {
          window.addEventListener('scroll', isScrolling);
        }
        watchScroll();
        return () => {
          window.removeEventListener('scroll', isScrolling);
        };
    });

    return (
        <>
            <div className='backToTopContainer'>
                <button type='submit' onClick={handleClick} className={buttonDisplay}>Back to Top</button>
            </div>
        </>
    );
  }
  
  export default BackToTop;