import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
        <a href='/home'><li>HOME</li></a>
       </ul>
        Registrations
       <ul>
        <a href='/plots'><li>Plots</li></a>
        <a href='/documents'><li>Documents</li></a>
       </ul>
       Details
       <ul>
       <a href="/plotdetails"><li>Plot Details</li></a>
       <a href="/documentdetails"><li>Documents Details</li></a>
      
      </ul>
      
    </div>
  );
};

export default Sidebar;
