import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'
const Tropic = ({product}) => {
    
    const {logo,name,total,id}=product;
    return (
        <div className='cart-grid '>
            <div className='flex justify-center gap-4  border-yellow-600 '>
            <div className=" bg-slate-300  card card-compact w-96  shadow-2xl mb-5">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}!</h2>
                    <p>Quiz:{total}</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary">
                        <Link to={`/topic/${id}`}>Start Quiz</Link>
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Tropic;