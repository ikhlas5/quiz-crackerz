import React from 'react';

const Quiz = ({productDetail}) => {
    console.log(productDetail)
    const{question,correctAnswer,options}=productDetail;
    return (
        <div>
            <h1>{question}</h1>
            <div>
                {options}
            </div>
        </div>
    );
};

export default Quiz;