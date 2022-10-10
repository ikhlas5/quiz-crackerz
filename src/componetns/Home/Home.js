import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tropic from '../Tropic/Tropic';

const Home = () => {
    const products=useLoaderData();
    // console.log(products);
    return (
        <div>
            <h1>Home</h1>
            {
                products.data.map(product=><Tropic key={product.id} 
                product={product}
                ></Tropic>)
            }
        </div>
    );
};

export default Home;