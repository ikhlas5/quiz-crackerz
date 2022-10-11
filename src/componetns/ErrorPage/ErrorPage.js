import React from 'react';
import sadImg from './sad Img.png'
const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center m-5 h-72'>
            <img src={sadImg} alt=''/>
            </div>
            <div className='text-xl font-medium text-red-500'>
                <p>404!</p>
                <h1>Ops! This page not found</h1>
            </div>
        </div>
    );
};

export default ErrorPage;