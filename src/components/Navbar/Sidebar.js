import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import {RiStackLine, RiImageLine} from 'react-icons/ri'
import {AiOutlineHome, AiOutlineRead} from 'react-icons/ai'
import{BsViewStacked} from 'react-icons/bs'

const Sidebar = () => {
  return (
        <div className='side-nav'>
            <Link to='/'>
              <div className='tab'>
                <span className='icon'><AiOutlineHome/></span>
                <span>Home</span> 
              </div></Link>
            <Link to='/about'>
              <div className='tab'>
                <span className='icon'><AiOutlineRead/></span>
                <span>About</span> 
              </div></Link>
            <Link to='/containers'>
              <div className='tab'>
                <span className='icon'><RiStackLine/></span>
                <span>Containers</span> 
              </div></Link>
            <Link to='/images'>
              <div className='tab'>
                <span className='icon'><RiImageLine/></span>
                <span>Images</span> 
              </div></Link>
            <Link to='/volumes'>
              <div className='tab'>
                <span className='icon'><BsViewStacked/></span>
                <span>Volumes</span> 
              </div></Link>
          
        </div>
  )
}

export default Sidebar
