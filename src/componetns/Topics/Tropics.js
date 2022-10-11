import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tropic from '../Tropic/Tropic';

const Tropics = () => {
    const products= useLoaderData();
    // console.log(products)
    return (
        <div>
              {
                products.data.map(product=><Tropic key={product.id} 
                product={product}
                ></Tropic>)
            }
        </div>
    );
};

export default Tropics;