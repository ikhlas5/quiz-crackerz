import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Tropic from '../Tropic/Tropic';
import logo from './Quiz.jpg'
import quiz2 from './Quiz2.jpg'

const Home = () => {
    const products=useLoaderData();
    // console.log(products);
    return (
        <div>
            <div className='overflow-hidden'>
                <img  src={quiz2}className='m-5 rounded w-'  alt="" />
            </div>
           
           <div className='xl:flex  m-4 shadow-xl  '>
                <div className='w-full  m-3 p-4 '>
                     <img src={logo} className='h-56 w-full'  alt="" />
                </div>
                <div className='m-5 bg-sky-100 rounded'>
                <h1 className=' text-3xl font-medium text-orange-500 m-4'>Quiz of JavaScript, React, Css, Github.</h1>
                    <p className='p-4 text-xl'>Paragraph Writing MCQs Quiz With Answers
                        Below, we have made an exciting Paragraph writing MCQs quiz for you. Ever wondered about the fact that how much do you know about the basics of paragraph writing? Do you know what the main components of a paragraph are? What are...
                     </p>
                     <Link to='/topics' className='text-xl bg-blue-600 text-white px-3 py-1  rounded m-3'>Get Started!</Link>
                </div>
           </div>


           <div className='grid sm:grid-cols-1  xl:grid-cols-3'>
            {
                products.data.map(product=><Tropic key={product.id} 
                product={product}
                ></Tropic>)
            }
           </div>
           
        </div>
    );
};

export default Home;