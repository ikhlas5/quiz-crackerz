import React from 'react';
import {  CheckCircleIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';
const Quiz = ({productDetail}) => {
    console.log(productDetail)
    const{question,correctAnswer,options,id}=productDetail;

    const checkAnswer=(option)=>{
        if(option === `${correctAnswer}`){
            toast(`Good Job! Right Answer`,{
                position:"top-center"
            });
        }else{
            toast(`Opps! Wrong Answer`,{
                position:"top-center",
            })
        }
    }
    return (
        <div className=' bg-slate-500 m-5'>
            <h1 className='text-3xl'>Quiz Qusation</h1>
            <div className=''>
                
            <h1>Questions:{question}</h1>
            {
                options.map(option=>
                    <button onClick={()=>checkAnswer(option)} className=''>
                        <input type='radio' id={id} name='fav_language' value='HTML'></input>
                        <label for={id}>{option}</label>
                    </button>
                    )
            }
            </div>
        </div>
    );
};

export default Quiz;