import React from 'react';

const Quiz = ({productDetail}) => {
    console.log(productDetail)
    const{question,correctAnswer,options}=productDetail;
    return (
        <div className='border border-red-500 bg-slate-500 m-5'>
            <h1 className='text-3xl'>Quiz Qusation</h1>
            <div className='border border-fuchsia-700'>
                
            <h1>{question}</h1>
            <div className=' border m-5 border-orange-600'>
               <div className='grid grid-cols-2 grid-rows-2'>
                {options}
               </div>
            </div>
            </div>
        </div>
    );
};

export default Quiz;