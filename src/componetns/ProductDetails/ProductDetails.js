import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import'./ProductDetails.css'
const ProductDetails = () => {
    const productDetails=useLoaderData().data.questions;
    console.log(productDetails);
    const{question}=productDetails;
    console.log(question);
    return (
        <div>
            <h1>Quiz:{question}</h1>
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