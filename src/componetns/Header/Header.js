import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';

const Header = () => {
  const [open,setOpen]=useState(false);
    return (
        <div className="navbar bg-base-100 shadow-xl mb-5">

      <div onClick={()=>setOpen(!open)} className="h-6 w-6 md:hidden">
        {
          open?<XMarkIcon></XMarkIcon>:<Bars3Icon></Bars3Icon>
        }
      </div>


  <div className="flex-1">
    <h1 className="btn btn-ghost normal-case text-xl">Quiz Tarrant</h1>
  </div>
  <div className="flex-none">
    <ul className={`menu menu-horizontal p-0 md:flex xl:flex  justify-center absolute duration-1000 ease-in-out md:static ${open?'top-6':'top-[-140px]'}`} >
      <li className='mr-2'><NavLink  to='/'>Home</NavLink></li>
      <li><NavLink  to='/topics'>Topics</NavLink></li>
      <li><NavLink to='/charts'>Charts</NavLink></li>
      <li><NavLink to='/blogs'>Blogs</NavLink></li>
    </ul>
  </div>
</div>
    );
};

export default Header;