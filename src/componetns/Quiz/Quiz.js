import React from 'react';
import {  CheckCircleIcon } from '@heroicons/react/24/solid'
import { toast, ToastContainer } from 'react-toastify';
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
        <div className=' bg-indigo-300 m-5  rounded shadow-2xl'>
            <h1 className='text-3xl'>Quiz Qusation</h1>
            <div className=''>
                
            <h1>Questions:{question}</h1>
            
                <div className='grid grid-cols-2 m-10'>

                   {
                      options.map(option=>
                        <button onClick={()=>checkAnswer(option)} className=''>
                            <div className='flex items-center mx-auto p-4 rounded-xl bg-gray-300 mb-5 mr-5 '>
                         <CheckCircleIcon className="h-4 w-6 text-stone-800">
                         </CheckCircleIcon>
                            <label className=' m-5' for={id} >{option}</label>
                            </div>
                        </button>
                        )
                     }
                </div>
            
            
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Quiz;