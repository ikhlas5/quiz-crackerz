import React from 'react';

const Quiz = ({productDetail}) => {
    console.log(productDetail)
    const{question,correctAnswer,options}=productDetail;
    return (
        <div className=''>
            <h1>{question}</h1>
            <div className='grid grid-cols-4 border m-5 border-orange-600'>
                {options}
            </div>
        </div>
    );
};

export default Quiz;