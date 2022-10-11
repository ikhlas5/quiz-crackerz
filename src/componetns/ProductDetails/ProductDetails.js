import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import'./ProductDetails.css'
const ProductDetails = () => {
    const productDetails=useLoaderData().data.questions;
    // console.log(productDetails);
    return (
        <div className=''>
            {
                productDetails.map(productDetail=><Quiz  
                key={productDetail.id} 
                productDetail={productDetail}>
                </Quiz>)
            }
        </div>
    );
};

export default ProductDetails;