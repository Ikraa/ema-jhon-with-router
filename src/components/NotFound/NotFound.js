import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='error-404'>
            <h1>4<span className="error-0">0</span>4 <i class="fas fa-exclamation icon-color"></i></h1>
            <h3>The page you are looking for is not  available</h3>
        </div>
    );
};

export default NotFound;