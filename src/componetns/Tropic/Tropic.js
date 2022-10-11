import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'
const Tropic = ({product}) => {
    
    const {logo,name,total,id}=product;
    return (
        <div className='flex justify-center'>     
            <div className=" bg-slate-200  card card-compact w-96  shadow-xl mb-5">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}!</h2>
                    <p>Quiz:{total}</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary">
                        <Link to={`/topic/${id}`} className='flex items-center'>Start Quiz<ArrowRightIcon className='h-5 w-5 text-zinc-800 ml-2'></ArrowRightIcon> </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tropic;