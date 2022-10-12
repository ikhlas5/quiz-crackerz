import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
const ProductDetails = () => {
    const productDetails=useLoaderData().data.questions;
    const data2=useLoaderData();
    return (
        <div >
            <div>
            {
                productDetails.map(productDetail=><Quiz  
                key={productDetail.id} 
                productDetail={productDetail}
                data2={data2}>
                </Quiz>)
            }
            </div>
        </div>
    );
};

export default ProductDetails;