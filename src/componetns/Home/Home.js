import React from 'react';
import { useLoaderData } from 'react-router-dom';
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
           
           <div className='flex  m-2 '>
                <div className='w-5/6  m-3 p-4 '>
                     <img src={logo} className='h-56 w-full'  alt="" />
                </div>
                <div className='m-5 bg-sky-100 rounded'>
                <h1 className=' text-3xl font-medium text-orange-500 m-4'>Paragraph Writing Mcqs Quiz With Answers</h1>
                    <p className='p-4 text-xl'>Paragraph Writing MCQs Quiz With Answers
                        Below, we have made an exciting Paragraph writing MCQs quiz for you. Ever wondered about the fact that how much do you know about the basics of paragraph writing? Do you know what the main components of a paragraph are? What are...
                     </p>
                </div>
           </div>


           <div className='grid grid-cols-2'>
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