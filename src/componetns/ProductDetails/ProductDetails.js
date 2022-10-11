import React from 'react';
import { useLoaderData } from 'react-router-dom';
import'./ProductDetails.css'
const ProductDetails = () => {
    const productDetails=useLoaderData();
    console.log(productDetails);
    const{question}=productDetails.data.questions;
    return (
        <div>
            <h1>Quiz:{question}</h1>
        </div>
    );
};

export default ProductDetails;