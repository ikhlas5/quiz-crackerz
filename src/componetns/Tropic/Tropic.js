import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'
const Tropic = ({product}) => {
    const {logo,name,total,id}=product;
    return (
        <div className='cart-grid '>
            <div className='flex justify-center gap-4 border border-yellow-600 '>
            <div className=" border border-blue-800  card card-compact w-96 bg-slate-400 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}!</h2>
                    <p>Quiz:{total}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <Link to={`/topic/${id}`}>Start Quize</Link>
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Tropic;