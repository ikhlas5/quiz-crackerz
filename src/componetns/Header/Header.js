import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Quiz Tarrant</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/topics'>Topics</NavLink></li>
      <li><NavLink to='/charts'>Charts</NavLink></li>
      <li><NavLink to='blogs'>Blogs</NavLink></li>
    </ul>
  </div>
</div>
    );
};

export default Header;