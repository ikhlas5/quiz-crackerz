import React from 'react';
import {  CheckCircleIcon, EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({productDetail}) => {
    // console.log(productDetail)
    const{question,correctAnswer,options,id}=productDetail;

    const checkAnswer=(option)=>{
        if(option === `${correctAnswer}`){
            toast.success('Good Job! Right Answer',{
                position:"top-center"
            });
        }else{
            toast.error('Opps! Wrong Answer',{
                position:"top-center"
            })
        }
    }

    const seeCorrectAnswer=()=>{
        toast.info(`${correctAnswer}`,{
            position:'top-center'
        })
    }
    

    return (
        <>
        <div className=' bg-indigo-300 m-5  rounded shadow-2xl'>
            <h1 className='text-3xl font-semibold text-orange-700 pt-10'>Quiz Question</h1>
               <div>
                     <h1 className='text-xl font-medium'>Questions: {question}</h1>
                     <button onClick={seeCorrectAnswer} className='float-right mr-10'>
                        <EyeIcon className='h-6 w-6 text-black-500'></EyeIcon>
                     </button>
                </div> 
            
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
            <ToastContainer/>

        </div>
        {/* <input type='radio' id='id' name='fav_language' value='HTML'/>
                            <label for='id'>{option}</label> */}
        </>

    );
};

export default Quiz;