import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tropic from '../Tropic/Tropic';

const Tropics = () => {
    const products= useLoaderData();
    // console.log(products)
    return (
        <div className='grid sm:grid-cols-1  xl:grid-cols-2'>
              {
                products.data.map(product=><Tropic key={product.id} 
                product={product}
                ></Tropic>)
            }
        </div>
    );
};

export default Tropics;