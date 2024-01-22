import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Navbar/Header';
import Sidebar from './Navbar/Sidebar';
import './Root.css';

const Root = () => {
  return (
    <>
      <Header/>
      <div className='main_container'>
        <div className='left-bar'>
          <Sidebar/>
        </div>
        <div className='right-content'>
          <Outlet/>
        </div>
      </div>
        
    </>
  )
}

export default Root
